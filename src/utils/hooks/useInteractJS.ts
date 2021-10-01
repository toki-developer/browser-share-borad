import interact from "interactjs";
import { useEffect, useRef, useState } from "react";

type Partial<T> = {
  [P in keyof T]?: T[P];
};

const initPosition = {
  x: 0,
  y: 0,
};

export const useInteractJS = (
  position: Partial<typeof initPosition> = initPosition
) => {
  const [_position, setPosition] = useState({
    ...initPosition,
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
      });
  };

  // const disable = () => {
  //   interact(interactRef.current as unknown as HTMLElement).unset();
  // };

  useEffect(() => {
    if (interactRef.current) enable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ref: interactRef,
    style: {
      transform: `translate3D(${_position.x}px, ${_position.y}px, 0)`,
    },
  };
};
