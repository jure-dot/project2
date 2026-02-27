import { MapPin, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm w-full z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img src="/screenshot_2025-12-19_at_14.22.06.png" alt="Drexel Luxury Homes" className="h-14 w-auto object-contain" />
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=5166+W+Pico+Blvd+Los+Angeles+CA+90019"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group"
          >
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm group-hover:underline">5166 W Pico Blvd., Los Angeles CA 90019</span>
          </a>

          <div className="flex items-center gap-3">
            <img src="/profile.jpg" alt="Ilan Douek" className="w-12 h-12 rounded-full flex-shrink-0 object-cover" />
            <div className="hidden sm:block">
              <div className="text-xs text-gray-600">Speak with a building expert</div>
              <a href="tel:+13234542232" className="font-heading text-xl font-bold text-primary hover:text-primary-hover transition-colors">
                (323) 454-2232
              </a>
            </div>
            <a href="tel:+13234542232" className="sm:hidden">
              <Phone className="w-6 h-6 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
