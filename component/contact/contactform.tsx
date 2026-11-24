"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";

const SITE_KEY = "6LcX8gcuAAAAAO6I3L_iUPBeVwwu_IGggPD9XsN-";

export default function ContactForm() {
  const [captchaError, setCaptchaError] = useState(false);

  // Page par navigate karke aane par checkbox render karne ke liye
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const grecaptcha = (window as any).grecaptcha;
    const el = document.querySelector(".g-recaptcha");

    if (grecaptcha?.render && el && el.innerHTML.trim() === "") {
      grecaptcha.render(el, { sitekey: SITE_KEY });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const grecaptcha = (window as any).grecaptcha;
    const response = grecaptcha?.getResponse?.() ?? "";

    if (!response) {
      e.preventDefault();
      setCaptchaError(true);
      return;
    }

    setCaptchaError(false);
  };

  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
        async
        defer
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        {/* Left Side: Contact Form */}
        <div className="bg-zinc-100 p-8 md:p-10 rounded-3xl border border-zinc-300 shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight mb-6">
              Send Your Query
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 text-zinc-600"
              method="POST"
              action="https://wembleysquickfix.com/form.php"
            >
              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3.5 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3.5 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone"
                    className="w-full px-4 py-3.5 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition"
                  />
                </div>
              </div>

              {/* Honeypot field */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ display: "none" }}
              />

              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  required
                  name="message"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3.5 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition resize-none"
                ></textarea>
              </div>

              {/* reCAPTCHA v2 "I'm not a robot" checkbox */}
              <div>
                <div
                  className="g-recaptcha"
                  data-sitekey={SITE_KEY}
                  data-callback="onCaptchaSuccess"
                ></div>
                {captchaError && (
                  <p className="text-red-600 text-sm mt-2">
                    Please tick the &quot;I&apos;m not a robot&quot; checkbox before submitting.
                  </p>
                )}
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
        <div className="w-full h-100 lg:h-auto min-h-120 rounded-3xl overflow-hidden shadow-sm border border-zinc-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56149.904997829006!2d76.92686735820313!3d28.408118700000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17a58f116d1d%3A0x35e8d7cbbe4f9642!2sWembley%20Laboratories%20Ltd!5e0!3m2!1sen!2sin!4v1788158612419!5m2!1sen!2sin"
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