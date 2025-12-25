"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center lg:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-6"
          >
            Connect with the <br />
            <span className="text-emerald-500 underline decoration-emerald-200 underline-offset-8">Future.</span>
          </motion.h1>
          <p className="text-slate-500 text-lg max-w-xl leading-relaxed">
            Ready to implement a circular ecosystem or interested in our organic produce? 
            Our team is here to help you bridge the gap between waste and energy.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-1 space-y-6">
            <ContactInfoCard 
              icon={<Mail className="text-emerald-500" />}
              title="Email Us"
              value="hello@ecocyclefarm.com"
              sub="Direct inquiries within 24hrs"
            />
            <ContactInfoCard 
              icon={<Phone className="text-sky-500" />}
              title="Call Us"
              value="+1 (555) 000-0000"
              sub="Mon-Fri, 9am - 5pm EST"
            />
            <ContactInfoCard 
              icon={<MapPin className="text-amber-500" />}
              title="Visit the Farm"
              value="Green Belt Way, Agri-District"
              sub="Tours available by appointment"
            />
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-2">
            <Card className="p-10 !bg-white border-none shadow-2xl shadow-slate-200/60">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">Message Received!</h3>
                  <p className="text-slate-500">The cycle has begun. We'll get back to you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-emerald-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Your Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:bg-white transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Subject</label>
                    <select className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:bg-white transition-all">
                      <option>Investment Inquiry</option>
                      <option>Product Purchase</option>
                      <option>Farm Tour</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="How can we help grow your vision?"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:bg-white transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-emerald-600 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {isSubmitting ? "Processing..." : (
                      <>Send Message <Send size={20} /></>
                    )}
                  </button>
                </form>
              )}
            </Card>
          </div>

        </div>
      </div>
    </main>
  );
}

// Sub-component for contact details
function ContactInfoCard({ icon, title, value, sub }: { icon: React.ReactNode, title: string, value: string, sub: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="p-6 bg-white/50 backdrop-blur-md rounded-3xl border border-white shadow-lg shadow-slate-100/50 flex items-start gap-4"
    >
      <div className="p-3 bg-white rounded-2xl shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{title}</h4>
        <p className="text-lg font-bold text-slate-900">{value}</p>
        <p className="text-sm text-slate-500">{sub}</p>
      </div>
    </motion.div>
  );
}