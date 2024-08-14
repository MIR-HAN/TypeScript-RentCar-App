import React from 'react';
import { Link } from "react-router-dom";
import Button from "../Button"

const index = () => {
  return (
    <header className='w-full absolute z-10'>

      <nav className='max-w-[1445px] mx-auto flex justify-between
      items-center px-6 py-4 sm:px-16'>
        <Link to={"/"}>
          <img src="/bmw.png" width={50} />
        </Link>

        <Button title="Sign up" designs="min-w-[130px]" />
      </nav>


    </header>
  )
}

export default index