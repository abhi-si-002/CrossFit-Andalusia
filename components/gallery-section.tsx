"use client"

import React from "react"

export function GallerySection() {
  const galleryItems = [
    {
      id: 1,
      title: "CrossFit Training",
      image: "https://thumbs.dreamstime.com/b/seville-spain-nov-crossfit-athletes-compete-challenge-event-intense-competition-showcases-lifting-weights-spectators-358362881.jpg"
    },
    {
      id: 2,
      title: "Equipment",
      image: "https://img.p.mapq.st/?url=https://d1z821jr0rem16.cloudfront.net/gyms.jpg?w=384&q=75"
    },
    {
      id: 3,
      title: "Community",
      image: "https://s3-media0.fl.yelpcdn.com/bphoto/fBvF0KribZneXWdZK9RyKQ/1000s.jpg"
    },
    {
      id: 4,
      title: "Competitions",
      image: "https://ironbullstrength.com/cdn/shop/articles/crossfit-games.webp?v=1697118425"
    },
    {
      id: 5,
      title: "Coaches",
      image: "https://s3-media0.fl.yelpcdn.com/bphoto/rmPlgG0glp7XIlcmc4dukA/1000s.jpg"
    },
    {
      id: 6,
      title: "Facility",
      image: "https://s3-media0.fl.yelpcdn.com/bphoto/FQnkbSs9L1Kth7KfCCb2gg/1000s.jpg"
    }
  ]

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at our state-of-the-art facility, equipment, and the amazing CrossFit community at CrossFit Andalusia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative rounded-lg overflow-hidden bg-gray-100 group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
