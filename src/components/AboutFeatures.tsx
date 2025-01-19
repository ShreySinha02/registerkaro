import React from "react";
import {
  Shield,
  CheckCircle,
  SmilePlus,
  Users,
  ShieldCheck,
} from "lucide-react";
import Team from "./../assets/team.png";

const AboutFeatures = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-orange-500" />,
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      bgColor: "bg-red-50",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: "No Hidden Fee",
      description:
        "Everything is put before you with no hidden charges or conditions",
      bgColor: "bg-green-50",
    },
    {
      icon: <SmilePlus className="w-6 h-6 text-blue-500" />,
      title: "Guaranteed Satisfaction",
      description:
        "We ensure that you will be 100% satisfied with our offered services",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      title: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals",
      bgColor: "bg-pink-50",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-orange-500" />,
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <div className="w-full">
      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
            WELCOME TO REGISTERKARO.IN
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <h2 className="text-3xl font-bold">About</h2>
                <span className="text-3xl font-bold text-orange-500">
                  Register Karo
                </span>
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>

              <p className="text-gray-600">
                We have been using Integegecis as our DevOps vendor for our
                field service applications over the last couple of years and I'm
                extremely pleased with their performance, ability to execute,
                and willingness to adapt to our ever changing environment. Perry
                is an outstanding leader who is fanatical about customer
                satisfaction. He has built a solid team which has consistently
                delivered on projects thereby exceeding everyone's expectations.
              </p>

              <p className="text-gray-600">
                I would strongly recommend their services to any organization
                that is looking for solid, reliable, and predictable outcomes.
              </p>

              <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors flex items-center gap-2">
                Learn More
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

            <div className="relative">
              <img
                src={Team}
                alt="Team photo"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
            WHY REGISTERKARO.IN
          </div>
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Heading taking 2 columns */}
  <div className="mb-12 md:col-span-2 lg:col-span-2">
    <h2 className="text-3xl font-bold">Why Choose Register Karo</h2>
    <p className="text-gray-600 mt-4">
      It is with consistent services and results that build trust with the people <br/> and that in turn help us to serve the business better.
    </p>
  </div>

  {/* Features mapped with conditional col-start */}
  {features.map((feature, index) => (
    <div 
      key={index}
      className={`${feature.bgColor} p-6 rounded-lg hover:shadow-md transition-shadow 
        ${index === 2 ? 'lg:col-start-2' : ''}`}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {feature.icon}
        <h3 className="text-lg font-semibold">{feature.title}</h3>
        <p className="text-sm text-gray-600">{feature.description}</p>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>
    </div>
  );
};

export default AboutFeatures;
