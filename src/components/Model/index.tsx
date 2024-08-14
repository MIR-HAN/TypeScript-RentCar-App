import React from 'react'
import { CarType } from '../../types'
import generateImg from '../utils/generateImg';

type ModelProps = {
    car: CarType,
    isOpen: boolean,
    close: () => void;
}


const Model = ({ car, isOpen, close }: ModelProps) => {



    return (
        <>
            {isOpen &&
                (<div className='fixed inset-0 bg-black bg-opacity-25 z-20 grid place-items-center'>
                    <div className='relative bg-white p-6 rounded-2xl max-w-lg max-h-[90vh] flex flex-col gap-5 shadow-xl overflow-auto'>
                        {/* close button*/}
                        <button
                            onClick={close}
                            className='curser-pointer bg-white p-1 sticky end-1 top-0 self-end z-10 bg-opacity-50 rounded-full'>
                            <img  src="/close.svg" alt="close" />
                        </button>
                        {/* images*/}

                        <div className='flex-1 flex flex-col gap-3'>
                            {/* big image*/}
                            <div className='w-full h-40 bg-pattern bg-center'>
                                <img className='h-full mx-auto object-contain' src={generateImg(car)} alt="" />
                            </div>
                            {/* small images*/}
                            <div className='flex gap-3'>
                                <div className='flex-1 flex relative h-24 bg-primary-blue-100'>
                                    <img className='h-full mx-auto object-contain min-w-[146px]' src={generateImg(car, "29")} alt="" />
                                </div>
                                <div className='flex-1 flex relative h-24 bg-primary-blue-100'>
                                    <img className='h-full mx-auto object-contain min-w-[146px]' src={generateImg(car, "33")} alt="" />
                                </div>
                                <div className='flex-1 flex relative h-24 bg-primary-blue-100'>
                                    <img className='h-full mx-auto object-contain min-w-[146px]' src={generateImg(car, "13")} alt="" />
                                </div>
                            </div>
                        </div>

                        {/* car info*/}

                        {/* change object to array*/}
                        {Object.entries(car).map(([key, value]) => (
                            <div className='flex justify-between'>
                                <h4 className='capitalize'> {key.split("_").join(" ")}</h4>
                                <p className='text-black-100 font-semibold capitalize'>{value}</p>
                            </div>)
                        )}

                    </div>
                </div>)
            }
        </>
    );
};

export default Model