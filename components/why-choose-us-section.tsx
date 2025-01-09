export function WhyChooseUsSection() {
  const reasons = [
    "Experienced mentors with industry expertise.",
    "Completely free training for eligible candidates.",
    "Hands-on learning with real-world projects.",
    "Job readiness and career guidance post-training.",
    "Part of the trusted TensaiDevs ecosystem."
  ]

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#1A4DB5]">Why TensaiAcademy?</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <li key={index} className="flex items-start mb-4">
              <svg className="w-6 h-6 text-[#4D31B4] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-lg">{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

