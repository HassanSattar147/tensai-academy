import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1A4DB5] to-[#4D31B4] text-white">
      <div className="container mx-auto px-4 text-center bg-black/5 backdrop-blur-sm py-8 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
          TensaiDevs AI - First Batch Open for Applications!
        </h1>
        <p className="text-xl md:text-2xl mb-8">Join our pioneering AI program and take your first step toward an exciting tech career.</p>
        <Button className="bg-white hover:bg-gray-200 text-[#1A4DB5] hover:text-[#1A4DB5] text-lg px-8 py-3 rounded-full">
          Apply Now
        </Button>
        <p className="mt-4">Applications close on January 20, 2025</p>
        <p className="mt-2">Classes start on February 3, 2025</p>
      </div>
    </section>
  )
}

