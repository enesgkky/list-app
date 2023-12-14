import React, { useContext } from 'react'
import { MainContext } from '../../Context/Context'
import NewListContent from '../DialogContents/NewListContent'

const CreateList = () => {

    const { setOpenDialog, setActiveContent } = useContext(MainContext)

    return (
        <button
            onClick={() => {
                setActiveContent(<NewListContent/>)
                setOpenDialog(true)
            }}
            className='px-5 py-3 rounded font-mono bg-stone-600'>
            Create List
        </button>
    )
}

export default CreateList