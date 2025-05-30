"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

export function ScheduleSection() {
  const schedule = [
    {
      day: "Monday - Friday",
      classes: [
        { time: "5:30 AM", name: "Early Morning CrossFit" },
        { time: "6:30 AM", name: "CrossFit" },
        { time: "9:00 AM", name: "CrossFit" },
        { time: "12:00 PM", name: "Lunch Time CrossFit" },
        { time: "5:00 PM", name: "CrossFit" },
        { time: "6:00 PM", name: "CrossFit" },
        { time: "7:00 PM", name: "CrossFit" },
      ]
    },
    {
      day: "Saturday",
      classes: [
        { time: "8:00 AM", name: "CrossFit" },
        { time: "9:00 AM", name: "CrossFit" },
        { time: "10:00 AM", name: "Open Gym" },
      ]
    },
    {
      day: "Sunday",
      classes: [
        { time: "9:00 AM", name: "CrossFit" },
        { time: "10:00 AM", name: "Open Gym" },
      ]
    }
  ]

  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Class Schedule</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect time to train with our flexible class schedule. All classes are led by certified CrossFit coaches.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {schedule.map((day, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">{day.day}</h3>
              <div className="space-y-4">
                {day.classes.map((class_, classIndex) => (
                  <div
                    key={classIndex}
                    className="flex items-center justify-between border-b border-gray-100 pb-4"
                  >
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-red-600 mr-2" />
                      <span className="text-gray-900 font-medium">{class_.time}</span>
                    </div>
                    <span className="text-gray-600">{class_.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Book a Class
          </Button>
        </div>
      </div>
    </section>
  )
} 