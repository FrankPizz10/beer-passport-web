import '../App.css';
import { DiAndroid, DiApple } from "react-icons/di";
import qrCode from '../assets/BeerPassportQR.png'
import beerLogo from '../assets/BeerIcon.png'
import { motion } from "framer-motion"

const Home = () => {
    return (
        <>
            <header className='header'>
                <motion.h1 whileInView={{ scale: [0.8, 1] }} transition={{ duration: 1 }}>BeerPassport</motion.h1>
            </header>
            <section className='content'>
                <div className='logo'>
                <motion.img src={beerLogo} 
                        whileInView={{ rotate: 360 }}
                        transition={{ duration: 1 }}></motion.img>
                </div>
                <motion.h2 whileInView={{ x: [200, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.8 }}>Pour Your Path.</motion.h2>
                <div className='qrContainer hide-on-mobile'>
                <motion.img src={qrCode} whileInView={{ x: [-200, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.8 }}></motion.img>
                </div>
                <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.8 }} className='buttonContainer'>
                    <a href="https://apps.apple.com/us/app/beerpassport/id6476255138" target="_blank" rel="noopener noreferrer">
                        <button>Download Apple <DiApple /></button>
                    </a>
                    <a href={import.meta.env.VITE_ANDROID_APK} download target="_blank" rel="noopener noreferrer">
                        <button>Download Android <DiAndroid /></button>
                    </a>
                </motion.div>
            </section>
        </>
    )
}

export default Home;