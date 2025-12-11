'use client';

import React, { useMemo, useState } from 'react';

const RESOURCES = [
  // 🗺️ Maps (Placeholder Links)
  {
    id: 'geological-map-india-2023',
    title: 'Geological Map of India (2023)',
    category: 'Maps',
    description: 'Comprehensive geological overview of India showing rock formations and tectonic features.',
    viewUrl: '/geodata/maps/geological-map-india.jpg',
    downloadUrl: '/geodata/maps/geological-map-india.pdf'
  },
  {
    id: 'mineral-map-gujarat-2023',
    title: 'Mineral Resources Map of Gujarat (2023)',
    category: 'Maps',
    description: 'Distribution of mineral belts and deposits across Gujarat.',
    viewUrl: '/geodata/maps/mineral-map-gujarat.jpg',
    downloadUrl: '/geodata/maps/mineral-map-gujarat.zip'
  },
  {
    id: 'quaternary-deposits-western-india',
    title: 'Quaternary Deposits Map of Western India',
    category: 'Maps',
    description: 'Shows sediment distribution in Western India.',
    viewUrl: '/geodata/maps/quaternary-deposits.jpg',
    downloadUrl: '/geodata/maps/quaternary-deposits.zip'
  },
  {
    id: 'seismic-hazard-india',
    title: 'Seismic Hazard Map of India',
    category: 'Maps',
    description: 'Depicts earthquake-prone zones and hazard levels.',
    viewUrl: '/geodata/maps/seismic-hazard.jpg',
    downloadUrl: '/geodata/maps/seismic-hazard.pdf'
  },
  // 🗻 Topographic Maps (Placeholder)
  {
    id: 'dem-30m',
    title: 'Digital Elevation Model (DEM) — 30m',
    category: 'Topographic Maps',
    description: 'High-resolution elevation model for terrain analysis.',
    viewUrl: '/geodata/maps/dem-preview.jpg',
    downloadUrl: '/geodata/maps/dem-30m.tif'
  },
  // 🛰️ Remote Sensing & GIS (Placeholder)
  {
    id: 'landsat-8-vadodara',
    title: 'Landsat 8 Imagery – Vadodara',
    category: 'Remote Sensing & GIS',
    description: 'Multispectral satellite imagery for geological interpretation.',
    viewUrl: '/geodata/gis/landsat-vadodara.jpg',
    downloadUrl: '/geodata/gis/landsat-vadodara.tif'
  },
  {
    id: 'faultlines-shapefile-gujarat',
    title: 'Fault Lines Shapefile – Gujarat',
    category: 'Remote Sensing & GIS',
    description: 'Mapped fault and fracture zones.',
    viewUrl: '/geodata/gis/faultlines-gujarat.jpg',
    downloadUrl: '/geodata/gis/faultlines-gujarat.zip'
  },
  // 🪨 Mineral Library (Placeholder)
  {
    id: 'mineral-quartz',
    title: 'Quartz – Mineral Specimen',
    category: 'Minerals',
    description: 'Quartz mineral specimen from the department collection.',
    viewUrl: '/geodata/minerals/quartz.jpg',
    downloadUrl: '/geodata/minerals/quartz.jpg'
  },
  {
    id: 'mineral-feldspar',
    title: 'Feldspar – Mineral Specimen',
    category: 'Minerals',
    description: 'Feldspar mineral specimen from the department collection.',
    viewUrl: '/geodata/minerals/feldspar.jpg',
    downloadUrl: '/geodata/minerals/feldspar.jpg'
  },
  // 🐚 Fossil Library (Placeholder)
  {
    id: 'fossil-ammonite',
    title: 'Ammonite Collection',
    category: 'Fossils',
    description: 'Ammonite fossil specimens from the paleontology collection.',
    viewUrl: '/geodata/fossils/ammonite.jpg',
    downloadUrl: '/geodata/fossils/ammonite.pdf'
  },
  {
    id: 'fossil-trilobite',
    title: 'Trilobite Collection',
    category: 'Fossils',
    description: 'Trilobite fossil specimens from the paleontology collection.',
    viewUrl: '/geodata/fossils/trilobite.jpg',
    downloadUrl: '/geodata/fossils/trilobite.pdf'
  },
  // 📚 Publications (Placeholder)
  {
    id: 'publication-megafloods',
    title: 'Late Quaternary Megafloods – Research Paper',
    category: 'Publications',
    description: 'Research paper on Late Quaternary megafloods and their geological implications.',
    viewUrl: '/geodata/publications/megafloods.pdf',
    downloadUrl: '/geodata/publications/megafloods.pdf'
  },
  {
    id: 'thesis-stratigraphy-vadodara',
    title: 'MSc Thesis – Stratigraphy of Vadodara Basin',
    category: 'Publications',
    description: 'Complete MSc thesis on stratigraphic analysis and depositional patterns.',
    viewUrl: '/geodata/publications/msc-stratigraphy.pdf',
    downloadUrl: '/geodata/publications/msc-stratigraphy.pdf'
  },
];

export default function ReferenceMapsLibraryPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('alpha');

  const categories = useMemo(() => ['All', ...Array.from(new Set(RESOURCES.map(r => r.category)))], []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let out = RESOURCES.filter(r => {
      if (category !== 'All' && r.category !== category) return false;
      if (!q) return true;
      const hay = `${r.title} ${r.description}`.toLowerCase();
      return hay.includes(q);
    });

    if (sort === 'alpha') out.sort((a, b) => a.title.localeCompare(b.title));
    return out;
  }, [query, category, sort]);

  return (
    <div className="min-h-screen bg-[#050908] text-slate-100">
      {/* Hero Section */}
      <section className="bg-[#0b1412] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h1 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C8A14D] mb-3">
              Reference Maps & Libraries
            </h1>
            <p className="text-4xl font-bold text-slate-50 mb-4">
              Geological Maps & Resources
            </p>
            <p className="text-base leading-relaxed text-slate-200 max-w-3xl mx-auto mb-4">
              Welcome to the Reference Maps & Libraries. This section contains sample geological maps, GIS layers, mineral specimens, fossils, and publications.
            </p>
            {/* <p className="text-sm text-slate-300 max-w-3xl mx-auto">
              Real datasets will be added soon. Below is the sample dataset with working URLs.
            </p> */}
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-4">
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search maps, minerals, fossils, publications..."
              className="w-full rounded-lg border border-white/20 bg-[#101b18] px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C8A14D]/50"
              aria-label="Search resources"
            />

            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <select value={category} onChange={e => setCategory(e.target.value)} className="flex-1 rounded-lg border border-white/20 bg-[#101b18] px-3 py-2 text-sm text-slate-100">
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <div className="text-xs text-slate-400">
                {filtered.length} results
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(r => (
                <div
                  key={r.id}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[#101b18] shadow-md shadow-black/40 hover:border-[#C8A14D]/40 transition-all hover:shadow-lg hover:shadow-black/60"
                >
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A14D] mb-3 block">
                      {r.category}
                    </span>

                    <h3 className="text-lg font-semibold text-slate-50 mb-2">
                      {r.title}
                    </h3>

                    <p className="text-sm text-slate-300 mb-4">
                      {r.description}
                    </p>

                    <div className="flex gap-2">
                      <a
                        href={r.viewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-lg bg-[#C8A14D]/10 px-3 py-2 text-xs font-semibold text-[#C8A14D] hover:bg-[#C8A14D]/20 transition-colors border border-[#C8A14D]/30 hover:border-[#C8A14D]/60 text-center"
                      >
                        View
                      </a>
                      <a
                        href={r.downloadUrl}
                        download
                        className="flex-1 rounded-lg bg-[#C8A14D]/10 px-3 py-2 text-xs font-semibold text-[#C8A14D] hover:bg-[#C8A14D]/20 transition-colors border border-[#C8A14D]/30 hover:border-[#C8A14D]/60 text-center"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-300">No resources found. Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
