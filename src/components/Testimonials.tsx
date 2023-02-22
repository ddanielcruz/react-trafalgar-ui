import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { GiPlainCircle } from 'react-icons/gi'

import Separator from './Separator'

export default function Testimonials() {
  // TODO Animate slider
  return (
    <>
      <section className="flex flex-col items-center bg-linear-blue mt-64 rounded-2xl px-32 py-16 text-white">
        <h3 className="text-4xl font-bold">What our customers are saying</h3>
        <Separator className="border-white" />
        <div className="flex items-center w-full mt-12">
          <img
            src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
            alt="profile"
            className="w-36 h-36 rounded-full object-cover border-4"
          />
          <div className="ml-8">
            <h4 className="text-xl font-bold">Edward Norman</h4>
            <p className="text-lg">Founder Circle</p>
          </div>
          <p className="text-lg max-w-md ml-auto">
            Our dedicated patient engagement app and web portal allow you to access information
            instantaneously (no tedious form, long calls, or administrative hassle) and securely
          </p>
        </div>
      </section>
      <div className="flex mt-12 w-full items-center justify-center">
        <HiArrowLeft size={30} className="text-primary/40 cursor-pointer" />
        <div className="flex gap-4 mx-24">
          <GiPlainCircle size={10} className="text-primary cursor-pointer" />
          <GiPlainCircle size={10} className="text-primary/40 cursor-pointer" />
          <GiPlainCircle size={10} className="text-primary/40 cursor-pointer" />
          <GiPlainCircle size={10} className="text-primary/40 cursor-pointer" />
        </div>
        <HiArrowRight size={30} className="text-primary cursor-pointer" />
      </div>
    </>
  )
}
