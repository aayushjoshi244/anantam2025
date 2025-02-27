import AnimatedTitle from "../components/AnimatedTitle";
import Footer from "../components/Footer"; 

const AnantamHackathonPage = () => {
    const problemStatements = [
        {
          statementNumber: "2501",
          title: "Women Safety Analytics",
          description:
            "Develop a system for real-time threat detection, person and gesture analytics, gender classification, and identifying hotspots for women's safety.",
          type: "Software",
          bgClass: "bg-yellow-800",
        },
        {
          statementNumber: "2502",
          title: "Automated Bus Scheduling",
          description:
            "Create an optimized system for automating bus scheduling, route planning, and resource utilization using data analytics and GIS technologies.",
          type: "Software",
          bgClass: "bg-yellow-700",
        },
        {
          statementNumber: "2503",
          title: "Parsing Social Media Feeds",
          description:
            "Build a tool to parse social media feeds for investigators, providing screenshots and structured documentation in Android and Windows environments.",
          type: "Software",
          bgClass: "bg-yellow-600",
        },
        {
          statementNumber: "2504",
          title: "Smart Irrigation System",
          description:
            "Design a hardware-software integrated system to monitor soil moisture and weather conditions, automatically optimizing water usage for crops.",
          type: "Hardware + Software",
          bgClass: "bg-yellow-600",
        },
        {
          statementNumber: "2505",
          title: "Wearable Health Monitoring Device",
          description:
            "Develop a compact wearable device that tracks vital signs and provides real-time health analytics, integrated with a mobile app for monitoring.",
          type: "Hardware",
          bgClass: "bg-yellow-600",
        },
        {
          statementNumber: "2506",
          title: "Energy-Efficient Smart Home Automation",
          description:
            "Create a smart home solution leveraging IoT devices and machine learning for efficient energy usage and personalized automation.",
          type: "Hardware + Software",
          bgClass: "bg-yellow-700",
        },
        {
          statementNumber: "2507",
          title: "AI-Powered Education Platform",
          description:
            "Develop a software platform using AI to create personalized learning experiences, providing adaptive content and real-time feedback for students.",
          type: "Software",
          bgClass: "bg-yellow-800",
        },
        {
          statementNumber: "2508",
          title: "Blockchain-based Voting System",
          description:
            "Design a secure and transparent voting system based on blockchain technology, ensuring tamper-proof election results and privacy of voters.",
          type: "Software",
          bgClass: "bg-yellow-600",
        },
        {
          statementNumber: "2509",
          title: "Smart Traffic Management System",
          description:
            "Develop an intelligent traffic management system using IoT sensors and machine learning to optimize traffic flow and reduce congestion.",
          type: "Hardware + Software",
          bgClass: "bg-yellow-700",
        },
        {
          statementNumber: "2510",
          title: "Automated Healthcare Monitoring",
          description:
            "Build an automated healthcare monitoring system that tracks patient vitals and alerts healthcare providers in case of anomalies.",
          type: "Hardware + Software",
          bgClass: "bg-yellow-700",
        },
        {
          statementNumber: "2511",
          title: "AI for Predictive Maintenance",
          description:
            "Develop an AI-based system to predict equipment failure in industries and optimize maintenance schedules to avoid downtime.",
          type: "AI + Software",
          bgClass: "bg-yellow-800",
        },
        {
          statementNumber: "2512",
          title: "IoT-based Environmental Monitoring System",
          description:
            "Design an IoT-based system for monitoring air quality, temperature, and humidity in real-time for environmental analysis and decision making.",
          type: "IoT + Software",
          bgClass: "bg-yellow-600",
        },
        {
          statementNumber: "2513",
          title: "Robotic Process Automation for Healthcare",
          description:
            "Create a robotic system for automating administrative and clinical processes in healthcare to increase efficiency and reduce human error.",
          type: "Robotics + Software",
          bgClass: "bg-yellow-600",
        },
        {
          statementNumber: "2514",
          title: "Decentralized Identity Management using Blockchain",
          description:
            "Build a decentralized identity management system using blockchain technology, ensuring privacy and security for online identity verification.",
          type: "Blockchain",
          bgClass: "bg-yellow-700",
        },
        {
          statementNumber: "2515",
          title: "Autonomous Delivery Drone System",
          description:
            "Develop a drone system that can autonomously navigate and deliver packages, optimizing routes using AI and IoT technologies.",
          type: "Robotics + AI",
          bgClass: "bg-yellow-800",
        },
      ];
  
    return (
      <div className="bg-black min-h-screen text-yellow-400">
        <div className="relative overflow-hidden">
          {/* Neon Glow Effects */}
          <div className="absolute inset-0">
            <div className="absolute -top-10 -left-10 h-96 w-96 rounded-full bg-yellow-400 opacity-20 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-yellow-500 opacity-20 blur-3xl"></div>
          </div>
  
          <header className="text-center py-10 px-4 sm:px-6 md:px-10">
          <AnimatedTitle
        title="<b>Anant</b>  <b>Netrunn</b>"
        containerClass="mt-20 !text-gold-300 text-center"
      />
            <p className="mt-4 text-lg sm:text-xl text-gray-300">
              Explore Limitless Possibilities with Cutting-Edge Challenges
            </p>
          </header>
  
          <main className="container mx-auto px-4 sm:px-6 lg:px-12 py-10">
            {/* Problem Statements Section */}
            <section className="mb-10">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-gold-300 text-center">
                Problem Statements
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mr-4">
                {problemStatements.map((statement, index) => (
                  <div
                    key={index}
                    className={`${statement.bgClass} p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all`}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">
                      {statement.statementNumber} : <span className="text-yellow-400">{statement.title}</span>
                    </h3>
                    <p className="text-gray-200 mb-4 text-sm sm:text-base">{statement.description}</p>
                    <span className="text-xs sm:text-sm text-gray-300 font-semibold bg-black rounded-full py-1 px-4 inline-block">
                      {statement.type}
                    </span>
                  </div>
                ))}
              </div>
            </section>
  
            {/* Call to Action */}
            <section className="text-center mt-12">
              <p className="text-lg sm:text-xl text-gray-300 mb-4">
                Ready to take on these challenges and redefine innovation?
              </p>
              <button className="bg-gold-300 hover:bg-yellow-500 text-black py-3 px-6 rounded-lg font-bold text-lg sm:text-xl transition-all">
                Register Now
              </button>
            </section>
          </main>
        </div>
        <Footer isProblemStatement={true} />
      </div>
    );
  };
  
  export default AnantamHackathonPage;
  