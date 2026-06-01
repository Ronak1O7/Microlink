
export default function MicrolinkSide({ faderValue }: { faderValue: number }) {
  // Use faderValue internally if needed for scroll-based animations or intensity
  // However, App.tsx handles the main container opacity and pointer events
  console.log(faderValue); // Prevent unused variable warning

  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden bg-steel-gray text-white">
      {/* Fixed Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-cyan-glow/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-neon-teal/10 rounded-full blur-[100px]" />
      </div>

      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 glass-dark">
        <div className="text-2xl font-bold tracking-tighter text-cyan-glow drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
          M!CROL!NK
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold tracking-widest text-gray-300">
          <a href="#hero" className="hover:text-cyan-glow transition-colors">HOME</a>
          <a href="#releases" className="hover:text-cyan-glow transition-colors">MUSIC</a>
          <a href="#sets" className="hover:text-cyan-glow transition-colors">LIVE SETS</a>
          <a href="#gallery" className="hover:text-cyan-glow transition-colors">GALLERY</a>
          <a href="#shows" className="hover:text-cyan-glow transition-colors">EVENTS</a>
          <a href="#booking" className="hover:text-cyan-glow transition-colors">CONTACT</a>
        </div>
      </nav>

      <main className="relative z-10 pt-24 pb-32 max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-32">

        {/* Hero Section */}
        <section id="hero" className="min-h-[80vh] flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-400 to-blue-600 mb-6 drop-shadow-[0_0_20px_rgba(0,255,255,0.4)]">
            M!CROL!NK
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 font-light tracking-widest uppercase mb-12">
            Electronic Music Experience
          </p>
          <div className="flex gap-4">
            <a href="#releases" className="px-8 py-3 bg-cyan-glow/20 border border-cyan-glow/50 rounded-full text-cyan-glow font-bold tracking-widest hover:bg-cyan-glow hover:text-black transition-all shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.6)]">
              LATEST MUSIC
            </a>
            <a href="#booking" className="px-8 py-3 border border-gray-600 rounded-full text-white font-bold tracking-widest hover:border-white transition-all">
              BOOKING
            </a>
          </div>
        </section>

        {/* Music Releases Section */}
        <section id="releases" className="scroll-mt-32">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-cyan-glow"></span>
            LATEST RELEASES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "NEON DREAMS", label: "Defected", year: "2024", img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=600&auto=format&fit=crop" },
              { title: "CYBERPUNK", label: "Drumcode", year: "2023", img: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=600&auto=format&fit=crop" },
              { title: "FUTURE BASS", label: "Monstercat", year: "2023", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop" }
            ].map((release, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 hover:border-cyan-glow/50 transition-colors">
                <div className="aspect-square w-full relative">
                  <img src={release.img} alt={release.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="w-16 h-16 rounded-full bg-cyan-glow/90 flex items-center justify-center text-black shadow-[0_0_20px_rgba(0,255,255,0.8)]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-1">{release.title}</h3>
                  <p className="text-gray-400 text-sm tracking-widest">{release.label} • {release.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Live Sets Section */}
        <section id="sets" className="scroll-mt-32">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 flex items-center justify-end gap-4">
            LIVE SETS
            <span className="w-12 h-[2px] bg-cyan-glow"></span>
          </h2>
          <div className="flex flex-col gap-6">
            {[
              { title: "Tomorrowland Mainstage 2023", duration: "1:45:00", views: "1.2M", date: "Jul 2023" },
              { title: "EDC Las Vegas Neon Garden", duration: "2:00:00", views: "850K", date: "May 2023" },
              { title: "Ultra Miami Resistance", duration: "1:30:00", views: "2.4M", date: "Mar 2023" }
            ].map((set, i) => (
              <div key={i} className="group glass-dark p-6 rounded-xl hover:bg-gray-800/80 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-center gap-6 w-full md:w-auto">
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center border border-gray-700 group-hover:border-cyan-glow transition-colors shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 group-hover:text-cyan-glow ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{set.title}</h3>
                    <div className="flex gap-4 text-sm text-gray-400 font-mono">
                      <span>{set.duration}</span>
                      <span>•</span>
                      <span>{set.views} views</span>
                    </div>
                  </div>
                </div>
                <div className="text-right text-gray-500 font-mono text-sm w-full md:w-auto">
                  {set.date}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="scroll-mt-32">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-cyan-glow"></span>
            EVENT GALLERY
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1540039155732-d6749b11e648?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1470229722913-7c092bb4ace4?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
            ].map((img, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-lg bg-gray-900 ${i === 0 || i === 3 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <div className="aspect-square md:aspect-auto md:h-full w-full relative">
                  <img src={img} alt={`Gallery ${i}`} className="object-cover w-full h-full min-h-[200px] group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shows Section */}
        <section id="shows" className="scroll-mt-32">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 flex items-center justify-end gap-4">
            UPCOMING SHOWS
            <span className="w-12 h-[2px] bg-cyan-glow"></span>
          </h2>
          <div className="flex flex-col gap-4">
            {[
              { date: "AUG 15", city: "IBIZA, ES", venue: "Amnesia", status: "TICKETS" },
              { date: "SEP 02", city: "BERLIN, DE", venue: "Berghain", status: "SOLD OUT" },
              { date: "OCT 14", city: "AMSTERDAM, NL", venue: "Awakenings ADE", status: "TICKETS" },
              { date: "NOV 11", city: "LONDON, UK", venue: "Printworks", status: "TICKETS" }
            ].map((show, i) => (
              <div key={i} className="group glass-dark p-6 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-cyan-glow/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 w-full">
                  <div className="text-cyan-glow font-bold tracking-widest text-lg w-24">{show.date}</div>
                  <div className="text-white font-bold text-xl">{show.city}</div>
                  <div className="text-gray-400 font-mono">{show.venue}</div>
                </div>
                <button className={`px-6 py-2 rounded-full font-bold tracking-widest text-sm transition-all w-full md:w-auto ${
                  show.status === 'SOLD OUT'
                    ? 'border border-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-cyan-glow/10 border border-cyan-glow text-cyan-glow hover:bg-cyan-glow hover:text-black'
                }`}>
                  {show.status}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="scroll-mt-32 pb-32">
          <div className="glass-dark p-8 md:p-16 rounded-2xl border-t border-cyan-glow/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-glow/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
                BOOK M!CROL!NK
              </h2>
              <p className="text-gray-400 mb-10 tracking-widest">
                FOR FESTIVAL, CLUB, AND CORPORATE INQUIRIES
              </p>
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="NAME" className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-cyan-glow transition-colors" />
                  <input type="email" placeholder="EMAIL" className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-cyan-glow transition-colors" />
                </div>
                <input type="text" placeholder="EVENT TYPE / LOCATION" className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-cyan-glow transition-colors" />
                <textarea placeholder="MESSAGE" rows={4} className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-cyan-glow transition-colors resize-none" />
                <button type="submit" className="w-full bg-cyan-glow text-black font-black tracking-widest p-4 rounded-lg hover:bg-white transition-colors mt-4 shadow-[0_0_20px_rgba(0,255,255,0.4)]">
                  SEND INQUIRY
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}