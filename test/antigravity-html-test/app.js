/**
 * LUMIGRID SYNTH V2 - INTERACTIVE BEAT SEQUENCER & GRAPHICS ENGINE
 * Author: Antigravity Code Assistant
 * Purpose: GPU-Accelerated CSS Grid, Dynamic Proximity Math,
 *          and Web Audio API advanced matrix synthesis, feedback delays & filter sweeps.
 */

// --- Global Engine State System ---
const EngineState = {
  // Grid Architecture
  cols: 20,
  rows: 20,
  cells: [],
  shapeRoundness: 15, // in percent
  
  // Kinetic Motion Properties
  animSpeed: 3.0,     // in seconds
  proximityRadius: 150, // in pixels
  enableAutoWave: true,
  enableProximityGlow: true,
  
  // Interactive Physics Metrics
  mouse: { x: -1000, y: -1000, active: false },
  interactivityIndex: 0.0,
  lastFrameTime: performance.now(),
  frameCount: 0,
  currentFPS: 60,
  
  // Audio Synthesis & Sequencer Modulators
  audioCtx: null,
  isSynthPlaying: false,
  tempoBPM: 120,
  schedulerTimerId: null,
  nextStepTime: 0.0,
  currentStep: 0,
  synthTheme: 'cyberpunk',
  bassPulseScale: 1.0,
  bassPulseGlow: 0,
  whiteNoiseBuffer: null,
  
  // Upgraded Beat Engine Mappings
  // Preloaded dynamic synthwave pattern (1 = Hit/Low, 2 = Mid, 3 = High, 0 = Off)
  kickPattern:    [1, 0, 0, 0, 1, 0, 0, 0],
  snarePattern:   [0, 0, 1, 0, 0, 0, 1, 0],
  hihatPattern:   [0, 1, 0, 1, 0, 1, 0, 1],
  synthPattern:   [2, 1, 3, 0, 2, 1, 3, 0],
  
  // Advanced Synth Parameter States
  synthWaveform: 'sawtooth',
  filterCutoff: 2500,     // cutoff frequency in Hz
  delayFeedback: 0.40,    // feedback gain value (0.0 to 0.8)
  
  // Audio Modular Graph Cache Nodes
  filterNode: null,
  delayNode: null,
  feedbackGainNode: null
};

// --- Preset HSL Color Theme Dictionary ---
const ColorThemes = {
  cyberpunk: {
    name: 'Cyberpunk',
    primary: '#00f3ff',
    primaryHSL: '180, 100%, 50%',
    secondary: '#ff007f',
    secondaryHSL: '330, 100%, 50%',
    bgGlow: '#0a0516'
  },
  emerald: {
    name: 'Emerald Oasis',
    primary: '#00ff87',
    primaryHSL: '152, 100%, 50%',
    secondary: '#00a8ff',
    secondaryHSL: '201, 100%, 50%',
    bgGlow: '#05131a'
  },
  sunrise: {
    name: 'Neon Sunrise',
    primary: '#ff930f',
    primaryHSL: '33, 100%, 53%',
    secondary: '#ff1b6b',
    secondaryHSL: '339, 100%, 55%',
    bgGlow: '#1a0505'
  },
  aurora: {
    name: 'Velvet Aurora',
    primary: '#8a2be2',
    primaryHSL: '271, 76%, 53%',
    secondary: '#39ff14',
    secondaryHSL: '111, 100%, 54%',
    bgGlow: '#0c051a'
  }
};

// --- DOM Nodes Cache ---
const DOM = {
  gridContainer: document.getElementById('grid-container'),
  themeSelector: document.getElementById('theme-selector'),
  activeThemeLabel: document.getElementById('active-palette-name'),
  colsSlider: document.getElementById('grid-cols-slider'),
  colsLabel: document.getElementById('cols-val'),
  rowsSlider: document.getElementById('grid-rows-slider'),
  rowsLabel: document.getElementById('rows-val'),
  shapeSlider: document.getElementById('corner-radius-slider'),
  shapeLabel: document.getElementById('shape-val'),
  speedSlider: document.getElementById('speed-slider'),
  speedLabel: document.getElementById('speed-val'),
  rippleSlider: document.getElementById('ripple-radius-slider'),
  rippleLabel: document.getElementById('ripple-val'),
  waveToggle: document.getElementById('wave-toggle'),
  rippleToggle: document.getElementById('ripple-toggle'),
  synthBtn: document.getElementById('synth-toggle-btn'),
  bpmSlider: document.getElementById('bpm-slider'),
  bpmLabel: document.getElementById('bpm-val'),
  pulseDot: document.getElementById('pulse-dot'),
  seqLights: document.querySelectorAll('.seq-node'),
  statCells: document.getElementById('stat-cell-count'),
  statEngine: document.getElementById('stat-engine'),
  statFPS: document.getElementById('stat-fps'),
  statInteractivity: document.getElementById('stat-interactivity'),
  randomizeBtn: document.getElementById('randomize-btn'),
  
  // Upgraded Sequencer & Synth Modulators UI Nodes
  seqMatrix: document.getElementById('seq-matrix'),
  waveSelector: document.getElementById('synth-wave-selector'),
  filterSlider: document.getElementById('filter-cutoff-slider'),
  filterLabel: document.getElementById('filter-val'),
  feedbackSlider: document.getElementById('delay-feedback-slider'),
  feedbackLabel: document.getElementById('feedback-val')
};

// ==========================================================================
// GRID GENERATOR SYSTEM
// ==========================================================================

/**
 * Destroys current canvas structures safely and constructs a brand new dynamic grid (Zero XSS)
 */
function buildGrid() {
  DOM.gridContainer.replaceChildren();
  EngineState.cells = [];
  
  const totalCells = EngineState.cols * EngineState.rows;
  
  DOM.gridContainer.style.setProperty('--grid-cols', EngineState.cols);
  DOM.gridContainer.style.setProperty('--grid-rows', EngineState.rows);
  
  const fragment = document.createDocumentFragment();
  
  for (let y = 0; y < EngineState.rows; y++) {
    for (let x = 0; x < EngineState.cols; x++) {
      const cell = document.createElement('div');
      cell.classList.add('grid-cell');
      cell.setAttribute('role', 'gridcell');
      cell.setAttribute('id', `cell-${x}-${y}`);
      
      // Calculate delay offset vector creating elegant diagonal waves on keyframes mode
      const delayOffset = (x + y) * 0.08;
      cell.style.setProperty('--anim-delay', `${delayOffset}s`);
      
      // Cache grid coordinate states directly on DOM elements
      cell.dataset.x = x;
      cell.dataset.y = y;
      
      EngineState.cells.push({
        element: cell,
        x: x,
        y: y,
        posX: 0,
        posY: 0
      });
      
      fragment.appendChild(cell);
    }
  }
  
  DOM.gridContainer.appendChild(fragment);
  updateCellStateModes();
  cacheCellOffsets();
  
  DOM.statCells.textContent = totalCells;
}

/**
 * Computes absolute pixel locations for all cell centers relative to viewport,
 * optimizing math calculations inside the high frequency requestAnimationFrame loop.
 */
function cacheCellOffsets() {
  const containerRect = DOM.gridContainer.getBoundingClientRect();
  const cellRects = Array.from(DOM.gridContainer.children).map(c => c.getBoundingClientRect());
  
  EngineState.cells.forEach((cell, idx) => {
    const rect = cellRects[idx];
    if (rect) {
      cell.posX = rect.left + rect.width / 2 - containerRect.left;
      cell.posY = rect.top + rect.height / 2 - containerRect.top;
    }
  });
}

/**
 * Sweeps color modes: swaps cell structure classes from CSS Animations to static variables
 */
function updateCellStateModes() {
  EngineState.cells.forEach(cell => {
    if (EngineState.enableAutoWave) {
      cell.element.classList.add('animated');
      cell.element.classList.remove('static-dynamic');
      cell.element.style.removeProperty('--cell-color');
      cell.element.style.removeProperty('--cell-glow');
      cell.element.style.removeProperty('--cell-scale');
      cell.element.style.removeProperty('--cell-rotation');
    } else {
      cell.element.classList.remove('animated');
      cell.element.classList.add('static-dynamic');
    }
  });
}

// ==========================================================================
// INTERACTIVE BEAT PROGRAMMER MATRIX WIDGET (UI GENERATOR)
// ==========================================================================

/**
 * Builds the interactive drum & synth loop sequence pattern matrix dynamically (100% XSS immune)
 */
function buildSequencerMatrix() {
  DOM.seqMatrix.replaceChildren();
  
  const tracks = [
    { key: 'kick',  emoji: '🥁', label: 'Kick',   pattern: EngineState.kickPattern },
    { key: 'snare', emoji: '➿', label: 'Snare',  pattern: EngineState.snarePattern },
    { key: 'hihat', emoji: '⚡', label: 'HiHat',  pattern: EngineState.hihatPattern },
    { key: 'synth', emoji: '🎹', label: 'Synth',  pattern: EngineState.synthPattern }
  ];
  
  const fragment = document.createDocumentFragment();
  
  tracks.forEach(track => {
    // 1. Create semantic Row Label Node
    const label = document.createElement('div');
    label.classList.add('seq-track-label');
    label.textContent = track.emoji;
    label.title = track.label;
    fragment.appendChild(label);
    
    // 2. Create 8 Interactive Trigger Step buttons
    for (let step = 0; step < 8; step++) {
      const cell = document.createElement('button');
      cell.type = 'button';
      cell.classList.add('seq-cell', `track-${track.key}`);
      cell.dataset.track = track.key;
      cell.dataset.step = step.toString();
      cell.setAttribute('aria-label', `${track.label} step ${step + 1}`);
      
      // Load initial preset styling classes
      const val = track.pattern[step];
      if (track.key === 'synth') {
        if (val === 1) cell.classList.add('pitch-low');
        else if (val === 2) cell.classList.add('pitch-mid');
        else if (val === 3) cell.classList.add('pitch-high');
      } else {
        if (val === 1) cell.classList.add('active');
      }
      
      // Interactive toggle logic click delegate
      cell.addEventListener('click', () => {
        toggleStepTrigger(cell, track.key, step);
      });
      
      fragment.appendChild(cell);
    }
  });
  
  DOM.seqMatrix.appendChild(fragment);
}

/**
 * Cycle sequencer trigger state updates dynamically and refresh style indicators
 */
function toggleStepTrigger(element, trackKey, stepIdx) {
  if (trackKey === 'synth') {
    // Synth note state cycle: Off (0) -> Low (1) -> Mid (2) -> High (3) -> Off (0)
    let currentVal = EngineState.synthPattern[stepIdx];
    currentVal = (currentVal + 1) % 4;
    EngineState.synthPattern[stepIdx] = currentVal;
    
    // Reset pitch highlights
    element.classList.remove('pitch-low', 'pitch-mid', 'pitch-high');
    
    if (currentVal === 1) element.classList.add('pitch-low');
    else if (currentVal === 2) element.classList.add('pitch-mid');
    else if (currentVal === 3) element.classList.add('pitch-high');
    
  } else {
    // Drum binary toggle states: On (1) <-> Off (0)
    const pattern = trackKey === 'kick' ? EngineState.kickPattern :
                    trackKey === 'snare' ? EngineState.snarePattern : EngineState.hihatPattern;
                    
    const currentVal = pattern[stepIdx];
    const newVal = currentVal === 1 ? 0 : 1;
    pattern[stepIdx] = newVal;
    
    if (newVal === 1) element.classList.add('active');
    else element.classList.remove('active');
  }
  
  // Trigger localized click visual highlight flash
  element.style.transform = 'scale(1.25)';
  setTimeout(() => {
    element.style.transform = '';
  }, 100);
  
  // Visual feedback: soft transient particles if beat engine is active
  if (EngineState.isSynthPlaying) {
    sparkRandomCells(3);
  }
}

// ==========================================================================
// KINETIC MOUSE INTERACTION & PERFORMANCE ENGINE (60 FPS LOOP)
// ==========================================================================

/**
 * Caches physical mouse positions relative to visual grid boundaries
 */
function handleInteractionMove(clientX, clientY) {
  const rect = DOM.gridContainer.getBoundingClientRect();
  EngineState.mouse.x = clientX - rect.left;
  EngineState.mouse.y = clientY - rect.top;
  EngineState.mouse.active = true;
}

/**
 * Unified render loop driving dynamic pixel transitions inside requestAnimationFrame,
 * achieving extreme processing efficiency by updating visual states on GPU layer channels.
 */
function renderLoop(now) {
  // 1. FPS Calculator
  const delta = now - EngineState.lastFrameTime;
  EngineState.frameCount++;
  
  if (delta >= 1000) {
    EngineState.currentFPS = Math.round((EngineState.frameCount * 1000) / delta);
    DOM.statFPS.textContent = `${EngineState.currentFPS} FPS`;
    EngineState.frameCount = 0;
    EngineState.lastFrameTime = now;
  }
  
  // 2. Synthesizer Pulse Decay Operations
  if (EngineState.bassPulseScale > 1.0) {
    EngineState.bassPulseScale -= 0.004;
    EngineState.bassPulseGlow = Math.max(0, EngineState.bassPulseGlow - 0.5);
    
    DOM.gridContainer.style.setProperty('--bass-scale', EngineState.bassPulseScale);
    DOM.gridContainer.style.setProperty('--bass-glow', `${EngineState.bassPulseGlow}px`);
  }
  
  // 3. Proximity Mapping Logic
  let interactiveSum = 0.0;
  
  if (EngineState.enableProximityGlow && EngineState.mouse.active) {
    const mouseX = EngineState.mouse.x;
    const mouseY = EngineState.mouse.y;
    const radius = EngineState.proximityRadius;
    const theme = ColorThemes[EngineState.synthTheme];
    
    EngineState.cells.forEach(cell => {
      // Exclude cells undergoing global Snare hit or Melody sweep transformations to preserve graphic clarity
      if (cell.element.classList.contains('snare-hit') || cell.element.classList.contains('melody-sweep')) {
        return;
      }
      
      const dx = cell.posX - mouseX;
      const dy = cell.posY - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < radius) {
        const ratio = 1 - (distance / radius);
        const intensity = Math.pow(ratio, 1.6);
        
        interactiveSum += intensity;
        
        cell.element.classList.add('static-dynamic');
        cell.element.classList.remove('animated');
        
        const rotation = intensity * 45;
        const scale = 1.0 + (intensity * 0.35);
        
        cell.element.style.setProperty('--cell-color', `hsla(var(--color-primary-hsl), ${intensity})`);
        cell.element.style.setProperty('--cell-scale', scale);
        cell.element.style.setProperty('--cell-rotation', `${rotation}deg`);
        cell.element.style.setProperty('--cell-glow', `0 0 16px rgba(var(--color-primary-hsl), ${intensity * 0.8})`);
      } else {
        // Return to standard idle states
        if (!EngineState.enableAutoWave) {
          cell.element.style.setProperty('--cell-color', 'rgba(255,255,255,0.02)');
          cell.element.style.setProperty('--cell-scale', '1');
          cell.element.style.setProperty('--cell-rotation', '0deg');
          cell.element.style.setProperty('--cell-glow', 'none');
        } else {
          cell.element.classList.remove('static-dynamic');
          cell.element.classList.add('animated');
        }
      }
    });
  }
  
  EngineState.interactivityIndex = Math.min(1.0, interactiveSum / 40);
  DOM.statInteractivity.textContent = EngineState.interactivityIndex.toFixed(2);
  
  requestAnimationFrame(renderLoop);
}

// ==========================================================================
// ADVANCED SYNTH & SEQUENCER ENGINE (WEB AUDIO API)
// ==========================================================================

/**
 * Initializes, hooks up, and configures the advanced Web Audio Routing Graph
 */
function initAudioEngine() {
  if (EngineState.audioCtx) return;
  
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  EngineState.audioCtx = new AudioContext();
  
  // 1. Generate procedural high-frequency white noise buffer blocks (150ms buffer)
  const bufferSize = EngineState.audioCtx.sampleRate * 0.15;
  EngineState.whiteNoiseBuffer = EngineState.audioCtx.createBuffer(1, bufferSize, EngineState.audioCtx.sampleRate);
  const channelData = EngineState.whiteNoiseBuffer.getChannelData(0);
  
  for (let i = 0; i < bufferSize; i++) {
    channelData[i] = Math.random() * 2 - 1;
  }
  
  // 2. Build Core Parameter Modulator nodes
  // Dynamic Biquad lowpass sweep filter node
  EngineState.filterNode = EngineState.audioCtx.createBiquadFilter();
  EngineState.filterNode.type = 'lowpass';
  EngineState.filterNode.frequency.setValueAtTime(EngineState.filterCutoff, EngineState.audioCtx.currentTime);
  EngineState.filterNode.Q.setValueAtTime(1.5, EngineState.audioCtx.currentTime); // Subtle sweep resonance
  
  // Dynamic Delay node (250ms stereo delay echo)
  EngineState.delayNode = EngineState.audioCtx.createDelay();
  EngineState.delayNode.delayTime.setValueAtTime(0.25, EngineState.audioCtx.currentTime);
  
  // Feedback depth amplifier node
  EngineState.feedbackGainNode = EngineState.audioCtx.createGain();
  EngineState.feedbackGainNode.gain.setValueAtTime(EngineState.delayFeedback, EngineState.audioCtx.currentTime);
  
  // 3. Assemble Feedback Echo Delay Loop Graph:
  // Split signal: Output of delay loops directly into feedback gain, which feeds back to delay input
  EngineState.delayNode.connect(EngineState.feedbackGainNode);
  EngineState.feedbackGainNode.connect(EngineState.delayNode);
  
  // 4. Assemble Master Output Mix:
  // All sound oscillators target the main lowpass filterNode first.
  // The filterNode splits, sending direct Dry output to speakers, and wet branch to echo Delay Node
  EngineState.filterNode.connect(EngineState.audioCtx.destination); // Direct Dry Output
  EngineState.filterNode.connect(EngineState.delayNode);            // Echo routing
  EngineState.delayNode.connect(EngineState.audioCtx.destination);   // Echo output path
}

/**
 * Main rhythm and frequency scheduler. Runs in precise microsecond timestamps
 */
function scheduleSynthEvents(stepIndex, time) {
  // 1. Kick Drum trigger
  if (EngineState.kickPattern[stepIndex] === 1) {
    synthesizeKick(time);
    
    // Dynamic synchronized animations
    setTimeout(() => {
      EngineState.bassPulseScale = 1.05;
      EngineState.bassPulseGlow = 25;
      sparkRandomCells(12);
    }, (time - EngineState.audioCtx.currentTime) * 1000);
  }
  
  // 2. Hi-Hats trigger
  if (EngineState.hihatPattern[stepIndex] === 1) {
    synthesizeHiHat(time);
    
    setTimeout(() => {
      sparkRandomCells(4);
    }, (time - EngineState.audioCtx.currentTime) * 1000);
  }
  
  // 3. Snare Drum trigger
  if (EngineState.snarePattern[stepIndex] === 1) {
    synthesizeSnare(time);
    
    setTimeout(() => {
      EngineState.bassPulseScale = 1.025;
      EngineState.bassPulseGlow = 14;
      propagateSnareRaySplash();
    }, (time - EngineState.audioCtx.currentTime) * 1000);
  }
  
  // 4. Synth Chord Lead Note trigger (Pitch cycling: 1=low, 2=mid, 3=high, 0=off)
  const synthVal = EngineState.synthPattern[stepIndex];
  if (synthVal > 0) {
    // Pitch reference scales: mapped to high-contrast A-minor chord arpeggios
    const pitches = {
      1: 220.00, // A3 (Low pitch root)
      2: 329.63, // E4 (Mid pitch fifth scale note)
      3: 440.00  // A4 (High pitch octave)
    };
    
    const targetFreq = pitches[synthVal];
    synthesizeSynthArp(targetFreq, time);
    
    setTimeout(() => {
      propagateMelodySweep(stepIndex, synthVal);
    }, (time - EngineState.audioCtx.currentTime) * 1000);
  }
}

/**
 * Kick Drum Synthesis
 */
function synthesizeKick(time) {
  const osc = EngineState.audioCtx.createOscillator();
  const gain = EngineState.audioCtx.createGain();
  
  osc.connect(gain);
  gain.connect(EngineState.audioCtx.destination); // Direct bypass for heavy punch
  
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(160, time);
  osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.28);
  
  gain.gain.setValueAtTime(1.3, time);
  gain.gain.exponentialRampToValueAtTime(0.01, time + 0.32);
  
  osc.start(time);
  osc.stop(time + 0.35);
}

/**
 * Hi-Hat Synthesis
 */
function synthesizeHiHat(time) {
  const source = EngineState.audioCtx.createBufferSource();
  source.buffer = EngineState.whiteNoiseBuffer;
  
  const filter = EngineState.audioCtx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.setValueAtTime(7500, time); // Extremely high-pass sheen
  
  const gain = EngineState.audioCtx.createGain();
  gain.gain.setValueAtTime(0.18, time);
  gain.gain.exponentialRampToValueAtTime(0.01, time + 0.04);
  
  source.connect(filter);
  filter.connect(gain);
  gain.connect(EngineState.audioCtx.destination);
  
  source.start(time);
  source.stop(time + 0.05);
}

/**
 * Snare Drum Synthesis (Deep Body Tone + Splashy filtered Noise body)
 */
function synthesizeSnare(time) {
  // Snare tone body
  const bodyOsc = EngineState.audioCtx.createOscillator();
  const bodyGain = EngineState.audioCtx.createGain();
  bodyOsc.type = 'triangle';
  bodyOsc.frequency.setValueAtTime(180, time);
  bodyOsc.frequency.linearRampToValueAtTime(100, time + 0.08);
  
  bodyGain.gain.setValueAtTime(0.4, time);
  bodyGain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
  
  bodyOsc.connect(bodyGain);
  bodyGain.connect(EngineState.audioCtx.destination);
  
  bodyOsc.start(time);
  bodyOsc.stop(time + 0.11);
  
  // Snare rattle noise
  const noise = EngineState.audioCtx.createBufferSource();
  noise.buffer = EngineState.whiteNoiseBuffer;
  
  const bandpass = EngineState.audioCtx.createBiquadFilter();
  bandpass.type = 'bandpass';
  bandpass.frequency.setValueAtTime(1000, time);
  bandpass.Q.setValueAtTime(2.2, time);
  
  const noiseGain = EngineState.audioCtx.createGain();
  noiseGain.gain.setValueAtTime(0.55, time);
  noiseGain.gain.exponentialRampToValueAtTime(0.01, time + 0.18);
  
  noise.connect(bandpass);
  bandpass.connect(noiseGain);
  noiseGain.connect(EngineState.audioCtx.destination);
  
  noise.start(time);
  noise.stop(time + 0.2);
}

/**
 * Modular Dynamic Synthesizer (Stereo echoes and filter sweeps routing)
 */
function synthesizeSynthArp(freq, time) {
  const osc1 = EngineState.audioCtx.createOscillator();
  const osc2 = EngineState.audioCtx.createOscillator();
  const gain = EngineState.audioCtx.createGain();
  
  // Set custom waveform chosen dynamically by dashboard dropdown controls!
  osc1.type = EngineState.synthWaveform;
  osc2.type = EngineState.synthWaveform === 'sine' ? 'sine' : 'sawtooth';
  
  osc1.frequency.setValueAtTime(freq, time);
  osc2.frequency.setValueAtTime(freq * 1.008, time); // Wide detuning
  
  gain.gain.setValueAtTime(0.24, time);
  gain.gain.exponentialRampToValueAtTime(0.01, time + 0.3);
  
  // ROUTING GRAPH INTEGRATION:
  // Pipeline nodes directly into the global Filter Node which handles echo splits!
  osc1.connect(gain);
  osc2.connect(gain);
  gain.connect(EngineState.filterNode);
  
  osc1.start(time);
  osc2.start(time);
  osc1.stop(time + 0.32);
  osc2.stop(time + 0.32);
}

// ==========================================================================
// ADVANCED GRAPHIC REACTIVE EFFECTORS
// ==========================================================================

/**
 * Spawns multiple transient shimmering star particles across random grid nodes
 */
function sparkRandomCells(count) {
  const total = EngineState.cells.length;
  const activePreset = ColorThemes[EngineState.synthTheme];
  
  for (let i = 0; i < count; i++) {
    const targetIdx = Math.floor(Math.random() * total);
    const cell = EngineState.cells[targetIdx];
    
    // Prevent overriding nodes currently undergoing master snare ray sweeps
    if (cell && !cell.element.classList.contains('snare-hit') && !cell.element.classList.contains('melody-sweep')) {
      cell.element.classList.add('static-dynamic');
      cell.element.classList.remove('animated');
      
      cell.element.style.setProperty('--cell-color', `rgb(${activePreset.secondaryHSL})`);
      cell.element.style.setProperty('--cell-scale', '1.35');
      cell.element.style.setProperty('--cell-glow', `0px 0px 20px 6px rgba(${activePreset.secondaryHSL}, 0.95)`);
      
      // Decay timeout
      setTimeout(() => {
        if (cell.element.classList.contains('static-dynamic') && !EngineState.mouse.active && 
            !cell.element.classList.contains('snare-hit') && !cell.element.classList.contains('melody-sweep')) {
          cell.element.style.setProperty('--cell-color', 'rgba(255,255,255,0.02)');
          cell.element.style.setProperty('--cell-scale', '1');
          cell.element.style.setProperty('--cell-rotation', '0deg');
          cell.element.style.setProperty('--cell-glow', 'none');
        }
      }, 350);
    }
  }
}

/**
 * Rhythmic Snare Intersection Splash: Injects dynamic "+" crosshair rays expanding from center outward
 */
function propagateSnareRaySplash() {
  const centerY = Math.floor(EngineState.rows / 2);
  const centerX = Math.floor(EngineState.cols / 2);
  
  EngineState.cells.forEach(cell => {
    // Check if cell aligns on row or column intersection axes
    if (cell.x === centerX || cell.y === centerY) {
      // Math coordinate offset distance from epicenter grid node
      const offsetDist = Math.max(Math.abs(cell.x - centerX), Math.abs(cell.y - centerY));
      
      // Expanding sweep delay ring increments
      const ringDelay = offsetDist * 22; // 22ms shift step
      
      setTimeout(() => {
        // Enforce static performance modes immediately during sweeps
        cell.element.classList.add('static-dynamic');
        cell.element.classList.remove('animated');
        cell.element.classList.add('snare-hit');
        
        // Decay sweep node back to default parameters
        setTimeout(() => {
          cell.element.classList.remove('snare-hit');
          
          if (!EngineState.mouse.active && !cell.element.classList.contains('melody-sweep')) {
            cell.element.style.setProperty('--cell-color', 'rgba(255,255,255,0.02)');
            cell.element.style.setProperty('--cell-scale', '1');
            cell.element.style.setProperty('--cell-rotation', '0deg');
            cell.element.style.setProperty('--cell-glow', 'none');
            
            if (EngineState.enableAutoWave) {
              cell.element.classList.remove('static-dynamic');
              cell.element.classList.add('animated');
            }
          }
        }, 320);
      }, ringDelay);
    }
  });
}

/**
 * Synth melody pitch swept waves. Sweeps dynamic vectors linked to pitch heights
 */
function propagateMelodySweep(stepIdx, pitchVal) {
  const totalCols = EngineState.cols;
  const totalRows = EngineState.rows;
  const theme = ColorThemes[EngineState.synthTheme];
  
  // Sweep coordinate origins migrate horizontally across sequencer indices
  const originX = Math.floor((stepIdx / 8) * totalCols);
  const originY = Math.floor((stepIdx / 8) * totalRows);
  
  // Speed variations mapped to arpeggio pitch heights
  // High pitches launch rapid narrow waves, low pitches launch wider slower waves
  const wavePropagationSpeed = pitchVal === 3 ? 12 : pitchVal === 2 ? 18 : 26; // ms per step ring
  const scaleGlowMultiplier = pitchVal === 3 ? 1.0 : pitchVal === 2 ? 0.75 : 0.55;
  
  EngineState.cells.forEach(cell => {
    // Avoid overriding visual nodes currently flashing under snare ray overlays
    if (cell.element.classList.contains('snare-hit')) return;
    
    const dx = cell.x - originX;
    const dy = cell.y - originY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    const delay = distance * wavePropagationSpeed;
    
    setTimeout(() => {
      if (cell.element.classList.contains('snare-hit')) return;
      
      cell.element.classList.add('static-dynamic');
      cell.element.classList.remove('animated');
      cell.element.classList.add('melody-sweep');
      
      const glowCol = pitchVal === 3 ? '#ffffff' : pitchVal === 2 ? theme.primary : theme.secondary;
      
      cell.element.style.setProperty('--melody-color', glowCol);
      cell.element.style.setProperty('--melody-glow', glowCol);
      cell.element.style.setProperty('--cell-scale', (1.05 + (scaleGlowMultiplier * 0.15)).toString());
      cell.element.style.setProperty('--cell-glow', `0px 0px 18px rgba(${theme.primaryHSL}, ${scaleGlowMultiplier * 0.8})`);
      
      // Decay visual properties back to background grid styles
      setTimeout(() => {
        cell.element.classList.remove('melody-sweep');
        
        if (!EngineState.mouse.active && !cell.element.classList.contains('snare-hit')) {
          cell.element.style.setProperty('--cell-color', 'rgba(255,255,255,0.02)');
          cell.element.style.setProperty('--cell-scale', '1');
          cell.element.style.setProperty('--cell-rotation', '0deg');
          cell.element.style.setProperty('--cell-glow', 'none');
          
          if (EngineState.enableAutoWave) {
            cell.element.classList.remove('static-dynamic');
            cell.element.classList.add('animated');
          }
        }
      }, 300);
    }, delay);
  });
}

// ==========================================================================
// SEQUENCER CLOCK & RUNTIME LOOP
// ==========================================================================

/**
 * Loop scheduler matching accurate Web Audio API timestamps
 */
function runSequencerScheduler() {
  while (EngineState.nextStepTime < EngineState.audioCtx.currentTime + 0.1) {
    const step = EngineState.currentStep;
    const time = EngineState.nextStepTime;
    
    scheduleSynthEvents(step, time);
    
    // 1. Sequencer playhead step indicators
    const currentStepVal = step;
    const stepsLights = DOM.seqLights;
    const feedbackDecayBPM = 60.0 / EngineState.tempoBPM / 2; // Eighth notes loop duration
    
    setTimeout(() => {
      // Flash progress markers inside the top step progress light node bar
      stepsLights.forEach((node, i) => {
        node.classList.remove('active', 'trigger');
        if (i === currentStepVal) {
          node.classList.add('active');
          if (EngineState.kickPattern[currentStepVal] === 1) {
            node.classList.add('trigger');
          }
        }
      });
      
      // Highlights dynamic playhead tracing border borders across active step cell column inside the beat matrix
      const allCells = document.querySelectorAll('.seq-cell');
      allCells.forEach(cell => {
        const cellStep = parseInt(cell.dataset.step, 10);
        if (cellStep === currentStepVal) {
          cell.classList.add('playhead-active');
        } else {
          cell.classList.remove('playhead-active');
        }
      });
      
    }, (time - EngineState.audioCtx.currentTime) * 1000);
    
    // Advance timings
    EngineState.nextStepTime += feedbackDecayBPM;
    EngineState.currentStep = (step + 1) % 8;
  }
  
  EngineState.schedulerTimerId = setTimeout(runSequencerScheduler, 25);
}

/**
 * Starts/Stops the Synthesizer Sequence Loop
 */
function toggleSynthesizerEngine() {
  initAudioEngine();
  
  if (EngineState.audioCtx.state === 'suspended') {
    EngineState.audioCtx.resume();
  }
  
  if (EngineState.isSynthPlaying) {
    // STOP BEATS ENGINE
    clearTimeout(EngineState.schedulerTimerId);
    EngineState.isSynthPlaying = false;
    DOM.synthBtn.textContent = 'Start Beat Engine';
    DOM.synthBtn.classList.remove('active');
    document.getElementById('audio-module').classList.remove('active');
    
    DOM.statEngine.textContent = 'IDLE';
    DOM.statEngine.style.color = 'var(--text-muted)';
    DOM.pulseDot.style.backgroundColor = 'var(--text-muted)';
    
    // Clear dynamic step highlights
    DOM.seqLights.forEach(node => node.classList.remove('active', 'trigger'));
    document.querySelectorAll('.seq-cell').forEach(c => c.classList.remove('playhead-active'));
  } else {
    // START BEATS ENGINE
    EngineState.isSynthPlaying = true;
    EngineState.nextStepTime = EngineState.audioCtx.currentTime + 0.05;
    EngineState.currentStep = 0;
    
    runSequencerScheduler();
    
    DOM.synthBtn.textContent = 'Stop Beat Engine';
    DOM.synthBtn.classList.add('active');
    document.getElementById('audio-module').classList.add('active');
    
    DOM.statEngine.textContent = 'RUNNING';
    DOM.statEngine.style.color = 'var(--color-secondary)';
    DOM.pulseDot.style.backgroundColor = 'var(--color-secondary)';
  }
}

// ==========================================================================
// CONTROLLERS, MODULATORS & SYSTEM INITS
// ==========================================================================

/**
 * Swaps active preset variables and applies root variables styles instantly
 */
function switchColorTheme(themeKey) {
  if (!ColorThemes[themeKey]) return;
  
  EngineState.synthTheme = themeKey;
  const preset = ColorThemes[themeKey];
  
  document.documentElement.style.setProperty('--color-primary', preset.primary);
  document.documentElement.style.setProperty('--color-primary-hsl', preset.primaryHSL);
  document.documentElement.style.setProperty('--color-secondary', preset.secondary);
  document.documentElement.style.setProperty('--color-secondary-hsl', preset.secondaryHSL);
  document.documentElement.style.setProperty('--bg-glow', preset.bgGlow);
  
  DOM.activeThemeLabel.textContent = preset.name;
  
  if (!EngineState.enableAutoWave) {
    EngineState.cells.forEach(cell => {
      if (cell.element.classList.contains('static-dynamic') && !EngineState.mouse.active) {
        cell.element.style.setProperty('--cell-color', 'rgba(255,255,255,0.02)');
      }
    });
  }
}

/**
 * Registers visual selectors, slider widgets, and interaction hooks
 */
function registerInputControllers() {
  // 1. Theme Presets Switcher
  DOM.themeSelector.addEventListener('change', (e) => {
    switchColorTheme(e.target.value);
  });
  
  // 2. Geometry Slider: Columns
  DOM.colsSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    DOM.colsLabel.textContent = val;
    EngineState.cols = val;
    buildGrid();
  });
  
  // 3. Geometry Slider: Rows
  DOM.rowsSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    DOM.rowsLabel.textContent = val;
    EngineState.rows = val;
    buildGrid();
  });
  
  // 4. Rounded Corners Slider (Cell Roundness)
  DOM.shapeSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    DOM.shapeLabel.textContent = `${val}px`;
    EngineState.shapeRoundness = val;
    document.documentElement.style.setProperty('--border-radius', `${val}px`);
  });
  
  // 5. Kinetic Wave Speed Slider
  DOM.speedSlider.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    DOM.speedLabel.textContent = `${val.toFixed(1)}s`;
    EngineState.animSpeed = val;
    document.documentElement.style.setProperty('--anim-speed', `${val}s`);
  });
  
  // 6. Proximity Influence Slider
  DOM.rippleSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    DOM.rippleLabel.textContent = `${val}px`;
    EngineState.proximityRadius = val;
  });
  
  // 7. Auto Wave Phase Switch Toggle
  DOM.waveToggle.addEventListener('change', (e) => {
    EngineState.enableAutoWave = e.target.checked;
    updateCellStateModes();
  });
  
  // 8. Proximity Glow Switch Toggle
  DOM.rippleToggle.addEventListener('change', (e) => {
    EngineState.enableProximityGlow = e.target.checked;
    if (!e.target.checked) {
      EngineState.mouse.active = false;
      updateCellStateModes();
    }
  });
  
  // 9. Tempo BPM Control
  DOM.bpmSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    DOM.bpmLabel.textContent = val;
    EngineState.tempoBPM = val;
  });
  
  // 10. Synthesizer Lead Waveform selector dropdown
  DOM.waveSelector.addEventListener('change', (e) => {
    EngineState.synthWaveform = e.target.value;
    
    // Dynamic sound preview flash
    if (EngineState.isSynthPlaying) {
      synthesizeSynthArp(329.63, EngineState.audioCtx.currentTime);
      sparkRandomCells(4);
    }
  });
  
  // 11. Biquad Filter Cutoff sweeper range slider
  DOM.filterSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    DOM.filterLabel.textContent = `${val}Hz`;
    EngineState.filterCutoff = val;
    
    // Sweep Web Audio parameter instantly if nodes instantiated
    if (EngineState.filterNode && EngineState.audioCtx) {
      EngineState.filterNode.frequency.setTargetAtTime(val, EngineState.audioCtx.currentTime, 0.04); // Smooth parameter slide
    }
  });
  
  // 12. Echo Delay Feedback intensity slider
  DOM.feedbackSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    DOM.feedbackLabel.textContent = `${val}%`;
    const gainRatio = val / 100;
    EngineState.delayFeedback = gainRatio;
    
    // Sweep feedback gain instantly if nodes instantiated
    if (EngineState.feedbackGainNode && EngineState.audioCtx) {
      EngineState.feedbackGainNode.gain.setTargetAtTime(gainRatio, EngineState.audioCtx.currentTime, 0.04);
    }
  });
  
  // 13. Master Start Trigger Button
  DOM.synthBtn.addEventListener('click', toggleSynthesizerEngine);
  
  // 14. Action buttons: Randomize System Parameters
  DOM.randomizeBtn.addEventListener('click', randomizeSystemParams);
  
  // 15. Canvas Grid Mouse Interactivity trackers
  const container = DOM.gridContainer;
  
  container.addEventListener('mousemove', (e) => {
    handleInteractionMove(e.clientX, e.clientY);
  });
  
  container.addEventListener('mouseenter', () => {
    EngineState.mouse.active = true;
  });
  
  container.addEventListener('mouseleave', () => {
    EngineState.mouse.active = false;
    EngineState.mouse.x = -1000;
    EngineState.mouse.y = -1000;
    
    if (!EngineState.enableAutoWave) {
      EngineState.cells.forEach(cell => {
        if (!cell.element.classList.contains('snare-hit') && !cell.element.classList.contains('melody-sweep')) {
          cell.element.style.setProperty('--cell-color', 'rgba(255,255,255,0.02)');
          cell.element.style.setProperty('--cell-scale', '1');
          cell.element.style.setProperty('--cell-rotation', '0deg');
          cell.element.style.setProperty('--cell-glow', 'none');
        }
      });
    }
  });
  
  // Responsive Touch screen controls
  container.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      handleInteractionMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });
  
  container.addEventListener('touchstart', (e) => {
    EngineState.mouse.active = true;
    if (e.touches.length > 0) {
      handleInteractionMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });
  
  container.addEventListener('touchend', () => {
    EngineState.mouse.active = false;
  }, { passive: true });
  
  // Screen resize tracking
  window.addEventListener('resize', () => {
    cacheCellOffsets();
  });
}

/**
 * Randomizes and updates all visual and synthesizer pattern controllers!
 */
function randomizeSystemParams() {
  // Select random theme
  const themes = Object.keys(ColorThemes);
  const randomTheme = themes[Math.floor(Math.random() * themes.length)];
  DOM.themeSelector.value = randomTheme;
  switchColorTheme(randomTheme);
  
  // Randomize Dimensions (between 12 and 32)
  const cols = Math.floor(Math.random() * 20) + 12;
  const rows = Math.floor(Math.random() * 20) + 12;
  DOM.colsSlider.value = cols;
  DOM.colsLabel.textContent = cols;
  EngineState.cols = cols;
  
  DOM.rowsSlider.value = rows;
  DOM.rowsLabel.textContent = rows;
  EngineState.rows = rows;
  
  // Randomize Cell Corners
  const corners = Math.floor(Math.random() * 26) + 4;
  DOM.shapeSlider.value = corners;
  DOM.shapeLabel.textContent = `${corners}px`;
  EngineState.shapeRoundness = corners;
  document.documentElement.style.setProperty('--border-radius', `${corners}px`);
  
  // Randomize Auto-wave Speed
  const speed = (Math.random() * 5.3) + 1.2;
  DOM.speedSlider.value = speed.toFixed(1);
  DOM.speedLabel.textContent = `${speed.toFixed(1)}s`;
  EngineState.animSpeed = speed;
  document.documentElement.style.setProperty('--anim-speed', `${speed}s`);
  
  // Randomize Proximity influence
  const radius = Math.floor(Math.random() * 250) + 100;
  DOM.rippleSlider.value = radius;
  DOM.rippleLabel.textContent = `${radius}px`;
  EngineState.proximityRadius = radius;
  
  // Randomize Synth Tempo BPM
  const bpm = Math.floor(Math.random() * 70) + 90;
  DOM.bpmSlider.value = bpm;
  DOM.bpmLabel.textContent = bpm;
  EngineState.tempoBPM = bpm;
  
  // Randomize Waveform shapes
  const waves = ['sawtooth', 'square', 'triangle', 'sine'];
  const randWave = waves[Math.floor(Math.random() * waves.length)];
  DOM.waveSelector.value = randWave;
  EngineState.synthWaveform = randWave;
  
  // Randomize Filter sweeps (1000Hz to 6000Hz)
  const cutoff = Math.floor(Math.random() * 5000) + 1000;
  DOM.filterSlider.value = cutoff;
  DOM.filterLabel.textContent = `${cutoff}Hz`;
  EngineState.filterCutoff = cutoff;
  if (EngineState.filterNode && EngineState.audioCtx) {
    EngineState.filterNode.frequency.setValueAtTime(cutoff, EngineState.audioCtx.currentTime);
  }
  
  // Randomize feedback delay depth (20% to 70%)
  const feedback = Math.floor(Math.random() * 51) + 20;
  DOM.feedbackSlider.value = feedback;
  DOM.feedbackLabel.textContent = `${feedback}%`;
  const gainRatio = feedback / 100;
  EngineState.delayFeedback = gainRatio;
  if (EngineState.feedbackGainNode && EngineState.audioCtx) {
    EngineState.feedbackGainNode.gain.setValueAtTime(gainRatio, EngineState.audioCtx.currentTime);
  }
  
  // Randomize Sequencer Triggers Matrix pattern
  for (let step = 0; step < 8; step++) {
    EngineState.kickPattern[step]  = Math.random() > 0.4 ? 1 : 0;
    EngineState.snarePattern[step] = Math.random() > 0.7 ? 1 : 0;
    EngineState.hihatPattern[step] = Math.random() > 0.4 ? 1 : 0;
    // Synth notes: 40% off, 20% low, 20% mid, 20% high
    const synthWeight = Math.random();
    EngineState.synthPattern[step] = synthWeight > 0.6 ? 3 :
                                     synthWeight > 0.4 ? 2 :
                                     synthWeight > 0.2 ? 1 : 0;
  }
  
  // Completely re-render interface states
  buildGrid();
  buildSequencerMatrix();
  
  // Active glowing burst preview
  if (EngineState.isSynthPlaying) {
    sparkRandomCells(30);
  }
}

// ==========================================================================
// SYSTEM ENTRY POINT
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Bind UI modulators
  registerInputControllers();
  
  // Initialize Visual System
  switchColorTheme('cyberpunk');
  
  // Generate visual pixel canvas
  buildGrid();
  
  // Generate interactive step programming matrix
  buildSequencerMatrix();
  
  // Trigger layout calculations
  setTimeout(cacheCellOffsets, 100);
  
  // Spin up high speed visual mapping loop
  requestAnimationFrame(renderLoop);
});
