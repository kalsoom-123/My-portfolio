import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const circleRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const circle = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", moveCursor);

    const animate = () => {
      circle.current.x += (mouse.current.x - circle.current.x) * 0.12;
      circle.current.y += (mouse.current.y - circle.current.y) * 0.12;

      if (circleRef.current) {
        circleRef.current.style.left = circle.current.x + "px";
        circleRef.current.style.top = circle.current.y + "px";
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-circle" ref={circleRef}></div>
    </>
  );
}