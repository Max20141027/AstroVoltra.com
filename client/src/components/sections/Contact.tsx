export default function Contact() {
  const contactInfo = [
    {
      icon: "location_on",
      title: "Headquarters",
      details: ["Victoria, Vancouver Island", "British Columbia, Canada"]
    },
    {
      icon: "email",
      title: "Email",
      details: ["astrovoltra.team@outlook.com"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-indigo-50/40"></div>
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl float-gentle"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-tr from-indigo-200/30 to-blue-200/30 rounded-full blur-3xl" style={{animationDelay: '3s'}}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 slide-up-fade">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI? Contact us directly to explore how Astrovoltra can help you achieve your goals.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-6 group interactive-card slide-up-fade" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 smooth-transition glow-animation">
                  <span className="material-icons text-white text-2xl">{info.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 smooth-transition">{info.title}</h3>
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="text-gray-600 text-lg leading-relaxed" data-testid={`text-contact-${info.title.toLowerCase().replace(' ', '-')}`}>
                      {info.title === "Email" ? (
                        <a 
                          href={`mailto:${detail}`}
                          className="text-blue-600 hover:text-blue-800 underline cursor-pointer smooth-transition text-2xl font-semibold"
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                      {detailIndex < info.details.length - 1 && <br />}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional contact information */}
          <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Send us an email with details about your project, and we'll get back to you within 24 hours.
            </p>
            <a 
              href="mailto:astrovoltra.team@outlook.com?subject=Project Inquiry&body=Hi Astrovoltra team,%0A%0AI'm interested in learning more about your AI solutions.%0A%0AProject details:%0A- %0A- %0A- %0A%0ALooking forward to hearing from you!"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 smooth-transition"
              data-testid="button-send-email"
            >
              <span className="material-icons mr-2">email</span>
              Send Email
            </a>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl -z-10"></div>
    </section>
  );
}