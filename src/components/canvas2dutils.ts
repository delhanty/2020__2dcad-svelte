export { onCanvasResize}

type CallbackToContext2d = (context2d: CanvasRenderingContext2d) => void;

function onCanvasResize(
    canvas:        HTMLCanvasElement,
    drawToContext: CallbackToContext2d)
{
  const context: CanvasRenderingContext2D = canvas.getContext('2d');
  const PIXEL_RATIO = window.devicePixelRatio;
  canvas.width = canvas.offsetWidth * PIXEL_RATIO;
  canvas.height = canvas.offsetHeight * PIXEL_RATIO;
  context.setTransform(PIXEL_RATIO, 0, 0, PIXEL_RATIO, 0, 0);

  drawToContext(context);
}
