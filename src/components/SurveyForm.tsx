import { useState, type ChangeEvent, type FormEvent } from 'react';
import {
  CheckCircle2,
  DollarSign,
  Home,
  Calendar,
  FileCheck,
  MapPin,
  User,
  Mail,
  Phone,
  MessageSquare,
  Hammer,
  Building2,
  Clock,
} from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FormData {
  estimated_budget: string;
  project_type: string[];
  planned_start_timeline: string;
  has_architectural_plans: string;
  project_address: string;
  project_details: string;
  full_name: string;
  email: string;
  phone: string;
}

export default function SurveyForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'in' | 'out'>('in');

  const [formData, setFormData] = useState<FormData>({
    estimated_budget: '',
    project_type: [],
    planned_start_timeline: '',
    has_architectural_plans: '',
    project_address: '',
    project_details: '',
    full_name: '',
    email: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const totalSteps = 9;

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBudgetChange = (budget: string) => {
    setFormData((prev) => ({ ...prev, estimated_budget: budget }));
  };

  const handleProjectTypeChange = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      project_type: prev.project_type.includes(type)
        ? prev.project_type.filter((t) => t !== type)
        : [...prev.project_type, type],
    }));
  };

  const handleTimelineChange = (timeline: string) => {
    setFormData((prev) => ({ ...prev, planned_start_timeline: timeline }));
  };

  const handlePlansChange = (plans: string) => {
    setFormData((prev) => ({ ...prev, has_architectural_plans: plans }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.estimated_budget !== '';
      case 1:
        return formData.project_type.length > 0;
      case 2:
        return formData.planned_start_timeline !== '';
      case 3:
        return formData.has_architectural_plans !== '';
      case 4:
        return formData.project_address.trim() !== '';
      case 5:
        return true;
      case 6:
        return formData.full_name.trim() !== '';
      case 7:
        return formData.email.trim() !== '';
      case 8:
        return formData.phone.trim() !== '';
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (!canProceed()) {
      setError('Please complete this step before continuing');
      return;
    }
    setError('');
    setSlideDirection('out');
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
      setSlideDirection('in');
      setIsAnimating(false);
    }, 300);
  };

  const handleBack = () => {
    setError('');
    setSlideDirection('out');
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentStep((prev) => prev - 1);
      setSlideDirection('in');
      setIsAnimating(false);
    }, 300);
  };

  const handleSubmit = async () => {
    console.log('=== FORM SUBMISSION STARTED ===');
    console.log('Form data:', formData);

    if (!canProceed()) {
      console.log('Cannot proceed - validation failed');
      setError('Please complete all required fields');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // 1) Insert u Supabase
      console.log('Inserting data into Supabase...');
      const { data: insertedData, error: submitError } = await supabase
        .from('survey_responses')
        .insert([formData])
        .select()
        .single();

      console.log('Supabase response:', { insertedData, submitError });

      if (submitError) {
        console.error('Database error:', submitError);
        throw submitError;
      }

      // 2) Call Edge Function (email)
      const edgeFunctionUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send_survey_notification`;

      console.log('Calling edge function:', edgeFunctionUrl);
      console.log('Sending payload:', insertedData);

      const emailResponse = await fetch(edgeFunctionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          apikey: `${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ record: insertedData }),
      });

      const responseText = await emailResponse.text();
      console.log('Edge status:', emailResponse.status);
      console.log('Edge response:', responseText);

      if (!emailResponse.ok) {
        throw new Error(`Edge function failed: ${responseText}`);
      }

      console.log('✅ Email notification sent successfully!');
      setIsSubmitted(true);
    } catch (err) {
      console.error('❌ Error submitting survey:', err);
      setError('Failed to submit survey. Please try again.');
    } finally {
      setIsSubmitting(false);
      console.log('=== FORM SUBMISSION COMPLETED ===');
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 text-center">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 md:w-14 md:h-14 text-white" />
          </div>
          <h3 className="font-heading text-3xl md:text-4xl font-light text-gray-800 mb-4 break-words">
            Thank You!
          </h3>
          <p className="text-lg md:text-xl text-gray-600 mb-8 break-words">
            We've received your information and will contact you within 24 hours
            to discuss your rebuilding project.
          </p>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-700 break-words">
              Our team is excited to help bring your vision to life in Pacific
              Palisades.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const renderStepIndicators = () => (
    <div className="flex items-center justify-center mb-6">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index < currentStep
                ? 'bg-primary'
                : index === currentStep
                ? 'bg-primary scale-150'
                : 'bg-gray-300'
            }`}
          />
          {index < totalSteps - 1 && (
            <div
              className={`w-10 h-0.5 transition-colors duration-300 ${
                index < currentStep ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );

  const renderStep = () => {
    const stepClass = `${
      slideDirection === 'in' ? 'slide-in-right' : 'slide-out-left'
    } ${isAnimating ? '' : ''}`;

    switch (currentStep) {
      case 0:
        return (
          <div key="step-0" className={stepClass}>
            <h3 className="font-heading text-lg md:text-xl font-light text-gray-700 mb-3 text-center break-words">
              What's Your Project Budget?
            </h3>
            <div className="flex items-center justify-center gap-2 text-gray-500 mb-6">
              <Clock className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="text-xs md:text-sm break-words">
                This should take less than 3 minutes
              </span>
            </div>

            <div className="space-y-3 mx-auto">
              {[
                { value: '$2M–$3M', icon: DollarSign },
                { value: '$3M–$4M', icon: DollarSign },
                { value: '$4M–$5M', icon: DollarSign },
                { value: '$5M–$7M', icon: DollarSign },
                { value: '$7M–$10M', icon: DollarSign },
                { value: '$10M+', icon: DollarSign },
              ].map(({ value, icon: Icon }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => handleBudgetChange(value)}
                  className={`w-full p-3.5 md:p-4 rounded-xl text-left transition-all ${
                    formData.estimated_budget === value
                      ? 'bg-gray-100 border-2 border-primary shadow-sm'
                      : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        formData.estimated_budget === value
                          ? 'bg-primary'
                          : 'bg-white'
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 md:w-5 md:h-5 ${
                          formData.estimated_budget === value
                            ? 'text-white'
                            : 'text-gray-600'
                        }`}
                      />
                    </div>
                    <span className="text-sm md:text-base font-medium text-gray-800 break-words flex-1 min-w-0">
                      {value}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 1:
        return (
          <div key="step-1" className={stepClass}>
            <h3 className="font-heading text-lg md:text-xl font-light text-gray-700 mb-3 text-center break-words">
              What Type of Project?
            </h3>
            <div className="flex items-center justify-center gap-2 text-gray-500 mb-6">
              <Clock className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="text-xs md:text-sm break-words">
                Select all that apply
              </span>
            </div>

            <div className="space-y-3 mx-auto">
              {[
                { label: 'Luxury Custom Home – Fire Rebuild', icon: Home },
                { label: 'Luxury Custom Home – Ground-Up New Build', icon: Building2 },
                { label: 'Luxury Custom Home – Ground-Up New Build With Basement', icon: Building2 },
                { label: 'Full Renovation', icon: Hammer },
              ].map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => handleProjectTypeChange(label)}
                  className={`w-full p-3.5 md:p-4 rounded-xl text-left transition-all ${
                    formData.project_type.includes(label)
                      ? 'bg-gray-100 border-2 border-primary shadow-sm'
                      : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        formData.project_type.includes(label) ? 'bg-primary' : 'bg-white'
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 md:w-5 md:h-5 ${
                          formData.project_type.includes(label) ? 'text-white' : 'text-gray-600'
                        }`}
                      />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-800 break-words flex-1 min-w-0">
                      {label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div key="step-2" className={stepClass}>
            <h3 className="font-heading text-lg md:text-xl font-light text-gray-700 mb-3 text-center break-words">
              When Do You Want to Start?
            </h3>
            <div className="flex items-center justify-center gap-2 text-gray-500 mb-6">
              <Clock className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="text-xs md:text-sm break-words">
                Select your preferred timeline
              </span>
            </div>

            <div className="space-y-3 mx-auto">
              {[
                { value: 'ASAP', label: 'As Soon As Possible', icon: Calendar },
                { value: '1–3 months', label: '1–3 Months', icon: Calendar },
                { value: '3–6 months', label: '3–6 Months', icon: Calendar },
                { value: '6–12 months', label: '6–12 Months', icon: Calendar },
                { value: '12+ months', label: '12+ Months', icon: Calendar },
              ].map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => handleTimelineChange(value)}
                  className={`w-full p-3.5 md:p-4 rounded-xl text-left transition-all ${
                    formData.planned_start_timeline === value
                      ? 'bg-gray-100 border-2 border-primary shadow-sm'
                      : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        formData.planned_start_timeline === value ? 'bg-primary' : 'bg-white'
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 md:w-5 md:h-5 ${
                          formData.planned_start_timeline === value ? 'text-white' : 'text-gray-600'
                        }`}
                      />
                    </div>
                    <span className="text-sm md:text-base font-medium text-gray-800 break-words flex-1 min-w-0">
                      {label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div key="step-3" className={stepClass}>
            <h3 className="font-heading text-lg md:text-xl font-light text-gray-700 mb-3 text-center break-words">
              Do You Have Architectural Plans?
            </h3>
            <div className="flex items-center justify-center gap-2 text-gray-500 mb-6">
              <Clock className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="text-xs md:text-sm break-words">
                Let us know your current status
              </span>
            </div>

            <div className="space-y-3 mx-auto">
              {[
                { value: 'Yes, plans are complete', icon: FileCheck },
                { value: 'In progress with an architect', icon: FileCheck },
                { value: 'Not yet, I need an architect', icon: FileCheck },
                { value: 'Not sure', icon: FileCheck },
              ].map(({ value, icon: Icon }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => handlePlansChange(value)}
                  className={`w-full p-3.5 md:p-4 rounded-xl text-left transition-all ${
                    formData.has_architectural_plans === value
                      ? 'bg-gray-100 border-2 border-primary shadow-sm'
                      : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        formData.has_architectural_plans === value ? 'bg-primary' : 'bg-white'
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 md:w-5 md:h-5 ${
                          formData.has_architectural_plans === value ? 'text-white' : 'text-gray-600'
                        }`}
                      />
                    </div>
                    <span className="text-sm md:text-base font-medium text-gray-800 break-words flex-1 min-w-0">
                      {value}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div key="step-4" className={stepClass}>
            <h3 className="font-heading text-lg md:text-xl font-light text-gray-700 mb-3 text-center break-words">
              Where's Your Property Located?
            </h3>
            <div className="flex items-center justify-center gap-2 text-gray-500 mb-6">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="text-xs md:text-sm break-words">
                Enter your project address
              </span>
            </div>

            <div className="mx-auto">
              <input
                type="text"
                name="project_address"
                value={formData.project_address}
                onChange={handleInputChange}
                className="w-full px-4 py-3.5 md:py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:bg-white transition-all text-sm md:text-base text-gray-800"
                placeholder="123 Pacific Palisades Drive"
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div key="step-5" className={stepClass}>
            <h3 className="font-heading text-lg md:text-xl font-light text-gray-700 mb-3 text-center break-words">
              Tell Us About Your Vision
            </h3>
            <div className="flex items-center justify-center gap-2 text-gray-500 mb-6">
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="text-xs md:text-sm">
                Optional - Share any details or questions
              </span>
            </div>

            <div className="mx-auto">
              <textarea
                name="project_details"
                value={formData.project_details}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3.5 md:py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:bg-white transition-all resize-none text-sm md:text-base text-gray-800"
                placeholder="Describe your vision, special features you want, or any questions..."
              />
            </div>
          </div>
        );

      case 6:
        return (
          <div key="step-6" className={stepClass}>
            <h3 className="font-heading text-lg md:text-xl font-light text-gray-700 mb-3 text-center break-words">
              What's Your Name?
            </h3>
            <div className="flex items-center justify-center gap-2 text-gray-500 mb-6">
              <User className="w-3.5 h-3.5" />
              <span className="text-xs md:text-sm">
                Let us know who we'll be working with
              </span>
            </div>

            <div className="mx-auto">
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleInputChange}
                className="w-full px-4 py-3.5 md:py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:bg-white transition-all text-sm md:text-base text-gray-800"
                placeholder="John Doe"
              />
            </div>
          </div>
        );

      case 7:
        return (
          <div key="step-7" className={stepClass}>
            <h3 className="font-heading text-lg md:text-xl font-light text-gray-700 mb-3 text-center break-words">
              What's Your Email?
            </h3>
            <div className="flex items-center justify-center gap-2 text-gray-500 mb-6">
              <Mail className="w-3.5 h-3.5" />
              <span className="text-xs md:text-sm">
                We'll send you updates and project details
              </span>
            </div>

            <div className="mx-auto">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3.5 md:py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:bg-white transition-all text-sm md:text-base text-gray-800"
                placeholder="john@example.com"
              />
            </div>
          </div>
        );

      case 8:
        return (
          <div key="step-8" className={stepClass}>
            <h3 className="font-heading text-lg md:text-xl font-light text-gray-700 mb-3 text-center break-words">
              Best Number to Reach You?
            </h3>
            <div className="flex items-center justify-center gap-2 text-gray-500 mb-6">
              <Phone className="w-3.5 h-3.5" />
              <span className="text-xs md:text-sm">
                We'll call within 24 hours for a consultation
              </span>
            </div>

            <div className="mx-auto">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3.5 md:py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:bg-white transition-all text-sm md:text-base text-gray-800"
                placeholder="(555) 555-5555"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
        <div className="text-center mb-6">
          <h2 className="font-heading text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            Get Your Free Project Assessment
          </h2>
          <p className="text-sm text-gray-600">
            Reserve your consultation (worth $5,000) & see if your project qualifies
          </p>
        </div>

        {renderStepIndicators()}

        <div className="min-h-[320px] md:min-h-[340px] flex flex-col">
          <div className="flex-1">{renderStep()}</div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 mt-6 text-center text-sm md:text-base">
              {error}
            </div>
          )}

          <div className="mt-8">
            {currentStep < totalSteps - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={!canProceed()}
                className="w-full px-6 py-3.5 md:py-4 bg-primary text-white text-sm md:text-base font-semibold rounded-xl hover:bg-primary-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                Continue
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                className="w-full px-6 py-3.5 md:py-4 bg-primary text-white text-sm md:text-base font-semibold rounded-xl hover:bg-primary-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            )}

            {currentStep > 0 && (
              <button
                type="button"
                onClick={handleBack}
                className="w-full mt-3 px-6 py-2.5 text-gray-500 text-xs md:text-sm hover:text-gray-700 transition-colors"
              >
                Go Back
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
