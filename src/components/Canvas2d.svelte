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

function hinomaru(context: CanvasRenderingContext2D, x: number, y: number, radius: number)
{
  context.fillStyle = '#ff0000';
  context.beginPath();
  context.arc(x,y, radius, 0,Math.PI*2.0);
  context.fill();
}
function grid(context: CanvasRenderingContext2D, spacing: number)
{
  const x0 = 0.5;
  const x1 = canvas.width;
  const y0 = top + 0.5;
  const y1 = canvas.height;

  context.beginPath();

  for (var x = x0; x < x1; x += spacing) {
    context.moveTo(x, y0);
    context.lineTo(x, y1);
    }

  for (var y = y0; y < y1; y += spacing) {
    context.moveTo(x0, y);
    context.lineTo(x1, y);
    }

  context.strokeStyle = "blue"; //"rgb(0.8,0.8,0.8)"; //#888; //"black";
  context.stroke();
}
function onResize()
{
  utils.onCanvasResize(canvas,(context: CanvasRenderingContext2D) => {
    grid(context,40);
    hinomaru(context,250,top+100,120);
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
