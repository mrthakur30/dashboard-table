import React from 'react'
import { Trash } from 'lucide-react'
const SearchBar = ({ handleEnterPress, handleSearchChange, deleteSelectedHandler }) => {
    return (
        <>
            <div className="my-8 flex  justify-between h-16  w-4/6">
                <input
                    type="text" className="  focus:outline-none border-2  border-gray-600 rounded-lg p-3 "
                    onKeyDown={handleEnterPress}
                    onChange={handleSearchChange}
                    placeholder="Search"
                />

                <button className=' transition-all hover:bg-gray-100 rounded-md px-2' onClick={deleteSelectedHandler}><Trash color="red" /></button>
            </div>
        </>
    )
}

export default SearchBar