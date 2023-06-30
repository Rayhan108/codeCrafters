import logo from '@/assets/codecrafters-low-resolution-logo-black-on-transparent-background.png'
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-purple-400 text-base-content">
  <div>
  <Image className='w-64' src={logo} alt=""></Image>
  <p>codeCrafters<br/>Providing reliable tech since 2023</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
        </>
    );
};

export default Footer;