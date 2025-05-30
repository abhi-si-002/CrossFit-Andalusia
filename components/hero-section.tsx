"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Phone, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import heroImage from "@/components/f27de1d15102448395920f2dc4c18651.webp"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-red-900 via-red-800 to-orange-800 text-white pt-16"
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                CrossFit Andalusia
                <span className="block text-orange-300">Transform Your Life</span>
              </h1>
              <p className="text-xl lg:text-2xl text-red-100 mt-6">
                Join Andalusia's premier CrossFit community. Push your limits, achieve your goals, and become the best version of yourself.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                Start Your Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-red-900"
              >
                Contact Us
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+13344229348</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Andalusia, AL</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>Open Now</span>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src={heroImage}
              alt="CrossFit Training"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 