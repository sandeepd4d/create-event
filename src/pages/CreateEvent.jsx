"use client";
import Header from '@/components/Header'
import React from 'react'
import Left from '@/components/Left';
import Right from '@/components/Right';

const CreateEvent = () => {
  return (
    <div>
      {/* <div className="h-screen w-full bg-moving-radial bg-[length:200%_200%] animate-moving-bg top-0 bottom-0 left-0 right-0 h-full fixed -z-10"></div> */}
      <Header />
      <div className="container">
        <Left />
        <Right />
      </div>
    </div>
  )
}

export default CreateEvent
