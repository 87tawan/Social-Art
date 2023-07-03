
import { FormRegister } from "@/components/Form"

export default function Register() {
    return (
        <main className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center flex-col space-y-3">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl">Art</h1>
         <FormRegister></FormRegister>
      </div>
    </main>
    )
}