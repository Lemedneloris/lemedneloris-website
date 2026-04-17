import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
import BgImage from "../assets/BgImage.avif";
import cctvproblem from "../assets/cctvproblem.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import benefits from "../assets/benefits.png";
import Devanshi from "../assets/Devanshi.png";
import Hemanth from "../assets/Hemanth.jpeg";
import Swetha from "../assets/Swetha.jpeg";
import Shree from "../assets/Shree.png";
import Kumudini from "../assets/Kumudini.jpeg";
import Dinesh from "../assets/Dinesh.jpeg";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Navbar() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "whyus", "technology", "team", "contact"];
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 120;
          if (window.scrollY >= sectionTop) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: true
  };
  const approaches = [{
    title: "Approach",
    img: cctvproblem,
    Content: "LeMedneloris introduces an Edge AI-based Hybrid Vision System that monitors vital signs without ever touching the patient Beyond Touch.",
    l1: "Hybrid Sensing Technology: By combining RGB imaging (for heart rate extraction via rPPG) and Infrared Thermal mapping (for skin temperature and respiration), the system provides 24/7 accuracy regardless of lighting conditions.",
    l2: "Edge Computing & Privacy: Unlike cloud-based solutions, all AI inference happens locally on a Raspberry Pi 4. This ensures ultra-low latency alerts and guarantees that sensitive health data never leaves the local environment.",
    l3: "Real-Time Stress Analysis: The system analyzes Heart Rate Variability (HRV) to monitor psychological stress levels, offering a holistic view of patient well-being.",
    l4: "Cost-Effective & Accessible: Built on a scalable hardware framework (ESP32 and Raspberry Pi), the solution is affordable and suitable for neonatal units, ICU wards, elderly care, and remote home monitoring."
  },
  {
    title: "Key Benefits",
    img: benefits,
    Content: "LeMedneloris delivers a next-generation contactless monitoring solution designed to enhance patient safety, clinical efficiency, and data privacy.",

    l1: "Contactless & Non-Invasive Monitoring: Eliminates the need for physical sensors, reducing patient discomfort, minimizing infection risks, and enabling seamless continuous observation.",

    l2: "Infection Risk Reduction & Hygiene Safety: By removing wearable attachments and wired probes, the system supports safer clinical environments, particularly in ICUs, neonatal units, and elderly care.",

    l3: "Continuous 24/7 Vital Tracking: Enables uninterrupted monitoring of heart rate, respiration, and temperature, ensuring early detection of anomalies and improved patient supervision.",

    l4: "Early Warning & Preventive Insights: Advanced AI-driven analytics help identify subtle physiological changes, allowing healthcare providers to respond proactively rather than reactively."
  }

  ]
  const team = [
    {
      name: "Kumudini",
      designation: "Founder",
      image: Kumudini,
    },
    {
      name: "Devanshi",
      designation: "Co-Founder",
      image: Devanshi,
    },
    {
      name: "Dinesh Karthik G",
      designation: "CEO",
      image: Dinesh,
    },
    {
      name: "Hemanth K",
      designation: "CTO (Front End) ",
      image: Hemanth,
    },
    {
      name: "Vidhiya Mahashree S",
      designation: "CFO",
      image: Shree,
    },
    {
      name: "Swetha Suresh Kumar",
      designation: "COO",
      image: Swetha,
    },
  ];
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "subscribers"), form);
      alert("Subscribed successfully!");
      setForm({ name: "", email: "", phone: "" });
    } catch (err) {
      console.log(err);
    }
  };
  return (<>

    <div className="relative w-full h-screen">

      <img
        src={BgImage}
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-green-950/50"></div>

      <div className="relative z-10">
        <div className="bg-green-950">
          <nav className="p-3 h-24 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={Logo} alt="Logo" className="h-20 w-fit" />
              <div className="text-xl font-bold text-yellow-100 font-serif">
                LeMednoloris
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#home" className={`font-serif text-2xl p-2 ${active === "home" ? "text-white" : "text-yellow-100 hover:text-white"}`}>Home</a>
              <a href="#whyus" className={`font-serif text-2xl p-2 ${active === "whyus" ? "text-white" : "text-yellow-100 hover:text-white"}`}>Why Us</a>
              <a href="#technology" className={`font-serif text-2xl p-2 ${active === "technology" ? "text-white" : "text-yellow-100 hover:text-white"}`}>Technology</a>
              <a href="#team" className={`font-serif text-2xl p-2 ${active === "team" ? "text-white" : "text-yellow-100 hover:text-white"}`}>About Team</a>
              <a href="#contact">
                <button className="font-serif text-2xl text-yellow-100 hover:text-white p-2 px-6 rounded-xl cursor-pointer">
                  Contact Us
                </button>
              </a>  </div>


            <div className="md:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="text-yellow-100 text-3xl "
              >
                ☰
              </button>
            </div>
          </nav>
        </div>

        {
          open && (
            <div className="md:hidden flex flex-col items-center gap-4 pt-4 pb-6 bg-green-950">

              <a
                href="#home"
                onClick={() => setOpen(false)}
                className="font-serif text-xl text-yellow-100 hover:text-white"
              >
                Home
              </a>

              <a
                href="#whyus"
                onClick={() => setOpen(false)}
                className="font-serif text-xl text-yellow-100 hover:text-white"
              >
                Why Us
              </a>

              <a
                href="#technology"
                onClick={() => setOpen(false)}
                className="font-serif text-xl text-yellow-100 hover:text-white"
              >
                Technology
              </a>

              <a
                href="#team"
                onClick={() => setOpen(false)}
                className="font-serif text-xl text-yellow-100 hover:text-white"
              >
                About the Team
              </a>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="font-serif text-xl text-yellow-100 hover:text-white"
              >
                Contact
              </a>

            </div>
          )
        }
      </div >
      <div className="relative mt-32 px-6 md:px-16 lg:px-32 sm:space-y-4 space-y-4 md:space-y-6">

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-yellow-100 text-center font-serif font-semibold">
          Redefining Healthcare Through Intelligent Vision
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-yellow-100 text-center font-serif font-medium max-w-4xl mx-auto">
          We develop privacy-focused, AI-powered vision systems that enable real-time, contactless vital sign monitoring. By combining infrared imaging, RGB sensing, and Edge AI, we deliver intelligent, non-invasive solutions for modern clinical and home healthcare.
        </p>

      </div>
    </div>
    {/* <div className="min-h-screen bg-yellow-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16 lg:px-24 py-12">
        <div className="relative">
          <img
            src={cctvproblem}
            alt=""
            className="w-full h-auto pl-10 pr-28 object-contain"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-green-950">
            Approach
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-serif text-green-950">
            LeMedneloris introduces an Edge AI-based Hybrid Vision System that monitors vital signs without ever touching the patient ("Beyond Touch").
          </p>
          <ul className="space-y-4 text-sm sm:text-base md:text-lg font-serif text-green-950">
            <li>
              <strong>Hybrid Sensing Technology:</strong> By combining RGB imaging (for heart rate extraction via rPPG) and Infrared Thermal mapping (for skin temperature and respiration), the system provides 24/7 accuracy regardless of lighting conditions.
            </li>
            <li>
              <strong>Edge Computing & Privacy:</strong> Unlike cloud-based solutions, all AI inference happens locally on a Raspberry Pi 4. This ensures ultra-low latency alerts and guarantees that sensitive health data never leaves the local environment.
            </li>
            <li>
              <strong>Real-Time Stress Analysis:</strong> The system analyzes Heart Rate Variability (HRV) to monitor psychological stress levels, offering a holistic view of patient well-being.
            </li>
            <li><strong>Cost-Effective & Accessible:</strong> Built on a scalable hardware framework (ESP32 and Raspberry Pi), the solution is affordable and suitable for neonatal units, ICU wards, elderly care, and remote home monitoring.
            </li></ul></div></div>
    </div> */}
    <div id="whyus" className="bg-gradient-to-r from-green-950 via-green-900 to-black py-44 px-6 md:px-16 lg:px-24 text-yellow-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight">
            Why Choose <br />
            LeMedneloris          </h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          <div>
            <h2 className="font-semibold text-lg mb-2">
              Privacy-First Edge AI
            </h2>
            <p className="text-sm text-yellow-100/80 leading-relaxed">
              All processing happens locally, ensuring complete data security with zero cloud dependency.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">
              Contactless Monitoring
            </h2>
            <p className="text-sm text-yellow-100/80 leading-relaxed">
              Monitor vital signs without physical sensors, reducing infection risks and improving comfort.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">
              Hybrid Vision Accuracy
            </h2>
            <p className="text-sm text-yellow-100/80 leading-relaxed">
              RGB and infrared sensing combine to deliver consistent, reliable results in all conditions.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">
              Real-Time Intelligence
            </h2>
            <p className="text-sm text-yellow-100/80 leading-relaxed">
              AI-driven insights enable early detection and proactive healthcare decisions.
            </p>
          </div>

        </div>
      </div>
    </div>
    <Slider {...settings} className="overflow-hidden">
      {approaches.map((data) => (
        <div key={data.title} id="technology">
          <div className="min-h-screen bg-white flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-6 md:px-16 lg:px-24 py-12">
              <div className="flex justify-center">
                <img
                  src={data.img}
                  alt=""
                  className="w-full max-w-md object-contain"
                />
              </div>
              <div className="space-y-6 text-center md:text-left flex flex-col justify-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-green-950">
                  {data.title}
                </h1>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-serif text-green-950 leading-relaxed">
                  {data.Content}
                </p>

                <div className="space-y-4 text-sm sm:text-base md:text-lg font-serif text-green-950 leading-relaxed">
                  <li>{data.l1}</li>
                  <li>{data.l2}</li>
                  <li>{data.l3}</li>
                  <li>{data.l4}</li>
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}
    </Slider>
    <div id="contact" className="bg-gradient-to-r from-green-950 via-green-900 to-black py-14 px-6 md:px-16 lg:px-24 text-yellow-100">

      <h1 className="text-4xl md:text-5xl font-bold font-serif mb-12 text-center">
        Subscribe for More Information
      </h1>

      <div className="max-w-xl mx-auto space-y-6">

        {/* Name */}
        <div className="flex flex-col text-left">
          <label className="text-lg font-semibold mb-1">Name</label>
          <input
            name="name" value={form.name} onChange={handleChange}
            type="text"
            placeholder="Enter your name"
            className="rounded-xl p-3 bg-yellow-100 text-black outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col text-left">
          <label className="text-lg font-semibold mb-1">Email</label>
          <input
            name="email" value={form.email} onChange={handleChange}
            type="email"
            placeholder="Enter your email"
            className="rounded-xl p-3 bg-yellow-100 text-black outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col text-left">
          <label className="text-lg font-semibold mb-1">Phone Number</label>
          <input
            name="phone" value={form.phone} onChange={handleChange}
            type="tel"
            placeholder="Enter your phone number"
            className="rounded-xl p-3 bg-yellow-100 text-black outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Button */}
        <div className="text-center pt-4">
          <button onClick={handleSubmit} className="font-serif font-semibold rounded-xl bg-green-900 px-8 py-3 text-lg hover:bg-black transition cursor-pointer">
            Subscribe
          </button>
        </div>

      </div>
    </div>
    <div id="team" className="bg-white py-16 px-6 md:px-16 lg:px-24">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-green-950 text-center mb-12">
        Our Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-white rounded-2xl shadow-lg hover:shadow-black cursor-pointer transition duration-300"
          >
            <img
              src={member.image}
              alt=""
              className="w-full h-56 object-cover rounded-t-2xl"
            />

            <div className="p-4 text-center">
              <h2 className="text-lg font-serif font-semibold text-green-950">
                {member.name}
              </h2>
              <p className="text-sm text-green-950/70">
                {member.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Footer */}
    <footer className="bg-green-950 text-yellow-100">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h1 className="text-2xl font-serif font-bold">
              LeMedneloris
            </h1>
            <p className="text-sm leading-relaxed">
              Redefining healthcare through privacy-focused, AI-powered vision systems.
              Delivering intelligent, contactless patient monitoring solutions.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-serif font-semibold">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Technology</li>
              <li className="hover:text-white cursor-pointer">Working</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-serif font-semibold">
              Solutions
            </h2>
            <ul className="space-y-2 text-sm">
              <li>Hybrid Vision Monitoring</li>
              <li>Edge AI Processing</li>
              <li>Contactless Vital Tracking</li>
              <li>Stress & HRV Analysis</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-serif font-semibold">
              Contact
            </h2>
            <ul className="space-y-2 text-sm">
              <li>Email: lemedneloris@gmail.com</li>
              <li>Phone: +91 90805 41848</li>
              <li>Location: India</li>
            </ul>
          </div>

        </div>
        <div className="border-t border-yellow-100/20 mt-10 pt-6 text-sm text-center">
          <p>
            © 2026 LeMedneloris. All Rights Reserved.
          </p>
          <p className="text-xs mt-2 text-yellow-100/70">
            LeMedneloris is a monitoring support system designed for observational and research purposes.
            It is not intended to replace clinical judgment or certified medical devices.
          </p>
        </div>

      </div>
    </footer>
  </>
  );
}
