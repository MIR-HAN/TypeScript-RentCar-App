import React from 'react'
import Button from '../Button'
import { useSearchParams } from 'react-router-dom';

const ShowMore = () => {
    const [params, setParams] = useSearchParams();

    const limit = Number(params.get("limit")) || 5;

    const increaseLimit = () => {

        // new limit
        const newLimit = limit + 5;
        // update parameters
        params.set("limit", String(newLimit))
        //update url
        setParams(params)

    };

    return (
        <div className='w-full flex-center gap-5 my-10'>
         {limit < 30 &&  
           <Button title="Show More" handleClick={increaseLimit} />}
        </div>
    )
}

export default ShowMore