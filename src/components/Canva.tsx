import React, { useRef, useState, useEffect, TouchEventHandler } from "react";

export function CanvaPublish() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  const startDrawing = (e: MouseEvent | TouchEvent) => {
    setIsDrawing(true);
    const canvas = canvasRef.current!!;
    const context = canvas?.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = e instanceof MouseEvent ? e.clientX - rect.left : e.touches[0].clientX - rect.left;
    const y = e instanceof MouseEvent ? e.clientY - rect.top : e.touches[0].clientY - rect.top;
    context?.beginPath();
    context?.moveTo(x, y);
  };

  const draw = (e: MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current!!;
    const context = canvas?.getContext("2d");
    if (!isDrawing) return;
    const rect = canvas!!.getBoundingClientRect();
    const x = (e instanceof MouseEvent ? e.clientX : e.touches[0].clientX) - rect.left;
    const y = (e instanceof MouseEvent ? e.clientY : e.touches[0].clientY) - rect.top;
    context?.lineTo(x, y);
    context?.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    const resizeCanvas = () => {
      const rect = canvas!!.getBoundingClientRect();
      setCanvasSize({
        width: rect.width,
        height: rect.height,
      });
    };

    canvas?.addEventListener("mousedown", startDrawing);
    canvas?.addEventListener("touchstart", startDrawing as EventListener);
    canvas?.addEventListener("mousemove", draw);
    canvas?.addEventListener("touchmove", draw as EventListener);
    window.addEventListener("mouseup", stopDrawing);
    window.addEventListener("touchend", stopDrawing as EventListener);
    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();

    return () => {
      canvas?.removeEventListener("mousedown", startDrawing);
      canvas?.removeEventListener("touchstart", startDrawing as EventListener);
      canvas?.removeEventListener("mousemove", draw);
      canvas?.removeEventListener("touchmove", draw as EventListener);
      window.removeEventListener("mouseup", stopDrawing);
      window.removeEventListener("touchend", stopDrawing as EventListener);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isDrawing]);

  return (
    <div>
      <div className="w-90vw h-80 mx-auto border">
        <canvas
          ref={canvasRef}
          width={canvasSize.width}
          height={canvasSize.height}
          className="w-full h-full bg-gray-100 bg-opacity-100 cursor-crosshair"
          onTouchStart={startDrawing as any}
          onTouchMove={draw as any}
        ></canvas>
      </div>

      <div className="flex justify-center gap-10 mt-40">
        <button className="font-bold py-1 px-10 rounded bg-stone-300 text-black hover:bg-green-700 transition ease-in-out duration-300">
          Save
        </button>

        <button className="font-bold py-1 px-10 rounded bg-stone-300 text-black hover:bg-green-700 transition ease-in-out duration-300">
          Publish
        </button>
      </div>
    </div>
  );
}
