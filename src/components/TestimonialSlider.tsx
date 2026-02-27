import { useState, useEffect } from 'react';
import { Star, User } from 'lucide-react';

interface Testimonial {
  name: string;
  text: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Tara P.",
    text: "Ilan and his team are reliable. They know everything from the right type of tile to ensuring all your waterproofing is done right, to making sure you have cork on the floor for soundproofing. They helped us accelerate permits and inspections, and they are STILL there if we ever have questions. You will not be disappointed.",
    location: "Santa Monica, Custom Home Build"
  },
  {
    name: "Rachel M.",
    text: "Ilan built our home and did a phenomenal job. Everything was done at the highest level with no cutting corners or shortcuts. The process was very honest and transparent, and he's someone who has a lot of honesty and integrity. Even afterwards, he has always been here to help us when the need arises.",
    location: "Custom Home Build, Los Angeles"
  },
  {
    name: "Reeve B.",
    text: "Drexel built our dream home, and it was a great experience. From teardown to the finishing touches, Ilan and his staff were always attentive and responsive. They are honest and trustworthy, which is most important when making such a sizable investment. We will definitely use Drexel again and recommend it to anyone who is looking to build or remodel.",
    location: "Teardown & Custom Build, Los Angeles"
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl w-full max-w-md">
      <div
        className={`transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-full flex-shrink-0 bg-primary/10 flex items-center justify-center">
            <User className="w-7 h-7 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex gap-0.5 mb-2">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-800 text-sm leading-relaxed mb-3 break-words">
              "{currentTestimonial.text}"
            </p>
            <div>
              <p className="text-gray-900 font-semibold text-sm break-words">{currentTestimonial.name}</p>
              <p className="text-gray-600 text-xs mt-1 break-words">{currentTestimonial.location}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-1.5 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsTransitioning(false);
              }, 300);
            }}
            className={`h-1.5 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-primary'
                : 'w-1.5 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
