import React from 'react'
import Select, { SingleValue } from "react-select"
import { OptionType } from '../../types'
import { useSearchParams } from 'react-router-dom';

type FilterPros ={
  data:OptionType[],
  paramName:string;
}

const Filter = ({data, paramName}:FilterPros) => {

  const [params, setParams]=useSearchParams();

const handleChange=(e:SingleValue<OptionType>)=>{
// keep the current parameters on url add new parameters
params.set(paramName, e?.value as string);

setParams(params);

}

const selectedOpt ={
  label:params.get(paramName) || data[0].label,
  value:params.get(paramName) || data[0].value,
}

  return (
    <div>

      <Select
      defaultValue={selectedOpt}
      onChange={handleChange}
      className='text-black min-w-[100px]' options={data}/>

    </div>
  )
}

export default Filter