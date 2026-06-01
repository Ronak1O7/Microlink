export default function WeddingSide({ faderValue }: { faderValue: number }) {
  console.log(faderValue); // Prevent unused variable warning

  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden bg-warm-white text-gray-800 font-serif">
      {/* Fixed Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[50vw] h-[50vw] bg-champagne-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[40vw] h-[40vw] bg-soft-beige/40 rounded-full blur-[100px]" />
      </div>

      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 glass-light border-b border-champagne-gold/20">
        <div className="text-2xl tracking-[0.3em] font-light text-gray-900 uppercase">
          M!crol!nk <span className="text-champagne-gold font-normal">&amp;</span> Events
        </div>
        <div className="hidden md:flex gap-10 text-sm tracking-[0.2em] uppercase text-gray-600">
          <a href="#wedding-hero" className="hover:text-champagne-gold transition-colors">Home</a>
          <a href="#services" className="hover:text-champagne-gold transition-colors">Services</a>
          <a href="#wedding-gallery" className="hover:text-champagne-gold transition-colors">Gallery</a>
          <a href="#testimonials" className="hover:text-champagne-gold transition-colors">Reviews</a>
          <a href="#packages" className="hover:text-champagne-gold transition-colors">Packages</a>
          <a href="#wedding-booking" className="hover:text-champagne-gold transition-colors">Inquire</a>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-32 max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-40">

        {/* Hero Section */}
        <section id="wedding-hero" className="min-h-[75vh] flex flex-col items-center justify-center text-center">
          <div className="text-sm tracking-[0.3em] uppercase text-champagne-gold mb-8">
            Premium Event Entertainment
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-wide text-gray-900 mb-8 leading-tight">
            Curating Unforgettable <br className="hidden md:block" />
            <span className="italic font-serif text-gray-600">Moments</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-sans font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Elevating your special day with sophisticated soundscapes, professional lighting, and seamless transitions. Experience the perfect blend of elegance and energy.
          </p>
          <div className="flex gap-6 font-sans">
            <a href="#packages" className="px-10 py-4 bg-champagne-gold text-white tracking-[0.15em] uppercase text-sm hover:bg-gray-900 transition-colors shadow-lg shadow-champagne-gold/20">
              Discover Packages
            </a>
            <a href="#wedding-booking" className="px-10 py-4 border border-champagne-gold text-champagne-gold tracking-[0.15em] uppercase text-sm hover:bg-champagne-gold hover:text-white transition-colors">
              Inquire Now
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="scroll-mt-32">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 mb-4">
              Exceptional Services
            </h2>
            <div className="w-24 h-[1px] bg-champagne-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-sans">
            {[
              {
                title: "Curated Soundscapes",
                desc: "Custom-tailored playlists designed to perfectly match the mood of each moment, from the elegant cocktail hour to the energetic dance floor.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                )
              },
              {
                title: "Professional MC",
                desc: "Articulate and polished announcements that smoothly guide your guests through the evening without overwhelming the celebration.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                )
              },
              {
                title: "Ambient Lighting",
                desc: "Sophisticated uplighting and dance floor wash that transforms your venue, perfectly complementing your wedding colors.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              }
            ].map((service, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-champagne-gold mb-6 shadow-sm border border-champagne-gold/20 group-hover:bg-champagne-gold group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section id="wedding-gallery" className="scroll-mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 mb-4">
              Captured Moments
            </h2>
            <div className="w-24 h-[1px] bg-champagne-gold mx-auto"></div>
          </div>
          <div className="columns-1 md:columns-3 gap-6 space-y-6">
            {[
              "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800&auto=format&fit=crop",
            ].map((img, i) => (
              <div key={i} className="break-inside-avoid relative group overflow-hidden rounded-sm bg-white shadow-sm">
                <img src={img} alt={`Wedding Gallery ${i}`} className="w-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="scroll-mt-32">
          <div className="bg-white px-8 py-20 md:p-24 shadow-[0_10px_40px_rgba(0,0,0,0.03)] rounded-sm relative overflow-hidden border border-gray-100">
            <div className="absolute top-0 right-0 text-9xl text-champagne-gold/10 font-serif leading-none">"</div>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-2xl tracking-[0.2em] uppercase text-gray-400 mb-12 text-sm font-sans">Client Stories</h2>
              <p className="text-2xl md:text-3xl font-light italic text-gray-700 leading-relaxed mb-10">
                "The musical journey they created for our wedding was absolutely perfect. From the elegant string arrangements during dinner to the high-energy dance sets that kept everyone on the floor until the very end. True professionals."
              </p>
              <div className="font-sans">
                <div className="text-gray-900 font-medium tracking-widest uppercase mb-1">Sarah & Michael</div>
                <div className="text-gray-400 text-sm">The Plaza, New York</div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section id="packages" className="scroll-mt-32 font-sans">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 font-serif mb-4">
              Investment
            </h2>
            <div className="w-24 h-[1px] bg-champagne-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-10 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100 hover:border-champagne-gold/30 transition-colors">
              <h3 className="text-xl font-light tracking-[0.1em] uppercase text-gray-900 mb-2">The Essential</h3>
              <div className="text-3xl font-serif text-champagne-gold mb-8">Custom Quote</div>
              <ul className="space-y-4 text-gray-500 font-light mb-10">
                <li className="flex items-start gap-3">
                  <span className="text-champagne-gold mt-1">✦</span>
                  4 Hours of DJ/MC Service
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-champagne-gold mt-1">✦</span>
                  Premium Sound System
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-champagne-gold mt-1">✦</span>
                  Basic Dance Floor Lighting
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-champagne-gold mt-1">✦</span>
                  Timeline Planning Consultation
                </li>
              </ul>
              <a href="#wedding-booking" className="inline-block w-full text-center py-4 border border-gray-200 text-gray-600 tracking-[0.15em] uppercase text-sm hover:border-champagne-gold hover:text-champagne-gold transition-colors">
                Select Package
              </a>
            </div>

            <div className="bg-gray-900 p-10 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-champagne-gold text-white text-xs font-bold tracking-widest uppercase py-1 px-8 rotate-45 translate-x-6 translate-y-4">
                Popular
              </div>
              <h3 className="text-xl font-light tracking-[0.1em] uppercase text-white mb-2">The Signature</h3>
              <div className="text-3xl font-serif text-champagne-gold mb-8">Custom Quote</div>
              <ul className="space-y-4 text-gray-400 font-light mb-10">
                <li className="flex items-start gap-3">
                  <span className="text-champagne-gold mt-1">✦</span>
                  6 Hours of DJ/MC Service
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-champagne-gold mt-1">✦</span>
                  Cocktail Hour Audio Setup
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-champagne-gold mt-1">✦</span>
                  Full Room Venue Uplighting
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-champagne-gold mt-1">✦</span>
                  Custom Monogram Projection
                </li>
              </ul>
              <a href="#wedding-booking" className="inline-block w-full text-center py-4 bg-champagne-gold text-white tracking-[0.15em] uppercase text-sm hover:bg-white hover:text-gray-900 transition-colors">
                Select Package
              </a>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="wedding-booking" className="scroll-mt-32 pb-32">
          <div className="bg-white p-10 md:p-20 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 font-serif mb-4">
                Check Availability
              </h2>
              <p className="text-gray-500 font-light font-sans">
                Please provide details about your special day, and we will be in touch shortly.
              </p>
            </div>

            <form className="flex flex-col gap-8 font-sans" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">Name(s)</label>
                  <input type="text" className="border-b border-gray-200 py-2 focus:outline-none focus:border-champagne-gold text-gray-900 bg-transparent transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">Email Address</label>
                  <input type="email" className="border-b border-gray-200 py-2 focus:outline-none focus:border-champagne-gold text-gray-900 bg-transparent transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">Wedding Date</label>
                  <input type="date" className="border-b border-gray-200 py-2 focus:outline-none focus:border-champagne-gold text-gray-900 bg-transparent transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">Venue Location</label>
                  <input type="text" className="border-b border-gray-200 py-2 focus:outline-none focus:border-champagne-gold text-gray-900 bg-transparent transition-colors" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-gray-400">Additional Details</label>
                <textarea rows={4} className="border-b border-gray-200 py-2 focus:outline-none focus:border-champagne-gold text-gray-900 bg-transparent transition-colors resize-none"></textarea>
              </div>

              <button type="submit" className="mt-8 py-5 bg-gray-900 text-white tracking-[0.2em] uppercase text-sm hover:bg-champagne-gold transition-colors w-full md:w-auto md:px-16 md:self-center">
                Submit Inquiry
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}