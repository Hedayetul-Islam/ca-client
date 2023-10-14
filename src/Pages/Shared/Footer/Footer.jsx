import logo from '../../../assets/image 1.png'
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className='lg:pl-28 bg-gradient-to-r from-[#0076CE] to-[#9400D3] text-white'>
                <footer className="footer p-10">
                    <aside>
                        <img src={logo} alt="" />
                        <p>India's first platform dedicated to <br /> simplifying partner search</p>
                    </aside>
                    <nav>
                        <header className="font-bold text-white text-lg">Company</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <header className="font-bold text-white text-lg">Solutions</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <header className="font-bold text-white text-lg">Resources</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <nav>
                        <header className="font-bold text-white text-lg">Support</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <nav>
                        <header className="font-bold text-white text-lg">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
                <hr className='py-6 mr-28 ml-10' />
                <div className='lg:flex justify-between pb-10'>
                    <h4 className='text-sm lg:ml-10'>Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</h4>
                    <div className='flex gap-4 mr-28'>
                        <CiFacebook></CiFacebook>
                        <FaInstagram></FaInstagram>
                        <FaLinkedin></FaLinkedin>
                        <FaWhatsapp></FaWhatsapp>
                    </div>
                </div>
            </div>
            <div className='text-center text-white bg-black py-6'>Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved</div>
        </div>
    );
};

export default Footer;