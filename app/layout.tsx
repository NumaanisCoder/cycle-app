"use client"
import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Poppins } from 'next/font/google'
const poppins = Poppins({subsets:['latin'], weight:['500','700']});






export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased `}
      >

<header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">XCycle</span>
                <img className="h-8 w-auto" src="/bicycle.png" alt="Company Logo" />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Open main menu</span>
                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <Link href="#" className="text-sm/6 font-semibold text-gray-900">Product</Link>
              <Link href="/about" className="text-sm/6 font-semibold text-gray-900">About</Link>
              <Link href="#" className="text-sm/6 font-semibold text-gray-900">Marketplace</Link>
              <Link href="#" className="text-sm/6 font-semibold text-gray-900">Company</Link>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link href="#" className="text-sm/6 font-semibold text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </nav>
        </header>

        
        <AnimatePresence mode="wait">
          <motion.div
          key={pathName}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.5}}>
 {children}
          </motion.div>
          

        </AnimatePresence>
       
      </body>
    </html>
  );
}
