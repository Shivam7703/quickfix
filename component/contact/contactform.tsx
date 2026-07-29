"use client";

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Yahan aap apni form submission logic (jaise API call) add kar sakte hain
    alert("Message sent successfully!");
  };

  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        
        {/* Left Side: Contact Form */}
        <div className="bg-zinc-100 p-8 md:p-10 rounded-3xl border border-zinc-300 shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight mb-6">
              Send Your Query
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 text-zinc-600">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3.5 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3.5 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="Enter your phone"
                    className="w-full px-4 py-3.5 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1">Your Message</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3.5 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl shadow-md transition-all duration-300 mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Right Side: Google Map Iframe */}
        <div className="w-full h-[400px] lg:h-auto min-h-[480px] rounded-3xl overflow-hidden shadow-sm border border-zinc-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.412027028801!2d76.9957818!3d28.4369934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17ec35acb1ff%3A0x1305ca793225b728!2s527%2C%20Pace%20City%20II%2C%20Sector%2037%2C%20Gurugram%2C%20Haryana%20122004!5e0!3m2!1sen!2sin!4v1784703999725!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full h-full"
          ></iframe>
        </div>

      </div>
    </section>
  );
}