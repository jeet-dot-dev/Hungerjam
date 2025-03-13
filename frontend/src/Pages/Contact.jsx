import { useState, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useInView } from "react-intersection-observer";

import Footer from "../components/Footer";

const MapSection = lazy(() => import("../components/MapSection"));

const ContactInfoItem = ({ icon, title, details }) => {
  const Icon = icon;
  return (
    <motion.div
      className="flex items-start gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-[#ffa500] p-3 rounded-full">
        <Icon className="h-5 w-5 text-[#151a2b]" />
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        {Array.isArray(details) ? (
          details.map((detail, index) => (
            <p key={index} className="text-gray-300">
              {detail}
            </p>
          ))
        ) : (
          <p className="text-gray-300">{details}</p>
        )}
      </div>
    </motion.div>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-[#1d2235] p-6 rounded-lg overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold text-[#ffa500]">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[#ffa500]" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#ffa500]" />
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-300 mt-4">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Map component that will be lazy loaded
const MapPlaceholder = () => (
  <div className="w-full h-full flex items-center justify-center bg-[#151a2b] border border-gray-700 rounded-lg">
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <p className="text-gray-400">Loading map...</p>
    </motion.div>
  </div>
);

//main component

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mapRef, mapInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [faqRef, faqInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "Please fill all required fields",
      });
      return;
    }

    // Here you would normally send the data to your server
    // For now, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: "Thank you for your message! We will get back to you soon.",
    });

    // Reset form after successful submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const faqs = [
    {
      question: "What are your delivery hours?",
      answer:
        "We deliver during our regular business hours from Monday to Friday, 8am to 10pm.",
    },
    {
      question: "Is there a minimum order for delivery?",
      answer: "Yes, we have a minimum order of ₹200 for delivery services.",
    },
    {
      question: "Do you cater for events?",
      answer:
        "Yes, we offer catering services for events of all sizes. Please contact us for more details.",
    },
    {
      question: "How can I provide feedback about my order?",
      answer:
        "You can provide feedback through our contact form or by calling us directly.",
    },
  ];

  return (
    <main className="bg-[#151a2b] text-white min-h-screen overflow-hidden mt-16 md:mt-20 lg:mt-24 xl:mt-28 ">
      {/* Contact Hero Section */}
      <section
        ref={heroRef}
        className="relative py-16 md:py-28 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#151a2b] to-[#1d2235] opacity-90"></div>

        {/* Animated coffee beans background
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-12 rounded-full bg-[#ffa500] opacity-10"
              initial={{ 
                x: Math.random() * 100 - 50 + "%", 
                y: -100,
                rotate: Math.random() * 360
              }}
              animate={{ 
                y: "120%",
                rotate: Math.random() * 720
              }}
              transition={{ 
                duration: 15 + Math.random() * 20,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 20
              }}
              style={{
                left: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div> */}

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={
                heroInView
                  ? {
                      opacity: 1,
                      y: 0,
                      textShadow: "0 0 15px rgba(255, 165, 0, 0.5)",
                    }
                  : {}
              }
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-[#ffa500]">Connect</span> With Us
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Have questions about our menu or services? We're here to help!
              Reach out to us using any of the methods below.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Information */}
            <Card className="w-full md:w-1/3 bg-[#1d2235] border-none shadow-lg shadow-[#ffa500]/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#ffa500]">
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <ContactInfoItem
                    icon={MapPin}
                    title="Our Location"
                    details="Chittaranjan, Asansol"
                  />
                  <ContactInfoItem
                    icon={Mail}
                    title="Email Us"
                    details="CoffeeAdda@gmail.com"
                  />
                  <ContactInfoItem
                    icon={Phone}
                    title="Call Us"
                    details="11111+895222"
                  />
                  <ContactInfoItem
                    icon={Clock}
                    title="Opening Hours"
                    details={["Monday to Friday", "8am to 10pm"]}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="w-full md:w-2/3 bg-[#1d2235] border-none shadow-lg shadow-[#ffa500]/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#ffa500]">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {formStatus.submitted ? (
                  <motion.div
                    className="bg-green-800 bg-opacity-30 border border-green-600 text-white p-6 rounded-lg flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="bg-green-500 rounded-full p-2 mr-4"
                    >
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>
                    <p>{formStatus.message}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <AnimatePresence>
                      {formStatus.error && (
                        <motion.div
                          className="bg-red-800 bg-opacity-30 border border-red-600 text-white p-4 rounded-lg"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <p>{formStatus.message}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium"
                        >
                          Your Name*
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-[#151a2b] border-gray-700 focus:ring-[#ffa500] focus:border-[#ffa500]"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium"
                        >
                          Your Email*
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-[#151a2b] border-gray-700 focus:ring-[#ffa500] focus:border-[#ffa500]"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block mb-2 text-sm font-medium"
                        >
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-[#151a2b] border-gray-700 focus:ring-[#ffa500] focus:border-[#ffa500]"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block mb-2 text-sm font-medium"
                        >
                          Subject
                        </label>
                        <Input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="bg-[#151a2b] border-gray-700 focus:ring-[#ffa500] focus:border-[#ffa500]"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium"
                      >
                        Your Message*
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-[#151a2b] border-gray-700 focus:ring-[#ffa500] focus:border-[#ffa500]"
                        required
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full md:w-auto bg-[#ffa500] hover:bg-[#ffa500]/90 text-[#151a2b] font-medium flex items-center justify-center gap-2"
                      >
                        <Send className="h-4 w-4" />
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* Map Section */}
      <section ref={mapRef} className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-[#1d2235] p-6 md:p-8 rounded-lg shadow-lg shadow-[#ffa500]/10"
            initial={{ opacity: 0, y: 40 }}
            animate={mapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-[#ffa500]">Find Us</h2>
            <div className="w-full h-[400px] bg-[#151a2b] rounded-lg overflow-hidden">
              <Suspense fallback={<MapPlaceholder />}>
                {mapInView && <MapSection />}
              </Suspense>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[#ffa500]">Frequently</span> Asked Questions
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our services and products.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={faqInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-gray-300 mb-6">
              Don't see your question here? Feel free to reach out to us
              directly.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button
                className="bg-[#ffa500] hover:bg-[#ffa500]/90 text-[#151a2b] font-medium"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}

      <Footer />
    </main>
  );
}
