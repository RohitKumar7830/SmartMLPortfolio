const teamMembers = [
  {
    name: "Ravi Kumar K",
    position: "Chief Executive Officer",
    image: "TeamPic/ravi.png",
  },
  {
    name: "Rohan JH",
    position: "Chief Information Officer",
    image: "TeamPic/rohan.png",
  },
  {
    name: "Rohit Kumar BR",
    position: "Chief Technology Officer",
    image: "TeamPic/rohit.png",
  },
  {
    name: "Nikhil Chowdary",
    position: "Chief Financial Officer",
    image: "TeamPic/nikhil.png",
  },
  {
    name: "Sai Revanth M",
    position: "Chief Operating Officer",
    image: "TeamPic/revanth.png",
  },
];

const Team = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div
              key={index}
              className="p-2 shadow-lg flex flex-col items-center"
            >
              <div
                className="w-full h-60 mb-4 flex items-center justify-center rounded-xl"
                style={{
                  backgroundImage:
                    "linear-gradient(140deg, rgba(29, 40, 56, .5), rgba(29, 40, 56, .25))",
                }}
              >
                <div className="w-44 h-44 relative rounded-full flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full bg-[#FFF5EA] border-2 border-gray-700"
                    loading="lazy"
                    style={{ display: "block" }}
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1 text-white">
                {member.name}
              </h3>
              <p className="text-gray-400">{member.position}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
          {teamMembers.slice(3, 5).map((member, index) => (
            <div
              key={index}
              className="p-2 shadow-lg flex flex-col items-center"
            >
              <div
                className="w-full h-60 mb-4 flex items-center justify-center rounded-xl"
                style={{
                  backgroundImage:
                    "linear-gradient(140deg, rgba(29, 40, 56, .5), rgba(29, 40, 56, .25))",
                }}
              >
                <div className="w-44 h-44 relative rounded-full flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full bg-[#FFF5EA] border-2 border-gray-700"
                    loading="lazy"
                    style={{ display: "block" }}
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1 text-white">
                {member.name}
              </h3>
              <p className="text-gray-400">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
