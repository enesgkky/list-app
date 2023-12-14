import React from 'react'
import CreateList from './CreateList'

const Header = () => {
    return (
        <div
            className='bg-stone-800 text-white h-24 w-full relative flex'>
            <div
                className='flex items-center justify-center w-full'>
                <CreateList />
            </div>
        </div>
    )
}

export default Header