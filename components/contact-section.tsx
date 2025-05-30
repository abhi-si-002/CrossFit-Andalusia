"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to start your CrossFit journey or learn more about our programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-red-600 mt-1 mr-4" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                  <a href="tel:+13344229348" className="text-gray-600 hover:text-red-600">
                    +13344229348
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-red-600 mt-1 mr-4" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Andalusia, AL</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-red-600 mt-1 mr-4" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 5:30 AM - 7:00 PM</p>
                  <p className="text-gray-600">Saturday: 8:00 AM - 10:00 AM</p>
                  <p className="text-gray-600">Sunday: 9:00 AM - 10:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 