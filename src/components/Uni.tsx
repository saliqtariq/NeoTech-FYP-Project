const faculty = [
  {
    university: "Stanford University",
    logo: "https://tse2.mm.bing.net/th/id/OIP.T0rWMCMa2NYtKUvEfPGnEgHaFb?pid=Api&P=0&h=220",
    program: "Master of AI & Machine Learning",
    name: "Dr. Emily Carter",
    title: "Professor of Computer Science",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    university: "MIT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg",
    program: "Master of Data Science",
    name: "Prof. Daniel Kim",
    title: "Associate Dean of Data & AI",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    university: "Oxford University",
    logo: "https://tse1.mm.bing.net/th/id/OIP.4QGA-Zg2gJyVdMUwt1AqeQHaFj?pid=Api&P=0&h=220",
    program: "MBA in Technology Leadership",
    name: "Dr. Sophia Williams",
    title: "Professor of Business & Innovation",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    university: "Harvard University",
    logo: "https://tse3.mm.bing.net/th/id/OIP.y0ifYWnTOSrTjo1s4J9igQHaFt?pid=Api&P=0&h=220",
    program: "MSc in Cyber Security",
    name: "Dr. Michael Johnson",
    title: "Professor of Cybersecurity",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    university: "Cambridge University",
    logo: "https://tse3.mm.bing.net/th/id/OIP.SFWaqi5iFagANPAzTGYv8gHaHa?pid=Api&P=0&h=220",
    program: "MSc in Cloud Computing",
    name: "Dr. Olivia Brown",
    title: "Lecturer in Cloud & DevOps",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    university: "ETH Zurich",
    logo: "https://tse2.mm.bing.net/th/id/OIP.x-hNVgCu71rtokUDlwzKjAHaFj?pid=Api&P=0&h=220",
    program: "MSc in Robotics & Automation",
    name: "Prof. Lucas Schmidt",
    title: "Head of Robotics Department",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const logos = faculty.map((f) => ({ university: f.university, logo: f.logo }));

export default function Faculty() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Learn from <span className="text-[#3b82f6]">World-Leading Faculty</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our programmes are delivered by academics and industry leaders from
            <span className="font-semibold"> globally recognised universities</span>,
            giving you direct access to expert knowledge, cutting-edge research,
            and mentorship to accelerate your career.
          </p>
        </div>

        {/* University Logos Strip */}
        <div className="flex flex-wrap justify-center items-center gap-10 mb-16" aria-label="Partner Universities">
          {logos.map((logo, idx) => (
            <img
              key={idx}
              src={logo.logo}
              alt={`${logo.university} logo`}
              className="h-12 w-auto grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((prof, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-6 transition transform hover:-translate-y-2"
            >
              {/* University + Program */}
              <div className="flex items-center mb-4">
                <img
                  src={prof.logo}
                  alt={`${prof.university} emblem`}
                  className="h-8 w-8 object-contain mr-2"
                />
                <span className="text-sm font-medium text-gray-600">
                  {prof.university}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {prof.program}
              </h3>

              {/* Professor Info */}
              <div className="flex items-center">
                <img
                  src={prof.image}
                  alt={prof.name}
                  className="h-12 w-12 rounded-full object-cover border-2 border-[#3b82f6]/30"
                />
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">{prof.name}</p>
                  <p className="text-sm text-gray-600">{prof.title}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
