import React, {useContext, useEffect, useState} from 'react'
import {MainContext} from '../../Context/Context';
import Line from '../Content/Line';

const ListOpenContent = ({listData, setListData}) => {

    useEffect(()=>{
        setListData(listData)
    })

    const [searchValue, setSearchValue] = useState("");

    const submitHandle = (e) => {
        e.preventDefault()
        if (searchValue !== "") {
            try {
                listData.data = [...listData.data, searchValue]
                setSearchValue("")
            } catch (e) {
                console.log(e)
            }
        }
    }

    return (
        <div className='min-w-[24rem] text-white'>
            <div
                className='w-full bg-stone-600 rounded-xl rounded-t-none rounded-b-none uppercase font-extralight text-center flex'
            >
                <form
                    className='w-full'
                    onSubmit={submitHandle}
                >
                    <input
                        type='text'
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                        placeholder='Value search and press ENTER'
                        className='w-full p-2 bg-stone-500 outline-none placeholder:text-stone-800'
                    />
                </form>

            </div>
            {/*Liste içeriğinin yazdırılması + filtre*/}
            <div
                className='border-2 border-stone-600 rounded-xl rounded-t-none'
            >
                {listData.data.filter(e => e.startsWith(searchValue)).map((e, index) => {
                    return (
                        <Line index={index} listData={listData} setListData={setListData} value={e} key={index}/>
                    )
                })}
            </div>
        </div>
    )
}

export default ListOpenContent