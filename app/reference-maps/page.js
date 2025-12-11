'use client';

import React, { useMemo, useState } from 'react';

const RESOURCES = [
  {
    id: 'gsi-india-geo-2023',
    title: 'Geological Map of India (2023)',
    category: 'Maps',
    region: 'India',
    year: 2023,
    resourceType: 'PDF',
    description: 'Comprehensive geological map showing rock formations, mineral deposits, and structural features across India. Scale 1:2,000,000',
    source: 'Geological Survey of India',
    tags: ['national', 'stratigraphy', 'lithology']
  },
  {
    id: 'tectonic-western-india',
    title: 'Tectonic Map of Western India',
    category: 'Maps',
    region: 'Western India',
    year: 2022,
    resourceType: 'PDF',
    description: 'Detailed tectonic features including fault lines, fold structures, and seismic zones in Western India. Scale 1:1,000,000',
    source: 'Department of Geology, MSU',
    tags: ['tectonics', 'faults', 'regional']
  },
  {
    id: 'mineral-resources-guj',
    title: 'Mineral Resources Map of Gujarat',
    category: 'Maps',
    region: 'Gujarat',
    year: 2023,
    resourceType: 'Shapefile',
    description: 'Distribution and classification of mineral resources found in Gujarat region. Scale 1:500,000',
    source: 'Indian Bureau of Mines',
    tags: ['minerals', 'resources', 'GIS']
  },
  {
    id: 'hydrogeology-vadodara',
    title: 'Hydrogeological Map of Vadodara District',
    category: 'Maps',
    region: 'Vadodara',
    year: 2021,
    resourceType: 'PDF',
    description: 'Groundwater potential zones, aquifer characteristics, and water table information. Scale 1:250,000',
    source: 'Central Ground Water Board',
    tags: ['hydrogeology', 'groundwater', 'aquifer']
  },
  {
    id: 'soil-map-guj',
    title: 'Soil Map of Gujarat',
    category: 'Maps',
    region: 'Gujarat',
    year: 2022,
    resourceType: 'PDF',
    description: 'Soil types, classification, and distribution patterns across Gujarat. Scale 1:500,000',
    source: 'National Bureau of Soil Survey',
    tags: ['soil', 'pedology', 'classification']
  },
  {
    id: 'paleozoic-strat',
    title: 'Paleozoic Stratigraphy Map',
    category: 'Maps',
    region: 'India',
    year: 2020,
    resourceType: 'PDF',
    description: 'Stratigraphic sequences and rock formations from the Paleozoic era in India. Scale 1:1,500,000',
    source: 'Department of Geology, MSU',
    tags: ['stratigraphy', 'paleozoic', 'formations']
  },
  {
    id: 'quaternary-deposits',
    title: 'Quaternary Deposits Map of Western India',
    category: 'Maps',
    region: 'Western India',
    year: 2023,
    resourceType: 'Shapefile',
    description: 'Distribution and characteristics of Quaternary sediments and deposits. Scale 1:1,000,000',
    source: 'Department of Geology, MSU',
    tags: ['quaternary', 'sediments', 'GIS']
  },
  {
    id: 'seismic-hazard',
    title: 'Seismic Hazard Map of India',
    category: 'Maps',
    region: 'India',
    year: 2023,
    resourceType: 'PDF',
    description: 'Earthquake risk zones and seismic hazard assessment across India. Scale 1:2,000,000',
    source: 'Ministry of Earth Sciences',
    tags: ['seismology', 'hazard', 'earthquake']
  },
  {
    id: 'landslide-suscept',
    title: 'Landslide Susceptibility Map',
    category: 'Maps',
    region: 'Western India',
    year: 2022,
    resourceType: 'PDF',
    description: 'Areas prone to landslides with risk assessment and mitigation strategies. Scale 1:500,000',
    source: 'Geological Survey of India',
    tags: ['hazard', 'landslide', 'risk']
  },
  {
    id: 'topographic-sheets',
    title: 'Survey of India Topographic Sheets',
    category: 'Topographic Maps',
    region: 'Vadodara',
    year: 2021,
    resourceType: 'PDF',
    description: 'High-resolution topographic sheets for field studies and mapping. Scale 1:50,000',
    source: 'Survey of India',
    tags: ['topography', 'fieldwork', 'contours']
  },
  {
    id: 'dem-elevation',
    title: 'Digital Elevation Model (DEM)',
    category: 'Topographic Maps',
    region: 'Gujarat',
    year: 2023,
    resourceType: 'GeoTIFF',
    description: 'High-resolution elevation model for terrain analysis and 3D visualization. 30m resolution',
    source: 'USGS Earth Explorer',
    tags: ['DEM', 'elevation', 'GIS']
  },
  {
    id: 'paleogeographic-india',
    title: 'Paleogeographic Map - India (Cretaceous)',
    category: 'Paleogeographic Maps',
    region: 'India',
    year: 2020,
    resourceType: 'PDF',
    description: 'Ancient landmasses and continental positions during the Cretaceous period',
    source: 'Department of Geology, MSU',
    tags: ['paleogeography', 'cretaceous', 'paleoclimate']
  },
  {
    id: 'fossil-distribution',
    title: 'Fossil Distribution Map - Western India',
    category: 'Paleogeographic Maps',
    region: 'Western India',
    year: 2021,
    resourceType: 'Shapefile',
    description: 'Distribution of fossil sites and paleontological findings in Western India',
    source: 'Department of Geology, MSU',
    tags: ['fossils', 'paleontology', 'distribution']
  },
  {
    id: 'landsat-imagery',
    title: 'Landsat 8 Satellite Imagery - Vadodara',
    category: 'Remote Sensing & GIS',
    region: 'Vadodara',
    year: 2023,
    resourceType: 'GeoTIFF',
    description: 'Multispectral satellite imagery for geological interpretation and land use mapping',
    source: 'USGS Earth Explorer',
    tags: ['remote-sensing', 'satellite', 'multispectral']
  },
  {
    id: 'gis-fault-lines',
    title: 'Fault Lines Shapefile - Gujarat',
    category: 'Remote Sensing & GIS',
    region: 'Gujarat',
    year: 2022,
    resourceType: 'Shapefile',
    description: 'Vector layer of mapped fault lines and fracture zones in Gujarat region',
    source: 'Department of Geology, MSU',
    tags: ['faults', 'GIS', 'vector']
  },
  {
    id: 'mineral-specimen-quartz',
    title: 'Quartz - Mineral Specimen & Properties',
    category: 'Minerals',
    region: 'Collection',
    year: 2023,
    resourceType: 'Image',
    description: 'Hand-sample and thin-section photographs with physical properties, hardness, cleavage, and XRD data',
    source: 'Department Collection',
    tags: ['mineralogy', 'thin-section', 'identification']
  },
  {
    id: 'mineral-specimen-feldspar',
    title: 'Feldspar - Mineral Specimen & Properties',
    category: 'Minerals',
    region: 'Collection',
    year: 2023,
    resourceType: 'Image',
    description: 'Comprehensive mineral identification guide with crystal structures and optical properties',
    source: 'Department Collection',
    tags: ['mineralogy', 'crystal', 'identification']
  },
  {
    id: 'fossil-trilobite',
    title: 'Trilobite Collection - Fossil Catalogue',
    category: 'Fossils',
    region: 'Paleontology Wing',
    year: 2022,
    resourceType: 'PDF',
    description: 'Catalogue of trilobite specimens with morphological details, age, and formation information',
    source: 'Department Collection',
    tags: ['fossils', 'paleontology', 'catalogue']
  },
  {
    id: 'fossil-ammonite',
    title: 'Ammonite Collection - Paleontology',
    category: 'Fossils',
    region: 'Paleontology Wing',
    year: 2023,
    resourceType: 'Image',
    description: 'High-resolution images of ammonite specimens with taxonomic classification and geological age',
    source: 'Department Collection',
    tags: ['fossils', 'ammonite', 'cephalopod']
  },
  {
    id: 'research-paper-quaternary',
    title: 'Late Quaternary Megafloods in Western India',
    category: 'Publications',
    region: 'Western India',
    year: 2023,
    resourceType: 'PDF',
    description: 'Peer-reviewed research paper on Quaternary flood events and climate transitions',
    source: 'Department Publications',
    tags: ['research', 'quaternary', 'floods']
  },
  {
    id: 'thesis-msc-geology',
    title: 'MSc Thesis: Stratigraphy of Vadodara Basin',
    category: 'Publications',
    region: 'Vadodara',
    year: 2022,
    resourceType: 'PDF',
    description: 'Complete MSc thesis on stratigraphic analysis and depositional patterns',
    source: 'Department Archives',
    tags: ['thesis', 'stratigraphy', 'basin']
  },
];

export default function ReferenceMapsLibraryPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [region, setRegion] = useState('All');
  const [resourceType, setResourceType] = useState('All');
  const [sort, setSort] = useState('newest');
  const [yearRange, setYearRange] = useState([2000, new Date().getFullYear()]);

  const categories = useMemo(() => ['All', ...Array.from(new Set(RESOURCES.map(r => r.category)))], []);
  const regions = useMemo(() => ['All', ...Array.from(new Set(RESOURCES.map(r => r.region)))], []);
  const resourceTypes = useMemo(() => ['All', ...Array.from(new Set(RESOURCES.map(r => r.resourceType)))], []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let out = RESOURCES.filter(r => {
      if (category !== 'All' && r.category !== category) return false;
      if (region !== 'All' && r.region !== region) return false;
      if (resourceType !== 'All' && r.resourceType !== resourceType) return false;
      if (r.year < yearRange[0] || r.year > yearRange[1]) return false;
      if (!q) return true;
      const hay = `${r.title} ${r.description} ${r.tags.join(' ')} ${r.region}`.toLowerCase();
      return hay.includes(q);
    });

    if (sort === 'newest') out.sort((a, b) => b.year - a.year);
    if (sort === 'oldest') out.sort((a, b) => a.year - b.year);
    if (sort === 'alpha') out.sort((a, b) => a.title.localeCompare(b.title));
    return out;
  }, [query, category, region, resourceType, sort, yearRange]);

  return (
    <div className="min-h-screen bg-[#050908] text-slate-100">
      {/* Hero Section */}
      <section className="bg-[#0b1412] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h1 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C8A14D] mb-3">
              Reference Libraries
            </h1>
            <p className="text-4xl font-bold text-slate-50 mb-4">
              Geological Maps & Resources
            </p>
            <p className="text-base leading-relaxed text-slate-200 max-w-3xl mx-auto">
              Access our comprehensive collection of geological maps, GIS datasets, mineral and fossil libraries, research publications, and reference materials for students, researchers, and alumni.
            </p>
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

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              <select value={category} onChange={e => setCategory(e.target.value)} className="rounded-lg border border-white/20 bg-[#101b18] px-3 py-2 text-sm text-slate-100">
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <select value={region} onChange={e => setRegion(e.target.value)} className="rounded-lg border border-white/20 bg-[#101b18] px-3 py-2 text-sm text-slate-100">
                {regions.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
              <select value={resourceType} onChange={e => setResourceType(e.target.value)} className="rounded-lg border border-white/20 bg-[#101b18] px-3 py-2 text-sm text-slate-100">
                {resourceTypes.map(rt => <option key={rt} value={rt}>{rt}</option>)}
              </select>
              <select value={sort} onChange={e => setSort(e.target.value)} className="rounded-lg border border-white/20 bg-[#101b18] px-3 py-2 text-sm text-slate-100">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="alpha">A–Z</option>
              </select>
              <div className="text-xs text-slate-400 flex items-center justify-end">
                {filtered.length} results
              </div>
            </div>

            <div className="flex gap-4 items-center text-sm text-slate-400">
              <label className="flex items-center gap-2">
                Year from
                <input type="number" value={yearRange[0]} onChange={e => setYearRange([Number(e.target.value), yearRange[1]])} className="w-20 rounded-md border border-white/20 bg-[#101b18] px-2 py-1 text-slate-100" />
              </label>
              <label className="flex items-center gap-2">
                to
                <input type="number" value={yearRange[1]} onChange={e => setYearRange([yearRange[0], Number(e.target.value)])} className="w-20 rounded-md border border-white/20 bg-[#101b18] px-2 py-1 text-slate-100" />
              </label>
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
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
                        {r.category}
                      </span>
                      <span className="text-xs text-slate-400">{r.year}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-slate-50 mb-2">
                      {r.title}
                    </h3>

                    <p className="text-sm text-slate-300 mb-4 line-clamp-3">
                      {r.description}
                    </p>

                    <div className="space-y-2 border-t border-white/10 pt-4 mb-4">
                      <p className="text-xs text-slate-200">
                        <span className="text-[#C8A14D] font-semibold">Type:</span> {r.resourceType}
                      </p>
                      <p className="text-xs text-slate-200">
                        <span className="text-[#C8A14D] font-semibold">Source:</span> {r.source}
                      </p>
                      <p className="text-xs text-slate-300">
                        <span className="text-[#C8A14D] font-semibold">Tags:</span> {r.tags.join(', ')}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 rounded-lg bg-[#C8A14D]/10 px-3 py-2 text-xs font-semibold text-[#C8A14D] hover:bg-[#C8A14D]/20 transition-colors border border-[#C8A14D]/30 hover:border-[#C8A14D]/60">
                        View
                      </button>
                      <button className="flex-1 rounded-lg bg-[#C8A14D]/20 px-3 py-2 text-xs font-semibold text-[#C8A14D] hover:bg-[#C8A14D]/30 transition-colors border border-[#C8A14D]/50">
                        Download
                      </button>
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

      {/* Quick Collections Sidebar */}
      <section className="py-16 bg-[#0b1412]">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-slate-50 mb-8 text-center">Quick Collections</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-white/10 bg-[#101b18] p-6">
              <h3 className="font-semibold text-[#C8A14D] mb-3">🗺️ Geological Maps</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><button className="hover:text-[#C8A14D] transition-colors">National Geological Maps</button></li>
                <li><button className="hover:text-[#C8A14D] transition-colors">Regional Tectonic Maps</button></li>
                <li><button className="hover:text-[#C8A14D] transition-colors">Hazard & Seismic Maps</button></li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#101b18] p-6">
              <h3 className="font-semibold text-[#C8A14D] mb-3">🔬 Minerals & Fossils</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><button className="hover:text-[#C8A14D] transition-colors">Mineral Specimens</button></li>
                <li><button className="hover:text-[#C8A14D] transition-colors">Fossil Collections</button></li>
                <li><button className="hover:text-[#C8A14D] transition-colors">Thin Sections</button></li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#101b18] p-6">
              <h3 className="font-semibold text-[#C8A14D] mb-3">📚 Publications</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><button className="hover:text-[#C8A14D] transition-colors">Research Papers</button></li>
                <li><button className="hover:text-[#C8A14D] transition-colors">Theses & Reports</button></li>
                <li><button className="hover:text-[#C8A14D] transition-colors">Department Publications</button></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Providers */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl border border-[#C8A14D]/20 bg-[#0b1412] p-8">
            <h3 className="text-2xl font-bold text-slate-50 mb-4">Data Sources & Providers</h3>
            <p className="text-slate-300 mb-6">
              Our resources are sourced from authoritative geological and scientific institutions:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-[#C8A14D] text-lg">✓</span>
                <div>
                  <p className="font-semibold text-slate-50">Geological Survey of India (GSI)</p>
                  <p className="text-sm text-slate-300">National geological maps and mineral resources data</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#C8A14D] text-lg">✓</span>
                <div>
                  <p className="font-semibold text-slate-50">Department Collections</p>
                  <p className="text-sm text-slate-300">Mineral specimens, fossils, and research materials</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#C8A14D] text-lg">✓</span>
                <div>
                  <p className="font-semibold text-slate-50">USGS & Remote Sensing</p>
                  <p className="text-sm text-slate-300">Satellite imagery and elevation models</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#C8A14D] text-lg">✓</span>
                <div>
                  <p className="font-semibold text-slate-50">Government Agencies</p>
                  <p className="text-sm text-slate-300">CGWB, IBM, Ministry of Earth Sciences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
