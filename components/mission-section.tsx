import img3 from "../public/3.jpg";

const _color1 = "#1A4DB5";
const _color2 = "#4D31B4";
const opacity = "d8";
const color1 = _color1 + opacity;
const color2 = _color2 + opacity;

export function MissionSection() {
  return (
    <section
      className="w-full py-20 bg-gradient-to-r from-[#1A4DB5] to-[#4D31B4] text-white"
      style={{
        background: `linear-gradient(to right, ${color1}, ${color2}),  url(${img3.src})`,
        backgroundPosition: "center top",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white drop-shadow-lg [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
          Our Mission
        </h2>
        <p className="text-2xl md:text-3xl font-bold mb-4 text-white drop-shadow-lg [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
          Empowerment of Youth of Pakistan through Free Skills Training
        </p>
      </div>
    </section>
  );
}
