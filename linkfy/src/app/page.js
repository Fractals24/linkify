import React from 'react'
import './globals.css';
import Link from 'next/link'
import Header from './components/Header';
import HeroForm from './components/forms/HeroForm';

const page = () => {
  return (
    <main>
       <section className='p-4 max-w-4xl mx-auto'>
        <div className='max-w-md mb-8'>
          <h1 className='text-6xl font-bold'>
            Your One Link <br /> for Everything
          </h1>
          <h2 className='text-gray-500 mt-6'>
            Share all your links,contact info,social profiles into a single link
          </h2>
        </div>
        <HeroForm />
       </section>
    </main>
  )
}

export default page
