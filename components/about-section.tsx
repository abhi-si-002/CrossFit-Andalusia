"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Dumbbell, Users, Trophy, Clock } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: <Dumbbell className="h-6 w-6" />,
      title: "State-of-the-Art Equipment",
      description: "Access to premium CrossFit equipment and training facilities.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Coaches",
      description: "Learn from certified CrossFit trainers with years of experience.",
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Competition Ready",
      description: "Train for competitions or personal goals with our comprehensive programs.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Schedule",
      description: "Multiple class times to fit your busy schedule.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About CrossFit Andalusia</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your premier CrossFit destination in Andalusia, AL. We're dedicated to helping you achieve your fitness goals through functional movements and high-intensity workouts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              At CrossFit Andalusia, we believe in transforming lives through fitness. Our mission is to create a supportive community where members can push their limits, achieve their goals, and become the best versions of themselves.
            </p>
            <p className="text-gray-600 mb-6">
              Whether you're new to CrossFit or an experienced athlete, our expert coaches will guide you through every workout, ensuring proper form and technique while helping you reach new heights in your fitness journey.
            </p>
            <div className="bg-red-100 p-6 rounded-lg">
              <p className="text-red-800 font-medium">
                Join our community today and experience the CrossFit difference. Your journey to a stronger, healthier you starts here.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-red-600 mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  )
} 