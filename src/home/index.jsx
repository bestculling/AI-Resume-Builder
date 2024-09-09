import Header from '@/components/custom/Header'
import { UserButton } from '@clerk/clerk-react'
import { AtomIcon, Edit, Share2 } from 'lucide-react'
import React from 'react'

function Home() {
  return (
    <div>
      <Header />
      <section className="z-50 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Build Your Resume <span className='text-primary'>With Jaifoo AI</span>
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Effortlessly Craft a Standout Resume with Jaifoo, the Cutting-Edge AI Chatbot Powered by Google Generative AI.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="/dashboard"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get Started
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </section>
      <section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h2 className="font-bold text-3xl">How it Works?</h2>
        <h2 className="text-md text-gray-500">Create a Stunning Resume in Just 3 Simple Steps</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <AtomIcon className='h-8 w-8' />
            <h2 className="mt-4 text-xl font-bold text-black">Craft Your Resume</h2>
            <p className="mt-1 text-sm text-gray-600">
              Utilize Jaifoo’s AI to effortlessly generate a standout resume tailored to your needs.
            </p>
          </a>
          <a
            className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <Edit className='h-8 w-8' />
            <h2 className="mt-4 text-xl font-bold text-black">Edit and Refine</h2>
            <p className="mt-1 text-sm text-gray-600">
              Make easy edits and refinements to tailor your resume to perfection.
            </p>
          </a>
          <a
            className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <Share2 className='h-8 w-8' />
            <h2 className="mt-4 text-xl font-bold text-black">Share & Apply</h2>
            <p className="mt-1 text-sm text-gray-600">
              Share your polished resume and start applying for your dream jobs.
            </p>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home