'use client'
import TableRow from './TableRow'
import Pagination from "@/components/Pagination";
import React, { useEffect, useState } from "react";
import SearchBar from './SearchBar';

const UserList = ({ fetchedUsers }) => {

    const [search, setSearch] = useState("");
    const [users, setUsers] = useState(fetchedUsers);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageUsers, setCurrentPageUsers] = useState(users.slice(0, 10));
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [editMode, setEditMode] = useState(null);
    const [editedUserData, setEditedUserData] = useState({ name: '', email: '', role: '' });


    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);

        if (value === '') {
            setCurrentPageUsers(users.slice(currentPage * 10 - 10, currentPage * 10));
            setCurrentPage(1);
        }
    }

    const handleEnterPress = (e) => {
        if (e.code === 'Enter') {
            console.log("Enter pressed");
            const filteredUsers = users.filter(user =>
                user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.email.toLowerCase().includes(search.toLowerCase()) ||
                user.role.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredUsers(filteredUsers);
            setCurrentPage(1);
        }
    }

    useEffect(() => {
        const startIndex = (currentPage - 1) * 10;
        const endIndex = startIndex + 10;
        setCurrentPageUsers(filteredUsers.slice(startIndex, endIndex));
    }, [filteredUsers]);

    useEffect(() => {
        setCurrentPageUsers(users.slice(currentPage * 10 - 10, currentPage * 10));
    }, [currentPage, users])

    const handleDelete = (userId) => {
        const updatedUsers = users.filter((user) => user.id !== userId);
        setUsers(updatedUsers);
    };

    const handleInputChange = (field, value) => {
        setEditedUserData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSave = (userId) => {
        setEditMode(null);
        const updatedUsers = users.map((user) =>
            user.id === userId ? { ...user, ...editedUserData } : user
        );
        setUsers(updatedUsers);
        setEditedUserData({ name: '', email: '', role: '' });
    };

    const handleCheckboxChange = (userId) => {
        setSelectedRows((prevSelectedRows) =>
            prevSelectedRows.includes(userId)
                ? prevSelectedRows.filter((id) => id !== userId)
                : [...prevSelectedRows, userId]
        );
    };

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        setSelectedRows(selectAll ? [] : currentPageUsers.map((user) => user.id));
    };

    const deleteSelectedHandler = () => {
        setUsers((prevUsers) =>
            prevUsers.filter((user) => !selectedRows.includes(user.id))
        );
        setSelectAll(false);
    };
    return (
        <>
            <SearchBar
                handleEnterPress={handleEnterPress}
                handleSearchChange={handleSearchChange}
                deleteSelectedHandler={deleteSelectedHandler}
            />
            <div className="md:w-4/6 flex  bg-white ">
                <table className="w-full border-collapse border-2 border-slate-400">
                    <thead>
                        <tr className="h-12" >
                            <th></th>
                            <th>
                                <input
                                    type="checkbox"
                                    checked={selectAll}
                                    onChange={handleSelectAll}
                                />
                            </th>
                            <th></th>

                            <th className="text-left ">Name</th>
                            <th className="text-left ">Email</th>
                            <th className="text-left ">Role</th>
                            <th className="text-left ">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPageUsers.map((user) => (
                            <TableRow
                                key={user.id}
                                user={user}
                                selectedRows={selectedRows}
                                editMode={editMode}
                                editedUserData={editedUserData}
                                handleCheckboxChange={handleCheckboxChange}
                                handleInputChange={handleInputChange}
                                handleSave={handleSave}
                                handleDelete={handleDelete}
                                setEditMode={setEditMode}
                            />
                        ))}
                    </tbody>
                </table>

            </div>
            <Pagination
                currentPage={currentPage}
                totalItems={users.length}
                onPageChange={handlePageChange}
            />
        </>
    )
}

export default UserList