
import { 
  Building2, 
  FileText, 
  Users, 
  ClipboardCheck, 
  Calculator, 
  BookOpen 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Building2 className="w-12 h-12 text-orange-400" />,
      title: 'Company Formation',
      description: 'Build web-based solutions that enhance customer experience.',
    },
    {
      icon: <FileText className="w-12 h-12 text-orange-400" />,
      title: 'Company Secretarial Services',
      description: 'Make data-driven decisions and utilize technology to reach business goals.',
    },
    {
      icon: <Users className="w-12 h-12 text-orange-400" />,
      title: 'Virtual Office Address',
      description: 'Foster customer relationships by effectively serving your market.',
    },
    {
      icon: <ClipboardCheck className="w-12 h-12 text-orange-400" />,
      title: 'Annual Compliance Services',
      description: 'Turn your ideas into modern products with our design experts.',
    },
    {
      icon: <Calculator className="w-12 h-12 text-orange-400" />,
      title: 'Payroll Services',
      description: 'Expand your business across the globe with minimal effort.',
    },
    {
      icon: <BookOpen className="w-12 h-12 text-orange-400" />,
      title: 'Bookkeeping Services',
      description: 'Steering user behaviors with creative design, data insights & technology.',
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
            WELCOME TO REGISTERKARO.IN
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Explore Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                <button className="text-blue-600 hover:text-blue-700 inline-flex items-center text-sm font-medium">
                  Learn more
                  <svg 
                    className="w-4 h-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
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
          ))}
        </div>

        {/* See All Services Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors duration-300">
            See All Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;