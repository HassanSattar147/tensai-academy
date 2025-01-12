import React from "react";

const WA_CHANNEL_LINK = "https://whatsapp.com/channel/0029Vaw9787DTkKBrGMVFH09";
const WA_GROUP_LINK = "https://chat.whatsapp.com/BTD2gg7ehqYDNy9HbwhKRy";

const JoinCommunity = ({ whiteBG = false }: { whiteBG?: boolean }) => {
  return (
    <section
      className={`py-12 px-4 sm:px-6 lg:px-8 w-full ${
        whiteBG ? "bg-white" : "bg-gray-100"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#1A4DB5]">
          Stay Connected with TensaiDevs
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Join our WhatsApp group and channel to get the latest updates,
          resources, and support from the TensaiDevs community.
        </p>

        <div className="mt-8 text-center">
          <a
            href={WA_GROUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className=" my-2 mx-2 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
          >
            Join WhatsApp Group
          </a>
          <a
            href={WA_CHANNEL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className=" my-2 mx-2 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 transition-colors"
          >
            Join WhatsApp Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
