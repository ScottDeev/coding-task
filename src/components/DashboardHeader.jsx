import React from 'react'
import { AuthContext } from '../authContext';
import logoutIcon from '../assests/image/logout.svg'

export default function DashboardHeader() {
  const { dispatch } = React.useContext(AuthContext);
  return (
    <header className='flex flex-row w-full justify-between text-white items-center'>
      <h1 className='text-[48px] font-[900]'>APP</h1>
      <button className='bg-[#9BFF00] rounded-[40px] flex py-[12px] px-[24px]' onClick={() => dispatch({type: 'LOGOUT'})}>
        <img src={logoutIcon} alt="" />
        <span className='text-black'>Logout</span>
      </button>
    </header>
  )
}