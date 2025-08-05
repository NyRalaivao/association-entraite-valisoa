import React from "react";

const images = [
  "src/assets/images/photo1.jpeg",
  "src/assets/images/photo2.jpeg",
  "src/assets/images/photo3.png",
  "src/assets/images/photo4.png",
  "src/assets/images/photo5.png",
  "src/assets/images/photo6.png",
  "src/assets/images/photo7.png",
  "src/assets/images/photo8.jpeg",
  "src/assets/images/photo9.jpeg",
  "src/assets/images/photo10.jpeg",
  "src/assets/images/photo11.jpeg",
  "src/assets/images/photo12.jpeg",
  "src/assets/images/photo13.jpeg",
  "src/assets/images/photo14.jpeg",
  "src/assets/images/photo18.jpeg",
  "src/assets/images/photo19.jpeg",
  "src/assets/images/photo24.jpeg",
  "src/assets/images/photo25.jpeg",
  "src/assets/images/photo26.jpeg",
  "src/assets/images/photo27.jpeg",
  "src/assets/images/photo28.jpeg",
  "src/assets/images/photo29.jpeg",
  "src/assets/images/photo30.jpeg",
  "src/assets/images/photo31.jpeg",
  "src/assets/images/photo32.jpeg",
  "src/assets/images/photo33.jpeg"
];

export default function Carousel() {
  return (
    <>
      {/* Animation CSS directement intégrée */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          .scrolling-wrapper {
            animation: scroll 60s linear infinite;
          }

          .carousel-container:hover .scrolling-wrapper {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-10 px-4">
        <div className="carousel-container relative w-full max-w-6xl overflow-hidden rounded shadow-md">
          <div className="scrolling-wrapper flex w-max">
            {[...images, ...images].map((src, index) => (
              <img
                key={index}
                src={src}
                className="w-64 h-40 object-cover flex-shrink-0"
                alt={`image-${index}`}
              />
            ))}
          </div>
        </div>

        <div className="max-w-md text-gray-700 mt-6 md:mt-0">
          <h2 className="text-2xl font-bold text-emerald-700 mb-4">Nos Réalisations</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            Nulla quis sem at nibh elementum imperdiet.
          </p>
        </div>
      </div>
    </>
  );
}
