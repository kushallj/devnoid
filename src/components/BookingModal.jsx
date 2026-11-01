import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { useBooking } from '../context/BookingContext.jsx';
import { siteContent } from '../data/siteContent.js';
import Button from './Button.jsx';

export default function BookingModal() {
  const { isOpen, selectedPlan, closeBooking, openBooking } = useBooking();
  const { calendly } = siteContent;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: '',
    plan: selectedPlan || 'Starter Plan',
  });

  const [submitted, setSubmitted] = useState(false);
  const [showCalendlyEmbed, setShowCalendlyEmbed] = useState(false);
  const [errors, setErrors] = useState({});

  // Sync plan when modal opens with a specific plan
  useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({ ...prev, plan: selectedPlan }));
    }
  }, [selectedPlan]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeBooking();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeBooking]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Please provide a brief description of your project';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Save submission locally so inquiry is preserved
    try {
      const existing = JSON.parse(localStorage.getItem('devnoid_inquiries') || '[]');
      existing.push({
        ...formData,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('devnoid_inquiries', JSON.stringify(existing));
    } catch {
      // Ignore storage errors in restricted contexts
    }

    setSubmitted(true);
    setShowCalendlyEmbed(true);
  };

  // Build Calendly URL with prefilled candidate information
  const fullName = `${formData.firstName} ${formData.lastName}`.trim();
  const encodedName = encodeURIComponent(fullName);
  const encodedEmail = encodeURIComponent(formData.email);
  const encodedNotes = encodeURIComponent(`[${formData.plan}] ${formData.description}`);

  // Base Calendly URL for devnoid
  const calendlyBase = calendly?.baseUrl || 'https://calendly.com/devnoid';
  const calendlyPrefillUrl = `${calendlyBase}?name=${encodedName}&email=${encodedEmail}&a1=${encodedNotes}`;

  const handleReset = () => {
    setSubmitted(false);
    setShowCalendlyEmbed(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={closeBooking}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-[#FBF5EF] rounded-[16px] shadow-2xl border border-[#A9430A]/30 overflow-hidden z-10 transition-all max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="bg-[#A9430A] text-white px-6 py-4.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-5 h-5 text-[#FBF5EF]" />
            <h2 id="booking-title" className="font-display text-2xl sm:text-3xl tracking-wide uppercase pt-0.5">
              {submitted ? 'Schedule Your Discovery Call' : 'Project Inquiry & Discovery Call'}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeBooking}
            className="p-1 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {!submitted ? (
            /* STEP 1: Inquiry Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Plan Selection Toggle */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#33251D] mb-2">
                  Select Your Offering
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Starter Plan', 'Growth Plan'].map((plan) => {
                    const isSelected = formData.plan === plan;
                    return (
                      <button
                        key={plan}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, plan }))}
                        className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#A9430A] text-white border-[#A9430A] shadow-sm'
                            : 'bg-white text-[#33251D] border-[#E5CDBB] hover:border-[#A9430A]/50'
                        }`}
                      >
                        <div className="font-display text-lg tracking-wide uppercase">
                          {plan}
                        </div>
                        <div className={`text-xs mt-0.5 ${isSelected ? 'text-[#FBF5EF]/80' : 'text-[#6B5646]'}`}>
                          {plan === 'Starter Plan' ? 'Rapid MVP Sprint · 2-3 Weeks' : 'Dedicated Pod · Continuous Scale'}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name Fields Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-medium text-[#33251D] mb-1">
                    First Name <span className="text-[#A9430A]">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="e.g. Alex"
                    className={`w-full px-3.5 py-2.5 rounded-lg border bg-white text-sm text-[#33251D] focus:outline-none focus:ring-2 focus:ring-[#A9430A] ${
                      errors.firstName ? 'border-red-500' : 'border-[#E5CDBB]'
                    }`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-xs font-medium text-[#33251D] mb-1">
                    Last Name <span className="text-[#A9430A]">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="e.g. Rivera"
                    className={`w-full px-3.5 py-2.5 rounded-lg border bg-white text-sm text-[#33251D] focus:outline-none focus:ring-2 focus:ring-[#A9430A] ${
                      errors.lastName ? 'border-red-500' : 'border-[#E5CDBB]'
                    }`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-[#33251D] mb-1">
                    Email ID <span className="text-[#A9430A]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg border bg-white text-sm text-[#33251D] focus:outline-none focus:ring-2 focus:ring-[#A9430A] ${
                      errors.email ? 'border-red-500' : 'border-[#E5CDBB]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-[#33251D] mb-1">
                    Mobile Number <span className="text-[#6B5646] font-normal">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5CDBB] bg-white text-sm text-[#33251D] focus:outline-none focus:ring-2 focus:ring-[#A9430A]"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-xs font-medium text-[#33251D] mb-1">
                  Project Description <span className="text-[#A9430A]">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell us a little bit about what you're building, key requirements, target timeline, or tech stack..."
                  className={`w-full px-3.5 py-2.5 rounded-lg border bg-white text-sm text-[#33251D] focus:outline-none focus:ring-2 focus:ring-[#A9430A] resize-none ${
                    errors.description ? 'border-red-500' : 'border-[#E5CDBB]'
                  }`}
                />
                {errors.description && (
                  <p className="mt-1 text-xs text-red-600">{errors.description}</p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2 uppercase tracking-wider font-semibold shadow-md"
                >
                  <span>Submit & Continue to Calendly</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <p className="text-center text-xs text-[#6B5646] mt-2">
                  After submitting, you'll be connected directly to book a call with Devnoid.
                </p>
              </div>
            </form>
          ) : (
            /* STEP 2: Submission Success & Calendly Booking */
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Success Notification Box */}
              <div className="p-4 rounded-xl bg-[#F5E6DA] border border-[#A9430A]/30 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#A9430A] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm text-[#33251D]">
                    Inquiry Received for {formData.plan}!
                  </h3>
                  <p className="text-xs text-[#6B5646] mt-0.5">
                    Thank you, {formData.firstName}. We have saved your project details. Now select a convenient time on Calendly to discuss your scope.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={calendlyPrefillUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3 px-5 rounded-lg bg-[#A9430A] hover:bg-[#84320A] text-white text-sm font-semibold uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Call with Calendly</span>
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto py-3 px-4 rounded-lg border border-[#E5CDBB] bg-white hover:bg-[#F5E6DA] text-xs font-medium text-[#6B5646] transition-colors"
                >
                  Edit Inquiry Details
                </button>
              </div>

              {/* Embedded Calendly Schedule View */}
              {showCalendlyEmbed && (
                <div className="mt-4 border border-[#E5CDBB] rounded-xl overflow-hidden bg-white shadow-inner">
                  <div className="px-4 py-2 bg-[#F5E6DA] border-b border-[#E5CDBB] flex items-center justify-between text-xs text-[#6B5646]">
                    <span className="font-medium text-[#33251D]">
                      Calendly Schedule · devnoid
                    </span>
                    <span className="text-[11px] text-[#A9430A] font-semibold">
                      Live Scheduling
                    </span>
                  </div>
                  <iframe
                    src={calendlyPrefillUrl}
                    width="100%"
                    height="540"
                    title="Devnoid Calendly Scheduling"
                    className="w-full border-0"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
