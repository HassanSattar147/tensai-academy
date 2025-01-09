export function ProgramsSection() {
  const programs = [
    "Full-Stack Web Development (MERN Stack)",
    "Artificial Intelligence & Machine Learning",
    "Blockchain & Decentralized Applications",
    "Technical Interview Preparation",
    "Industry-relevant Soft Skills"
  ]

  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#1A4DB5]">What We Teach</h2>
        <p className="text-lg text-center mb-8">
          Our comprehensive training programs are designed to equip you with the most in-demand skills for the tech industry. We focus on:
        </p>
        <ul className="list-disc list-inside max-w-2xl mx-auto">
          {programs.map((program, index) => (
            <li key={index} className="text-lg mb-2">{program}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

