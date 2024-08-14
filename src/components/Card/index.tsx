import React, { useState } from 'react'
import { CarType } from "../../types"
import Button from '../Button';
import { motion } from 'framer-motion';
import generateImg from '../utils/generateImg';
import Model from '../Model';


interface CardProps {
    car: CarType;
}

const Card = ({ car }: CardProps) => {

const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        < motion.div 
        initial={{
            scale:0.5,
            opacity:0,
        }}

        whileInView={{
            scale:1,
            opacity:1,
        }}
        className='car-card group'>
            {/* cars name*/}
            <h2 className='car-card__content-title ' >
                {car.make} {car.model}</h2>

            {/* cars price*/}

            <div className='flex mt-6 text-[32px]'>
                <span className='font-semibold text-[19px]'>$</span>
                {Math.round(Math.random() * 7000 + 1500)}
                <span className=' self-end font-semibold text-[16px]'>/days</span>
            </div>

            {/* cars image*/}

            <div className='relative w-full h-40 my-3'>
                <img className='w-full h-full object-contain'
                    src={generateImg(car)} alt="" />
            </div>

            {/* bottom */}
            <div className='w-full mt-2 flex'>
                {/* icons */}
                <div className='group-hover:hidden flex w-full justify-between'>
                    <div className='flex-center flex-col'>
                        <img width={25} src="/steering-wheel.svg" alt="" />
                        <p>{car.transmission === "a" ? "automathic" : "manuel"}</p>
                    </div>

                    <div className='flex-center flex-col'>
                        <img width={25} src="/tire.svg" alt="" />
                        <p>{car.drive}</p>
                    </div>

                    <div className='flex-center flex-col'>
                        <img width={25} src="/gas.svg" alt="" />
                        <p>{car.fuel_type}</p>
                    </div>
                </div>

                {/* button */}

                <div className='w-full hidden group-hover:flex'>
                    <Button title={"More"}
                        designs='w-full py-[16px]'
                        icon="/right-arrow.svg" 
                        handleClick={()=> setIsOpen(true)} />
                  
                </div>
            </div>

            <Model  isOpen={isOpen} close={()=> setIsOpen(false)} car={car}/>
        </motion.div>
    )
}

export default Card