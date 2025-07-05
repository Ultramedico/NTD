import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import Abdull from "./../assets/DP.jpg";
const TeamPage = () => {
  const teamMembers = [
    {
      name: "Mustapha Ashiru",
      role: "Pharamacy Student",
      bio: "5+ years in infectious disease surveillance across  Africa",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    // {
    //   name: "Emeka Okafor",
    //   role: "Lead Data Scientist",
    //   bio: "Machine learning specialist focused on public health applications",
    //   photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    // },
    // {
    //   name: "Amina Mohammed",
    //   role: "Public Health Director",
    //   bio: "Former WHO consultant with expertise in NTD elimination",
    //   photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    // },
    {
      name: "Abdullah Ahmad",
      role: "Software Engineer",
      bio: "Full-stack developer building our dashboard interfaces, Microbiolgy graduate",
      photo: Abdull
    },
    {
      name: "Ngozi Chukwu",
      role: "Field Operations",
      bio: "Coordinates data collection across 12 states in Nigeria",
      photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Kwame Mensah",
      role: "Product Manager",
      bio: "Ensures our solutions meet frontline health worker needs",
      photo: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-white min-h-screen"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Team</h1>
          <p className="text-xl text-gray-600">
            The minds behind NTD360 - passionate innovators dedicated to preventing outbreaks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300"
            >
              <img 
                src={member.photo} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <button className="flex items-center text-emerald-600 hover:text-emerald-800 transition duration-300">
                  <FaLinkedin className="mr-2" />
                  Connect
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-emerald-100 inline-block px-8 py-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Join Our Team</h3>
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
              We're always looking for talented researchers, developers, and field workers to join our mission.
            </p>
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition duration-300">
              View Open Positions
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TeamPage;