import * as icons8Github96Svg from "../../../public/icons8-github-96.svg"
import * as icons8LinkedinLogoSvg from "../../../public/icons8-linkedin-logo.svg"

import Link from 'next/link'
import Image from 'next/image'

function EmailSection() {
  return (
    <section className='grid md:grid-cols-2  my-12 md:my-16 py-24 gap-4'>
        <div>
            <h5 className='text-xl font-bold text-white my-2'>
                Let's Connact
            </h5>
            <p className='text-[#adb7be] mb-4 max-w-md '>
                {" "}
                I'm currently looking for new opportunities, my inbox is always open.
                Whether you have a question or just want to say hi, I'ill try my best
                to get back to you!

            </p>
            <div className='social flex flex-row gap-2'>
                <Link href={"https://github.com/Shabbir811"}>
                    <Image
                        src={icons8Github96Svg}
                        alt='GithubIcon'/>
                </Link>
                <Link href={"https://www.linkedin.com/in/shabbir-kalhoro-8528412b3/ "}>
                    <Image
                        src={icons8LinkedinLogoSvg}
                        alt='linkdinIcon'/>
                </Link>

            </div>
        </div>
        <div>
            <form className="flex flex-col">

              <div className="mb-6">
                <label htmlFor="email"
                    className="text-white block text-sm  mb-2 font-medium">
                        Your Email
                </label>
                <input type="email"
                    id="email"
                    className="bg-[#18191e] border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
                    required
                    placeholder="john@gmail.com" />
             </div>

             <div className="mb-6">
                <label htmlFor="subject"
                    className="text-white block mb-2 text-sm font-medium">
                        Subject
                </label>
                <input type="text"
                    id="subject"
                    className="bg-[#18191e] border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
                    required
                    placeholder="just say hi" />
             </div>

             <div className="mb-6">
                <label htmlFor="message"
                    className="text-white block text-sm mb-2 font-medium">
                        Message
                </label>
                <textarea 
                    name="message" 
                    id="message"
                    className="bg-[#18191e] border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
                    placeholder="write something..."/>
             </div>
             <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg  w-full">
                    Send Message
                </button>

            </form>
        </div>
         
    </section>
  )
}

export default EmailSection
