export function ProgramsSection() {
  const programs = [
    "Artificial Intelligence & Machine Learning (AI & ML)",
    "Full-Stack Web Development (MERN Stack)",
    "Content Management Systems (WordPress, Shopify, Webflow)",
    "Web Designing (UI/UX) and Graphics Designing",
    "Video Editing and Animations",
    "Digital Marketing and Management",
    "SEO and Content Writing",
  ];

  return (
    <section className="w-full py-16 bg-gray-100" id="programs">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#1A4DB5]">
          What We Teach
        </h2>
        <p className="text-lg text-center mb-8">
          Our comprehensive training programs are designed to equip you with the
          most in-demand skills for the tech industry. We focus on:
        </p>
        <ul className=" text-center">
          {programs.map((program, index) => (
            <li key={index} className="text-lg mb-2">
              - {program}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
