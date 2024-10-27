'use client';
import React, { useState } from 'react';
import Image from 'next/image'
import { Search, Settings, HandHelping, Plus, Cloud, CheckCircle, Users, Clock, Briefcase, X, Menu } from 'lucide-react'
import CardGrid from './boxes'

export default function LandingPage() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Dashboard', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' },
  ]
  return (
    <div className="min-h-screen flex flex-col">

      <header className="absolute top-0 left-0 right-0 z-10 text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/images/logo.png" width={196} height={78} alt="logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-50">
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex space-x-2">
            <button className="px-4 py-1 text-gray-50 border border-gray-50 rounded-full">
              Login
            </button>
            <button className="px-4 py-1 bg-gray-50 text-black rounded-full">
              Signin
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleSidebar} className="lg:hidden text-white">
            <Menu size={24} />
          </button>
        </div>

        {/* Sidebar for Mobile and Tablet */}
        <div className={`fixed inset-y-0 right-0 z-20 w-64 bg-white transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
          <div className="flex justify-end p-4">
            <button onClick={toggleSidebar} className="text-black">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-black">
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-col space-y-2 p-4">
            <button className="px-4 py-2 text-black border border-black rounded-full">
              Login
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full">
              Signin
            </button>
          </div>
        </div>
      </header>


      <main className="flex-grow">
        <div className="relative h-[486px]">
          <Image
            src="/images/image9.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 shadow-lg bg-custom-gradient bg-opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-2xl px-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full py-3 pl-12 pr-4 text-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-lg"
                />
                <Search className="absolute left-4 top-3 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <CardGrid />
    </div>
  )
}