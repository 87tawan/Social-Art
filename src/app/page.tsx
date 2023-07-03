"use client"
import { FormLogin } from "@/components/Form"


export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center flex-col space-y-3">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl">Art</h1>
        <FormLogin></FormLogin>
      </div>
    </main>
  )
}
