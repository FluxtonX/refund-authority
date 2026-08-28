'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    phone: '',
    priority: 'Medium',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        
        {/* Page Hero Header */}
        <PageHeader
          title="Get in Touch with Us"
          subtitle="Should you require assistance or have inquiries regarding cryptocurrency fraud evaluation, reach out through our contact channels below."
          currentPage="Contact Us"
        />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Contact Details Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card 1: Phone */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-[#00509E] text-[#FFCC00] rounded-2xl w-fit">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#101828]">Phone Number</h3>
                  <p className="text-xs text-[#475467]">Available for inquiries and case evaluation support.</p>
                </div>
                <div className="pt-4 border-t border-gray-200/80">
                  <a href="tel:14378862010" className="text-base font-bold text-[#00509E] hover:underline">
                    +1 (437) 886-2010
                  </a>
                </div>
              </div>

              {/* Card 2: Email */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-[#00509E] text-[#FFCC00] rounded-2xl w-fit">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#101828]">Email Address</h3>
                  <p className="text-xs text-[#475467]">Send documentation or case details directly to our team.</p>
                </div>
                <div className="pt-4 border-t border-gray-200/80">
                  <a href="mailto:support@refundsauthority.com" className="text-base font-bold text-[#00509E] hover:underline">
                    support@refundsauthority.com
                  </a>
                </div>
              </div>

              {/* Card 3: Office Location */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-[#101828] text-[#FFCC00] rounded-2xl w-fit">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#101828]">Office Location</h3>
                  <p className="text-xs text-[#475467]">Main Canadian administrative headquarters.</p>
                </div>
                <div className="pt-4 border-t border-gray-200/80 text-xs font-semibold text-[#101828]">
                  800 Rue du Square-Victoria, Montréal, QC Canada
                </div>
              </div>

            </div>

            {/* Interactive Form Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-slate-50/50 p-8 sm:p-12 rounded-3xl border border-gray-200">
              
              <div className="lg:col-span-5 space-y-6">
                <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-blue-100/70 text-[#00509E] rounded-full">
                  Case Submission
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#101828]">
                  Need Further Information?
                </h2>
                <p className="text-sm text-[#324A6D] leading-relaxed">
                  Fill out the inquiry form to help us understand your situation. All information submitted is held under strict confidentiality.
                </p>

                <div className="space-y-3 pt-4 border-t border-gray-200 text-xs text-[#475467]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00509E]" />
                    <span>No obligation initial case evaluation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00509E]" />
                    <span>Secure encrypted message transmission</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00509E]" />
                    <span>Dedicated forensic advisor response</span>
                  </div>
                </div>
              </div>

              {/* Form Container */}
              <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="p-4 bg-emerald-100 text-emerald-800 rounded-full w-fit mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-[#101828]">Inquiry Submitted Successfully</h3>
                    <p className="text-xs text-[#475467] max-w-md mx-auto">
                      Thank you for contacting Refund Authority. A case representative will review your message and reach out shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-[#00509E] text-white text-xs font-semibold hover:bg-[#003F7E]"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-[#101828] mb-2">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#00509E] text-sm outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#101828] mb-2">Your Surname *</label>
                        <input
                          type="text"
                          required
                          placeholder="Doe"
                          value={formData.surname}
                          onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#00509E] text-sm outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-[#101828] mb-2">Your Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#00509E] text-sm outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#101828] mb-2">Your Phone *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#00509E] text-sm outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#101828] mb-2">Case Priority *</label>
                      <select
                        value={formData.priority}
                        onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#00509E] text-sm outline-none bg-white"
                      >
                        <option value="Low">Low — General Guidance Inquiry</option>
                        <option value="Medium">Medium — Standard Incident Evaluation</option>
                        <option value="High">High — Active Scam Investigation</option>
                        <option value="Urgent">Urgent — Immediate Fund Freeze Attempt</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#101828] mb-2">Your Message *</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Please describe the nature of your inquiry, platform involved, or incident summary..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#00509E] text-sm outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#00509E] text-white text-sm font-bold hover:bg-[#003F7E] transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-[#FFCC00]" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>

            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
