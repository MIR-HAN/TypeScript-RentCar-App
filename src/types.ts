
import { MouseEventHandler } from "react"

// button probs type
export type ButtonProps ={
    title:string,
    designs?:string,
    type?: "submit" | "reset" | "button",
    icon?:string,
    disabled?:boolean,
    handleClick?:MouseEventHandler<HTMLButtonElement>;
  }
  

  // api data type

  export type CarType ={

      city_mpg: number,
      class: string,
      combination_mpg: number,
      cylinders: number,
      displacement: number,
      drive: "fwd" | "rwd" | "4wd" | "awd",
      fuel_type: "gas" | "diesel" | "electricity",
      highway_mpg: number,
      make: string,
      model: string,
      transmission: "a" | "m",
      year: number
  
  }

  // slect types
export type OptionType ={
label:string,
value:string
}

