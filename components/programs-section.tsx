"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Dumbbell, Users, Trophy} from "lucide-react"

export function ProgramsSection() {
  const programs = [
    {
      icon: <Dumbbell className="h-6 w-6" />,
      title: "CrossFit Classes",
      description: "High-intensity functional movements that will challenge you and help you achieve your fitness goals.",
      features: [
        "Daily WODs (Workout of the Day)",
        "Scalable for all fitness levels",
        "Expert coaching and guidance",
        "Community atmosphere"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Personal Training",
      description: "One-on-one attention from our certified coaches to help you reach your specific goals.",
      features: [
        "Customized workout plans",
        "Nutrition guidance",
        "Progress tracking",
        "Flexible scheduling"
      ]
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Competition Training",
      description: "Specialized programming for athletes looking to compete in CrossFit competitions.",
      features: [
        "Advanced technique work",
        "Competition-specific programming",
        "Strength and conditioning",
        "Recovery strategies"
      ]
    }
  ]

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our variety of programs designed to help you achieve your fitness goals, whether you are just starting out or training for competition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-red-600 mb-4">{program.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
              <p className="text-gray-600 mb-6">{program.description}</p>
              <ul className="space-y-3 mb-8">
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <span className="text-red-600 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                Learn More
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            View Class Schedule
          </Button>
        </div>
      </div>
    </section>
  )
} 