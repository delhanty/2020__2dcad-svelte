// Silence warning from EsLint because
// we will likely export multiple items
// from this file in future.
/* eslint-disable import/prefer-default-export */

export { onCanvasResize, hinomaru, grid };

type CallbackToContext2D = (context2d: CanvasRenderingContext2D) => void;

function onCanvasResize(canvas: HTMLCanvasElement, drawToContext: CallbackToContext2D) {
  const context: CanvasRenderingContext2D | null = canvas.getContext('2d');
  if (context != null) {
    const PIXEL_RATIO = window.devicePixelRatio;
    canvas.width = canvas.offsetWidth * PIXEL_RATIO;
    canvas.height = canvas.offsetHeight * PIXEL_RATIO;
    context.setTransform(PIXEL_RATIO, 0, 0, PIXEL_RATIO, 0, 0);

    drawToContext(context);
  }
}

function hinomaru(context: CanvasRenderingContext2D, x: number, y: number, radius: number) {
  context.fillStyle = '#ff0000';
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2.0);
  context.fill();
}

function grid(
  canvas: HTMLCanvasElement,
  top: number,
  context: CanvasRenderingContext2D,
  spacing: number,
) {
  const x0 = 0.5;
  const x1 = canvas.width;
  const y0 = top + 0.5;
  const y1 = canvas.height;

  context.beginPath();

  for (let x = x0; x < x1; x += spacing) {
    context.moveTo(x, y0);
    context.lineTo(x, y1);
  }

  for (let y = y0; y < y1; y += spacing) {
    context.moveTo(x0, y);
    context.lineTo(x1, y);
  }

  context.strokeStyle = 'blue'; // "rgb(0.8,0.8,0.8)"; //#888; //"black";
  context.stroke();
}
