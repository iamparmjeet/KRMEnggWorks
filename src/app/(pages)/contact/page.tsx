'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  mobile: z.string().regex(/^[0-9\s\-\+\(\)]+$/, 'Please enter a valid mobile number'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmitted(true)
      reset()
      setTimeout(() => setSubmitted(false), 3000)
    } catch (error) {
      console.error('Form submission error:', error)
    }
  }

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full py-12 bg-slate-950 text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Contact Us
          </h1>
          <p className="text-yellow-400 font-semibold">
            Contact with the Top Industry Expert
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left - Form */}
            <div className="lg:col-span-2">
              <div>
                <p className="text-slate-600 text-sm font-semibold mb-2">How can we help?</p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                  Get in Touch with Our Company
                </h2>
                <p className="text-slate-700 mb-8 text-sm leading-relaxed">
                  Have questions or want to chat?<br />
                  Fill out our contact form, and we'll put you in touch with the right people.
                </p>
              </div>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-400 rounded-lg p-8 text-center">
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="font-bold text-xl text-green-900 mb-2">Message Sent!</h3>
                  <p className="text-green-800">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="text-slate-900 font-semibold text-sm block mb-1">
                      Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      {...register('name')}
                      className="w-full px-4 py-2 border border-slate-300 rounded text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    {errors.name && (
                      <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-slate-900 font-semibold text-sm block mb-1">
                      Mobile <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Your Mobile Number"
                      {...register('mobile')}
                      className="w-full px-4 py-2 border border-slate-300 rounded text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    {errors.mobile && (
                      <p className="text-red-600 text-xs mt-1">{errors.mobile.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-slate-900 font-semibold text-sm block mb-1">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      {...register('email')}
                      className="w-full px-4 py-2 border border-slate-300 rounded text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-slate-900 font-semibold text-sm block mb-1">
                      Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      placeholder="Message"
                      rows={5}
                      {...register('message')}
                      className="w-full px-4 py-2 border border-slate-300 rounded text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-600 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-2 rounded transition-colors"
                  >
                    Send
                  </button>
                </form>
              )}
            </div>

            {/* Right - Contact Info */}
            <div className="lg:col-span-1 space-y-4">
              {/* Name Card - Yellow */}
              <div className="bg-yellow-400 p-6 rounded-lg text-slate-900">
                <div className="text-5xl mb-3">😊</div>
                <h3 className="font-bold text-lg mb-1">Mustafa Ansari</h3>
                <p className="text-sm font-semibold">Head of Sales</p>
              </div>

              {/* Contact Info Card - Dark */}
              <div className="bg-slate-900 text-white p-6 rounded-lg space-y-4">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Address</h4>
                    <p className="text-sm text-gray-300">Deosth Deoria, Deoria, Uttar Pradesh</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-sm text-gray-300">info@krmenggworks.com</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-sm text-gray-300">krmenggworks@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Mobile</h4>
                    <p className="text-sm text-gray-300">+91 86045 07464</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Mobile</h4>
                    <p className="text-sm text-gray-300">+91 8600 33282</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 bg-white">
        <div className="w-full h-96 bg-gradient-to-br from-emerald-200 to-emerald-300 flex items-center justify-center">
          <div className="text-center">
            <div className="text-5xl mb-3">🗺️</div>
            <p className="text-emerald-800 font-semibold">Google Map Embedded Here</p>
            <p className="text-sm text-emerald-700">Deosth Deoria, Deoria, Uttar Pradesh</p>
          </div>
        </div>
      </section>
    </div>
  )
}
