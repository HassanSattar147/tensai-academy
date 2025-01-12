import { Button } from "@/components/ui/button";
// import img1 from "../public/1.jpg";
import img2 from "../public/2.jpg";
// import img3 from "../public/3.jpg";
import Link from "next/link";

// bg-gradient-to-r from-[#1A4DB5] to-[#4D31B4]

const _color1 = "#1A4DB5";
const _color2 = "#4D31B4";
const opacity = "d8";
const color1 = _color1 + opacity;
const color2 = _color2 + opacity;

export const APPLY_FORM_LINK = `https://docs.google.com/forms/d/e/1FAIpQLSdK7I_U9xD2qqoIN-EPT5pK_5sT1ZB9rYnF_i0WuOvJELRkFg/viewform?usp=dialog`;

export function HeroSection() {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center text-white"
      style={{
        background: `linear-gradient(to right, ${color1}, ${color2}),  url(${img2.src})`,
        backgroundPosition: "center top",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 text-center bg-black/20 backdrop-blur-sm py-8 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-6 text-white drop-shadow-lg [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
          TensaiDevs AI - First Batch
        </h1>
        <h3 className="text-2xl md:text-4xl font-bold mb-12 text-white drop-shadow-lg [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
          Open for Applications!
        </h3>

        <p className="text-xl md:text-2xl mb-8">
          Join our pioneering AI program and take your first step toward an
          exciting tech career.
        </p>
        <Link href={APPLY_FORM_LINK} target="_blank">
          <Button className="bg-white hover:bg-gray-200 text-[#1A4DB5] hover:text-[#1A4DB5] text-2xl px-10 py-7 rounded-full">
            Apply Now
          </Button>
        </Link>
        <p className="text-xl mb-2 mt-8 font-bold">
          Classes start on February 3, 2025
        </p>
        <p className="text-xl font-bold text-[#ff5353]">
          Applications close on January 20, 2025
        </p>
      </div>
    </section>
  );
}
