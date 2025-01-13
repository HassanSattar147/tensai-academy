import React from "react";

interface Video {
  title: string;
  description: string;
  videoId: string;
}

const videos: Video[] = [
  {
    title: "TensaiDevs Introduction",
    description: "We empower the next generation of professionals through innovative, free educational resources and cutting-edge programs. ",
    videoId: "4l90IYPzYA0", // Replace with actual video ID
  },
  {
    title: "How TensaiDevs Provides Free Education",
    description: "Learn how TensaiDevs offers free education to students.",
    videoId: "K11VC3vIjOE", // Replace with actual video ID
  },
  // {
  //   title: "TensaiDevs AI Batch Announcement",
  //   description: "Announcement for the new AI batch at TensaiDevs.",
  //   videoId: "dQw4w9WgXcQ", // Replace with actual video ID
  // },
];

const VideoSection: React.FC<{ whiteBG?: boolean }> = ({ whiteBG }) => {
  return (
    <section
      className={`py-12 px-4 sm:px-6 lg:px-8 w-full ${
        whiteBG ? "bg-white" : "bg-gray-100"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#1A4DB5]">
          Watch Our Videos
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Discover what TensaiDevs is all about through our engaging videos.
          Learn how we provide free education, hear about our latest AI batch
          announcements, and get inspired by our mission. These videos are your
          gateway to understanding the TensaiDevs community and the
          transformative learning experiences we offer.
        </p>
        <div className="space-y-8">
          {videos.map((video, index) => (
            <div key={index} className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 pr-0 sm:pr-4">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full aspect-video rounded-xl"
                  title={video.title}
                ></iframe>
              </div>
              <div className="w-full sm:w-1/2 pl-0 sm:pl-4">
                <h3 className="text-xl font-bold mb-4">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
