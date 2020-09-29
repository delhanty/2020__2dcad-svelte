<script lang="ts">
  import Canvas2d from "./components/Canvas2d.svelte";
  let navbarheight = 40;
</script>

<main>
  <div id="canvas-container">
    <Canvas2d top={navbarheight}/>
  </div>
  <div id="canvas-overlay">
  <div id="navbar">
    <div id="navbar-logo"><span id="navbar-logo-left">2D-CAD </span><span id="navbar-logo-right"> (Svelte)</span></div>
    <div id="errordiv" style="display: none;"><pre></pre></div>
  </div>
</main>
<style>
  :global(body) {
    margin: 0px;             /* not inherited */
    border: 0px none black;  /* not inherited */
    padding: 0px;            /* not inherited */
    font-family: Helvetica, Arial, Sans;

    /* ensure that the document uses the whole width and height of the browser */
    min-height: 100%;
    height: 100%;
    min-width: 100%;
    width: 100%;

    /* viewer/canvas is full screen so when window
    is resized all remains intact, but we make sure no scrollbar appears */
    overflow: hidden;
    }

#canvas-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

#navbar {
  position: absolute;
  width: 100%;
  background-color: #f8f8f8;
  /*background: transparent;*/
  opacity: 0.8;
  -moz-opacity: 0.8;
  min-height: 40px;
  line-height: 40px;
  margin: 0;
  padding: 0px 5px;
  z-index: 1010;
}
#navbar-logo {
  font-family: Impact, Charcoal, sans-serif;
  font-size: 20px;
  max-height: 40px;
}
#navbar-logo-left
{
  color: #c8102e; /* The Union Jack red */
}
#navbar-logo-right {
  color: #012169; /* The Union Jack dark blue */
}

  @media (min-width: 640px) {
    main {
      max-width: none;
      }
    }
</style>
