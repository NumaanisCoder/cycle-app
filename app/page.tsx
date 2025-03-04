'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Template from './Template'
import { Poppins } from 'next/font/google'

const poppins = Poppins({subsets:['latin'], weight:['500','700']});

const features = [
  { title: 'Live GPS Tracking', description: 'Get real-time location updates and track your cycling routes effortlessly.' },
  { title: 'Calorie Burn Calculator', description: 'Monitor the calories you burn during each ride and stay on top of your fitness goals.' },
  { title: 'Speed & Distance Analysis', description: 'Analyze your average speed, total distance, and elevation changes in real-time.' },
  { title: 'Cycling Challenges', description: 'Compete in global and local cycling challenges to stay motivated and improve performance.' },
  { title: 'Weather Updates', description: 'Stay informed about the weather conditions before you ride to plan accordingly.' },
  { title: 'Ride History & Stats', description: 'Keep track of your ride history, stats, and progress over time with detailed insights.' }
];

const Page = () => {
  return (
    <>
      <div className={`bg-white ${poppins.className}`}>
        <Template>
          <div className="relative isolate px-6 pt-4 lg:px-8">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#34d399] to-[#3b82f6] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              ></div>
            </div>
            <div className="mx-auto max-w-2xl py-20 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Track your cycling journey effortlessly.{' '}
                  <Link href="#" className="font-semibold text-indigo-600">
                    <span className="absolute inset-0" aria-hidden="true"></span>
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                  The Ultimate Cycle Tracking App
                </h1>
                <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
                  Monitor your rides, analyze performance, and achieve your fitness goals with ease.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                 
                  <motion.div
                  animate={{ x: [0, -5, 0] }} // Moves slightly up and down
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    ease: "easeInOut" // Smooth transition
                  }}
                  className="rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700">

                    Get Started
                  </motion.div>
                  
                  <Link href="#" className="text-indigo-600 font-semibold hover:underline">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-2">
            {features.map((feature, index) => (
            <motion.div
            key={index}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            whileDrag={{ scale: 1.1 }}
            animate={{ y: [0, -5, 0] }} // Moves slightly up and down
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "reverse", 
              ease: "easeInOut" // Smooth transition
            }}
            className="w-80 p-6 bg-white rounded-lg shadow-xl border border-gray-200 hover:cursor-grab"
           
           
           
          >
            <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </motion.div>
          
           
           
            ))}
          </div>
        </Template>
      </div>
    </>
  )
}

export default Page
