import { React, createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard, Sidebar, Students, Mentors, AddStudent, AddMentor, EditMentor, EditStudent, AssignMentor, AssignStudent } from './components'
import { nanoid } from 'nanoid'

export const Usercontext = createContext()

const App = () => {

    const [student, setStudent] = useState([
        {
            id: nanoid(),
            firstName: "vinod",
            lastName: "kotagiri",
            email: "vinodkotagiri@icloud.com",
            mobile: "9885718717",
            assigned: false,
            mentor: {}
        },
        {
            id: nanoid(),
            firstName: "raju",
            lastName: "reddy",
            email: "raju@icloud.com",
            mobile: "8885716517",
            assigned: false,
            mentor: {}
        },
        {
            id: nanoid(),
            firstName: "Narendra",
            lastName: "Modi",
            email: "namo@gmail.com",
            mobile: "124578962",
            assigned: false,
            mentor: {}
        },
    ])
    const [mentor, setMentor] = useState([
        {
            id: nanoid(),
            firstName: "John",
            lastName: "Cena",
            email: "johncena@gmail.com",
            mobile: "7788994455",
            assigned: false,
            assignedStudents: [{},]
        },
        {
            id: nanoid(),
            firstName: "Salman",
            lastName: "khan",
            email: "salman@gmail.com",
            mobile: "665478981",
            assigned: false,
            assignedStudents: [{},]
        },
        {
            id: nanoid(),
            firstName: "Kamal",
            lastName: "Kanth",
            email: "kamal@gmail.com",
            mobile: "7788445594",
            assigned: false,
            assignedStudents: [{},]
        },

    ])
    return (
        <Usercontext.Provider value={{ student, mentor, setStudent, setMentor }}>
            <div className="App flex flex-row ">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="*" element={<Dashboard />} />
                    <Route path="/students" element={<Students />} />
                    <Route path="/mentors" element={<Mentors />} />
                    <Route path="/add-student" element={<AddStudent />} />
                    <Route path="/add-mentor" element={<AddMentor />} />
                    <Route path="/edit-mentor/:id" element={<EditMentor />} />
                    <Route path="/edit-student/:id" element={<EditStudent />} />
                    <Route path="/assign-student/:id" element={<AssignStudent />} />
                    <Route path="/assign-mentor/:id" element={<AssignMentor />} />
                </Routes>
            </div>
        </Usercontext.Provider>
    )
}

export default App