import React from "react";
import PropTypes from "prop-types";
import useCanvas from "./useCanvas";

const Canvas = props => {
  const { draw, options, ...rest } = props;
  const canvasRef = useCanvas(draw, options);

  return <canvas ref={canvasRef} {...rest} />;
};

Canvas.defaultProps = {
  draw: () => {}
};

Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
  options: PropTypes.shape({
    context: PropTypes.oneOf([
      "2d",
      "webgl",
      "experimental-webgl",
      "webgl2",
      "bitmaprenderer"
    ])
  })
};

export default Canvas;
