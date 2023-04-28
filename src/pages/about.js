import React from 'react';
import Image from 'next/image';
import NavBar from '@/component/NavBar';

export default function About() {
  return (

    <>
    <NavBar />
    <div className="flex flex-col items-center justify-center h-screen">
      
      <h1 className="text-4xl font-bold mb-8">About</h1>
      <div className="max-w-md">
        <Image src="/laptop.jpg" alt="laptop" width={500} height={300} className="rounded-md shadow-lg" />
      </div>
    </div>
    </>
  );
}
