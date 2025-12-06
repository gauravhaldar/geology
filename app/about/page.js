"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const academicStats = [
  { label: "Number of Faculties", value: 14 },
  { label: "Number of Colleges", value: 3 },
  { label: "Number of Institutes", value: 9 },
  { label: "Number of Schools", value: 2 },
  { label: "Number of Departments", value: 111 },
  { label: "Number of Undergraduate Academic Programmes", value: 88 },
  { label: "Number of Postgraduate Academic Programmes", value: 121 },
  { label: "Number of Ph.D. Programmes", value: 68 },
  { label: "Number of Postgraduate Diploma Academic Programmes", value: 34 },
  { label: "Number of Enrolled Students", value: 47000, suffix: "+" },
  { label: "Number of Registered Ph.D. Scholars", value: 1100, suffix: "+" },
];

const importantVisitors = [
  {
    srNo: 1,
    name: "Shri B. G. Kher",
    designation: "Former Chief Minister of Bombay",
    purpose: "Distinguished Guest in Convocation",
    date: "06-10-1951",
    image: "/visitors/1.jpg",
  },
  {
    srNo: 2,
    name: "Dr. Amarnath Jha",
    designation: "Vice Chancellor of The University of Allahabad",
    purpose: "Distinguished Guest in Convocation",
    date: "04-10-1954",
    image: "/visitors/2.jpg",
  },
  {
    srNo: 3,
    name: "Dr. S. S. Bhatnagar",
    designation: "Indian Scientist",
    purpose: "Distinguished Guest in Convocation",
    date: "10-10-1953",
    image: "/visitors/3.jpg",
  },
  {
    srNo: 4,
    name: "Shri V. T. Krishnamachari",
    designation: "Indian civil servant and administrator",
    purpose: "Distinguished Guest in Convocation",
    date: "17-10-1954",
    image: "/visitors/4.jpg",
  },
  {
    srNo: 5,
    name: "Dr. Radhakrishnan",
    designation: "Former President of India",
    purpose: "Distinguished Guest in Convocation",
    date: "10-12-1955",
    image: "/visitors/5.jpg",
  },
  {
    srNo: 6,
    name: "Dr. John Matthai",
    designation: "Former Railway Minister of India",
    purpose: "Distinguished Guest in Convocation",
    date: "13-10-1956",
    image: "/visitors/6.jpg",
  },
  {
    srNo: 7,
    name: "Shrimati Hansa Mehta",
    designation: "Social Activist, Educator, Independence activist",
    purpose: "Distinguished Guest in Convocation",
    date: "10-12-1957",
    image: "/visitors/7.jpg",
  },
  {
    srNo: 8,
    name: "Dr. C. D. Deshmukh",
    designation: "Indian Civil Servant",
    purpose: "Distinguished Guest in Convocation",
    date: "17-10-1958",
    image: "/visitors/8.jpg",
  },
  {
    srNo: 9,
    name: "Shri Sri Prakasa",
    designation: "Indian Politician, Freedom Fighter and Administrator",
    purpose: "Distinguished Guest in Convocation",
    date: "17-10-1959",
    image: "/visitors/9.jpg",
  },
  {
    srNo: 10,
    name: "Dr. K. L. Shrimali",
    designation: "Union Education Minister of India",
    purpose: "Distinguished Guest in Convocation",
    date: "15-10-1960",
    image: "/visitors/10.jpg",
  },
  {
    srNo: 11,
    name: "H. E. Mehdi Nawaz Jung",
    designation: "Indian Bureaucrat",
    purpose: "Distinguished Guest in Convocation",
    date: "21-10-1961",
    image: "/visitors/11.jpg",
  },
  {
    srNo: 12,
    name: "Shri M. C. Setalvad",
    designation: "Attorney General for India",
    purpose: "Distinguished Guest in Convocation",
    date: "17-11-1962",
    image: "/visitors/12.jpg",
  },
  {
    srNo: 13,
    name: "Professor Humayun Kabir",
    designation: "Poet, Novalist, Educationist, Politician",
    purpose: "Distinguished Guest in Convocation",
    date: "31-11-1963",
    image: "/visitors/13.jpg",
  },
  {
    srNo: 14,
    name: "Shri K. M. Munshi",
    designation: "Indian Independence Movement Activist",
    purpose: "Distinguished Guest in Convocation",
    date: "29-11-1964",
    image: "/visitors/14.jpg",
  },
  {
    srNo: 15,
    name: "Professor M. S. Thacker",
    designation: "Electrical Engineer",
    purpose: "Distinguished Guest in Convocation",
    date: "27-11-1965",
    image: "/visitors/15.jpg",
  },
  {
    srNo: 16,
    name: "Prof. V. K. R. V. Rao",
    designation: "Indian Economist",
    purpose: "Distinguished Guest in Convocation",
    date: "22-10-1966",
    image: "/visitors/16.jpg",
  },
  {
    srNo: 17,
    name: "Dr. P. B. Gajendragadkar",
    designation: "Former Chief Justice of India",
    purpose: "Distinguished Guest in Convocation",
    date: "27-11-1967",
    image: "/visitors/17.jpg",
  },
  {
    srNo: 18,
    name: "Dr. D. S. Kothari",
    designation: "Eminent Indian Scientist",
    purpose: "Distinguished Guest in Convocation",
    date: "10-12-1968",
    image: "/visitors/18.jpg",
  },
  {
    srNo: 19,
    name: "Rajpalshri Shriman Narayan",
    designation: "Former Governor of Gujarat",
    purpose: "Distinguished Guest in Convocation",
    date: "22-11-1969",
    image: "/visitors/19.jpg",
  },
  {
    srNo: 20,
    name: "Dr. Karan Singh",
    designation: "Indian Politician, Philanthropist and Poet",
    purpose: "Distinguished Guest in Convocation",
    date: "12-05-1970",
    image: "/visitors/20.jpg",
  },
  {
    srNo: 21,
    name: "Shri G. S. Pathak",
    designation: "4th Vice President of India",
    purpose: "Distinguished Guest in Convocation",
    date: "12-04-1971",
    image: "/visitors/21.jpg",
  },
  {
    srNo: 22,
    name: "Shri H. M. Patel",
    designation: "Indian Civil Servant",
    purpose: "Distinguished Guest in Convocation",
    date: "12-02-1972",
    image: "/visitors/22.jpg",
  },
  {
    srNo: 23,
    name: "Professor S. Nurul Hasan",
    designation:
      "Indian Historian and an Elder Statesman in Government of India",
    purpose: "Distinguished Guest in Convocation",
    date: "11-03-1973",
    image: "/visitors/23.jpg",
  },
  {
    srNo: 24,
    name: "Shri K. K. Viswanathan",
    designation: "Former Governor of Gujarat",
    purpose: "Distinguished Guest in Convocation",
    date: "12-07-1974",
    image: "/visitors/24.jpg",
  },
  {
    srNo: 25,
    name: "Shri Babubhai Jashbhai Patel",
    designation: "Former Chief Minister of Gujarat",
    purpose: "Distinguished Guest in Convocation",
    date: "12-10-1977",
    image: "/visitors/25.jpg",
  },
  {
    srNo: 26,
    name: "Shri P. C. Chunder",
    designation: "Former Union Minister of India",
    purpose: "Distinguished Guest in Convocation",
    date: "16-12-1978",
    image: "/visitors/26.jpg",
  },
  {
    srNo: 27,
    name: "Smt. Sharda Mukherjee",
    designation:
      "Former Governor of Andhra Pradesh and Gujarat",
    purpose: "Distinguished Guest in Convocation",
    date: "12-08-1979",
    image: "/visitors/27.jpg",
  },
  {
    srNo: 28,
    name: "I. G. Patel",
    designation: "Fourteenth Governor of the Reserve Bank of India",
    purpose: "Distinguished Guest in Convocation",
    date: "12-06-1980",
    image: "/visitors/28.jpg",
  },
  {
    srNo: 29,
    name: "Shri Nani A. Palkhiwala",
    designation: "Indian Jurist and Liberal Economist",
    purpose: "Distinguished Guest in Convocation",
    date: "19-12-1981",
    image: "/visitors/29.jpg",
  },
  {
    srNo: 30,
    name: "Smt. Pupul Jayakar",
    designation: "Indian Cultural Activist and Writer",
    purpose: "Distinguished Guest in Convocation",
    date: "12-11-1982",
    image: "/visitors/30.jpg",
  },
  {
    srNo: 31,
    name: "Dr. Mulkraj Anand",
    designation: "Indian Writer",
    purpose: "Distinguished Guest in Convocation",
    date: "12-10-1983",
    image: "/visitors/31.jpg",
  },
  {
    srNo: 32,
    name: "Dr. Madhuriben Shah",
    designation: "Former President of Gujarat Research Society",
    purpose: "Distinguished Guest in Convocation",
    date: "21-11-1984",
    image: "/visitors/32.jpg",
  },
  {
    srNo: 33,
    name: "Dr. Verghese Kurien",
    designation: "Social Entrepreneur",
    purpose: "Distinguished Guest in Convocation",
    date: "13-05-1986",
    image: "/visitors/33.jpg",
  },
  {
    srNo: 34,
    name: "Shri P. N. Bhagwati",
    designation: "Former Chief Justice of India",
    purpose: "Distinguished Guest in Convocation",
    date: "08-08-1987",
    image: "/visitors/34.jpg",
  },
  {
    srNo: 35,
    name: "Shri P. Shiv Shankar",
    designation: "Indian Politician",
    purpose: "Distinguished Guest in Convocation",
    date: "03-10-1989",
    image: "/visitors/35.jpg",
  },
  {
    srNo: 36,
    name: "Shri Sam Pitroda",
    designation: "Indian engineer",
    purpose: "Distinguished Guest in Convocation",
    date: "17-02-1990",
    image: "/visitors/36.jpg",
  },
  {
    srNo: 37,
    name: "Dr. M. G. K. Menon",
    designation: "Physicist and Policy Sister",
    purpose: "Distinguished Guest in Convocation",
    date: "02-06-1991",
    image: "/visitors/37.jpg",
  },
  {
    srNo: 38,
    name: "Prof. Madhu Dandawate",
    designation: "Former Finance Minister of India",
    purpose: "Distinguished Guest in Convocation",
    date: "03-10-1992",
    image: "/visitors/38.jpg",
  },
  {
    srNo: 39,
    name: "Dr. Sarup Singh",
    designation: "Indian Politician",
    purpose: "Distinguished Guest in Convocation",
    date: "03-05-1993",
    image: "/visitors/39.jpg",
  },
  {
    srNo: 40,
    name: "Dr. Pranab Mukherjee",
    designation: "Former President of India",
    purpose: "Distinguished Guest in Convocation",
    date: "21-01-1994",
    image: "/visitors/40.jpg",
  },
  {
    srNo: 41,
    name: "Prof. Y. K. Alagh",
    designation: "Indian Economist and Former Union Minister of India",
    purpose: "Distinguished Guest in Convocation",
    date: "20-02-1995",
    image: "/visitors/41.jpg",
  },
  {
    srNo: 42,
    name: "Shri T. N. Seshan",
    designation: "Former Chief Election Commissioner of India",
    purpose: "Distinguished Guest in Convocation",
    date: "23-12-1995",
    image: "/visitors/42.jpg",
  },
  {
    srNo: 43,
    name: "Shri K. R. Narayanan",
    designation: "Former President of India",
    purpose: "Distinguished Guest in Convocation",
    date: "01-12-1997",
    image: "/visitors/43.jpg",
  },
  {
    srNo: 44,
    name: "Prof. Yash Pal",
    designation: "Indian scientist",
    purpose: "Distinguished Guest in Convocation",
    date: "03-08-1998",
    image: "/visitors/44.jpg",
  },
  {
    srNo: 45,
    name: "Shri N. Vittal",
    designation: "Indian civil servant",
    purpose: "Distinguished Guest in Convocation",
    date: "21-12-1998",
    image: "/visitors/45.jpg",
  },
  {
    srNo: 46,
    name: "Dr. K. Kasturirangan",
    designation: "Indian space scientist",
    purpose: "Distinguished Guest in Convocation",
    date: "13-12-1999",
    image: "/visitors/46.jpg",
  },
  {
    srNo: 47,
    name: "Prof. M. M. Sharma",
    designation: "Indian chemical engineer",
    purpose: "Distinguished Guest in Convocation",
    date: "30-01-2001",
    image: "/visitors/47.jpg",
  },
  {
    srNo: 48,
    name: "Dr. Kiran Bedi",
    designation: "Officer in Indian Police Service",
    purpose: "Distinguished Guest in Convocation",
    date: "01-12-2002",
    image: "/visitors/48.jpg",
  },
  {
    srNo: 49,
    name: "Prof. Arun Nigavekar",
    designation: "Indian Physicist and Educator",
    purpose: "Distinguished Guest in Convocation",
    date: "15-02-2003",
    image: "/visitors/49.jpg",
  },
  {
    srNo: 50,
    name: "Shri Narendra Modi",
    designation: "Prime Minister of India",
    purpose: "Distinguished Guest in Convocation",
    date: "17-01-2004",
    image: "/visitors/50.jpg",
  },
  {
    srNo: 51,
    name: "Prof. Y. K. Alagh",
    designation: "Indian Economist and Former Union Minister of India",
    purpose: "Distinguished Guest in Convocation",
    date: "17-01-2004",
    image: "/visitors/51.jpg",
  },
  {
    srNo: 52,
    name: "Shri Monteksingh Ahluwalia",
    designation: "Indian economist and civil servant",
    purpose: "Distinguished Guest in Convocation",
    date: "10-08-2005",
    image: "/visitors/52.jpg",
  },
  {
    srNo: 53,
    name: "Prof. Sukhdev Thorat",
    designation: "Former chairman of the University Grants Commission",
    purpose: "Distinguished Guest in Convocation",
    date: "17-10-2006",
    image: "/visitors/53.jpg",
  },
  {
    srNo: 54,
    name: "Lord Karan Bilomoria",
    designation: "British Indian Entrepreneur",
    purpose: "Distinguished Guest in Convocation",
    date: "29-09-2007",
    image: "/visitors/54.jpg",
  },
  {
    srNo: 55,
    name: "Sri Sri Ravishankar",
    designation: "Spiritual Leader",
    purpose: "Distinguished Guest in Convocation",
    date: "29-09-2007",
    image: "/visitors/55.jpg",
  },
  {
    srNo: 56,
    name: "Mukesh Ambani",
    designation: "Indian Businessman",
    purpose: "Distinguished Guest in Convocation",
    date: "29-09-2007",
    image: "/visitors/56.jpg",
  },
  {
    srNo: 57,
    name: "Dr. S. S. Mantha",
    designation:
      "Chairman of All India Council for Technical Education",
    purpose: "Distinguished Guest in Convocation",
    date: "24-01-2010",
    image: "/visitors/57.jpg",
  },
  {
    srNo: 58,
    name: "Dr. Shrimati Kamala",
    designation: "Former Governor of Mizoram",
    purpose: "Distinguished Guest in Convocation",
    date: "28-12-2010",
    image: "/visitors/58.jpg",
  },
  {
    srNo: 59,
    name: "Prof. Ved Prakash",
    designation: "Former Chairman of University Grants Commission",
    purpose: "Distinguished Guest in Convocation",
    date: "17-12-2011",
    image: "/visitors/59.jpg",
  },
  {
    srNo: 60,
    name: "Dr. E. Sreedharan",
    designation: "Indian Civil Engineer",
    purpose: "Distinguished Guest in Convocation",
    date: "12-10-2012",
    image: "/visitors/60.jpg",
  },
  {
    srNo: 61,
    name: "Dr. S. S. Mantha",
    designation:
      "Chairman of All India Council for Technical Education",
    purpose: "Distinguished Guest in Convocation",
    date: "24-12-2013",
    image: "/visitors/61.jpg",
  },
  {
    srNo: 62,
    name: "Shri Om Prakash Kohli",
    designation: "Former Governor of Gujarat",
    purpose: "Distinguished Guest in Convocation",
    date: "02-06-2015",
    image: "/visitors/62.jpg",
  },
  {
    srNo: 63,
    name: "Shri Gunvant B. Shah",
    designation: "Eminent Gujarati writer and critic",
    purpose: "Distinguished Guest in Convocation",
    date: "29-01-2016",
    image: "/visitors/63.jpg",
  },
  {
    srNo: 64,
    name: "Dr. Vijay P. Bhatkar",
    designation: "Indian computer scientist",
    purpose: "Distinguished Guest in Convocation",
    date: "17-12-2016",
    image: "/visitors/64.jpg",
  },
  {
    srNo: 65,
    name: "H. E. Shri Ram Nath Kovind",
    designation: "President of India",
    purpose: "Distinguished Guest in Convocation",
    date: "22-01-2018",
    image: "/visitors/65.jpg",
  },
  {
    srNo: 66,
    name: "Shri Suresh Prabhu",
    designation: "Member of Rajya Sabha",
    purpose: "Distinguished Guest in Convocation",
    date: "30-01-2019",
    image: "/visitors/66.jpg",
  },
  {
    srNo: 67,
    name: "Shri Kamlesh N. Vyas",
    designation: "Indian Scientist",
    purpose: "Distinguished Guest in Convocation",
    date: "30-01-2019",
    image: "/visitors/67.jpg",
  },
];

const sections = [
//   {
//     id: "about-us",
//     label: "About Us",
//     title: "About The Maharaja Sayajirao University of Baroda",
//     body: [
//       "The Maharaja Sayajirao University of Baroda (MSUB) is a premier residential, teaching and affiliating university known for its academic excellence, rich legacy and vibrant campus life.",
//       "It brings together diverse disciplines, faculty and students to foster holistic education, research, innovation and community engagement.",
//     ],
//   },
  {
    id: "vision",
    label: "Vision",
    title: "Vision of The Maharaja Sayajirao University of Baroda",
    body: [
      "The Progress of a nation requires that its people should be educated. Knowledge is a necessity of man. It instils in him a desire to question and to investigate, which leads him on the path of progress.",
      "Education, in the broadest sense, must be spread everywhere. Progress can only be achieved by the spread of education.",
      "Cooperation is necessary to achieve any worthy end and this readiness to cooperate will not be found in people if they are not educated.",
    ],
  },
  {
    id: "mission",
    label: "Mission",
    title: "Mission of The Maharaja Sayajirao University of Baroda:",
    body: [
      "Sustain an environment of academic excellence and innovative research that enable students to think global and act local with a conscious focus on indigenous perspectives",
      "Striving to create an equitable and gender just society that ensures better quality of life to individuals, families, and communities..",
      "To inculcate highest human values, tolerance, Compassion, and equanimity in all the adherents, students, teachers, and support staff of the University.",
      "Promoting and enhancing high standards of Teaching, Learning and Research for an all-round development of Students.",

 "Increasing access to education by all sections of the society.",
 
"Relating knowledge to the contemporary socio-economic needs and moral concerns.",
 
"Building mutually enriching linkages with the society and its institutions.",
    ],
  },
  {
    id: "vc-desk",
    label: "From Vice Chancellor’s Desk",
    title: "From Vice Chancellor’s Desk:",
    body: [
      "It elates me to be a part of the great educational legacy established by The Maharaja Sayajirao Gaekwad the III, in the cultural and artistic city of Vadodara. I would like to extend my sincere gratitude to the Maharaja Sayajirao Gaekwad the III for making Vadodara a centre of learning. I consider myself privileged to be a part of the Maharaja Sayajirao University of Baroda (MSUB) family as a Vice Chancellor, where I can use my cross-functional experience, with the support from all the meritorious students, teachers, and all the stakeholders to take the University to new heights. Considering the vision and mission of the University, I would be grateful to lead the University and turn the vision into practical realities by providing not only education but quality education to students.",

"The academicians at the institution are experts in their specialties and are extremely skilled and professionally talented. Our academic members have been successful in publishing high-impact factor research papers in renowned journals and publication houses. When it comes to executing educational policy, the university has always been at the forefront. During the COVID outbreak, it effectively transitioned to an online teaching and assessment model while running a sizable number of online programmes. To promote the letter and spirit of the “National Education Policy 2020”, the University has made tremendous progress toward the proper implementation of the policy by organising several seminars and webinars. The learning opportunities on campus provide a good foundation for improving students' overall development.",

"Aligning with the NEP 2020 goals, the University is committed to start all the courses with multiple entry- exit system, dual degree with a holistic approach and Academic Bank of Credit (ABC) to make the learning experience enriching and accessible. We attempt to provide greatest contributions in the making of Aatma Nirbhar Bharat.",

"I firmly believe that the teachers serve as the pillars to any institution and the students as its roof, thereby, making the institution a home for knowledge and I am dedicated to make this university a joyous and dynamic place where students, teachers and the members can come together as a whole family.",
    ],
    image: "/images/vc-desk.jpg",
  },
  {
    id: "brief-profile",
    label: "Brief Profile of MSUB",
    title: "Brief Profile of The Maharaja Sayajirao University of Baroda",
    body: [
      "The Maharaja Sayajirao University of Baroda (MSU) is recognized as one of the premier institutions of higher learning and research in the country. Since its inception in 1949, the University has demonstrated a keen interest and a commitment to the sustenance and promotion of an environment, favourable to the growth and development of an academic excellence – a commitment that forms a part of the rich legacy of the institution.",

"Educational institutions which preceded the Maharaja Sayajirao University and which went on to form a part of its foundational legacy, included the “Baroda College”, one of the oldest centers of learning in Western India, founded in the year 1881 by His Highness Maharaja Sayajirao Gaekwad III. The enlightened ruler in the year 1909 established the “Kala Bhavan”. His Highness Maharaja Pratapsinhrao Gaekwad pursued the idea of establishing a University and on the recommendation of a committee, the Government of Baroda, in its order No. (R) 169-39 dated 21st February 1949, decided to establish a Residential University at Baroda. The bill for establishment of the University was passed by the Legislative Assembly and received the assent of His Highness Maharaja Pratapsinhrao Gaekwad on April 29, 1949, and the Maharaja Sayajirao University of Baroda came into existence on April 30, 1949.",

"The Maharaja Sayajirao University of Baroda, a State University with English as its medium of instruction is a premier unitary residential University, established on 30th April, 1949 recognized by Government of India under the Indian Universities Act, 1958.",

"The University has been assigned ‘A’ Grade by National Assessment and Accreditation Council with CGPA of 3.16 in the year 2016. It has one main and 6 satellite campuses, spread over 274.81 acres of land.",

"The University comprises of 111 Departments under the umbrella of 14 Faculties, 3 Constituent Colleges, 8 Institutes and 13 Centers of Specialized Studies, wherein more than 46,000 students pursue higher studies under the care and supervision of more than 1450 highly qualified and experienced teaching staff.",

"The University has 16 Hostels, Health Centre, Sports Ground, Convocation Ground, Press and Stationery Unit, Guest House as well as other academic and administrative units spread across the campus. Besides, there are 9 Multipurpose Auditoriums, 8 well equipped Seminar Halls, 2 Open Air Theatres, an Amphitheatre, a Play Box, an Art Gallery, an Arboretum, a Botanical Garden, several lecture theatres and conference rooms. The Archaeological Museum in the campus has a collection of Harappan unicorn seals, holy relics of Lord Buddha, Toraman, terracotta Buddha images and other articles. The University has an Astronomical observatory set up in 1939 to promote the field of Science, which holds an 8-inch refractor telescope.",

"The University offers a wide range of academic programmes from early childhood to Under-Graduate and Post-Graduate levels including Ph.D., with Choice Based Credit System (CBCS) for students to select value added subjects of their interest, other than Grant-in-Aid academic programmes. The University also offers innovative Science and Technology programmes in the field of Cell and Molecular Biology, Nanotechnology, Petroleum Geology, Medical Biotechnology, Bioinformatics, Disaster Management, Embedded Systems, Packaging Engineering, Welding Technology etc through some cutting edge research centers like Centre for Biotechnology, Prof. Bharat Chattoo Genome Research Centre, Centre for Molecular Genetics, Cluster Innovation Centre, Centre for Excellence in Polymer and Siemens Centre of Excellence for industry automation. Other than that, a number of socially relevant job and knowledge oriented academic programmes are also on offer by the University like M.E. in Microelectronics & VLSI Design, Master of Urban and Regional Planning, Post-Graduate Diploma in Strategic Human Resource Management, P. G. Diploma in Food Service Management as well as Bachelor and Master of Design. University also offers Certificate Courses in Temple Management, Diet and Healthy Living, Sports Nutrition, Fitness Management, etc.",

"The University interacts extensively with the Industry and the civil society in the curriculum development and updation process. The University has signed MOU’s with International Universities/Institutes like University of Cambridge, University of Laval, University of Stuttgart, University of Cornell, Ithaca, University of South Carolina, Keio University etc. for the exchange of students and teachers which adds to the enrichment of curriculum from global perspective.",

"The Centre for Life Long Learning and Extension offers 36 short term and 22 long terms courses on Ancient Indian studies, Art and craft, Human Social Development, Language Proficiency, Computer Education, Hotels/ Cookery, Personal Grooming etc.",

"Smt. Hansa Mehta Library is the Central Library in addition to 13 constituent libraries and 25 Departmental libraries with over 8 lakh books/periodicals and above 14000 digitized Dissertations/Theses. It has the single largest air-conditioned reading room which can accommodate about 1600 readers at a time and the library is open to the readers 14 hours a day.",

"The All India & Central Services Training Centre conducts classes for preparation of UPSC, State PSC and SSC pattern examination and provides guidance for exams like NDA, CDS, IB, SHO, Police, RBI and other banks.",

"The MSU has one of the largest Hostel Campuses in western India with 12 Boys’ and 4 Girls’ Hostels with all modern amenities. Hostel admission is an online process from application to allotment of room to the students.",

"The University Health Centre provides routine medical treatment to the students and staff of the University and has a physiotherapy unit, a Pathology Laboratory and Marg Counselling Centre.",

"The University has a magnificent union pavilion overlooking a large ground with outdoor facilities like an athletic track, a cricket ground, hockey and football fields, two tennis courts, two basketball courts, four volleyball courts, two kabaddi grounds, malkhamb, a kho-kho ground, a handball court and a swimming pool. Indoor facilities include table tennis hall, badminton court, gymnasium and a multipurpose hall.",

"The University has developed student digital life-cycle through MKCL. When students are admitted in their first year, they get a unique 14-digit Permanent Roll Number (PRN) which continues forever. The University has also adopted Online Admission Application System and every year it gets admission queries of nearly 45,000 students across the globe. The University introduced reforms in the examination system and all faculties have been brought under MSU Examination Portal (MEP) system. The University fees’ collection and other record keeping systems being online are of great help to the students. The recruitment process of teaching and non-teaching staff is also through online job portal. The University has started student facilitation centre from where students get all academic and research enquiries taken care at one place. The Student’s Facilitation Centre provides the information related to admissions, courses, application forms, generation of examination forms & hall tickets, results, counselling and queries related to students’ life cycle in the University.",

"Office of Career Advancement for Students looks after the counselling, training, placement and imparts training for soft skills and coordinates with the agencies for arranging the placement drive. The Faculties of Social work and Management Studies have achieved 100% placement. An overall average 65% placement is the normal trend On and Off campus. The Directorate of Students’ Welfare disburses scholarships to the students of economically weaker sections.",

"An Incubation Centre and Start Up Centre set up at the campus encourages the spirit of innovation and provides a platform to the youth for exploration and implementation of innovative ideas and their conversion into start-up ventures. Some of the academic, social & technical events like Prerna, Paramarsh, Footprints, BBA Baazigar, Cyberia, Yuvaantas etc. are initiatives exclusively planned and managed by the students. They have gained prominence and popularity not only in the state but across the country as well. Office of Alumni Affairs of the University also engages in compiling information about various alumni associations, organises monthly interacting sessions in various departments across the university, coordinates the reunions, collects details of eminent alumni and helps in Alumni registrations. Xplore MSU – A Heritage Walk initiated for the first time in the history of the University gained interest amongst large public. Institute of Leadership and Governance has also been established in University which primarily focuses on training and trans-disciplinary aspects of leadership as well as on studies on good governance structures, practices and processes which is highly essential today. The University promotes students’ participation in various processes and therefore conducts students’ election and students regularly participate very actively to develop their leadership qualities.",

"The University has always been in a pioneering position in implementing the policy issues regarding education. It rose to the occasion during the recent pandemic by conducting a large number of on-line programmes and switching over to the online mode of teaching and evaluation successfully. The University organised numerous programmes to propagate the letter and spirit of the National Education Policy and has taken significant strides towards its effective implementation.",

"All these aspects make The Maharaja Sayajirao University of Baroda one of the leading Institution in the area of Higher Education and Research.",
    ],
  },
  {
    id: "academic-structure",
    label: "Academic Structure of MSUB",
    title: "Academic Structure of MSUB",
    body: [
      "Details of the faculties, departments, schools, centres and academic programmes that constitute the academic framework of the university.",
    ],
    image: "/about/aca.jpg",
  },
  {
    id: "administrative-structure",
    label: "Administrative Structure of MSUB",
    title: "Administrative Structure of MSUB",
    body: [
      "Rajmata of Baroda Her Highness Shubhanginiraje Gaekwad is the Chancellor of the University. The Vice Chancellor is the principal executive and academic officer of the University and is to be assisted in his work by a Pro Vice­ Chancellor or a Rector. The Senate is the supreme governing body and authority of the University and the Syndicate, its executive authority. Among the other authorities of the University is the Council of Post­graduate Studies and Research which has to deal with all matters relating to instruction, training and research in the various subjects taught in the University. The other authorities of the University are the Faculties and the Boards of Studies thereunder, which are principally responsible for making recommendations in the matter of the courses of studies, text books and generally on academic matters.",
    ],
    image: "/about/adm.jpg",
  },
  {
    id: "academic-profile",
    label: "Academic Profile",
    title: "Academic Profile",
    body: [
      "Key academic statistics of the university are summarised below.",
    ],
  },
  {
    id: "important-visitors",
    label: "Important Visitors",
    title: "Important Visitors",
    body: [
      "A record of eminent scholars, dignitaries and delegations who have visited the university.",
    ],
  },
  {
    id: "msub-at-glance",
    label: "MSUB at Glance",
    title: "MSUB at a Glance",
    body: [
      "Key numbers and highlights summarizing the university’s scale, reach and impact.",
    ],
  },
  {
    id: "best-practices",
    label: "Best Practices",
    title: "Best Practices",
    body: [
      "Institutional practices that reflect innovation, quality assurance, inclusivity and community engagement.",
    ],
  },
  {
    id: "milestones",
    label: "Milestones",
    title: "Milestones",
    body: [
      "Significant milestones in the evolution and growth of MSUB over the decades.",
    ],
  },
  {
    id: "distinguished-alumni",
    label: "Distinguished Alumni",
    title: "Distinguished Alumni",
    body: [
      "Profiles of notable alumni who have excelled in diverse fields in India and abroad.",
    ],
    image: "/images/distinguished-alumni.jpg",
  },
  {
    id: "photo-gallery",
    label: "Photo Gallery",
    title: "Photo Gallery",
    body: [
      "A curated visual journey through the campuses, events and life at MSUB.",
    ],
    image: "/images/photo-gallery.jpg",
  },
  {
    id: "videos",
    label: "Videos",
    title: "Videos",
    body: [
      "Video resources and documentaries showcasing the university’s legacy and activities.",
    ],
  },
  {
    id: "code-of-conduct",
    label: "Code of Conduct",
    title: "Code of Conduct",
    body: [
      "Guidelines and principles governing the conduct of students, faculty and staff.",
    ],
  },
  {
    id: "accreditation",
    label: "Accreditation",
    title: "Accreditation",
    body: [
      "Information on statutory recognitions, accreditations and quality assurance bodies.",
    ],
  },
  {
    id: "ranking",
    label: "Ranking",
    title: "Ranking",
    body: [
      "National and international ranking details of MSUB across various frameworks.",
    ],
  },
  {
    id: "how-to-reach",
    label: "How to reach MSUB",
    title: "How to Reach MSUB",
    body: [
      "Directions and connectivity details to reach the university by road, rail and air.",
    ],
  },
  {
    id: "website-policy",
    label: "Website Policy",
    title: "Website Policy",
    body: [
      "Policies related to the use, maintenance and updating of the official university website.",
    ],
  },
  {
    id: "ict-policy",
    label: "ICT Policy",
    title: "ICT Policy",
    body: [
      "Guidelines for the use of information and communication technology resources of the university.",
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function AnimatedNumber({ value, duration = 1500, suffix = "" }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frameId;
    const start = performance.now();

    const animate = (time) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * value);
      setDisplayValue(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [value, duration]);

  return (
    <span>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function AboutPage() {
  const [activeId, setActiveId] = useState("about-us");

  const activeSection = sections.find((s) => s.id === activeId) ?? sections[0];

  return (
    <main className="min-h-screen bg-[#0f1815] py-16 text-slate-100">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-[#C8A14D]">
          About MSUB
        </h1>
        <p className="mt-3 text-center text-2xl font-semibold text-slate-50">
          Know more about The Maharaja Sayajirao University of Baroda
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-[0.9fr,1.6fr] md:items-start">
          {/* Left sidebar */}
          <aside className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
              About Us
            </h2>
            <div className="mt-4 flex flex-col gap-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => setActiveId(section.id)}
                  className={classNames(
                    "w-full rounded-md px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-[0.18em] transition",
                    activeId === section.id
                      ? "bg-[#C8A14D] text-[#1D3C34] shadow-inner"
                      : "text-slate-200 hover:bg-white/10 hover:text-slate-50"
                  )}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </aside>

          {/* Right content */}
          <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1D3C34] via-[#121b19] to-[#444A53] p-6 shadow-xl shadow-black/40">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#F1E0B3]">
              {activeSection.label}
            </p>
            <h2 className="mt-3 text-xl font-semibold text-slate-50">
              {activeSection.title}
            </h2>

            <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#F8ECD0]">
              {activeSection.body.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {activeSection.id === "academic-profile" && (
              <div className="mt-6 grid gap-4 text-xs sm:grid-cols-2">
                {academicStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-white/10 bg-black/20 px-4 py-3"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C8A14D]">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-50">
                      <AnimatedNumber
                        key={activeId}
                        value={stat.value}
                        suffix={stat.suffix ?? ""}
                      />
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeSection.id === "important-visitors" && (
              <div className="mt-6 overflow-x-auto text-xs">
                <table className="w-full min-w-[600px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-white/20 text-[10px] uppercase tracking-[0.18em] text-[#C8A14D]">
                      <th className="py-2 pr-3">Sr. No.</th>
                      <th className="py-2 pr-3">Name of Visitor</th>
                      <th className="py-2 pr-3">Designation / Area</th>
                      <th className="py-2 pr-3">Purpose of Visit</th>
                      <th className="py-2 pr-3">Date of Visit</th>
                    </tr>
                  </thead>
                  <tbody className="text-[11px]">
                    {importantVisitors.map((visitor) => (
                      <tr
                        key={visitor.srNo}
                        className="border-b border-white/10 last:border-0 hover:bg-white/5"
                      >
                        <td className="py-2 pr-3 align-middle text-slate-100">
                          {visitor.srNo}
                        </td>
                        <td className="py-2 pr-3 align-middle font-semibold text-slate-50">
                          {visitor.name}
                        </td>
                        <td className="py-2 pr-3 align-middle text-slate-200">
                          {visitor.designation}
                        </td>
                        <td className="py-2 pr-3 align-middle text-slate-200">
                          {visitor.purpose}
                        </td>
                        <td className="py-2 pr-3 align-middle text-slate-200">
                          {visitor.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeSection.image && (
              <div className="mt-6 overflow-hidden rounded-xl border border-white/15 bg-black/30">
                <Image
                  src={activeSection.image}
                  alt={activeSection.title}
                  width={900}
                  height={500}
                  className="h-90 w-full object-cover md:h-200"
                />
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
