import React from 'react'
import ActionButtons from './ActionButtons'

const TableRow = ({ user, selectedRows, editMode, editedUserData, handleCheckboxChange, handleInputChange, handleSave, handleDelete, setEditMode }) => {
    return (
        <>
            <tr 
             className=  {`${
                selectedRows.includes(user.id) ? 'bg-gray-200 h-12  border border-slate-700' : 'hover:bg-gray-100 h-12  border border-slate-700'
              }`}
             key={user.id}>
                <td></td>
                <td className="border-y-2  text-center border-slate-400">
                    <input
                        type="checkbox"
                        checked={selectedRows.includes(user.id)}
                        onChange={() => handleCheckboxChange(user.id)}
                    />
                </td>
                <td></td>
                {
                    editMode === user.id ?
                        <>
                            <td className="border-y-2 border-slate-400">
                                <input
                                    className="focus:outline-none"
                                    type="text"
                                    value={editedUserData.name}
                                    placeholder={user.name}
                                    onChange={(e) => handleInputChange("name", e.target.value)}
                                />
                            </td>
                            <td className="border-y-2 border-slate-400">
                                <input
                                    className="focus:outline-none"
                                    type="email"
                                    value={editedUserData.email}
                                    placeholder={user.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                />
                            </td>
                            <td className="border-y-2 border-slate-400">
                                <input
                                    className="focus:outline-none"
                                    type="text"
                                    value={editedUserData.role}
                                    placeholder={user.role}
                                    onChange={(e) => handleInputChange("role", e.target.value)}
                                />
                            </td>
                        </> :
                        <>
                            <td className="border-y-2 border-slate-400">{user.name}</td>
                            <td className="border-y-2 border-slate-400">{user.email}</td>
                            <td className="border-y-2 border-slate-400">{user.role}</td>
                        </>
                }

                <ActionButtons
                    editMode={editMode}
                    userId={user.id}
                    handleSave={handleSave}
                    handleDelete={handleDelete}
                    setEditMode={setEditMode}
                    editedUserData={editedUserData}
                />
            </tr>
        </>
    )
}

export default TableRow