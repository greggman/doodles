Open `outer.html', open the JSConsole (Ctrl-Shift-K/Cmd-Shift-K)

Drag the bottom edge of the window up and down

## What should happen:

There should be no errors


## What happens instead

There is the error "ResizeObserver loop completed with undelivered notifications."




relevant contents of files

```
outer.html
    <iframe src="frame.html">

frame.html
    <iframe src="resize.html>

resize.html
    <body>
      <canvas id="c"></canvas>
      <div id="info"></div>
      <div id="arrow">drag this ⬇ slider up/down</div>
    </body>
    <script>
    const canvas = document.querySelector('#c');

    function onResize(entries) {}

    const resizeObserver = new ResizeObserver( onResize );
    resizeObserver.observe( canvas, { box: "content-box" } );

    /* if you don't check for the error non get report!?!? */
    window.addEventListener('error', function(e) {
      console.error(e.error || e);
    });
    </script>
```

*  If aren't 2 nested iframes no error message. 

   In other words if you open `resize.html` or `frame.html` directly then no error mesage

*  If you remove the `error` event listener then no error message

   That's strange because without the `error` event listener the error should go to the console automatically

