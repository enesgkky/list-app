import React, { useContext, useEffect } from 'react'
import List from './List'
import { MainContext } from '../../Context/Context'

const Content = () => {

    const { lists } = useContext(MainContext);
    return (
        <div
            className='w-full flex flex-wrap justify-center p-5 gap-2'>
            {/* <List title={'Test'}/> */}
            {lists.map((e,index) => {
                e.id = index
                return (
                    <List data={e} key={e.id} />
                )
            })}
        </div>
    )
}

export default Content