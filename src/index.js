import React, { useRef } from "react";

const Canvas = props => {
  const canvasRef = useRef(null);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
