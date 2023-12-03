import React from 'react'
import { Trash, FileEdit, X, Save } from 'lucide-react'

function ActionButtons({ editMode, userId, handleSave, handleDelete, setEditMode, editedUserData }) {
    return (
        <>
            {editMode === userId ?
                <td className="border-y-2 border-slate-400">
                    <button
                    className='mx-2'
                        onClick={() => handleSave(userId, { editedUserData })} >
                        <Save color="black" className="hover:bg-black fill-white rounded-sm border-2 transition-colors" />
                    </button>
                    <button
                    className='mx-2'
                        onClick={() => setEditMode(null)} >
                        <X color="red" className="hover:bg-white rounded-sm transition-colors" />
                    </button>
                </td> :
                <td className="border-y-2 border-slate-400">
                    <button
                    className='mx-2'
                        onClick={() => setEditMode(userId)} >
                        <FileEdit color="black" className=" hover:bg-black fill-white border-2  rounded-sm transition-colors" />
                    </button>
                    <button
                    className='mx-2'
                        onClick={() => handleDelete(userId)} >
                        <Trash color="red" className="hover:bg-white rounded-sm transition-colors" />
                    </button>
                </td>
            }
        </>
    )
}

export default ActionButtons