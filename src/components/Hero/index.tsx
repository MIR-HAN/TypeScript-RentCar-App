import React from 'react'
import Button from '../Button'
import { motion } from 'framer-motion'

type HeroProps = {

    //the type of element in useRef
    element:React.RefObject<HTMLDivElement>
}

const Hero = ({element}:HeroProps) => {

    const scroll =()=>{
   
       element.current?.scrollIntoView({ behavior:'smooth'});
    };

    return (
        <div className='hero'>
            <div className='pt-36 padding-x flex-1 max-h-[920px]'>
                <h1 className='hero__title'>Feel the freedom, start your journey</h1>


                <p className='hero__subtitle'>
                    Welcome to BMW Freedom Rentals.
                    Experience the thrill of driving a luxurious, high-performance BMW.
                    Perfect for any journey, our premium fleet is ready to elevate your adventure.
                    Start your journey with us today.
                </p>

                <Button
                    handleClick={scroll}
                    title={"Discover"}
                    designs="mt-10" />
            </div>

            <div className='flex justify-center'>
                <motion.img
                    initial={{
                        translateX: 200,
                        scale: 0.7,
                    }}

                    animate={{
                        translateX: 0,
                        scale: 1
                    }}

                    transition={{
                        duration: 1,
                    }}

                    src="/hero.png"
                    alt="bwm"
                    className='object-contain' />
            </div>

        </div>
    )
}

export default Hero