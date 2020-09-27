<script lang="ts">
import { onMount } from 'svelte';
import * as utils from './canvas2dutils';


let canvas:  HTMLCanvasElement;
let mounted: boolean = false;

export let top: number = 0;

onMount(() => {

  mounted = true;
  if (mounted) {
    loadCanvasElements();
    }
});

function onResize()
{
  utils.onCanvasResize(canvas,(context: CanvasRenderingContext2d) => {
    context.fillStyle = '#ff0000';
    context.beginPath();
    context.arc(250,top+250,120,0, Math.PI*2.0);
    context.fill();
  });
}

function loadCanvasElements() {
  onResize();

  window.addEventListener('resize', onResize);
}
</script>

<style>
canvas {
   margin: 0px;            /* not inherited */
   border: 0px none black; /* not inherited */
   padding: 0px;           /* not inherited */
   background: #fff;

   /* ensure that the canvas uses the whole width and height of the document */
   height: 100%;
   width: 100%;

   cursor: move;        /* show that we can change orientation of view */
}
</style>
<canvas touch-action="none" bind:this={canvas}></canvas>
