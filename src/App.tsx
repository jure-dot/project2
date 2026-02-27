import Navbar from './components/Navbar';
import SurveyForm from './components/SurveyForm';
import TestimonialSlider from './components/TestimonialSlider';
import ReelsSection from './components/ReelsSection';
import AutoScrollGallery from './components/AutoScrollGallery';
import { Star, CheckCircle, Shield, FileText, Clock, Users, Award, ChevronDown, Play, AlertCircle, FileCheck2, Building, Heart, Hammer, Ruler, ClipboardCheck, MessageCircle, Timer, MapPin, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-navy-dark via-navy to-slate overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://drexelluxuryhomes.com/wp-content/uploads/2023/04/57e67b_f33657cc800a498f9b3cb79d3c8e68f7mv2.webp')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/90 to-navy-dark/80" />
          <div className="absolute inset-0 bg-black/20 lg:hidden" />

          <div className="relative w-full max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-12 lg:py-20 pt-20 lg:pt-28">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-items-start">
              <div className="text-white space-y-3 lg:space-y-4 max-w-[520px] px-4 lg:px-0">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg flex-shrink-0">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map(i => (
                        <Star key={i} className="w-3.5 h-3.5 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs lg:text-sm font-medium break-words flex-1 min-w-0">
                    Rated "Excellent" by Pacific Palisades Fire Rebuild Clients
                  </span>
                </div>

                <div className="break-words">
                  <h1 className="font-heading text-3xl md:text-4xl lg:text-6xl font-bold mb-3 lg:mb-6 leading-tight break-words">
                    Rebuild Your Pacific Palisades Home
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl font-heading font-semibold mb-3 lg:mb-4 text-primary break-words">
                    With a Team That Knows Fire Rebuilds Not Just Construction
                  </p>
                  <p className="text-sm lg:text-lg text-white/90 leading-relaxed break-words">
                    Drexel Luxury Homes specializes in fire rebuilds in Pacific Palisades, guiding homeowners from loss to home with clarity, structure, and care.
                  </p>
                </div>

                <div className="space-y-2 lg:hidden">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-white/90">Fire Rebuild Specialists, Pacific Palisades</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-white/90">Insurance-Aware Rebuild Process</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-white/90">Permits & City Coordination Handled</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-white/90">Clear Timelines & Budgets</p>
                  </div>
                </div>

                <div className="lg:hidden space-y-2 px-0">
                  <button
                    onClick={() => document.getElementById('survey-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-3 rounded-lg transition-colors duration-200 shadow-lg"
                  >
                    Get Your Free Fire Rebuild Assessment
                  </button>
                  <div className="flex flex-wrap gap-1.5 text-[10px] leading-tight text-white/90 items-center justify-center px-1">
                    <span className="flex items-center gap-1">
                      <Award className="w-2.5 h-2.5 text-primary flex-shrink-0" />
                      <span className="break-words">18+ Years</span>
                    </span>
                    <span className="text-white/40">|</span>
                    <span className="break-words">50+ Homes</span>
                    <span className="text-white/40">|</span>
                    <span className="break-words">A+ BBB</span>
                    <span className="text-white/40">|</span>
                    <span className="flex items-center gap-1">
                      <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                      <span className="break-words">5-Star Reviews</span>
                    </span>
                  </div>
                </div>

                <div className="space-y-3 lg:space-y-4 hidden lg:block">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0 break-words">
                      <p className="font-semibold text-base lg:text-lg break-words">Fire Rebuild Specialists, Pacific Palisades</p>
                      <p className="text-sm lg:text-base text-white/80 break-words">We understand post-fire regulations, coastal requirements, and rebuilding constraints unique to Palisades lots.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0 break-words">
                      <p className="font-semibold text-base lg:text-lg break-words">Insurance-Aware Rebuild Process</p>
                      <p className="text-sm lg:text-base text-white/80 break-words">We help you align scope, documentation, and construction with insurance requirements reducing friction and delays.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0 break-words">
                      <p className="font-semibold text-base lg:text-lg break-words">Permits, Approvals & City Coordination Handled</p>
                      <p className="text-sm lg:text-base text-white/80 break-words">From zoning to fire safety codes, we manage the entire approval process so nothing is missed.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0 break-words">
                      <p className="font-semibold text-base lg:text-lg break-words">Clear Timelines. Clear Budgets. No Surprises.</p>
                      <p className="text-sm lg:text-base text-white/80 break-words">Structured milestones, transparent communication, and realistic expectations from day one.</p>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex flex-wrap gap-3 text-sm text-white/90 items-center justify-center lg:justify-start">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="break-words">18+ Years of Excellence</span>
                  </span>
                  <span className="text-white/40">|</span>
                  <span className="break-words">50+ Homes Built</span>
                  <span className="text-white/40">|</span>
                  <span className="break-words">A+ BBB Rating</span>
                  <span className="text-white/40">|</span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                    <span className="break-words">5-Star Google Reviews</span>
                  </span>
                </div>

                <div className="hidden lg:block">
                  <TestimonialSlider />
                </div>
              </div>

              <div id="survey-form">
                <SurveyForm />
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="py-6 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-1">18+</div>
                <div className="text-sm text-gray-700 font-medium">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-gray-700 font-medium">Homes Built</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-1">A+</div>
                <div className="text-sm text-gray-700 font-medium">BBB Rating</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-1">5-Star</div>
                <div className="text-sm text-gray-700 font-medium">Google Reviews</div>
              </div>
            </div>
          </div>
        </section>

        {/* AUTO SCROLL GALLERY */}
        <AutoScrollGallery />

        {/* FEATURES SECTION */}
        <section className="relative py-10 lg:py-12 bg-[#0F2A43]">
          <div className="max-w-[1400px] mx-auto px-[15px] sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-6 lg:mb-8">
              <div className="w-16 h-1 bg-primary mb-4 mx-auto"></div>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Rebuild With Confidence and Clarity
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
              {/* LEFT SIDE - Floor Plan */}
              <div className="relative flex items-center justify-center lg:sticky lg:top-8">
                <div className="w-full max-w-xl lg:max-w-2xl">
                  <img
                    src="/floor-plan-two-apartment-apartments copy.png"
                    alt="Architectural Floor Plan"
                    className="w-full h-auto mx-auto"
                  />
                </div>
              </div>

              {/* RIGHT SIDE - Content */}
              <div className="flex flex-col">
                <div className="space-y-4 mb-5">
                  {/* Feature 1 */}
                  <div className="group">
                    <div className="w-full aspect-[21/9] overflow-hidden shadow-xl mb-2 relative">
                      <img
                        src="https://drexelluxuryhomes.com/wp-content/uploads/2023/05/IMG_7554.PNG.remini-enhanced-1.jpg"
                        alt="Pacific Palisades"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-transparent"></div>
                    </div>
                    <div className="pl-3 border-l-4 border-primary/50">
                      <h3 className="font-heading text-base lg:text-lg font-bold text-white mb-1">
                        Pacific Palisades Fire Rebuild Specialists
                      </h3>
                      <p className="text-white/80 text-sm leading-snug">
                        We specialize in post-fire rebuilds in Pacific Palisades, understanding the unique coastal requirements, hillside restrictions, and updated fire safety codes that apply to your property.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="group">
                    <div className="w-full aspect-[21/9] overflow-hidden shadow-xl mb-2 relative">
                      <img
                        src="https://drexelluxuryhomes.com/wp-content/uploads/2023/05/image.remini-enhanced-19.jpg"
                        alt="Insurance Documentation"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-transparent"></div>
                    </div>
                    <div className="pl-3 border-l-4 border-primary/50">
                      <h3 className="font-heading text-base lg:text-lg font-bold text-white mb-1">
                        Insurance Coordination & Documentation
                      </h3>
                      <p className="text-white/80 text-sm leading-snug">
                        Each rebuild project includes comprehensive insurance documentation support, scope alignment, and claims coordination ensuring your coverage is maximized and delays are minimized throughout the entire process.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="group">
                    <div className="w-full aspect-[21/9] overflow-hidden shadow-xl mb-2 relative">
                      <img
                        src="https://drexelluxuryhomes.com/wp-content/uploads/2023/05/48-min_18_11zon.jpg"
                        alt="Permit Management"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-transparent"></div>
                    </div>
                    <div className="pl-3 border-l-4 border-primary/50">
                      <h3 className="font-heading text-base lg:text-lg font-bold text-white mb-1">
                        Complete Permit & City Approval Management
                      </h3>
                      <p className="text-white/80 text-sm leading-snug">
                        From initial zoning reviews to final inspections, we handle all permits, city coordination, and regulatory approvals so you can focus on moving forward with confidence and peace of mind.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <button
                    onClick={() => document.getElementById('survey-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-primary text-white font-heading font-semibold text-base lg:text-lg py-3 px-6 hover:bg-primary-hover transition-all shadow-lg rounded-lg"
                  >
                    Get Your Free Fire Rebuild Assessment
                  </button>
                  <div className="flex flex-wrap gap-1.5 text-xs lg:text-sm text-white/90 items-center justify-center">
                    <span className="flex items-center gap-1">
                      <Award className="w-3 h-3 text-primary flex-shrink-0" />
                      <span className="break-words">18+ Years of Excellence</span>
                    </span>
                    <span className="text-white/40">|</span>
                    <span className="break-words">50+ Homes Built</span>
                    <span className="text-white/40">|</span>
                    <span className="break-words">A+ BBB Rating</span>
                    <span className="text-white/40">|</span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                      <span className="break-words">5-Star Google Reviews</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EMPATHY SECTION */}
        <section className="py-12 bg-gradient-to-b from-navy-dark to-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://drexelluxuryhomes.com/wp-content/uploads/2023/05/10.remini-enhanced-1-copy.jpg')] bg-cover bg-center opacity-5" />
          <div className="absolute inset-0 bg-navy-dark/30 lg:bg-navy-dark/10" />

          <div className="relative max-w-6xl mx-auto px-[15px] sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
                You're Not Alone
              </h2>
              <p className="font-heading text-xl md:text-2xl text-primary mb-4 max-w-4xl mx-auto">
                Rebuilding After a Fire Is Different And It Matters Who You Choose
              </p>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                A fire rebuild is not a standard construction project.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl mb-6">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-navy-dark mb-6 text-center">
                It involves:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileCheck2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-dark mb-1.5 text-base">Insurance Documentation</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Complex scope alignment and claims coordination</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-dark mb-1.5 text-base">Stricter Building Codes</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Enhanced fire safety and coastal requirements</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-dark mb-1.5 text-base">City Approvals</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Lengthy permit processes that can delay for months</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-dark mb-1.5 text-base">Emotional Journey</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Managing stress during an already difficult time</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-3">
              <p className="text-base md:text-lg text-white/90">
                Working with a builder who doesn't specialize in fire rebuilds often leads to <span className="text-primary font-semibold">delays, cost overruns, and frustration.</span>
              </p>
              <p className="text-xl md:text-2xl font-heading font-bold text-primary">
                That's exactly what we help you avoid.
              </p>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-[15px] sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-navy-dark mb-3">
                Why Fire Rebuild Clients Choose Drexel Luxury Homes
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-105 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy-dark mb-2">
                  Local Fire Rebuild Expertise
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                  Specialized knowledge of Pacific Palisades zoning, setbacks, hillside restrictions, and updated fire safety codes
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-105 transition-transform">
                  <ClipboardCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy-dark mb-2">
                  Insurance-Savvy Construction
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                  Expert navigation of insurance scopes and claims, minimizing gaps and ensuring full coverage alignment
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-105 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy-dark mb-2">
                  Single Point of Accountability
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                  One team managing design, permits, construction, and project delivery from start to finish
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-105 transition-transform">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy-dark mb-2">
                  Transparent Communication
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                  Regular updates, documented decisions, and clear expectations throughout every project phase
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-105 transition-transform">
                  <Timer className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy-dark mb-2">
                  Proven Track Record
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                  Multiple successful luxury fire rebuilds with on-time delivery and exceptional craftsmanship
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-105 transition-transform">
                  <Hammer className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy-dark mb-2">
                  Premium Quality Standards
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                  Meticulous attention to detail and luxury finishes that exceed expectations on every build
                </p>
              </div>
            </div>

            <div className="mt-8 text-center max-w-xl mx-auto space-y-3">
              <button
                onClick={() => document.getElementById('survey-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-primary text-white font-heading font-semibold text-base lg:text-lg py-3 lg:py-4 px-6 lg:px-8 hover:bg-primary-hover transition-all shadow-lg rounded-lg"
              >
                Get Your Free Fire Rebuild Assessment
              </button>
              <div className="flex flex-wrap gap-2 text-xs lg:text-sm text-gray-600 items-center justify-center">
                <span className="flex items-center gap-1">
                  <Award className="w-3 h-3 lg:w-4 lg:h-4 text-primary flex-shrink-0" />
                  <span className="break-words">18+ Years of Excellence</span>
                </span>
                <span className="text-gray-400">|</span>
                <span className="break-words">50+ Homes Built</span>
                <span className="text-gray-400">|</span>
                <span className="break-words">A+ BBB Rating</span>
                <span className="text-gray-400">|</span>
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                  <span className="break-words">5-Star Google Reviews</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FIRE REBUILD CONSULTATION */}
        <section className="py-12 bg-navy-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-navy-dark/20 lg:bg-transparent" />
          <div className="relative max-w-4xl mx-auto px-[15px] sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Your Private 30-Minute Fire Rebuild Assessment
              </h2>
              <p className="text-xl text-white/90 mb-2">
                This is not a sales call.
              </p>
              <p className="text-lg text-white/80">
                It's a clarity session designed to help you understand your rebuild path.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/20">
              <h3 className="font-heading text-xl font-bold mb-6">
                During Your Assessment, We'll Cover:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Rebuild Feasibility Review</p>
                    <p className="text-sm text-white/80">What can be rebuilt on your lot under current post-fire regulations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Insurance Scope Alignment</p>
                    <p className="text-sm text-white/80">How your insurance coverage translates into a realistic rebuild plan.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Permit & Approval Roadmap</p>
                    <p className="text-sm text-white/80">What approvals are required and how long each phase typically takes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Rebuild Timeline Expectations</p>
                    <p className="text-sm text-white/80">A realistic, experience-based timeline not best-case assumptions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Next Steps With No Pressure</p>
                    <p className="text-sm text-white/80">You'll leave knowing exactly what to do next, whether you move forward with us or not.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="#assessment-form"
                className="inline-block px-8 py-4 bg-primary text-white font-heading font-semibold rounded-xl hover:bg-primary-hover transition-all shadow-lg text-lg"
              >
                Get Your Free Fire Rebuild Assessment
              </a>
              <div className="flex flex-wrap gap-2 text-xs lg:text-sm text-white/90 items-center justify-center mt-4">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-primary" />
                  18+ Years of Excellence
                </span>
                <span className="text-white/40">|</span>
                <span>50+ Homes Built</span>
                <span className="text-white/40">|</span>
                <span>A+ BBB Rating</span>
                <span className="text-white/40">|</span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  5-Star Google Reviews
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* REBUILD PROCESS */}
        <section className="py-12 bg-navy-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-navy-dark/20 lg:bg-transparent" />
          <div className="relative max-w-6xl mx-auto px-[15px] sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                A Proven, Step-by-Step Fire Rebuild Process
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                We've built our process specifically to reduce stress and uncertainty after loss.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {[
                { number: '01', title: 'Initial Consultation & Site Review', description: 'Understanding your situation, reviewing the property, and assessing rebuild feasibility.' },
                { number: '02', title: 'Insurance & Scope Coordination', description: 'Working with you to align insurance coverage with realistic rebuild plans.' },
                { number: '03', title: 'Design & Planning', description: 'Creating detailed architectural plans that meet current codes and your needs.' },
                { number: '04', title: 'Permits & City Approvals', description: 'Managing all permit applications and navigating the approval process efficiently.' },
                { number: '05', title: 'Construction & Quality Control', description: 'Building with precision, regular updates, and rigorous quality checks at every phase.' },
                { number: '06', title: 'Final Walkthrough & Completion', description: 'Ensuring every detail is perfect before you move back home.' },
              ].map((step, index, array) => (
                <div key={step.number} className="relative">
                  <div className="bg-white rounded-2xl shadow-lg p-8 flex gap-6 items-start hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-primary rounded-xl flex items-center justify-center shadow-lg group-hover:bg-primary-hover group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <span className="font-heading text-3xl font-bold text-white">{step.number}</span>
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="font-heading text-2xl font-bold text-navy-dark mb-3 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < array.length - 1 && (
                    <div className="absolute left-10 top-[100px] w-0.5 h-6 bg-gradient-to-b from-primary to-transparent" />
                  )}
                </div>
              ))}
            </div>

            <p className="text-center text-white/90 mt-16 text-lg font-medium">
              Every step is planned, documented, and communicated clearly.
            </p>
          </div>
        </section>

        {/* CASE STUDY VIDEO */}
        <section className="py-12 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-navy-dark/30 lg:bg-navy-dark/10" />
          <div className="relative max-w-5xl mx-auto px-[15px] sm:px-6 lg:px-8">
            <div className="text-center mb-8 text-white">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">
                From Fire Damage to Home Again
              </h2>
              <p className="text-base md:text-lg text-white/90">
                See how a Pacific Palisades family rebuilt their home after a fire step by step, from insurance approval to move-in day.
              </p>
            </div>

            <div className="relative aspect-video bg-slate rounded-xl overflow-hidden shadow-2xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/73jCFHdyJSk?autoplay=1&mute=1&loop=1&playlist=73jCFHdyJSk&rel=0"
                title="Fire Rebuild Case Study"
                allow="autoplay; encrypted-media"
                allowFullScreen
                frameBorder="0"
              />
            </div>

            <div className="text-center mt-6">
              <a
                href="#assessment-form"
                className="inline-block px-6 lg:px-8 py-3 lg:py-4 bg-primary text-white font-heading font-semibold text-base lg:text-lg rounded-xl hover:bg-primary-hover transition-all shadow-lg"
              >
                Request Your Fire Rebuild Review
              </a>
              <div className="flex flex-wrap gap-2 text-xs lg:text-sm text-white/90 items-center justify-center mt-4">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-primary" />
                  18+ Years of Excellence
                </span>
                <span className="text-white/40">|</span>
                <span>50+ Homes Built</span>
                <span className="text-white/40">|</span>
                <span>A+ BBB Rating</span>
                <span className="text-white/40">|</span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  5-Star Google Reviews
                </span>
              </div>
            </div>
          </div>
        </section>

        <ReelsSection />

        {/* TESTIMONIALS */}
        <section className="py-12 bg-accent-gray">
          <div className="max-w-6xl mx-auto px-[15px] sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-dark mb-4">
                What Fire Rebuild Clients Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed italic">
                  "They didn't just talk about rebuilding—they listened to what I had lost and what I hoped for. The quality is beyond beautiful, but what touched me most is their heart. Now I feel something I thought I'd lost forever: hope."
                </p>
                <p className="font-semibold text-navy-dark">Gary & Kathy J.</p>
                <p className="text-sm text-gray-600">Pacific Palisades Fire Rebuild</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed italic">
                  "Ilan and his team are reliable. They know everything—from tile selection to waterproofing to soundproofing. They helped accelerate permits and inspections, and they're STILL there for any questions. You will not be disappointed."
                </p>
                <p className="font-semibold text-navy-dark">Tara P.</p>
                <p className="text-sm text-gray-600">Santa Monica, Custom Home Build</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed italic">
                  "Ilan and his team orchestrated a seamless experience, ensuring every element was handled efficiently. Their dedication, professionalism, and expertise were evident from start to finish. Choosing Drexel was the right decision."
                </p>
                <p className="font-semibold text-navy-dark">Michael K.</p>
                <p className="text-sm text-gray-600">Beverlywood, Custom Home Build</p>
              </div>
            </div>

            <div className="mt-8 text-center max-w-xl mx-auto space-y-3">
              <button
                onClick={() => document.getElementById('survey-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-primary text-white font-heading font-semibold text-base lg:text-lg py-3 lg:py-4 px-6 lg:px-8 hover:bg-primary-hover transition-all shadow-lg rounded-lg"
              >
                Get Your Free Fire Rebuild Assessment
              </button>
              <div className="flex flex-wrap gap-2 text-xs lg:text-sm text-gray-600 items-center justify-center">
                <span className="flex items-center gap-1">
                  <Award className="w-3 h-3 lg:w-4 lg:h-4 text-primary flex-shrink-0" />
                  <span className="break-words">18+ Years of Excellence</span>
                </span>
                <span className="text-gray-400">|</span>
                <span className="break-words">50+ Homes Built</span>
                <span className="text-gray-400">|</span>
                <span className="break-words">A+ BBB Rating</span>
                <span className="text-gray-400">|</span>
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                  <span className="break-words">5-Star Google Reviews</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FOUNDER SECTION */}
        <section className="py-12 bg-gradient-to-br from-navy-dark via-navy to-slate relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5" />
          <div className="absolute inset-0 bg-navy-dark/40 lg:bg-navy-dark/10" />

          <div className="relative max-w-6xl mx-auto px-[15px] sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Meet the Founder
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Leading Pacific Palisades fire rebuilds with expertise, integrity, and care
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
                  <img
                    src="/untitled_design.png"
                    alt="Ilan Douek - CEO & Founder"
                    className="relative max-w-xs sm:max-w-md lg:max-w-xl rounded-2xl shadow-2xl object-contain"
                  />
                </div>
              </div>

              <div className="text-white space-y-6">
                <div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                    Ilan Douek
                  </h3>
                  <p className="text-primary text-lg font-semibold mb-6">
                    CEO & Founder, Drexel Luxury Homes
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-lg text-white/90 leading-relaxed">
                    "After a fire, homeowners need clarity, not confusion. Our role is to guide, protect, and rebuild with integrity from the first conversation onward."
                  </p>

                  <p className="text-white/80 leading-relaxed">
                    With years of experience rebuilding luxury homes in Pacific Palisades, I've seen firsthand the challenges families face after fire loss. That's why we've built a specialized team and process focused on reducing stress, eliminating surprises, and delivering homes that exceed expectations.
                  </p>

                  <p className="text-white/80 leading-relaxed">
                    Our commitment is simple: treat every rebuild as if it were our own home, and guide every family with the same care we'd want for ourselves.
                  </p>
                </div>

                <div className="pt-4">
                  <img
                    src="/ilan-douek_signature.png"
                    alt="Ilan Douek Signature"
                    className="h-16 md:h-20 brightness-0 invert"
                  />
                </div>

                <div className="pt-6 border-t border-white/20">
                  <p className="text-sm text-white/70 mb-2">Licensed & Insured</p>
                  <div className="flex items-center gap-3 text-white/90">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-sm">Specialized in Pacific Palisades Fire Rebuilds</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center max-w-xl mx-auto space-y-3">
              <button
                onClick={() => document.getElementById('survey-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-primary text-white font-heading font-semibold text-base lg:text-lg py-3 lg:py-4 px-6 lg:px-8 hover:bg-primary-hover transition-all shadow-lg rounded-lg"
              >
                Get Your Free Fire Rebuild Assessment
              </button>
              <div className="flex flex-wrap gap-2 text-xs lg:text-sm text-white/90 items-center justify-center">
                <span className="flex items-center gap-1">
                  <Award className="w-3 h-3 lg:w-4 lg:h-4 text-primary flex-shrink-0" />
                  <span className="break-words">18+ Years of Excellence</span>
                </span>
                <span className="text-white/40">|</span>
                <span className="break-words">50+ Homes Built</span>
                <span className="text-white/40">|</span>
                <span className="break-words">A+ BBB Rating</span>
                <span className="text-white/40">|</span>
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                  <span className="break-words">5-Star Google Reviews</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-12 bg-accent-gray">
          <div className="max-w-4xl mx-auto px-[15px] sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-dark mb-4">
                Fire Rebuild FAQ
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'How long does a fire rebuild in Pacific Palisades take?',
                  answer: 'Most rebuilds take 18–24 months, depending on approvals, scope, and insurance coordination.'
                },
                {
                  question: 'Do you work directly with insurance providers?',
                  answer: 'We assist with documentation, estimates, and scope alignment to support the insurance process.'
                },
                {
                  question: 'Are fire safety upgrades required?',
                  answer: 'Yes. Post-fire codes often require updated safety standards, which we plan for from the start.'
                },
                {
                  question: 'Can you rebuild exactly what we had before?',
                  answer: "In some cases yes in others, updated regulations require modifications. We'll explain this clearly upfront."
                },
                {
                  question: 'What if we want to improve or upgrade the home during rebuild?',
                  answer: 'We help balance upgrades with insurance scope and budget expectations.'
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-navy-dark mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center max-w-xl mx-auto space-y-3">
              <button
                onClick={() => document.getElementById('survey-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-primary text-white font-heading font-semibold text-base lg:text-lg py-3 lg:py-4 px-6 lg:px-8 hover:bg-primary-hover transition-all shadow-lg rounded-lg"
              >
                Get Your Free Fire Rebuild Assessment
              </button>
              <div className="flex flex-wrap gap-2 text-xs lg:text-sm text-gray-600 items-center justify-center">
                <span className="flex items-center gap-1">
                  <Award className="w-3 h-3 lg:w-4 lg:h-4 text-primary flex-shrink-0" />
                  <span className="break-words">18+ Years of Excellence</span>
                </span>
                <span className="text-gray-400">|</span>
                <span className="break-words">50+ Homes Built</span>
                <span className="text-gray-400">|</span>
                <span className="break-words">A+ BBB Rating</span>
                <span className="text-gray-400">|</span>
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                  <span className="break-words">5-Star Google Reviews</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="assessment-form" className="py-12 bg-navy-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-navy-dark/20 lg:bg-transparent" />
          <div className="relative max-w-4xl mx-auto px-[15px] sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Rebuild With Confidence. Even After Loss
              </h2>
              <p className="text-xl text-white/90 mb-4">
                You don't need to have all the answers right now.
              </p>
              <p className="text-xl text-white/90 mb-8">
                You just need the right team to guide you forward.
              </p>
              <p className="text-lg text-white/80 mb-12">
                Start with a private, no-obligation fire rebuild assessment.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <SurveyForm />
              <div className="flex flex-wrap gap-3 text-sm text-white/90 items-center justify-center mt-8">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-primary" />
                  18+ Years of Excellence
                </span>
                <span className="text-white/40">|</span>
                <span>50+ Homes Built</span>
                <span className="text-white/40">|</span>
                <span>A+ BBB Rating</span>
                <span className="text-white/40">|</span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  5-Star Google Reviews
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-navy py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-navy-dark/20 lg:bg-transparent" />
          <div className="relative max-w-7xl mx-auto px-[15px] sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <div className="mb-4">
                  <img
                    src="https://drexelluxuryhomes.com/wp-content/uploads/2023/04/cropped-cropped-drexel-wwhite-logo.png"
                    alt="Drexel Luxury Homes"
                    className="h-12 w-auto"
                  />
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Specialized fire rebuild experts serving Pacific Palisades and the Westside with integrity and excellence.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-white font-semibold mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+13234542232"
                    className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors group"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="group-hover:underline">+1 (323) 454-2232</span>
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=5166+W+Pico+Blvd+Los+Angeles+CA+90019"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-white/80 hover:text-primary transition-colors group"
                  >
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="group-hover:underline">
                      5166 W Pico Blvd.<br />
                      Los Angeles, CA 90019
                    </span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-white font-semibold mb-4">Credentials</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Licensed & Insured</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>A+ BBB Rating</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>5-Star Google Reviews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>18+ Years Experience</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-white/20">
              <div className="text-center text-white/60 text-sm">
                <p className="mb-2">© 2025 Drexel Luxury Homes. All rights reserved.</p>
                <p>Licensed, Bonded, and Insured in California</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
