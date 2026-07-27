import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);

  const position = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      target.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener("mousemove", moveCursor);

    const animate = () => {
      position.current.x += (target.current.x - position.current.x) * 0.1;
      position.current.y += (target.current.y - position.current.y) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.left = position.current.x + "px";
        cursorRef.current.style.top = position.current.y + "px";
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{ left: "0px", top: "0px" }}
    ></div>
  );
}