import React from 'react';
import { Play, Lightbulb, Wand2 } from 'lucide-react';
import youtube from './../assets/youtube.png'
import p from './../assets/p.png'
import f from './../assets/f.png'
import d from './../assets/d.png'


const logos = [
  { src: p, size: 'w-12 h-12' },
  { src: f, size: 'w-16 h-16' },
  { src: d, size: 'w-14 h-14' },
  { src: p, size: 'w-30 h-30' },
  { src: f, size: 'w-12 h-12' },
  { src: d, size: 'w-16 h-16' },
  { src: f, size: 'w-12 h-12' },
  { src: p, size: 'w-25 h-25' },
  { src: d, size: 'w-10 h-10' },

  { src: p, size: 'w-12 h-12' },
  { src: f, size: 'w-20 h-20' },
  { src: d, size: 'w-14 h-14' },
  { src: p, size: 'w-10 h-10' },
  { src: f, size: 'w-30 h-30' },
  { src: d, size: 'w-16 h-16' },
  { src: p, size: 'w-24 h-24' },
  { src: f, size: 'w-12 h-12' },
  { src: d, size: 'w-10 h-10' },
  { src: p, size: 'w-30 h-30' },
  { src: f, size: 'w-16 h-16' },
  { src: d, size: 'w-14 h-14' },
 
  // Add more variations as needed
];


const VideoClientsSection = () => {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      title: 'Explore ideas together',
      description: 'Engage audience segments and finally create actionable insights. Amplify vertical integration.'
    },
    {
      icon: <Wand2 className="w-8 h-8 text-orange-400" />,
      title: 'Bring those Ideas to life',
      description: 'Engage audience segments and finally create actionable insights. Amplify vertical integration.'
    }
  ];

  return (
    <div className="w-full">
      {/* Video Introduction Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-4">
                Our Video Introductions
              </h2>
              <p className="text-blue-100 mb-8">
                Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna volutpat pellentesque a diam tincidunt apis dui.
              </p>
              
              {/* Feature List */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-blue-800 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-blue-100 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Video */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={youtube}
                alt="Video thumbnail"
                className="w-full rounded-lg"
              />
              {/*  */}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Happy Clients</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
            </p>
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8 items-center justify-items-center mb-8">
      {logos.map((logo, index) => (
     
          <img
            src={logo.src}
            alt={`Client logo ${index + 1}`}
            className={` ${logo.size} object-contain   transition-all duration-300 relative top-2`}
          />
       
      ))}
    </div>

          {/* Show More Button */}
          <div className="text-center">
            <button className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2">
              Show more
              <svg 
                className="w-4 h-4" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoClientsSection;