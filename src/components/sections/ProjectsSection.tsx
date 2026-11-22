import React, { useState } from 'react';
import { PROJECTS } from '../../data/projects';
import { FaMapMarkerAlt, FaCalendarAlt, FaBuilding, FaArrowRight } from 'react-icons/fa';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('Semua');
  const categories = ['Semua', 'Residensial', 'Perhotelan', 'Komersial', 'Kantor'];

  const filteredProjects = filter === 'Semua'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="proyek" className="border-b-4 border-[#0A0A0A] bg-[#FAFAFA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-4 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#EF4444] mb-2">
              PORTOFOLIO PROYEK & INSTALASI
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] uppercase tracking-tight">
              HASIL PENGERJAAN NYATA
            </h2>
          </div>
          <p className="text-xs font-mono text-[#525252] max-w-sm">
            Jejak instalasi mebel dan rancang bangun interior kami pada villa di Bali, penthouse di Jakarta, kafe artisan, dan kantor korporat.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-colors border-2 ${
                filter === cat
                  ? 'bg-[#0A0A0A] text-[#FAFAFA] border-[#0A0A0A]'
                  : 'bg-[#FAFAFA] text-[#525252] border-[#D4D4D4] hover:border-[#0A0A0A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="editorial-card group flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-[#E5E5E5] relative border-b-2 border-[#E5E5E5] group-hover:border-[#0A0A0A] transition-colors">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  
                  <div className="absolute top-3 left-3 bg-[#0A0A0A] text-[#FAFAFA] text-[10px] font-mono font-bold uppercase px-2.5 py-1">
                    {project.category}
                  </div>

                  <div className="absolute bottom-3 right-3 bg-[#FAFAFA] text-[#0A0A0A] text-[10px] font-mono font-bold px-2 py-0.5 border border-[#0A0A0A]">
                    {project.year}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#737373]">
                    <FaMapMarkerAlt className="text-[#EF4444]" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold uppercase text-[#0A0A0A] group-hover:text-[#EF4444] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#525252] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="pt-2 border-t border-[#E5E5E5] space-y-1 text-[11px] font-mono text-[#0A0A0A]">
                    <div><strong>Klien:</strong> {project.client}</div>
                    <div className="text-[#525252]"><strong>Lingkup:</strong> {project.scope}</div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/6282313153539?text=Halo%20PorosKayu%2C%20saya%20tertarik%20dengan%20proyek%20${encodeURIComponent(project.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 border-2 border-[#0A0A0A] text-xs font-bold uppercase tracking-wider hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors"
                >
                  <span>Konsultasi Proyek Serupa</span>
                  <FaArrowRight />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
