import React, {useContext, useState} from 'react'
import {FaTrash} from 'react-icons/fa'
import {IoIosArrowForward} from 'react-icons/io'
import {MainContext} from '../../Context/Context'
import ListOpenContent from '../DialogContents/ListOpenContent'

const List = ({data}) => {

    const {lists, setLists, setActiveContent, setOpenDialog} = useContext(MainContext);
    const [listContent, setListContent] = useState(data)

    const openListHandler = () => {
        setActiveContent(<ListOpenContent listData={listContent} setListData={setListContent}/>)
        setOpenDialog(true)
    }
    const deleteHandler = () => {
        const newLists = lists.filter(deger => deger !== lists.find((a) => a.id === data.id))
        setLists(newLists)
    }
    return (
        <div
            className={`min-w-[12rem] border rounded-lg overflow-hidden text-black`}
            style={{
                borderColor: listContent.color
            }}
        >
            {/* top bar */}
            <div
                className='w-full h-7 bg-stone-300 flex justify-end items-center gap-1 px-1 relative'
                style={{
                    backgroundColor: listContent.color
                }}
            >
                <h1 className='absolute left-1 max-w-[139px] h-full overflow-hidden'>{data.title}</h1>
                <button
                    onClick={deleteHandler}
                    className='bg-stone-500 w-5 h-5 flex justify-center items-center rounded-full text-white
                    hover:bg-red-600 transition'
                >
                    <FaTrash size={12}/>
                </button>
                <button
                    onClick={openListHandler}
                    className='bg-stone-500 w-5 h-5 flex justify-center items-center rounded-full text-white
                    hover:bg-blue-500 transition'
                >
                    <IoIosArrowForward/>
                </button>
            </div>
            <div
                className='text-white grid justify-start p-1 max-h-[8rem]'
            >
                {/*İlk 3 değerin content de gösterilmesi*/}
                {listContent.data.slice(0, 3).map((e, index) => {
                    return (
                        <div className=''
                             key={index}>{listContent.prefixType === 'number' ? `${index + 1}.` : data.prefix} {e}</div>
                    )
                })}
                {/* {data.data.map((e, index) => {
                    return (
                        <div className='' key={index}>{data.prefixType === 'number' ? `${index+1}.` : data.prefix} {e}</div>
                    )
                })} */}
            </div>
        </div>
    )
}

export default List