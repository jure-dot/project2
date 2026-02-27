import { useEffect, useRef } from 'react';

const images = [
  'https://drexelluxuryhomes.com/wp-content/uploads/2023/08/2.webp',
  'https://drexelluxuryhomes.com/wp-content/uploads/2023/05/image.remini-enhanced-14.jpg',
  'https://drexelluxuryhomes.com/wp-content/uploads/2023/05/image.remini-enhanced-8.jpg',
  'https://drexelluxuryhomes.com/wp-content/uploads/2023/04/57e67b_f947557e5847405f9f56f522b9b4b708mv2.webp',
  'https://drexelluxuryhomes.com/wp-content/uploads/2023/04/57e67b_29085b5433d54f7fb22e1aab455b7d76mv2.webp',
];

export default function AutoScrollGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;

      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-16 bg-[#0F2A43] overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {[...images, ...images, ...images].map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[400px] h-[280px] lg:w-[500px] lg:h-[350px]"
          >
            <img
              src={image}
              alt={`Gallery image ${(index % images.length) + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
