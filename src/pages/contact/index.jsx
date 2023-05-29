import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { IoLocationSharp } from 'react-icons/io5'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function contact() {
    return (
        <div className='bg-[url("/contact.jpg")] bg-cover bg-no-repeat'>
            <Head>
                <title>Splendid-Contact</title>
            </Head>
            <Header />

            <main className='pt-[5rem] mb-8 w-full h-fit font-montserrat'>
                <h1 className='text-white text-center leading-[4rem] text-[3.5rem] font-montserrat font-bold'>Have any Questions?</h1>
                <p className='text-center pt-2 tracking-wider text-white/90'>Any questions or remarks? Just write us a message!</p>

                <div className='flex flex-wrap justify-center lg:flex-row px-4 lg:px-[6rem] py-[2rem]'>
                    <div className='glass bg-main_primary/50 rounded-l-lg flex flex-col text-white justify-between p-5 lg:w-[40%]'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-[2rem] font-medium'>Contact Information</h2>
                            <p className='text-white/80'>Fill up the form and our Team will get back to you within 24 hours.</p>
                        </div>
                        <div className='flex flex-col gap-8 py-6'>
                            <p className='flex gap-4'>
                                <BsFillTelephoneFill size={20} className='text-orange-400' /> <span>+971 56 310 1817</span>
                            </p>
                            <p className='flex gap-4'>
                                <GrMail size={20} className='text-orange-400' /> <span>info@splendiduae.com</span>
                            </p>
                            <p className='flex gap-4'>
                                <IoLocationSharp size={20} className='text-orange-400' />
                                <span>
                                    Splendid Cleaning Material Trading LLC, <br />
                                    Industrial area #4, P.O.Box : 67619, <br />
                                    Sharjah, UAE
                                </span>
                            </p>
                        </div>

                        <div className='flex w-full gap-7 items-center justify-start'>
                            <Link href="https://www.facebook.com/profile.php?id=100090676724827" className='rounded-full hover:bg-orange-400 p-2 '><FaFacebookF size={25} /></Link>
                            <Link href="https://twitter.com/UaeSplendid" className='rounded-full hover:bg-orange-400 p-2 '><FaTwitter size={25} /></Link>
                            <Link href="https://instagram.com/splendid_uae?igshid=YmMyMTA2M2Y" className='rounded-full hover:bg-orange-400 p-2 '><FaInstagram size={25} /></Link>
                            <Link href="https://www.linkedin.com/company/splendiduae/" className='rounded-full hover:bg-orange-400 p-2 '><FaLinkedinIn size={25} /></Link>
                        </div>
                    </div>

                    <div className='flex justify-center items-center border-[1.5px] w-full bg-black/30 border-gray/50 rounded-b-lg lg:rounded-r-lg lg:w-[60%] glass'>
                        <form className='flex flex-col gap-5 p-8 w-full'>
                            <div className='flex flex-col gap-10 w-full text-white'>
                                <div className='flex flex-col w-full lg:w-[50%]'>
                                    <label htmlFor='name'>Name</label>
                                    <input type='text' name='name' id='name' placeholder='Enter your name' className='bg-transparent border-b border-white/40 p-2' />
                                </div>
                                <div className='flex flex-wrap flex-col gap-6'>
                                    <div className='flex flex-col w-full lg:w-[50%]'>
                                        <label htmlFor='name'>Email</label>
                                        <input type='email' name='name' id='name' placeholder='Enter email here' className='bg-transparent border-b border-white/40 p-2' />
                                    </div>

                                    <div className='flex flex-col w-full lg:w-[50%]'>
                                        <label htmlFor='name'>Phone Number</label>
                                        <input type='tel' name='name' id='name' placeholder='Enter ph:no here' className='bg-transparent border-b border-white/40 p-2' />
                                    </div>
                                </div>

                                <div className='flex flex-col '>
                                    <label htmlFor='name'>Message</label>
                                    <textarea name='name' id='name' placeholder='Write your messgae here ...' className='bg-transparent border-b border-white/40 p-2' />
                                </div>

                                <div className=' flex justify-end'>
                                    <button className='bg-main_primary w-[10rem] text-white rounded-md p-2'>Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7212.216281238144!2d55.403385!3d25.334152!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f594e2e0465f9%3A0x411403f1af2c520!2sSplendid%20Cleaning%20Material%20Trading%20LLC!5e0!3m2!1sen!2sae!4v1684681624627!5m2!1sen!2sae"
                    width="600" height="450"
                    loading="lazy"
                    className='w-full h-[25rem] rounded-lg px-4 lg:px-[6rem]'>
                </iframe>
            </main>

            <Footer />
            <span className='w-full bg-white text-black/60 flex justify-end text-[.8rem] xl:pl-6 py-3 pr-8 xl:pr-10'>
                <b className='text-black hidden lg:visible'>English</b>
                <p>2023 ©️ All rights reserved</p>
            </span>
        </div>
    )
}
