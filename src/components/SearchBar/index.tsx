import React, { useState, useMemo, FormEvent } from 'react'
import Select from 'react-select'
import { makes } from '../../constants'
import { OptionType } from '../../types'
import { useSearchParams } from 'react-router-dom'

const Button = ({ designs }: { designs?: string }) => {

  return (<button className={`ml-3 x-10 ${designs}`}>
    <img src="/magnifying-glass.svg" width={40} height={40} alt="" />
  </button>)
}


const SearchBar = () => {
const [params, setParams] = useSearchParams();
const [make, setMake] = useState("");
const [model, setModel] = useState("");


  // change the object to react-select format
  //avoid recaunting
  const options: OptionType[] = useMemo(()=> makes.map((make) => ({
    label: make,
    value: make
  })),[])

  // add make and model as paprameters to url while onsubmit 
const handleSubmit=(e:FormEvent)=>{
e.preventDefault();

setParams({make,model})

}

const selectedMake={
  label:params.get("make") || "",
  value:params.get("make") || "",
}

  return (
    <form
    onSubmit={handleSubmit}
    className='searchbar gap-3'>
      <div className='searchbar__item'>
        <Select 
        defaultValue={selectedMake}
        onChange={(e)=> e && setMake(e.value)}
        className='w-full text-black' options={options} />

        <Button designs="sm:hidden" />

      </div>

      <div className='searchbar__item'>
        <img width={25} className='absolute ml-4' src="/model-icon.png" alt="" />
        <input
        onChange={(e)=> setModel(e.target.value)}
          className='searchbar__input rounded text-black'
          type="text"
          placeholder='eg:Civic'
          defaultValue={params.get("model") || ""} />


        <Button designs="sm:hidden" />
      </div>


      <Button designs="max-sm:hidden" />

    </form>
  )
}

export default SearchBar