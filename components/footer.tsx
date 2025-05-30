"use client"

import React from "react"
import { Phone, MapPin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">CrossFit Andalusia</h3>
            <p className="text-gray-400">
              Transform your life through fitness. Join Andalusia's premier CrossFit community.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-400 hover:text-white transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-gray-400 hover:text-white transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-500 mr-2" />
                <a href="tel:+13344229348" className="text-gray-400 hover:text-white transition-colors">
                  +13344229348
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-gray-400">Andalusia, AL</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 5:30 AM - 7:00 PM</li>
              <li>Saturday: 8:00 AM - 10:00 AM</li>
              <li>Sunday: 9:00 AM - 10:00 AM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CrossFit Andalusia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 