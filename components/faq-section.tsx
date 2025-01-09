import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Who can apply for TensaiDevs AI?",
      answer: "TensaiDevs AI is open to motivated individuals with a passion for technology and a desire to build a career in AI. While prior programming experience is helpful, it's not mandatory. We welcome applicants from diverse backgrounds who are committed to learning and growing in the field of AI."
    },
    {
      question: "What is the duration of the program?",
      answer: "The TensaiDevs AI program is designed to be comprehensive yet intensive. The exact duration may vary based on the specific cohort and curriculum updates, but typically ranges from 3 to 6 months of full-time study. We'll provide more specific information about the duration when you apply."
    },
    {
      question: "Will I get a certificate after completion?",
      answer: "Yes, upon successful completion of the TensaiDevs AI program, you will receive a certificate of completion. This certificate will validate your newly acquired skills and can be a valuable addition to your professional portfolio when applying for jobs in the AI field."
    }
  ]

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#1A4DB5]">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

