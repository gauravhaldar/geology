'use client';

import React, { useEffect, useMemo, useState } from 'react';

const BASE_RESOURCES = [
  // 🗺️ Maps (Placeholder Links)
  // {
  //   id: 'geological-map-india-2023',
  //   title: 'Geological Map of India (2023)',
  //   category: 'Maps',
  //   description: 'Comprehensive geological overview of India showing rock formations and tectonic features.',
  //   viewUrl: '/geodata/maps/geological-map-india.jpg',
  //   downloadUrl: '/geodata/maps/geological-map-india.pdf'
  // },
  // {
  //   id: 'mineral-map-gujarat-2023',
  //   title: 'Mineral Resources Map of Gujarat (2023)',
  //   category: 'Maps',
  //   description: 'Distribution of mineral belts and deposits across Gujarat.',
  //   viewUrl: '/geodata/maps/mineral-map-gujarat.jpg',
  //   downloadUrl: '/geodata/maps/mineral-map-gujarat.zip'
  // },
  // {
  //   id: 'quaternary-deposits-western-india',
  //   title: 'Quaternary Deposits Map of Western India',
  //   category: 'Maps',
  //   description: 'Shows sediment distribution in Western India.',
  //   viewUrl: '/geodata/maps/quaternary-deposits.jpg',
  //   downloadUrl: '/geodata/maps/quaternary-deposits.zip'
  // },
  // {
  //   id: 'seismic-hazard-india',
  //   title: 'Seismic Hazard Map of India',
  //   category: 'Maps',
  //   description: 'Depicts earthquake-prone zones and hazard levels.',
  //   viewUrl: '/geodata/maps/seismic-hazard.jpg',
  //   downloadUrl: '/geodata/maps/seismic-hazard.pdf'
  // },
  // // 🗻 Topographic Maps (Placeholder)
  // {
  //   id: 'dem-30m',
  //   title: 'Digital Elevation Model (DEM) — 30m',
  //   category: 'Topographic Maps',
  //   description: 'High-resolution elevation model for terrain analysis.',
  //   viewUrl: '/geodata/maps/dem-preview.jpg',
  //   downloadUrl: '/geodata/maps/dem-30m.tif'
  // },
  // // 🛰️ Remote Sensing & GIS (Placeholder)
  // {
  //   id: 'landsat-8-vadodara',
  //   title: 'Landsat 8 Imagery – Vadodara',
  //   category: 'Remote Sensing & GIS',
  //   description: 'Multispectral satellite imagery for geological interpretation.',
  //   viewUrl: '/geodata/gis/landsat-vadodara.jpg',
  //   downloadUrl: '/geodata/gis/landsat-vadodara.tif'
  // },
  // {
  //   id: 'faultlines-shapefile-gujarat',
  //   title: 'Fault Lines Shapefile – Gujarat',
  //   category: 'Remote Sensing & GIS',
  //   description: 'Mapped fault and fracture zones.',
  //   viewUrl: '/geodata/gis/faultlines-gujarat.jpg',
  //   downloadUrl: '/geodata/gis/faultlines-gujarat.zip'
  // },
  // // 🪨 Mineral Library (Placeholder)
  // {
  //   id: 'mineral-quartz',
  //   title: 'Quartz – Mineral Specimen',
  //   category: 'Minerals',
  //   description: 'Quartz mineral specimen from the department collection.',
  //   viewUrl: '/geodata/minerals/quartz.jpg',
  //   downloadUrl: '/geodata/minerals/quartz.jpg'
  // },
  // {
  //   id: 'mineral-feldspar',
  //   title: 'Feldspar – Mineral Specimen',
  //   category: 'Minerals',
  //   description: 'Feldspar mineral specimen from the department collection.',
  //   viewUrl: '/geodata/minerals/feldspar.jpg',
  //   downloadUrl: '/geodata/minerals/feldspar.jpg'
  // },
  // // 🐚 Fossil Library (Placeholder)
  // {
  //   id: 'fossil-ammonite',
  //   title: 'Ammonite Collection',
  //   category: 'Fossils',
  //   description: 'Ammonite fossil specimens from the paleontology collection.',
  //   viewUrl: '/geodata/fossils/ammonite.jpg',
  //   downloadUrl: '/geodata/fossils/ammonite.pdf'
  // },
  // {
  //   id: 'fossil-trilobite',
  //   title: 'Trilobite Collection',
  //   category: 'Fossils',
  //   description: 'Trilobite fossil specimens from the paleontology collection.',
  //   viewUrl: '/geodata/fossils/trilobite.jpg',
  //   downloadUrl: '/geodata/fossils/trilobite.pdf'
  // },
  // // 📚 Publications (Placeholder)
  // {
  //   id: 'publication-megafloods',
  //   title: 'Late Quaternary Megafloods – Research Paper',
  //   category: 'Publications',
  //   description: 'Research paper on Late Quaternary megafloods and their geological implications.',
  //   viewUrl: '/geodata/publications/megafloods.pdf',
  //   downloadUrl: '/geodata/publications/megafloods.pdf'
  // },
  // {
  //   id: 'thesis-stratigraphy-vadodara',
  //   title: 'MSc Thesis – Stratigraphy of Vadodara Basin',
  //   category: 'Publications',
  //   description: 'Complete MSc thesis on stratigraphic analysis and depositional patterns.',
  //   viewUrl: '/geodata/publications/msc-stratigraphy.pdf',
  //   downloadUrl: '/geodata/publications/msc-stratigraphy.pdf'
  // },
];

export default function ReferenceMapsLibraryPage() {
  const [resources, setResources] = useState(BASE_RESOURCES);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('alpha');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  // Load any previously uploaded maps from the API so they persist across refreshes
  useEffect(() => {
    async function loadStored() {
      try {
        const res = await fetch('/api/reference-maps');
        if (!res.ok) return;
        const data = await res.json();
        if (Array.isArray(data.items) && data.items.length) {
          setResources(prev => {
            // avoid duplicating same IDs if already present
            const existingIds = new Set(prev.map(r => r.id));
            const fresh = data.items.filter(item => !existingIds.has(item.id));
            return [...prev, ...fresh];
          });
        }
      } catch (err) {
        console.error('Failed to load stored reference maps', err);
      }
    }

    loadStored();
  }, []);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(resources.map(r => r.category)))],
    [resources]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let out = resources.filter(r => {
      if (category !== 'All' && r.category !== category) return false;
      if (!q) return true;
      const hay = `${r.title} ${r.description}`.toLowerCase();
      return hay.includes(q);
    });

    if (sort === 'alpha') out.sort((a, b) => a.title.localeCompare(b.title));
    return out;
  }, [query, category, sort, resources]);

  async function handleUpload(event) {
    event.preventDefault();
    setUploadError('');

    const form = event.currentTarget;
    const fileInput = form.elements.namedItem('file');
    const titleInput = form.elements.namedItem('title');
    const categoryInput = form.elements.namedItem('category');
    const descriptionInput = form.elements.namedItem('description');

    const file = fileInput?.files?.[0];
    if (!file) {
      setUploadError('Please select a file to upload.');
      return;
    }

    const title = titleInput?.value?.trim() || 'Untitled Map';
    const newCategory = categoryInput?.value?.trim() || 'Maps';
    const description = descriptionInput?.value?.trim() || 'User-uploaded reference map.';

    const body = new FormData();
    body.append('file', file);
    body.append('title', title);
    body.append('category', newCategory);
    body.append('description', description);

    try {
      setIsUploading(true);
      const res = await fetch('/api/reference-maps', {
        method: 'POST',
        body,
      });

      if (!res.ok) {
        const error = await res.json().catch(() => null);
        setUploadError(error?.error || 'Upload failed. Please try again.');
        return;
      }

      const data = await res.json();

      const newResource = {
        id: data.public_id || `user-upload-${Date.now()}`,
        title,
        category: newCategory,
        description,
        viewUrl: data.url,
        downloadUrl: data.url,
      };

      setResources(prev => [...prev, newResource]);
      form.reset();
    } catch (err) {
      console.error('Upload error', err);
      setUploadError('Unexpected error during upload.');
    } finally {
      setIsUploading(false);
    }
  }

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

      {/* Upload Form + Search & Filters */}
      <section className="py-8 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-8">
            {/* Upload new reference map */}
            <div className="rounded-xl border border-white/15 bg-[#101b18] p-4 sm:p-5">
              <h2 className="text-sm font-semibold text-slate-100 mb-2">Add a Reference Map</h2>
              <p className="text-xs text-slate-400 mb-4">
                Upload a new map or resource file. 
              </p>

              <form onSubmit={handleUpload} className="space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    name="title"
                    placeholder="Title (e.g., Vadodara Lithology Map)"
                    className="w-full rounded-lg border border-white/20 bg-[#050908] px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#C8A14D]/50"
                  />
                  <input
                    type="text"
                    name="category"
                    placeholder="Category (e.g., Maps, GIS, Fossils)"
                    className="w-full rounded-lg border border-white/20 bg-[#050908] px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#C8A14D]/50"
                  />
                </div>

                <textarea
                  name="description"
                  placeholder="Short description of the map or resource."
                  rows={2}
                  className="w-full rounded-lg border border-white/20 bg-[#050908] px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#C8A14D]/50"
                />

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                  <input
                    type="file"
                    name="file"
                    accept="image/*,application/pdf"
                    className="text-xs text-slate-300 file:mr-3 file:rounded-md file:border-0 file:bg-[#C8A14D]/20 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-[#C8A14D] hover:file:bg-[#C8A14D]/30"
                  />
                  <button
                    type="submit"
                    disabled={isUploading}
                    className="inline-flex items-center justify-center rounded-lg bg-[#C8A14D] px-4 py-2 text-xs font-semibold text-[#050908] hover:bg-[#e0c674] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                  >
                    {isUploading ? 'Uploading…' : 'Upload Map'}
                  </button>
                </div>

                {uploadError && (
                  <p className="text-xs text-red-400 mt-1">{uploadError}</p>
                )}
              </form>
            </div>

            {/* Search & Filters */}
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
                        href={r.cloudinaryPublicId ? `/reference-maps/${r.id}/view` : r.viewUrl}
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
