"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Coffee, Award, Users, Clock, Star } from "lucide-react"
import { useInView } from "react-intersection-observer"
import Footer from "../components/Footer"
import MapSection from "../components/MapSection"

// Reusable animated section component
const AnimatedSection = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  )
}

// Feature card component
const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  const Icon = icon
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      className="bg-[#1d2235] p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="bg-[#ffa500] p-3 rounded-full inline-flex mb-4">
        <Icon className="h-6 w-6 text-[#151a2b]" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

// Team member card component
const TeamMemberCard = ({ name, role, image, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      className="bg-[#1d2235] rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <div className="aspect-square bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-[#151a2b] text-[#ffa500]">
          <img src={image} className="h-full w-full " />
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-[#ffa500]">{role}</p>
      </div>
    </motion.div>
  )
}

// Testimonial component
const Testimonial = ({ text, author, rating, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      className="bg-[#1d2235] p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? "text-[#ffa500] fill-[#ffa500]" : "text-gray-500"}`}
          />
        ))}
      </div>
      <p className="text-gray-300 italic mb-4">"{text}"</p>
      <p className="text-white font-semibold">{author}</p>
    </motion.div>
  )
}

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [count, setCount] = useState({ years: 0, customers: 0, coffees: 0 })
  const targetCount = { years: 8, customers: 15000, coffees: 100000 }

  useEffect(() => {
    const duration = 2000
    const startTime = Date.now()

    const updateCount = () => {
      const elapsedTime = Date.now() - startTime
      const progress = Math.min(elapsedTime / duration, 1)
      
      setCount({
        years: Math.floor(progress * targetCount.years),
        customers: Math.floor(progress * targetCount.customers),
        coffees: Math.floor(progress * targetCount.coffees)
      })

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      }
    }

    const timer = setTimeout(() => {
      requestAnimationFrame(updateCount)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="bg-[#151a2b] text-white min-h-screen mt-16 md:mt-20 lg:mt-24 xl:mt-28">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#151a2b] to-[#1d2235] opacity-90"></div>
        
        
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="bg-[#ffa500] p-4 rounded-full">
                <Coffee className="h-10 w-10 text-[#151a2b]" />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { 
                opacity: 1, 
                y: 0,
                textShadow: "0 0 15px rgba(255, 165, 0, 0.5)"
              } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              About <span className="text-[#ffa500]">HungerJam</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              We are more than just a Food shop. We're a community space where people connect, ideas brew, and memories are made over the perfect cup of coffee.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <AnimatedSection delay={0.2} className="w-full md:w-1/2">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-[#1d2235] flex items-center justify-center">
                  <div className="relative w-3/4 aspect-square">
                    <div className="absolute inset-0 bg-[#ffa500]/10 rounded-full animate-pulse"></div>
                    <div className="absolute inset-4 bg-[#1d2235] rounded-full flex items-center justify-center">
                      <Coffee className="h-16 w-16 text-[#ffa500]" />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <div className="w-full md:w-1/2">
              <AnimatedSection delay={0.4}>
                <h2 className="text-3xl font-bold mb-6 text-[#ffa500]">Our Story</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    HungerJam began in 2017 with a simple mission: to create a space where quality coffee meets community spirit. Our founder, passionate about both coffee and people, envisioned a place where customers could feel at home while enjoying the finest brews.
                  </p>
                  <p>
                    What started as a small corner café in Chittaranjan has grown into a beloved local institution. We've expanded our menu, renovated our space, but never lost sight of our core values: quality, community, and comfort.
                  </p>
                  <p>
                    Today, HungerJam continues to be a gathering place for students, professionals, friends, and families. Our baristas know most customers by name, and we take pride in contributing to the vibrant culture of Asansol.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-16 bg-[#1a2038]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.2}>
              <div className="text-center p-6">
                <div className="text-5xl font-bold text-[#ffa500] mb-2">{count.years}+</div>
                <div className="text-xl text-gray-300">Years of Service</div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="text-center p-6">
                <div className="text-5xl font-bold text-[#ffa500] mb-2">{count.customers.toLocaleString()}+</div>
                <div className="text-xl text-gray-300">Happy Customers</div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.6}>
              <div className="text-center p-6">
                <div className="text-5xl font-bold text-[#ffa500] mb-2">{count.coffees.toLocaleString()}+</div>
                <div className="text-xl text-gray-300">Coffees Served</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#ffa500]">Why Choose Us</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                At HungerJam, we're committed to excellence in every aspect of our service. Here's what sets us apart.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={Coffee}
              title="Premium Coffee"
              description="We use only the finest coffee beans, sourced ethically and roasted to perfection."
              delay={0.2}
            />
            <FeatureCard 
              icon={Award}
              title="Quality Service"
              description="Our staff is trained to provide exceptional service with a smile."
              delay={0.4}
            />
            <FeatureCard 
              icon={Users}
              title="Community Focus"
              description="We're more than a Food shop - we're a vital part of the local community."
              delay={0.6}
            />
            <FeatureCard 
              icon={Clock}
              title="Consistency"
              description="Whether it's your first visit or your hundredth, expect the same great quality."
              delay={0.8}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[#1a2038]">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#ffa500]">Meet Our Team</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                The passionate individuals behind your favorite Food experience.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TeamMemberCard 
              name="Raj Kumar"
              role="Founder & Head Barista"
              image="https://res.cloudinary.com/dhdmbwnak/image/upload/w_400,h_500,c_fill/v1741872769/redcharlie-t-7KEq9M0b0-unsplash_11zon_scrpok.webp"
              delay={0.2}
            />
                <TeamMemberCard 
                name="Priya Sharma"
                role="Manager"
                image="https://res.cloudinary.com/dhdmbwnak/image/upload/w_400,h_500,c_fill/v1741873279/vitor-monthay-673jcnrm8bM-unsplash_11zon_11zon_fxvtaf.webp"
                delay={0.4}
                />
                <TeamMemberCard 
                name="Amit Singh"
                role="Senior Barista"
                image="https://res.cloudinary.com/dhdmbwnak/image/upload/w_400,h_500,c_fill/v1741872770/febrian-zakaria-SiQgni-cqFg-unsplash_11zon_fgzqwi.webp"
                delay={0.6}

                />
                <TeamMemberCard 
                name="Louis Hansel"
                role="Chef"
                image="https://res.cloudinary.com/dhdmbwnak/image/upload/w_400,h_500,c_fill/v1741873279/louis-hansel-v3OlBE6-fhU-unsplash_11zon_11zon_hr2itp.webp"
                delay={0.8}
                />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#ffa500]">What Our Customers Say</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our loyal customers have to say about their HungerJam experience.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Testimonial 
              text="HungerJam is my go-to place for both work and relaxation. The atmosphere is perfect, and their cappuccino is the best I've had in the city."
              author="Ankit Patel"
              rating={5}
              delay={0.2}
            />
            <Testimonial 
              text="I've been coming here for years, and the quality never disappoints. The staff remembers my order and always makes me feel welcome."
              author="Meera Joshi"
              rating={5}
              delay={0.4}
            />
            <Testimonial 
              text="The community events they host are amazing. I've made so many friends here over their delicious cold brew."
              author="Vikram Malhotra"
              rating={4}
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-16 bg-[#1a2038]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <AnimatedSection delay={0.2}>
                <h2 className="text-3xl font-bold mb-6 text-[#ffa500]">Visit Us Today</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We're conveniently located in the heart of Asansol, just a short walk from the main market. Our cozy space is perfect for a quick Food break, a productive work session, or a relaxed catch-up with friends.
                  </p>
                  <div className="mt-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold mb-2 text-white">Opening Hours</h3>
                      <p className="text-gray-300">Monday - Saturday: 8:00 AM - 10:00 PM</p>
                      <p className="text-gray-300">Sunday: 9:00 AM - 8:00 PM</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Location</h3>
                      <p className="text-gray-300">123 Coffee Street, Chittaranjan</p>
                      <p className="text-gray-300">Asansol, West Bengal 713331</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="bg-[#ffa500] text-[#151a2b] px-6 py-3 rounded-lg font-bold hover:bg-[#ff8c00] transition duration-300">
                      Get Directions
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
          
          </div>
        </div>
      </section>

      

      {/* Footer */}
     <Footer/>
    </main>
  )
}