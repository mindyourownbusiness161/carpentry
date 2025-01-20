import React, { useState } from 'react';
import { Phone, Clock, MapPin, PenTool as Tool, Settings2, ChevronRight, Menu, X, ArrowRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", text: "Services" },
    { href: "#gallery", text: "Gallery" },
    { href: "#contact", text: "Contact" }
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80",
      title: "Classic Elegance",
      description: "Custom 3-seater with premium velvet upholstery"
    },
    {
      url: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80",
      title: "Modern Comfort",
      description: "L-shaped sectional with clean lines"
    },
    {
      url: "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?auto=format&fit=crop&q=80",
      title: "Traditional Revival",
      description: "Restored vintage sofa set"
    },
    {
      url: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80",
      title: "Contemporary Living",
      description: "Modern family room set"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-2xl font-bold text-gray-900">
              GSC
            </a>
            
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {link.text}
                </a>
              ))}
              <a href="#contact" className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                Get Quote
              </a>
            </div>

            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Crafting Comfort for Your Home
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Expert sofa craftsmanship in Gikomba, bringing together traditional skills and modern design for your perfect living space.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="w-full sm:w-auto bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors inline-flex items-center justify-center">
                Get Started <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="#gallery" className="w-full sm:w-auto text-gray-600 hover:text-gray-900 px-8 py-4 rounded-full border border-gray-200 hover:border-gray-400 transition-colors">
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <Tool className="w-12 h-12 text-gray-900 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Custom Sofa Building</h3>
                <p className="text-gray-600">Bespoke sofa sets crafted to your exact specifications, combining comfort with style for your perfect living space.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <Settings2 className="w-12 h-12 text-gray-900 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Expert Repairs</h3>
                <p className="text-gray-600">Professional restoration services for all types of sofas, from frame repairs to complete reupholstery work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Featured Work</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-semibold mb-2">{image.title}</h3>
                    <p className="text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Get in Touch</h2>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-gray-900 mr-4" />
                    <span className="text-gray-600">Gikomba, Nairobi, Kenya</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-gray-900 mr-4" />
                    <span className="text-gray-600">[Phone number to be added]</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-gray-900 mr-4" />
                    <span className="text-gray-600">Mon - Sat: 8:00 AM - 6:00 PM</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600">Ready to start your project? Contact us for a free consultation and quote. We're here to help bring your vision to life.</p>
                  <a href="#" className="mt-4 inline-flex items-center text-gray-900 font-semibold hover:text-gray-600 transition-colors">
                    Request Quote <ChevronRight className="ml-2" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Gikomba Sofa Crafters. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;