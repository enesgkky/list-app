import React, {useEffect} from 'react'
import classNames from 'classnames'
import {FaTrash} from 'react-icons/fa'


const Line = ({index, listData, value, setListData}) => {

    useEffect(()=>{
       return(
           setListData(listData)
       )
    },[])

    return (
        <div
            className={classNames({
                "px-2 py-1 flex items-center justify-between": true,
                "bg-stone-600": index % 2 !== 0,
            })}
            key={index}
        >
            {listData.prefixType === 'number' ? `${index + 1}.` : listData.prefix} {value}
            <div
                className='w-5 h-5 flex items-center justify-center hover:bg-stone-500 rounded-full cursor-pointer'
                onClick={() => {
                    listData.data.splice(index,1)
                    setListData(listData)
                }}
            >
                <FaTrash
                    className='text-red-500 hover:bg-stone-500'
                    size={12}
                />
            </div>
        </div>
    )
}

export default Line