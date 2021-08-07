<script lang="ts">
  import { onMount } from 'svelte';
  import * as utils from '../typescript/canvas2Dutils';

  let canvas: HTMLCanvasElement;
  let mounted: boolean = false;

  export let top: number = 0;

  onMount(() => {
    mounted = true;
    if (mounted) {
      loadCanvasElements();
    }
  });

  function onResize() {
    utils.onCanvasResize(canvas, (context: CanvasRenderingContext2D) => {
      utils.grid(canvas, top, context, 40);
      utils.hinomaru(context, 250, top + 100, 120);
    });
  }

  function loadCanvasElements() {
    onResize();

    window.addEventListener('resize', onResize);
  }
</script>

<canvas touch-action="none" bind:this={canvas} />

<style>
  canvas {
    margin: 0px; /* not inherited */
    border: 0px none black; /* not inherited */
    padding: 0px; /* not inherited */
    background: #fff;

    /* ensure that the canvas uses the whole width and height of the document */
    height: 100%;
    width: 100%;

    cursor: move; /* show that we can change orientation of view */
  }
</style>
