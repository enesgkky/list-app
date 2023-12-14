import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../Context/Context'
import { useState } from 'react'
import classNames from 'classnames'
import { prettyDOM } from '@testing-library/react'

const NewListContent = () => {

    const { lists, setLists, setOpenDialog } = useContext(MainContext)

    const [title, setTitle] = useState("");
    const [prefix, setPrefix] = useState("");
    const [color, setColor] = useState("#d6d3d1");
    const [numberPrefix, setNumberPrefix] = useState(false);
    const [listData, setListData] = useState(['item 1', 'item 2', 'item 3'])

    const submitHandle = (e) => {
        e.preventDefault()
        setLists([...lists, {
            title: title,
            prefixType: numberPrefix ? 'number' : 'customPrefix',
            prefix: prefix,
            color: color,
            data: listData,
            setData: setListData
        }])
        setOpenDialog(false)
    }

    useEffect(() => document.getElementById('focus-input').focus(), [])

    return (
        <div
            className='min-w-[18rem] grid gap-2 m-2'
        >
            {/* 1 */}
            <div className='flex gap-2'>
                <form onSubmit={submitHandle}>
                    <input
                        type='text'
                        placeholder='List title'
                        id='focus-input'
                        className='p-1 outline-none rounded'
                        value={title}
                        onChange={e => {
                            setTitle(e.target.value)
                        }}
                    />
                </form>

                <input
                    className='h-full p-1 rounded transition-none'
                    type='color'
                    value={color}
                    onChange={e => setColor(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='#'
                    className='w-10 p-1 outline-none rounded'
                    value={prefix}
                    disabled={numberPrefix}
                    onChange={e => {
                        if (prefix.length < 1 || e.nativeEvent.inputType === 'deleteContentBackward') {
                            setPrefix(e.target.value)
                        }
                    }}
                />
                <div className='flex items-center gap-2 text-white'>
                    <input
                        type='checkbox'
                        className='bg-green-500'
                        checked={numberPrefix}
                        onChange={e => {
                            setNumberPrefix(!numberPrefix)
                        }}
                    />
                    <span className='text-center text-xs font-extralight'>Number<br /> Sort</span>
                </div>

            </div>
            {/* 2 */}
            <div>
                {<button
                    onClick={submitHandle}
                    className={classNames({

                        'w-full border bg-green-950 border-green-500 text-white py-1 rounded': true,
                    })}
                >
                    Create List
                </button>}
            </div>
        </div>
    )
}

export default NewListContent