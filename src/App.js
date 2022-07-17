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
            mentor: ""
        },
        {
            id: nanoid(),
            firstName: "raju",
            lastName: "reddy",
            email: "raju@icloud.com",
            mobile: "8885716517",
            assigned: true,
            mentor: "Vasu"
        },
        {
            id: nanoid(),
            firstName: "Narendra",
            lastName: "Modi",
            email: "namo@gmail.com",
            mobile: "124578962",
            assigned: false,
            mentor: ""
        },
    ])
    const [mentor, setMentor] = useState([])
    return (
        <Usercontext.Provider value={{ student, mentor, setStudent, setMentor }}>
            <div className="App flex flex-row ">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Dashboard data={{ student, mentor }} />} />
                    <Route path="*" element={<Dashboard data={{ student, mentor }} />} />
                    <Route path="/students" element={<Students data={student} />} />
                    <Route path="/mentors" element={<Mentors data={mentor} />} />
                    <Route path="/add-student" element={<AddStudent data={{ student, setStudent }} />} />
                    <Route path="/add-mentor" element={<AddMentor data={{ mentor, setMentor }} />} />
                    <Route path="/mentor/:id" element={<EditMentor data={{ mentor, setMentor }} />} />
                    <Route path="/student/:id" element={<EditStudent data={{ student, setStudent }} />} />
                    <Route path="/assign-student/:id" element={<AssignStudent data={{ setStudent, setMentor, student, mentor }} />} />
                    <Route path="/assign-mentor/:id" element={<AssignMentor data={{ setStudent, setMentor, student, mentor }} />} />
                </Routes>
            </div>
        </Usercontext.Provider>
    )
}

export default App