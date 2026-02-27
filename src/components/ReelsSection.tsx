interface Video {
  url: string;
  embedUrl: string;
}

const ReelsSection = () => {
  const videos: Video[] = [
    {
      url: 'https://www.facebook.com/reel/1591170295410493',
      embedUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1591170295410493&show_text=false&width=400&t=0'
    },
    {
      url: 'https://www.facebook.com/reel/2677575582590388',
      embedUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2677575582590388&show_text=false&width=400&t=0'
    },
    {
      url: 'https://www.facebook.com/reel/886118987421472',
      embedUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F886118987421472&show_text=false&width=400&t=0'
    },
    {
      url: 'https://www.facebook.com/reel/1033896592024677',
      embedUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1033896592024677&show_text=false&width=400&t=0'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-accent-gray">
      <div className="max-w-7xl mx-auto px-[15px] sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            See Our Work in Action
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Watch how we transform properties and deliver exceptional results
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-[280px]"
            >
              <div className="aspect-[9/16] relative">
                <iframe
                  src={video.embedUrl}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;
