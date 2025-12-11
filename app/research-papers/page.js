'use client';

import React, { useState, useEffect } from 'react';

export default function ResearchPapersPage() {
  const [activeTab, setActiveTab] = useState('projects');
  const [currentPage, setCurrentPage] = useState(1);
  const [uploadedPapers, setUploadedPapers] = useState([]);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    journal: '',
    year: new Date().getFullYear(),
    issn: '',
    link: '',
    file: null,
  });
  const itemsPerPage = 5;

  useEffect(() => {
    fetchUploadedPapers();
  }, []);

  const fetchUploadedPapers = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/research-papers');
      const data = await response.json();
      if (data.success) {
        setUploadedPapers(data.papers);
      }
    } catch (error) {
      console.error('Error fetching papers:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const researchProjects = [
    {
      title: "Morphotectonic evolution of SW Saurashtra, Western India",
      name: "Ms. Naimisha Vanik",
      agency: "DST-WOS-A",
      price: "12.92 Lakhs",
      tag: "Individual",
      type: "Government",
      year: "2019-2020",
      duration: "3 years",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Neotectonic Evolution of Active Faults in Kachchh and Saurashtra, Western India using field and Ground Penetrating Radar Studies",
      name: "Prof. D. M. Maurya",
      agency: "MOES",
      price: "35.05 Lakhs",
      tag: "Individual",
      type: "Government",
      year: "2014-2015",
      duration: "3 years",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "DST FIST PROGRAMME-Geology",
      name: "Prof. S. Chamyal",
      agency: "DST",
      price: "218.00 Lakhs",
      tag: "Central",
      type: "Government",
      year: "2013-2014",
      duration: "5 years",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Integrated project on active fault mapping in Kutch basin, Western India",
      name: "Prof. Chamyal",
      agency: "MOES",
      price: "79.70 Lakhs",
      tag: "Central",
      type: "Government",
      year: "2015-2016",
      duration: "5 years",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Surface and shallow subsurface mapping of the Katrol Hill Fault (KHF) Zone, Kachchh, Western India",
      name: "Prof. Deepak Maurya",
      agency: "MoES",
      price: "54.20 Lakhs",
      tag: "Individual",
      type: "Government",
      year: "2015-2016",
      duration: "5 years",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Source-to-Sink Spatio-temporal variability in sediment fluxes and their control on coastal sediment dispersal system in Gujarat",
      name: "Prof. N. P. Bhatt",
      agency: "MoES",
      price: "21.25 Lakhs",
      tag: "Individual",
      type: "Government",
      year: "2019-2020",
      duration: "3 years",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Quaternary Carbonate Sequences of Saurashtra, Western India: An Archive of Sea Level and Climate Change",
      name: "Dr. Nilesh P. Bhatt",
      agency: "IGC",
      price: "1.20 Lakhs",
      tag: "Individual",
      type: "Government",
      year: "2018-2019",
      duration: "1 year",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Late Quaternary Continental sequences of Gujarat, Western India: an appraisal of climatic, tectonic and eustatic processes",
      name: "Prof. D. M. Maurya",
      agency: "IGC",
      price: "3.50 Lakhs",
      tag: "Individual",
      type: "Government",
      year: "2018-2019",
      duration: "1 year",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Post Lgm Sedimentation Pattern and Environmental Chnges in The Great Kachchh Basin",
      name: "Dr. Niteshkumar Khonde",
      agency: "DST",
      price: "29.92 Lakhs",
      tag: "Individual",
      type: "Government",
      year: "2016-2017",
      duration: "3 Years",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Holecene Climatic Changes Based On Multiproxy Data From Fluvial and Lacustrine Archives of Castern Margin of Little Rann of Kachch, Western india",
      name: "Dr. Rachna Raj, Co/ pi. L. S. Chamyal",
      agency: "DST",
      price: "26.14 Lakhs",
      tag: "Individual",
      type: "Government",
      year: "2016-2017",
      duration: "3 Years",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Frequency, Magnitude and Causes of Large Flouds Vis-A Vis Climbe Excursiens….india",
      name: "Dr. Alpa Sridhar, Prof. L. S. Chamyal",
      agency: "DST-WOS-A",
      price: "28.20 Lakhs",
      tag: "Individual",
      type: "Government",
      year: "2016-2017",
      duration: "3 Years",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Late Quanternary megafloods in the Rivers of Western India: Generic processes and climate transitions",
      name: "Dr. Alpa Sridhar",
      agency: "DST-WOS-A",
      price: "33.17 Lacs",
      tag: "Individual",
      type: "Government",
      year: "2020-2021",
      duration: "3 years",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
  ];

  const researchPublications = [
    // {
    //   title: "Impact of long term uplift on stream networks in tectonically active Northern Hill Range, Kachchh palaeo-rift basin, western India",
    //   authors: "Padmalal A., Maurya D.M., Vanik N.P., Shaikh M.A., Tiwari P., Chamyal L.S.",
    //   journal: "Journal of Mountain Science",
    //   year: 2021,
    //   issn: "16726316",
    //   link: "https://doi.org/10.1007/s11629-020-6420-9",
    //   faculty: "Faculty of Science",
    //   department: "Department of Geology",
    // },
    {
      title: "Ethological and environmental significance of Bergaueria hemispherica from the Late Cretaceous of the Bagh Group, Western India",
      authors: "Shitole A.D., Patel S.J., Joseph J.K., Darngawn J.L.",
      journal: "Comptes Rendus - Palevol",
      year: 2019,
      issn: "16310683",
      link: "https://doi.org/10.1016/j.crpv.2019.01.002",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Active tectonic control on landscape and Quaternary sedimentation in the Pachham Island, Kachchh, Western India.",
      authors: "V. Chowksey, D. M. MAURYA, N. Khonde, P. Joshi and L. S. Chamyal",
      journal: "Arab. Jour. Geoscience",
      year: 2016,
      issn: "18667538",
      link: "",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Tectonic geomorphology and neotectonic setting of the seismically active South Wagad Fault (SWF), Western India using field and GPR data.",
      authors: "D. M. Maurya, Vikas Chowksey and L.S.Chamyal",
      journal: "Acta Geophysica, Springer",
      year: 2017,
      issn: "",
      link: "",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Subsurface profiling along Banni Plains and bounding faults, Kachchh, Western India using microtremors method.",
      authors: "Dhananjay A. Sant, Imtiyaz A. Parvez, Govindan Rangarajan, Satish J. Patel, Madhuri N. Bhatt, T. A. Sanoop Salam",
      journal: "Journal of Asian Earth Sciences",
      year: 2017,
      issn: "13679120",
      link: "",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Palaeoecologic Significance of the Callovian-Oxfordian Trace Fossils of Gangeshwar Dome, Southeast of Bhuj, Mainland Kachchh, India",
      authors: "Nishith Y. Bhatt and Satish J. Patel",
      journal: "Volumina Jurassica",
      year: 2017,
      issn: "",
      link: "https://voluminajurassica.org/",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Late Pleistocene-Holocene clay mineral record from the Great Rann of Kachchh, Western India: Implication for palaeoenvironments and sediment sources",
      authors: "Nitesh Khonde, D. M. MAURYA and L. S. Chamyal",
      journal: "Quaternary International, Elsevier",
      year: 2017,
      issn: "",
      link: "http://ccc.msubaroda.ac.in/annualrep/upload/Journal_Paper/560_49352.pdf",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Ichnology and Sequence Stratigraphy of Wave-Dominated Prograding Delta, Bhuj Formation (Cretaceous), Khatrod Hill Range, Mainland Kachchh, Western India",
      authors: "Nishith Y. Bhatt and Satish J. Patel",
      journal: "Journal of Geosciences Research",
      year: 2017,
      issn: "",
      link: "",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Relative Assessment of Tectonic Activity along the Seismically Active Katrol Hill Fault, Kachchh, Western India",
      authors: "Das A., Prizomwala S.P., Solanki T., Chauhan G., Thakkar M.G., Bhatt N.",
      journal: "Journal of the Geological Society of India",
      year: 2019,
      issn: "167622",
      link: "https://doi.org/10.1007/s12594-019-1287-5",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Analysing Morphometric Characteristics using Geospatial Technique: A case study of Vishwamitri Watershed, Gujarat",
      authors: "B Bhatt, S Sharma, J Joshi",
      journal: "International Journal of Geology, Earth & Environmental Sciences",
      year: 2020,
      issn: "23495162",
      link: "10.6084/m9.jetir.JETIR2007343",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "A review and new data on neotectonic evolution of active faults in Kachchh basin, Western India: Legacy of post-Deccan Trap tectonic inversion. In: Tectonics of Deccan Large Igneous Province",
      authors: "D. M. MAURYA, Vikas Chowksey, A. K. Patidar and L. S. Chamyal",
      journal: "Geological Society of London Special Publication",
      year: 2017,
      issn: "",
      link: "http://ccc.msubaroda.ac.in/annualrep/upload/Journal_Paper/560_49353.pdf",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Uplift induced and structurally controlled landscape development: Example from fault bounded Jumara and Jara domes in Northern hill range, Kachchh, Western India",
      authors: "Mohammedharron Shaikh, D. M. MAURYA, Naimisha Vanik and L. S. Chamyal",
      journal: "Geoscience Journal",
      year: 2018,
      issn: "",
      link: "https://doi.org/10.1007/s12303-018-0061-9",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Post-Deccan Trap stress reorientation under transpression: Evidence from fault slip analyses from SW Saurashtra, western India.",
      authors: "Naimisha Vanik, Shaikh M., S. Mukherjee, D. M. Maurya, L. S. Chamyal",
      journal: "Journal of Geodynamics",
      year: 2018,
      issn: "",
      link: "https://www.sciencedirect.com/journal/journal-of-geodynamics",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Mid to Late Holocene fluvio-marine record from the ephemeral rivers of northern Alluvial Plains of Gujarat, western India.",
      authors: "Alpa Sridhar, Rachna Raj, L. S. Chamyal, Shivani Prajapati, Anish Jani, Shivam Suthar and C. M. Nautiyal",
      journal: "Z.F.Geomorphologie",
      year: 2018,
      issn: "",
      link: "https://www.schweizerbart.de/journals/zfg",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "irst principles study of hydrogen bond symmetrization in δ-AlOOH and its implication for crustal anisotropy",
      authors: "Sharad Babu Pillai, Prafulla K. Jha, Akash Padmalal, D. M. MAURYA and L. S. Chamyal",
      journal: "Journal of Applied Physics",
      year: 2018,
      issn: "",
      link: "",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Geological evidence for AD 1008 tsunami along the Kachchh coast, Western India: Implications for hazard along the Makran Subduction Zone.",
      authors: "Prizomwala, S.P., Gandhi, D., Bhatt, N., Winkler, W., Ravikumar, M., Makwana, N. & Bhatt, N.Y.",
      journal: "Scientific Reports",
      year: 2018,
      issn: "",
      link: "http://ccc.msubaroda.ac.in/annualrep/upload/Journal_Paper/132_19186.pdf",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Strengthening of the Somali upwelling during Holocene and its impact on the southwest monsoon rainfall.",
      authors: "D. Balaji, Ravi Bhushan and L.S.Chamyal",
      journal: "Climate of the Past, EGU",
      year: 2018,
      issn: "",
      link: "https://www.climate-of-the-past.net/",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "A tectono-geomorphological perspective of micro-earthquake swarm activity prone areas around Bhavnagar and Jamnagar in Saurashtra, western India.",
      authors: "NaimishaVanik, D.M.Maurya, Mohamedharoon Shaikh, AkashPadmalal, PrabhutiTiwari, L.S.Chamyal",
      journal: "Quaternary International",
      year: 2020,
      issn: "",
      link: "https://doi.org/10.1016/j.quaint.2020.12.041",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Reconstructing the Glacial History of Jorya Garang Glacier, from Little Ice Age to Present",
      authors: "Bhushan Deota,Yogi Trivedi,Anil Kulkarni,Mudit Mankad",
      journal: "Journal of Geosciences Research",
      year: 2018,
      issn: "",
      link: "http://ccc.msubaroda.ac.in/annualrep/upload/Journal_Paper/224_35820.pdf",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Holocene paleoenvironmental changes in the marginal marine basin of Great Rann of Kachchh, western India: Insights from sedimentological and mineral magnetic studies on a ~60 m long core",
      authors: "Abhishek Kumar, D. M. Maurya, Niteshkumar Khonde, Binita Phartiyal, Md Arif, Liviu Giosan, L. S. Chamyal",
      journal: "Quaternary International",
      year: 2021,
      issn: "",
      link: "http://ccc.msubaroda.ac.in/annualrep/upload/Journal_Paper/560_71169.pdf",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Tectonic evolution of the intra-uplift Vigodi-Gugriana-Khirasra-Netra Fault System in the seismically active Kachchh rift basin, India: Implications for the western continental margin of the Indian plate.",
      authors: "Shaikh, M. A., Maurya, D. M., Mukherjee, S., Vanik, N. P., Padmalal, A., and Chamyal, L. S.",
      journal: "Journal of Structural Geology",
      year: 2020,
      issn: "",
      link: "https://doi.org/10.1016/j.jsg.2020.104124",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Variations of the Somali upwelling since 18.5 ka BP and its relationship with southwest monsoon rainfall",
      authors: "Balaji D., Bhushan R., Singh Chamyal L.",
      journal: "Climate of the Past",
      year: 2018,
      issn: "18149324",
      link: "https://doi.org/10.5194/cp-14-1331-2018",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Subsurface profiling of granite pluton using microtremor method: southern Aravalli, Gujarat, India",
      authors: "Joshi A.U., Sant D.A., Parvez I.A., Rangarajan G., Limaye M.A., Mukherjee S., Charola M.J., Bhatt M.N., Mistry S.P.",
      journal: "International Journal of Earth Sciences",
      year: 2018,
      issn: "14373254",
      link: "https://doi.org/10.1007/s00531-017-1482-9",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Subsurface imaging of brown coal bearing Tertiary sedimentaries - Deccan Trap interface using microtremor method",
      authors: "Sant D.A., Parvez I.A., Rangarajan G., Patel S.J., Sanoop Salam T.A., Bhatt M.N.",
      journal: "Journal of Applied Geophysics",
      year: 2018,
      issn: "9269851",
      link: "https://doi.org/10.1016/j.jappgeo.2018.09.008",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Stratigraphy and Sedimentology of Middle Jurassic Sequence of Chorar Island, Patan District, Kachchh Basin, Gujarat",
      authors: "Patel S.J., Darngawn J.L., Joseph J.K., Shitole A.D.",
      journal: "Journal of the Geological Society of India",
      year: 2018,
      issn: "167622",
      link: "https://doi.org/10.1007/s12594-018-1036-1",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Rootless calc-silicate folds in granite: An implication towards syn- to post-plutonic emplacement",
      authors: "Joshi A.U., Limaye M.A.",
      journal: "Journal of Earth System Science",
      year: 2018,
      issn: "23474327",
      link: "https://doi.org/10.1007/s12040-018-0968-6",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Archaeological Evidence for Modern Coastal Uplift at Diu, Saurashtra Peninsula, India",
      authors: "Kázmér M., Bhatt N., Ukey V., Prizomwala S., Taboroši D., Székely B.",
      journal: "Geoarchaeology",
      year: 2016,
      issn: "8836353",
      link: "https://doi.org/10.1002/gea.21575",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Quaternary carbonate deposits from Katrol Hill Range (KHR), Kachchh, western India: Mode of occurrences and its siginificance in landscape evolution.",
      authors: "Talati, R. & Bhatt, N.",
      journal: "The Journal of Indian Geophysical Union",
      year: 2018,
      issn: "9719709",
      link: "https://www.semanticscholar.org/paper/Quaternary-carbonate-deposits-from-Katrol-Hill-(-)-Talati-Bhatt/2ca5801d9907f5165bfbb8462bc20fc4c600c941",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Plug shaped burrows Conichnus - Conostichus from the Late Cretaceous of Bagh Group, Gujarat, Western India.",
      authors: "Satish J. Patel, Apurva D. Shitole, Jaquilin K. Joseph and Jehova L. Darngawn",
      journal: "Journal of geological society of India",
      year: 2018,
      issn: "09746889",
      link: "http://www.geosocindia.org",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Palaeoecological Significance of Trace Fossils of the Chorar Island, Eastern Kachchh Basin, Western India.",
      authors: "J. L. Darngawn, S. J. Patel, J. K. Joseph, and A. D. Shitole",
      journal: "Journal of the Palaeontological Society of India",
      year: 2018,
      issn: "5529360",
      link: "http://palaeontologicalsociety.in/",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Occurrence of fibrous calcite in miliolite limestone of the Katrol Hill Range, Kachchh, Western India: new evidence of tectonic activity along the KHF.",
      authors: "Talati, R. n. & Bhatt, N.",
      journal: "International journal of Emerging Trends in Science and Technology",
      year: 2018,
      issn: "23489480",
      link: "http://igmpublication.org/ijetst.in/index.php/ijetst",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Late Pleistocene relative sea-level changes from Saurashtra, west coast of India.",
      authors: "Prizomwala, S.P., Yadav, G., Bhatt, N. and Sharma, K.",
      journal: "Current Science",
      year: 2018,
      issn: "113891",
      link: "https://www.ias.ac.in/",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Implications of palaeohydrological proxies on the late Holocene Indian Summer Monsoon variability, western India",
      authors: "Sridhar A., Chamyal L.S.",
      journal: "Quaternary International",
      year: 2018,
      issn: "10406182",
      link: "https://doi.org/10.1016/j.quaint.2017.11.049",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Implication of Godhra Granite Emplacement on Calc-Silicate rocks of Lunavada Region, NE Gujarat",
      authors: "Gayatri Akolkar, Aditya Joshi, M.A.Limaye and B.S.Deota",
      journal: "Journal of Geosciences Research",
      year: 2018,
      issn: "24551953",
      link: "http://ccc.msubaroda.ac.in/annualrep/upload/Journal_Paper/18482_36268.pdf",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Tracing the Vedic Saraswati River in the Great Rann of Kachchh",
      authors: "Khonde N., Singh S.K., Maurya D.M., Rai V.K., Chamyal L.S., Giosan L.",
      journal: "Scientific Reports",
      year: 2017,
      issn: "20452322",
      link: "https://doi.org/10.1038/s41598-017-05745-8",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Fishhook shape intrafolial fold train in quartzite metapelite band Lunavada region NE Gujarat western India",
      authors: "Aditya Joshi, M.A.Limaye and B.S.Deota",
      journal: "International Journal of Earth Sciences",
      year: 2018,
      issn: "14373254",
      link: "http://ccc.msubaroda.ac.in/annualrep/upload/Journal_Paper/18482_36260.pdf",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Facies characterisation of a shallow-water deltaic succession (Upper Jurassic Wagad Highland, Kachchh, W. India)",
      authors: "Joseph, J. K and Patel, S. J.",
      journal: "Geologos",
      year: 2018,
      issn: "20806574",
      link: "https://www.sciendo.com/journal/LOGOS",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Testing the numerical models for boulder transport through high energy marine wave event: An example from southern Saurashtra, western India.",
      authors: "Gandhi D., Chavare, K.A., Prizomwala, S.P., Bhatt, N., Bhatt, N.Y., Mohan, K. & Rastogi, B.K.",
      journal: "Quaternary International",
      year: 2017,
      issn: "10406182",
      link: "https://www.sciencedirect.com/journal/quaternary-international",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Tectonic geomorphology and neotectonic setting of the seismically active South Wagad Fault (SWF), Western India, using field and GPR data",
      authors: "Maurya D.M., Chowksey V., Tiwari P., Chamyal L.S.",
      journal: "Acta Geophysica",
      year: 2017,
      issn: "18956572",
      link: "https://doi.org/10.1007/s11600-017-0099-5",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Sources and depositional pathways of mid-Holocene sediments in the Great Rann of Kachchh, India: Implications for fluvial scenario during the Harappan Culture",
      authors: "Chatterjee A., Ray J.S.",
      journal: "Quaternary International",
      year: 2017,
      issn: "10406182",
      link: "https://doi.org/10.1016/j.quaint.2017.06.008",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Role of fractionation correction in accurate determination of 142Nd/144Nd by TIMS: A case study of 1.48 Ga alkaline rocks from Khariar, India",
      authors: "Gautam I., Ray J.S., Bhutani R., Balakrishnan S., Dash J.K.",
      journal: "Chemical Geology",
      year: 2017,
      issn: "92541",
      link: "https://doi.org/10.1016/j.chemgeo.2017.06.036",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Provenance of sediments in the Marwar Supergroup, Rajasthan, India: Implications for basin evolution and Neoproterozoic global events",
      authors: "George B.G., Ray J.S.",
      journal: "Journal of Asian Earth Sciences",
      year: 2017,
      issn: "13679120",
      link: "https://doi.org/10.1016/j.jseaes.2017.07.027",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Sedimentological analysis of a Late Quaternary coastal dune system: An example from Gopnath, south-east Saurashtra, western India.",
      authors: "Acharya B. & Bhatt, N.",
      journal: "Sedimentology",
      year: 2019,
      issn: "13653091",
      link: "https://onlinelibrary.wiley.com/journal/13653091",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Relative assessment of tectonic activity along the seismically active Katrol Hill Fault, Kachchh, Western India.",
      authors: "Das, A., Prizomwala, S.P., Solanki, T., Chauhan, G., Thakkar, M.G. & Bhatt, N.",
      journal: "Journal of Geological Society of India",
      year: 2019,
      issn: "167622",
      link: "https://www.springer.com/journal/12594",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Genetic sequence stratigraphy on the basis of ichnology for the Middle Jurassic basin margin succession of Chorar Island (eastern Kachchh Basin, western India)",
      authors: "Darngawn J.L., Patel S.J., Joseph J.K., Shitole A.D.",
      journal: "Geologos",
      year: 2019,
      issn: "14268981",
      link: "https://doi.org/10.2478/logos-2019-0003",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Profilling Along Banni Plains And Bounding Faults, Kachchh, Western India Using Microtremors Method",
      authors: "Sant, D. A., Parvez I. A., Rangarajan, G., Patel, S. J., Bhatt, M. N. and Sanoop S. T. A.",
      journal: "Journal of Asian Earth Sciences",
      year: 2017,
      issn: "13679120",
      link: "dx.doi.org/10.1016/j.jseaes.2017.06.002",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Fold interference patterns in Meso-Proterozoic Champaner fold belt (CFB) Gujarat, western India",
      authors: "Joshi A.U.",
      journal: "Journal of Earth System Science",
      year: 2019,
      issn: "23474327",
      link: "https://doi.org/10.1007/s12040-019-1075-z",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Fish-hook shape intrafolial fold train in quartzite–metapelite band, Lunavada region, NE Gujarat, western India",
      authors: "Joshi A.U., Limaye M.A., Deota B.S.",
      journal: "International Journal of Earth Sciences",
      year: 2019,
      issn: "14373254",
      link: "https://doi.org/10.1007/s00531-018-1639-1",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Optical dating of late Quaternary carbonate sequences of Saurashtra, western India.",
      authors: "Sharma, K., Bhatt, N., Shukla, A.D., Cheong, D.K. & Singhvi, A.K.",
      journal: "Quaternary Research",
      year: 2017,
      issn: "335894",
      link: "https://www.cambridge.org/core/journals/quaternary-research",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Optical dating of late Quaternary carbonate sequences of Saurashtra, western India",
      authors: "Sharma K., Bhatt N., Shukla A.D., Cheong D.-K., Singhvi A.K.",
      journal: "Quaternary Research (United States)",
      year: 2017,
      issn: "335894",
      link: "https://doi.org/10.1017/qua.2016.12",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Lacustrine record of high magnitude flood events and climate variability during mid to late Holocene in the semiarid alluvial plains, western India",
      authors: "Sridhar A., Thakur B., Basavaiah N., Seth P., Tiwari P., Chamyal L.S.",
      journal: "Palaeogeography, Palaeoclimatology, Palaeoecology",
      year: 2020,
      issn: "310182",
      link: "https://doi.org/10.1016/j.palaeo.2019.109581",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Usefulness of remote-sensing and GIS techniques in estimating surface velocity, ice-thickness and volume of glacier",
      authors: "Chinmay Dongare and Bhushan Deota",
      journal: "JOURNAL OF THE MAHARAJA SAYAJIRAO UNIVERSITY OF BARODA",
      year: 2021,
      issn: "00250422",
      link: "http://ccc.msubaroda.ac.in/annualrep/upload/Journal_Paper/18484_71868.jpg",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Assessment of Ground Water Quality in and around Lignite Mine of Rajpardi, Bharuch, Gujarat",
      authors: "C. P. Mistry, N. Sharma, M. H. Trivedi",
      journal: "Research Journal of Life Sciences, Bioinformatics, Pharmaceutical and Chemical Sciences",
      year: 2019,
      issn: "24546348",
      link: "http://ccc.msubaroda.ac.in/annualrep/upload/Journal_Paper/1001_36366.pdf",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Ichnological analysis of Jurassic shallow to marginal marine deposits: example from Wagad Highland, Western India",
      authors: "Joseph J.K., Patel S.J., Darngawn J.L., Shitole A.D.",
      journal: "Ichnos:an International Journal of Plant and Animal",
      year: 2020,
      issn: "10420940",
      link: "https://doi.org/10.1080/10420940.2019.1612390",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Late Quaternary carbonate deposits of Saurashtra, western India: Insights from petrographic analysis of OSL dated sequences.",
      authors: "Sharma, K., Bhatt, N., Pandian, M.S., Cheong, D.K.",
      journal: "International Journal of Geology and Earth Sciences",
      year: 2017,
      issn: "2395647X",
      link: "http://www.ijges.com/",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Late Pleistocene–Holocene clay mineral record from the Great Rann of Kachchh basin, Western India: Implications for palaeoenvironments and sediment sources",
      authors: "Khonde N.N., Maurya D.M., Chamyal L.S.",
      journal: "Quaternary International",
      year: 2017,
      issn: "10406182",
      link: "https://doi.org/10.1016/j.quaint.2016.07.024",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Last-five-decade heavy metal pollution records from the Rewalsar Lake, Himachal Pradesh, India",
      authors: "Meena N.K., Prakasam M., Bhushan R., Sarkar S., Diwate P., Banerji U.",
      journal: "Environmental Earth Sciences",
      year: 2017,
      issn: "18666280",
      link: "https://doi.org/10.1007/s12665-016-6303-0",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Study of Palaeo-Lobate Features From South Gujarat Alluvial Plains,Western India and Their Significance",
      authors: "A.V.Joshi ,K.C.Tiwari and S.K.Biswas",
      journal: "International Journal of Research",
      year: 2016,
      issn: "2348795X",
      link: "http://ccc.msubaroda.ac.in/annualrep/upload/Journal_Paper/408_38905.pdf",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Study of Palaeo-Lobate Features from South Gujarat Alluvial Plains, Western India and Their Significance",
      authors: "Tiwari K. C.; Joshi A. V. and Biswas S. K.",
      journal: "International Journal of Research",
      year: 2016,
      issn: "23486848",
      link: "http://ccc.msubaroda.ac.in/annualrep/upload/Journal_Paper/1110_3953.pdf",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Status of human health in industrial neighbourhood: A study of golden Corridor, Vadodara, Gujarat",
      authors: "Kanchan R., Devi C.C.",
      journal: "Journal of Environmental Science and Engineering",
      year: 2016,
      issn: "0367827X",
      link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85029151041&partnerID=40&md5=4846614b7a7add662bd19d9c9a0cd527",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Spatial variations in tectonic activity along the Kachchh Mainland Fault, Kachchh, western India: implications in seismic hazard assessment",
      authors: "Prizomwala S.P., Solanki T., Chauhan G., Das A., Bhatt N., Thakkar M.G., Rastogi B.K.",
      journal: "Natural Hazards",
      year: 2016,
      issn: "0921030X",
      link: "https://doi.org/10.1007/s11069-016-2228-x",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Geomorphology of the indian coast: Review of recent work (2016-19)",
      authors: "Bhatt N.",
      journal: "Proceedings of the Indian National Science Academy",
      year: 2020,
      issn: "3700046",
      link: "https://doi.org/10.16943/ptinsa/2020/49798",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Geochemistry of calc-silicate rocks around Lunavada region, NE Gujarat: Implications for their protolith, provenance and tectonic setting",
      authors: "Akolkar G.N., Limaye M.A.",
      journal: "Journal of Earth System Science",
      year: 2020,
      issn: "23474327",
      link: "https://doi.org/10.1007/s12040-020-01463-4",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Palaeoclimatic and sea-level fluctuations from the last deglaciation to late Holocene from western India: Evidence from multiproxy studies",
      authors: "Raj R., Tripathi J.K., Kumar P., Singh S.K., Phartiyal B., Sharma A., Sridhar A., Chamyal L.S.",
      journal: "Journal of Asian Earth Sciences",
      year: 2021,
      issn: "13679120",
      link: "https://doi.org/10.1016/j.jseaes.2021.104777",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Ichnology of the Callovian-Oxfordian rocks of the Katrol hill range, Kachchh, western India",
      authors: "Solanki P.M., Bhatt N.Y., Patel S.J., Patel J.M.",
      journal: "Journal of the Geological Society of India",
      year: 2017,
      issn: "167622",
      link: "https://doi.org/10.1007/s12594-017-0734-4",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Mineral Chemistry and Reaction Textures of Calc-silicate Rocks of the Lunavada Region, SAMB, NE Gujarat",
      authors: "Mineral Chemistry and Reaction Textures of Calc-silicate Rocks of the Lunavada Region, SAMB, NE Gujarat",
      journal: "Journal of the Geological Society of India",
      year: 2021,
      issn: "167622",
      link: "https://doi.org/10.1007/s12594-021-1646-x",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Late Quaternary drainage reorganization assisted by surface faulting: The example of the Katrol Hill Fault zone, Kachchh, western India",
      authors: "Maurya D.M., Tiwari P., Shaikh M., Patidar A.K., Vanik N., Padmalal A., Chamyal L.S.",
      journal: "Earth Surface Processes and Landforms",
      year: 2021,
      issn: "1979337",
      link: "https://doi.org/10.1002/esp.5097",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Morphotectonic control on Quaternary sedimentation and landscape evolution, Pachham Island, Kachchh, Western India",
      authors: "Chowksey V., Maurya D.M., Khonde N., Chamyal L.S.",
      journal: "Arabian Journal of Geosciences",
      year: 2016,
      issn: "18667511",
      link: "https://doi.org/10.1007/s12517-016-2625-1",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Mineralogical Studies of Low-Grade Iron Ore from Jharkhand–Orissa Region, India",
      authors: "Chokshi Y., Limaye M.A., Dutta S.K., Lodhari D.R.",
      journal: "Transactions of the Indian Institute of Metals",
      year: 2016,
      issn: "9722815",
      link: "https://doi.org/10.1007/s12666-015-0740-4",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Holocene paleoenvironmental changes in the marginal marine basin of Great Rann of Kachchh, western India: Insights from sedimentological and mineral magnetic studies on a ∼60 m long core",
      authors: "Kumar A., Maurya D.M., Khonde N., Phartiyal B., Arif M., Giosan L., Chamyal L.S.",
      journal: "Quaternary International",
      year: 2021,
      issn: "10406182",
      link: "https://doi.org/10.1016/j.quaint.2021.02.039",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Late quaternary fluvio-aeolian interaction: Palaeoenvironment and palaeoclimatic conditions in the pediment zone of Vatrak River basin, western India",
      authors: "Raj R., Chamyal L.S., Juyal N., Phartiyal B., Ali S.N., Thakur B.",
      journal: "Zeitschrift fur Geomorphologie",
      year: 2016,
      issn: "3728854",
      link: "https://doi.org/10.1127/zfg/2016/0234",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Weathering pattern of Youngest Toba Tuff, Purna alluvial basin, Central India",
      authors: "Srivastava A.K., Singh A., Sharma N., Khare N.",
      journal: "Arabian Journal of Geosciences",
      year: 2020,
      issn: "18667511",
      link: "https://doi.org/10.1007/s12517-020-05641-y",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Late Pleistocene-Holocene uplift driven terrace formation and climate-tectonic interplay from a seismically active intraplate setting: An example from Kachchh, Western India",
      authors: "Prizomwala S.P., Das A., Chauhan G., Solanki T., Basavaiah N., Bhatt N., Thakkar M.G., Rastogi B.K.",
      journal: "Journal of Asian Earth Sciences",
      year: 2016,
      issn: "13679120",
      link: "https://doi.org/10.1016/j.jseaes.2016.04.013",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Geological evidences of extreme waves along the Gujarat coast of western India",
      authors: "Bhatt N., Murari M.K., Ukey V., Prizomwala S.P., Singhvi A.K.",
      journal: "Natural Hazards",
      year: 2016,
      issn: "0921030X",
      link: "https://doi.org/10.1007/s11069-016-2507-6",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Geochemical and Sr-Nd isotopic variations in palaeoflood deposits at mainstem-tributary junction, western India: Implications on late Holocene flood events",
      authors: "Sridhar A., Bhushan R., Balaji D., Band S., Chamyal L.S.",
      journal: "Catena",
      year: 2016,
      issn: "3418162",
      link: "https://doi.org/10.1016/j.catena.2015.12.004",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Groundwater Quality Assessment Using Water Quality Index and GIS: A study of Vishwamitri Watershed, Gujarat",
      authors: "B Bhatt, Janak P. Joshi",
      journal: "Journal of Emerging Technologies and Innovative Research",
      year: 2019,
      issn: "23495162",
      link: "http://ccc.msubaroda.ac.in/annualrep/upload/Journal_Paper/154_41894.pdf",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "A tectono-geomorphological perspective of micro-earthquake swarm activity prone areas around Bhavnagar and Jamnagar in Saurashtra, western India",
      authors: "Vanik N., Maurya D.M., Shaikh M., Padmalal A., Tiwari P., Chamyal L.S.",
      journal: "Quaternary International",
      year: 2021,
      issn: "10406182",
      link: "https://doi.org/10.1016/j.quaint.2020.12.041",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Tectonic evolution of the intra-uplift Vigodi-Gugriana-Khirasra-Netra Fault System in the seismically active Kachchh rift basin, India: Implications for the western continental margin of the Indian plate",
      authors: "Shaikh M.A., Maurya D.M., Mukherjee S., Vanik N.P., Padmalal A., Chamyal L.S.",
      journal: "Journal of Structural Geology",
      year: 2020,
      issn: "1918141",
      link: "https://doi.org/10.1016/j.jsg.2020.104124",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Tectonic evolution of intra-uplift Vigodi-Gugriana-Khirasra-Netra Fault System: Insights from paleostress analysis and GPR investigations in the seismically active Kachchh rift basin, western India",
      authors: "M. Shaikh, D. M. Maurya, S.Mukherjee, N.Vanik, A.Padmalal, L. S. Chamyal",
      journal: "Journal of Structural Geology",
      year: 2020,
      issn: "1918141",
      link: "http://ccc.msubaroda.ac.in/annualrep/upload/Journal_Paper/174_71034.pdf",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Geochemistry of paleosols and calcretes from Quaternary sediments of Purna alluvial basin, central India: An emphasis on paleoclimate",
      authors: "Srivastava A.K., Bansod M.N., Singh A., Sharma N.",
      journal: "Rhizosphere",
      year: 2019,
      issn: "24522198",
      link: "https://doi.org/10.1016/j.rhisph.2019.100162",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        file: file
      }));
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.authors || !formData.journal) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      setIsLoading(true);
      const newPaper = {
        title: formData.title,
        authors: formData.authors,
        journal: formData.journal,
        year: parseInt(formData.year),
        issn: formData.issn || 'N/A',
        link: formData.link || '',
        faculty: "Faculty of Science",
        department: "Department of Geology",
      };

      const response = await fetch('/api/research-papers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPaper),
      });

      const data = await response.json();

      if (data.success) {
        setUploadedPapers(prev => [data.paper, ...prev]);
        setFormData({
          title: '',
          authors: '',
          journal: '',
          year: new Date().getFullYear(),
          issn: '',
          link: '',
          file: null,
        });
        setShowUploadForm(false);
        alert('Research paper uploaded successfully!');
      } else {
        alert('Error uploading paper: ' + data.error);
      }
    } catch (error) {
      console.error('Error uploading paper:', error);
      alert('Error uploading paper: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const allPublications = [...uploadedPapers, ...researchPublications];
  const totalPages = Math.ceil(allPublications.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-[#050908] text-slate-100">
      {/* Hero Section */}
      <section className="bg-[#0b1412] py-16 text-slate-100">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h1 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C8A14D]">
              Research & Publications
            </h1>
            <p className="mt-3 text-4xl font-bold text-slate-50">
              Research Projects & Publications
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-200 max-w-3xl mx-auto">
              Explore our department's funded research projects and peer-reviewed publications contributing to geological sciences.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="border-b border-white/10 bg-[#0b1412]">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('projects')}
              className={`py-4 px-2 font-semibold text-sm uppercase tracking-wide transition-colors border-b-2 ${
                activeTab === 'projects'
                  ? 'text-[#C8A14D] border-[#C8A14D]'
                  : 'text-slate-400 border-transparent hover:text-slate-200'
              }`}
            >
              Research Projects
            </button>
            <button
              onClick={() => setActiveTab('publications')}
              className={`py-4 px-2 font-semibold text-sm uppercase tracking-wide transition-colors border-b-2 ${
                activeTab === 'publications'
                  ? 'text-[#C8A14D] border-[#C8A14D]'
                  : 'text-slate-400 border-transparent hover:text-slate-200'
              }`}
            >
              Research Publications
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          {activeTab === 'projects' && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {researchProjects.map((project, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[#101b18] shadow-md shadow-black/40 hover:border-[#C8A14D]/40 transition-all hover:shadow-lg hover:shadow-black/60"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
                        {project.type}
                      </span>
                      <span className="text-xs text-slate-400">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-sm font-semibold text-slate-50 mb-3 line-clamp-3">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-300 mb-3 font-medium">
                      {project.name}
                    </p>

                    <div className="space-y-2 border-t border-white/10 pt-4">
                      <p className="text-xs text-slate-200">
                        <span className="text-[#C8A14D] font-semibold">Agency:</span> {project.agency}
                      </p>
                      <p className="text-xs text-slate-200">
                        <span className="text-[#C8A14D] font-semibold">Price:</span> {project.price}
                      </p>
                      <p className="text-xs text-slate-200">
                        <span className="text-[#C8A14D] font-semibold">Duration:</span> {project.duration}
                      </p>
                      <p className="text-xs text-slate-200">
                        <span className="text-[#C8A14D] font-semibold">Tag:</span> {project.tag}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'publications' && (
            <div>
              {/* Upload Section */}
              <div className="mb-8 rounded-2xl border border-white/10 bg-[#101b18] p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4">
                  <h2 className="text-base sm:text-lg font-semibold text-slate-50">Upload Research Paper</h2>
                  <button
                    onClick={() => setShowUploadForm(!showUploadForm)}
                    className="w-full sm:w-auto px-4 py-2 rounded-lg bg-[#C8A14D] text-[#050908] font-semibold text-sm hover:bg-[#C8A14D]/90 transition-colors"
                  >
                    {showUploadForm ? 'Cancel' : '+ Add Paper'}
                  </button>
                </div>

                {showUploadForm && (
                  <form onSubmit={handleUpload} className="space-y-4 border-t border-white/10 pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          Paper Title *
                        </label>
                        <input
                          type="text"
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          placeholder="Enter paper title"
                          className="w-full px-3 py-2 rounded-lg bg-[#0b1412] border border-white/20 text-slate-100 placeholder-slate-500 focus:border-[#C8A14D] focus:outline-none transition-colors text-sm"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          Authors *
                        </label>
                        <input
                          type="text"
                          name="authors"
                          value={formData.authors}
                          onChange={handleInputChange}
                          placeholder="Enter author names"
                          className="w-full px-3 py-2 rounded-lg bg-[#0b1412] border border-white/20 text-slate-100 placeholder-slate-500 focus:border-[#C8A14D] focus:outline-none transition-colors text-sm"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          Journal Name *
                        </label>
                        <input
                          type="text"
                          name="journal"
                          value={formData.journal}
                          onChange={handleInputChange}
                          placeholder="Enter journal name"
                          className="w-full px-3 py-2 rounded-lg bg-[#0b1412] border border-white/20 text-slate-100 placeholder-slate-500 focus:border-[#C8A14D] focus:outline-none transition-colors text-sm"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          Year of Publication
                        </label>
                        <input
                          type="number"
                          name="year"
                          value={formData.year}
                          onChange={handleInputChange}
                          min="1900"
                          max={new Date().getFullYear()}
                          className="w-full px-3 py-2 rounded-lg bg-[#0b1412] border border-white/20 text-slate-100 focus:border-[#C8A14D] focus:outline-none transition-colors text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          ISSN Number
                        </label>
                        <input
                          type="text"
                          name="issn"
                          value={formData.issn}
                          onChange={handleInputChange}
                          placeholder="Enter ISSN"
                          className="w-full px-3 py-2 rounded-lg bg-[#0b1412] border border-white/20 text-slate-100 placeholder-slate-500 focus:border-[#C8A14D] focus:outline-none transition-colors text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          Article Link
                        </label>
                        <input
                          type="url"
                          name="link"
                          value={formData.link}
                          onChange={handleInputChange}
                          placeholder="https://example.com"
                          className="w-full px-3 py-2 rounded-lg bg-[#0b1412] border border-white/20 text-slate-100 placeholder-slate-500 focus:border-[#C8A14D] focus:outline-none transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-white/10">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="px-6 py-2 rounded-lg bg-[#C8A14D] text-[#050908] font-semibold text-sm hover:bg-[#C8A14D]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        {isLoading ? 'Uploading...' : 'Upload Paper'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowUploadForm(false)}
                        disabled={isLoading}
                        className="px-6 py-2 rounded-lg border border-white/20 bg-[#0b1412] text-slate-200 font-semibold text-sm hover:bg-[#151f1c] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}

                {uploadedPapers.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-xs text-slate-400 mb-3">
                      {uploadedPapers.length} paper(s) uploaded
                    </p>
                  </div>
                )}
              </div>

              {/* Publications List */}
              <div className="space-y-4">
                {allPublications
                  .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                  .map((pub, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-2xl border border-white/10 bg-[#101b18] shadow-md shadow-black/40 hover:border-[#C8A14D]/40 transition-all p-4 sm:p-6"
                    >
                      <h3 className="text-sm sm:text-base font-semibold text-slate-50 mb-2 line-clamp-2">
                        {pub.title}
                      </h3>

                      <p className="text-xs text-slate-300 mb-3 line-clamp-1">
                        <span className="text-[#C8A14D] font-semibold">Authors:</span> {pub.authors}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 border-t border-white/10 pt-4">
                        <div>
                          <p className="text-xs text-slate-400 mb-1">Journal</p>
                          <p className="text-xs text-slate-200 line-clamp-2">{pub.journal}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 mb-1">Year</p>
                          <p className="text-xs text-slate-200">{pub.year}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 mb-1">ISSN</p>
                          <p className="text-xs text-slate-200 line-clamp-1">{pub.issn || 'N/A'}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 mb-1">Link</p>
                          {pub.link ? (
                            <a
                              href={pub.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-[#C8A14D] hover:text-[#C8A14D]/80 transition-colors underline break-all"
                            >
                              View
                            </a>
                          ) : (
                            <p className="text-xs text-slate-400">N/A</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Pagination */}
              <div className="mt-8 flex flex-col items-center gap-4">
                {/* Desktop: Full pagination */}
                <div className="hidden md:flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg border border-white/20 bg-[#101b18] text-sm font-semibold text-slate-200 hover:bg-[#151f1c] hover:border-[#C8A14D]/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    ← Previous
                  </button>

                  <div className="flex gap-2 flex-wrap justify-center">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                          currentPage === page
                            ? 'bg-[#C8A14D] text-[#050908]'
                            : 'border border-white/20 bg-[#101b18] text-slate-200 hover:bg-[#151f1c] hover:border-[#C8A14D]/50'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg border border-white/20 bg-[#101b18] text-sm font-semibold text-slate-200 hover:bg-[#151f1c] hover:border-[#C8A14D]/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next →
                  </button>
                </div>

                {/* Mobile: Simplified pagination */}
                <div className="md:hidden flex items-center gap-2 w-full">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="flex-1 px-3 py-2 rounded-lg border border-white/20 bg-[#101b18] text-xs font-semibold text-slate-200 hover:bg-[#151f1c] hover:border-[#C8A14D]/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    ← Prev
                  </button>

                  <div className="flex-1 text-center">
                    <p className="text-xs font-semibold text-[#C8A14D]">
                      {currentPage} / {totalPages}
                    </p>
                  </div>

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="flex-1 px-3 py-2 rounded-lg border border-white/20 bg-[#101b18] text-xs font-semibold text-slate-200 hover:bg-[#151f1c] hover:border-[#C8A14D]/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next →
                  </button>
                </div>

                <p className="text-xs text-slate-400 text-center px-2">
                  Showing {Math.min(currentPage * itemsPerPage, allPublications.length)} of {allPublications.length} publications
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
