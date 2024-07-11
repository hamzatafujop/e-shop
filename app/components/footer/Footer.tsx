import React from 'react'
import Container from '../Container'
import FooterList from './FooterList'
import Link from 'next/link'
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle,AiFillInstagram,AiFillYoutube} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className='bg-slate-700 text-slate-200 text-sm mt-16'>
      <Container>
        <div className='flex flex-col md:flex-row justify-between pt-16 pb-8'>
        <FooterList>
          <h3 className='font-bold text-base mb-2'>Shop Categories</h3>
          <Link href="#">Phone</Link>
          <Link href="#">Laptops</Link>
          <Link href="#">Desktops</Link>
          <Link href="#">Watchers</Link>
          <Link href="#">TVs</Link>
          <Link href="#">Accessories</Link>
        </FooterList>
        <FooterList>
          <h3 className='font-bold text-base mb-2'>Customer Service</h3>
          <Link href="#">Contact Us</Link>
          <Link href="#">Shipping policy</Link>
          <Link href="#">Returns & Exchanges</Link>
          <Link href="#">Watchers</Link>
          <Link href="#">FAQs</Link>
        </FooterList>
        <FooterList>
          <h3 className='font-bold text-base mb-2'>About Us</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla doloribus soluta ea, corporis exercitationem quos recusandae culpa dignissimos ratione asperiores repellat fugit maxime, libero, minima cumque nobis necessitatibus magni? Mollitia.</p>
        </FooterList>
        <FooterList>
          <h3 className='font-bold text-base mb-2'>Follow Us</h3>
          <div className='flex gap-2'>
            <Link href="#"><MdFacebook size={24}/></Link>
            <Link href="#"><AiFillTwitterCircle size={24}/></Link>
            <Link href="#"><AiFillInstagram size={24}/></Link>
            <Link href="#"><AiFillYoutube size={24}/></Link>
          </div>
        </FooterList>
        </div>
      </Container>

    </footer>
  )
}

export default Footer