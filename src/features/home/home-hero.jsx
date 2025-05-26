import React from 'react';

const HomeHero = () => {
  return (
    <div
      className="h-[670px] w-full"
      style={{
        background: `
          radial-gradient(
            800px 800px at 50% 0%,
            rgba(255, 255, 255, 0.4),
            transparent 80%
          ),
          radial-gradient(
            800px 800px at 0% 110%,
            rgba(255, 255, 255, 0.4),
            transparent 80%
          ),
          rgba(0, 0, 0, 1)
        `,
        backgroundBlendMode: 'screen',
      }}
    ></div>
  );
};

export default HomeHero;
