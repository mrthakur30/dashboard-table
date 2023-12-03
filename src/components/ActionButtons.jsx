import React from 'react'
import { XSquare, FileEdit, X, Save } from 'lucide-react'

function ActionButtons({ editMode, userId, handleSave, handleDelete, setEditMode, editedUserData }) {
    return (
        <>
            {editMode === userId ?
                <td className="border-y-2 border-slate-400">
                    <button onClick={() => handleSave(userId, { editedUserData })} ><Save color="gray" className="hover:bg-slate-900 fill-white rounded-sm transition-colors" ></Save></button>
                    <button onClick={() => setEditMode(null)} ><X color="red" className="hover:bg-red-100 rounded-sm transition-colors" ></X></button>
                </td> :
                <td className="border-y-2 border-slate-400">
                    <button onClick={() => setEditMode(userId)} ><FileEdit color="black" className="hover:bg-green-100 fill-white rounded-sm transition-colors" ></FileEdit></button>
                    <button onClick={() => handleDelete(userId)} ><XSquare color="red" className="hover:bg-red-100 rounded-sm transition-colors" ></XSquare></button>
                </td>
            }
        </>
    )
}

export default ActionButtons