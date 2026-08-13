"use client";
import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import Image from "next/image";
import { logo } from '@/assets';

const WHATSAPP_NUMBER = '+918527499493';
const WHATSAPP_MESSAGE = "Hi QuickFix! I'd like to know more about becoming a vendor or product enquiry.";

export default function Popups() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const t = setTimeout(() => setIsFormOpen(true), 2000);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsFormOpen(false);
      setForm({ name: '', email: '', phone: '', message: '' });
    }, 2200);
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="relative">
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-2 sm:w-12 sm:h-12 w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#1ebd5a] text-white flex items-center justify-center shadow-lg hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-all z-[60]"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Side Trigger Tab */}
      <button
        onClick={() => setIsFormOpen(true)}
        className="fixed top-1/2 -right-25 -translate-y-1/2 -rotate-90 origin-center bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-t-md shadow-md z-55 transition-all"
      >
        Become A Vendor / Enquiry
      </button>

      {/* Modal Overlay */}
      {isFormOpen && (
        <div
          onClick={() => setIsFormOpen(false)}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-70 p-4"
        >
          <div
            className="bg-white w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl relative flex flex-col border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-zinc-100 text-zinc-900 p-6 flex justify-between items-center border-b-4 border-red-600">
              <div className="flex items-center gap-3">
                <Image src={logo} alt="QuickFix Logo" className="w-24 sm:w-28 h-auto object-contain" />
                <div>
                  <h2 className="text-lg sm:text-xl font-bold tracking-tight ">Vendor & Business Enquiry</h2>
                  <p className="text-xs text-slate-700">Partner with India's trusted adhesive brand</p>
                </div>
              </div>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-slate-800 hover:text-red-700 transition-colors p-1"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8 bg-slate-50/50">
              {submitted ? (
                <div className="py-8 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">Enquiry Submitted!</h3>
                  <p className="text-sm text-slate-600">Thank you for reaching out. Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 ">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        required
                        onChange={handleChange}
                        className="text-sm w-full px-3.5 py-2.5 rounded-md border border-slate-300 bg-white outline-none focus:border-red-400 text-zinc-700 placeholder:text-500 transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Contact No */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Contact No. <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        required
                        onChange={handleChange}
                        className="text-sm w-full px-3.5 py-2.5 rounded-md border border-slate-300 bg-white outline-none focus:border-red-400 text-zinc-700 placeholder:text-500 transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      required
                      onChange={handleChange}
                      className="text-sm w-full px-3.5 py-2.5 rounded-md border border-slate-300 bg-white outline-none focus:border-red-400 text-zinc-700 placeholder:text-500 transition-all"
                      placeholder="name@company.com"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Message / Requirement
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      rows={3}
                      onChange={handleChange}
                      className="text-sm w-full px-3.5 py-2.5 rounded-md border border-slate-300 bg-white outline-none focus:border-red-400 text-zinc-700 placeholder:text-500 transition-all resize-none"
                      placeholder="Specify your dealership, vendor, or product inquiry details..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full mt-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-md transition-colors shadow-md text-sm uppercase tracking-wider"
                  >
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}