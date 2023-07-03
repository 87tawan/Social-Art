import React, { useRef, useState, useEffect, MouseEvent } from "react";

export function CanvaPublish() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current!!;
    const context = canvas!!.getContext("2d");

    const startDrawing = (e: MouseEvent<HTMLCanvasElement>) => {
      setIsDrawing(true);
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      context?.beginPath();
      context?.moveTo(x, y);
    };

    const draw = (e: MouseEvent<HTMLCanvasElement>) => {
      if (!isDrawing || e.buttons !== 1) return;
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) * canvas.width) / rect.width;
      const y = ((e.clientY - rect.top) * canvas.height) / rect.height;
      context?.lineTo(x, y);
      context?.stroke();
    };

    const stopDrawing = () => {
      setIsDrawing(false);
    };

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      setCanvasSize({
        width: rect.width,
        height: rect.height,
      });
    };

    canvas?.addEventListener("mousedown", startDrawing);
    canvas?.addEventListener("mousemove", draw);
    canvas?.addEventListener("mouseup", stopDrawing);
    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();

    return () => {
      canvas?.removeEventListener("mousedown", startDrawing);
      canvas?.removeEventListener("mousemove", draw);
      canvas?.removeEventListener("mouseup", stopDrawing);
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
