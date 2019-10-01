export function applyUrlSettings(settings) {
  for (const [fullKey, value] of (new URLSearchParams().entries())) {
    const parts = fullKey.split('.');
    const key = parts.pop();
    let dst = settings;
    for (const p of parts) {
      dst = dst[p];
      if (typeof dst !== 'object') {
        throw new Error(`unknown setting '${fullKey}`);
      }
    }
    
    const origValue = dst[key];
    if (origValue === undefined) {
      throw new Error(`unknown setting '${fullKey}`);
    }

    let v = value;
    if (typeof origValue === 'number') {
      v = parseFloat(value);
    } else if (typeof origValue === 'boolean') {
      v = value !== 'false' && value !== '0' && value !== '';
    }
    dst[key] = value;
  }
}
