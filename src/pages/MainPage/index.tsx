import React, { useEffect, useState, useRef } from 'react'
import Hero from '../../components/Hero'
import SearchBar from '../../components/SearchBar'
import Filter from '../../components/Filter'
import { fetchCars } from '../../components/utils/fetchCars'
import { CarType } from '../../types'
import Card from '../../components/Card'
import ShowMore from '../../components/ShowMore'
import { useSearchParams } from 'react-router-dom'
import { fuels, years } from '../../constants'


const Main = () => {

  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const catalogRef = useRef<HTMLDivElement>(null);

  const [params] = useSearchParams();
console.log(cars)
  useEffect(() => {
    // create an object with all params on the url

    const paramsObj = Object.fromEntries(params.entries());
    fetchCars(paramsObj)
      .then((data) => {setCars(Array.isArray(data) ? data : []);})
      .catch(() => setIsError(true))

  }, [params]);

  return (
    <div className='mb-40'>
      <Hero element={catalogRef} />

      <div ref={catalogRef} className='mt-12 padding-x padding-y max-width '>

        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalog</h1>

          <p>Discover the cars you like</p>

        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <Filter paramName="fuel_type" data={fuels}/>
            <Filter paramName="year" data={years}/>
          </div>
        </div>

        {/*
Cases :
1) if data is null
2) if an error occur
3) if data is empty array
4) if data reveived
*/}

        {!cars ?
          (<div className='warn-container'>

            <h2>Loading...</h2>

          </div>) : isError ?

            (<div>

              <h2> Sorry! An error occur</h2>

            </div>) : cars.length < 1 ? (

              <div>
                <h2>The car you were looking for was not found </h2>
              </div>
            ) : (
              <section>
                <div className='home__cars-wrapper'>
                  {cars?.map((car, i) => <div> <Card key={i} car={car} /> </div>)}
                </div>

                <ShowMore />
              </section>

            )}

      </div>
    </div>
  );
};

export default Main