import React, {useContext, useEffect} from 'react'
import {MainContext} from '../../Context/Context'

const CreateDialog = ({content}) => {
    const {setOpenDialog} = useContext(MainContext)
    useEffect(() => {
        console.log('dialog render')
    });
    return (
        <div
            className='absolute top-0 bottom-0 left-0 right-0 
            m-auto max-w-fit max-h-fit bg-stone-700 rounded-xl
            grid font-mono dialog transition-all shadow
            overflow-hidden'>
            <div className='bg-stone-100 h-7 w-full'>
                <button
                    className='absolute right-1 top-1 text-white rounded-full bg-stone-500 w-5 h-5 flex justify-center items-center hover:bg-red-700 transition'
                    onClick={() => {
                        setOpenDialog(false)
                    }}
                >
                    X
                </button>
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}

export default CreateDialog