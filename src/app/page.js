"use client"

import Pagination from "@/components/Pagination";
import React, { useEffect, useState } from "react";
import { XSquare, FileEdit, Trash, X, Save } from 'lucide-react'

const fetchedUsers = [
  {
    "id": "1",
    "name": "Aaron Miles",
    "email": "aaron@mailinator.com",
    "role": "member"
  },
  {
    "id": "2",
    "name": "Aishwarya Naik",
    "email": "aishwarya@mailinator.com",
    "role": "member"
  },
  {
    "id": "3",
    "name": "Arvind Kumar",
    "email": "arvind@mailinator.com",
    "role": "admin"
  },
  {
    "id": "4",
    "name": "Caterina Binotto",
    "email": "caterina@mailinator.com",
    "role": "member"
  },
  {
    "id": "5",
    "name": "Chetan Kumar",
    "email": "chetan@mailinator.com",
    "role": "member"
  },
  {
    "id": "6",
    "name": "Jim McClain",
    "email": "jim@mailinator.com",
    "role": "member"
  },
  {
    "id": "7",
    "name": "Mahaveer Singh",
    "email": "mahaveer@mailinator.com",
    "role": "member"
  },
  {
    "id": "8",
    "name": "Rahul Jain",
    "email": "rahul@mailinator.com",
    "role": "admin"
  },
  {
    "id": "9",
    "name": "Rizan Khan",
    "email": "rizan@mailinator.com",
    "role": "member"
  },
  {
    "id": "10",
    "name": "Sarah Potter",
    "email": "sarah@mailinator.com",
    "role": "admin"
  },
  {
    "id": "11",
    "name": "Keshav Muddaiah",
    "email": "keshav@mailinator.com",
    "role": "member"
  },
  {
    "id": "12",
    "name": "Nita Ramesh",
    "email": "nita@mailinator.com",
    "role": "member"
  },
  {
    "id": "13",
    "name": "Julia Hunstman",
    "email": "julia@mailinator.com",
    "role": "member"
  },
  {
    "id": "14",
    "name": "Juan Alonso",
    "email": "juan@mailinator.com",
    "role": "admin"
  },
  {
    "id": "15",
    "name": "Gabriel Montoya",
    "email": "gabriel@mailinator.com",
    "role": "admin"
  },
  {
    "id": "16",
    "name": "Beatrice Iglesias",
    "email": "beatrice@mailinator.com",
    "role": "admin"
  },
  {
    "id": "17",
    "name": "Sarah Symms",
    "email": "sarah.s@mailinator.com",
    "role": "admin"
  },
  {
    "id": "18",
    "name": "Patrick Pinheiro",
    "email": "patrick@mailinator.com",
    "role": "admin"
  },
  {
    "id": "19",
    "name": "Anand Patel",
    "email": "anand@mailinator.com",
    "role": "member"
  },
  {
    "id": "20",
    "name": "Kishore Kalburgi",
    "email": "kishore@mailinator.com",
    "role": "member"
  },
  {
    "id": "21",
    "name": "Rebecca Norris",
    "email": "rebecca@mailinator.com",
    "role": "member"
  },
  {
    "id": "22",
    "name": "Özgür Başak",
    "email": "ozgur@mailinator.com",
    "role": "member"
  },
  {
    "id": "23",
    "name": "Robin Andersen",
    "email": "robin@mailinator.com",
    "role": "member"
  },
  {
    "id": "24",
    "name": "Nandini Kumar",
    "email": "nandini@mailinator.com",
    "role": "member"
  },
  {
    "id": "25",
    "name": "Nikita Smith",
    "email": "nikita@mailinator.com",
    "role": "member"
  },
  {
    "id": "26",
    "name": "Colton Doe",
    "email": "colton@mailinator.com",
    "role": "member"
  },
  {
    "id": "27",
    "name": "Alain Senna",
    "email": "alain@mailinator.com",
    "role": "member"
  },
  {
    "id": "28",
    "name": "Ashwin Jain",
    "email": "ashwin@mailinator.com",
    "role": "member"
  },
  {
    "id": "29",
    "name": "Seema Bhatt",
    "email": "seema@mailinator.com",
    "role": "member"
  },
  {
    "id": "30",
    "name": "Kayla Scarpinski",
    "email": "kayla@mailinator.com",
    "role": "member"
  },
  {
    "id": "31",
    "name": "Ajay Ghosh",
    "email": "ajay@mailinator.com",
    "role": "member"
  },
  {
    "id": "32",
    "name": "Chris Lindberg",
    "email": "chris@mailinator.com",
    "role": "member"
  },
  {
    "id": "33",
    "name": "Christina Mourujärvi",
    "email": "christina@mailinator.com",
    "role": "member"
  },
  {
    "id": "34",
    "name": "Mikhail Bill",
    "email": "mikhail@mailinator.com",
    "role": "member"
  },
  {
    "id": "35",
    "name": "Eino Göregen",
    "email": "eino@mailinator.com",
    "role": "member"
  },
  {
    "id": "36",
    "name": "Zachariah Johansson",
    "email": "zacharaiah@mailinator.com",
    "role": "member"
  },
  {
    "id": "37",
    "name": "Aimaan Mohammed",
    "email": "aimaan@mailinator.com",
    "role": "admin"
  },
  {
    "id": "38",
    "name": "Aika Tsunoda",
    "email": "aika@mailinator.com",
    "role": "member"
  },
  {
    "id": "39",
    "name": "Kimiko Minamoto",
    "email": "kimiko@mailinator.com",
    "role": "member"
  },
  {
    "id": "40",
    "name": "Alyona Baginskaite",
    "email": "alyona@mailinator.com",
    "role": "member"
  },
  {
    "id": "41",
    "name": "Anirudh Mukherjee",
    "email": "anirudh@mailinator.com",
    "role": "member"
  },
  {
    "id": "42",
    "name": "Alyona Gov",
    "email": "alyonagov@mailinator.com",
    "role": "member"
  },
  {
    "id": "43",
    "name": "Robin Singh",
    "email": "robin@mailinator.com",
    "role": "member"
  },
  {
    "id": "44",
    "name": "Vijay Vasudevan",
    "email": "vijayv@mailinator.com",
    "role": "member"
  },
  {
    "id": "45",
    "name": "Steve Smith",
    "email": "steve@mailinator.com",
    "role": "member"
  },
  {
    "id": "46",
    "name": "Anirudh Banerjee",
    "email": "anirudhb@mailinator.com",
    "role": "member"
  }
]

export default function Home() {


  

  const [search, setSearch] = useState("");
  const [users, setUsers] = useState(fetchedUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageUsers, setCurrentPageUsers] = useState(users.slice(0, 10));
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [editedUserData, setEditedUserData] = useState({name : '', email : '', role: ''});


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
    setEditedUserData({name : '', email : '', role: ''});
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
  }

  return (
    <main className="grid justify-items-center ">

      <div className="my-8 flex  justify-between w-4/6">
        <input type="text" className="  focus:outline-none border-2  border-gray-600 rounded-lg p-3 " onKeyDown={handleEnterPress} onChange={handleSearchChange} placeholder="Search" />
        <button onClick={deleteSelectedHandler}><Trash color="red" /></button>
      </div>
      <div className="w-4/6  ">
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
              <tr className=" h-12  border border-slate-700" key={user.id}>
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

                {editMode === user.id ?
                  <td className="border-y-2 border-slate-400">
                    <button onClick={() => handleSave(user.id, { editedUserData })} ><Save color="gray" className="hover:bg-slate-900 fill-white rounded-sm transition-colors" ></Save></button>
                    <button onClick={() => setEditMode(null)} ><X color="red" className="hover:bg-red-100 rounded-sm transition-colors" ></X></button>
                  </td> :
                  <td className="border-y-2 border-slate-400">
                    <button onClick={() => setEditMode(user.id)} ><FileEdit color="black" className="hover:bg-green-100 fill-white rounded-sm transition-colors" ></FileEdit></button>
                    <button onClick={() => handleDelete(user.id)} ><XSquare color="red" className="hover:bg-red-100 rounded-sm transition-colors" ></XSquare></button>
                  </td>
                }
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      <Pagination currentPage={currentPage} totalItems={users.length} onPageChange={handlePageChange} />
    </main>
  )
}
