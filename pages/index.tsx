import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react' 
import Navigation from '../components/Navigation'

export default function index() {
  return <div className="bg-gray-900 min-h-screen font-inter">
    <div className='max-w-2xl min-h-screen mx-auto'>
        <Navigation />  
    </div>

  </div>;
}
