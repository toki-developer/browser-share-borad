import interact from "interactjs";
import { useEffect, useRef, useState } from "react";

type InteractType = {
  position?: {
    x: number;
    y: number;
  };
  fn?: (x: number, y: number) => void;
};

export const useInteractJS = ({
  position = { x: 0, y: 0 },
  fn,
}: InteractType) => {
  const [_position, setPosition] = useState({
    ...position,
  });
  const interactRef = useRef(null);
  let { x, y } = _position;
  const enable = () => {
    interact(interactRef.current as unknown as HTMLElement)
      .draggable({
        inertia: false,
      })
      .on("dragmove", (event) => {
        x += event.dx;
        y += event.dy;
        setPosition({
          x,
          y,
        });
      })
      .on("dragend", () => {
        if (fn) fn(x, y);
      });
  };
  useEffect(() => {
    if (interactRef.current) enable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setPosition({ x: position.x, y: position.y });
  }, [position.x, position.y]);
  return {
    ref: interactRef,
    style: {
      transform: `translate3D(${_position.x}px, ${_position.y}px, 0)`,
    },
  };
};
