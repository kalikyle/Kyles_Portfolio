import React, { useEffect, useRef } from 'react';

const MatrixBackground = ({ fillStyle }) => {
  const canvasRef = useRef(null);
  const rainDropsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const setCanvasSize = () => {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
      console.log(`Canvas size: ${canvas.width}x${canvas.height}`); // Log the size
      const fontSize = 16;
      const columns = Math.floor(canvas.width / fontSize);
      // Initialize rainDrops with random starting positions
      rainDropsRef.current = Array.from({ length: columns }, () => Math.floor(Math.random() * (canvas.height / fontSize)));
    };

    const characters = 'アァカサタナハマヤャラワガザダバパABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 16;

    const draw = () => {
      console.log("Drawing..."); // Log to check if draw is being called
      context.fillStyle = 'rgba(0, 0, 0, 0.06)'; // Background fade effect
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = fillStyle; // Use the fillStyle prop
      context.font = `${fontSize}px monospace`;

      rainDropsRef.current.forEach((y, index) => {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        context.fillText(text, index * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          rainDropsRef.current[index] = 0; // Reset to top if it goes off screen
        }
        rainDropsRef.current[index]++; // Move the raindrop down
      });
    };

    setCanvasSize(); // Set initial canvas size
    const interval = setInterval(draw, 60);

    // Handle window resize
    window.addEventListener('resize', setCanvasSize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [fillStyle]); // Add fillStyle to the dependency array

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
};

export default MatrixBackground;