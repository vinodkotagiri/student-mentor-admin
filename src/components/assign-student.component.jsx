import React, { useContext, Fragment, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Usercontext } from '../App'
const AssignStudent = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const context = useContext(Usercontext)
    const { mentor, student, setStudent, setMentor } = context

    // Student data to be changed
    const selectedStudent = context.student[id]
    const [sFirstName] = useState(selectedStudent.firstName)
    const [sLastName] = useState(selectedStudent.lastName)
    const [sEmail] = useState(selectedStudent.email)
    const [sMobile] = useState(selectedStudent.mobile)


    const [assignedMentor, setAssignedMentor] = useState(selectedStudent?.mentor)
    const [isAssignedMentor, setIsAssignedMentor] = useState(selectedStudent?.assigned)

    // Mentor data to be changed
    const [selectedMentor, setSelectedMentor] = useState({})


    const [assignedStudents, setAssignedStudents] = useState(selectedMentor?.assignedStudents)
    const [isAssignedStudent, setIsAssignedStudent] = useState(false)

    const [isSelected, setIsSelected] = useState(false)

    const handleChange = (event) => {
        // Toggle Assign Button
        setIsSelected(true)
        //update selected student
        const mentorToBeAssigned = context.mentor[event.target.value]
        setAssignedMentor(mentorToBeAssigned)
        setIsAssignedMentor(true)

        //update Mentor
        setSelectedMentor(mentorToBeAssigned)
        setAssignedStudents(selectedStudent.firstname)
        setIsAssignedStudent(true)
    }

    console.log(selectedMentor)

    const handleAssign = () => {
        //Update students
        let studentData = { id: selectedStudent.id, firstName: sFirstName, lastName: sLastName, mobile: sMobile, email: sEmail, mentor: assignedMentor, assigned: isAssignedMentor }
        const students = [...student]
        const updatedStudents = students.filter((student) => student.id !== selectedStudent.id)
        setStudent([...updatedStudents, studentData])

        let mentorData = {
            id: selectedMentor.id,
            firstName: selectedMentor.firstName,
            lastName: selectedMentor.lastName,
            email: selectedMentor.email,
            mobile: selectedMentor.mobile,
            assignedStudents: assignedStudents,
            assigned: isAssignedStudent
        }
        let indexOfMentor = mentor.indexOf(selectedMentor)
        const mentors = [...mentor]
        mentors.splice(indexOfMentor, 1, mentorData)
        setMentor(mentors)




        navigate('/students')
    }



    return (
        <Fragment>
            <div className="w-screen">
                <div className="flex flex-row justify-center mt-6 text-4xl text-gray-500 font-bold capitalize">{`${selectedStudent.firstName} ${selectedStudent.lastName}`}</div>
                <div className="flex flex-row mt-12">
                    <div className="text-2xl font-bold text-gray-500 mt-3 m-6 p-6" >Select Mentor</div>
                    <select placeholder='select mentor' className="p-6 text-2xl mt-3 m-6 text-gray-800 font-bold cursor-pointer" onChange={(e) => handleChange(e)}>
                        {/* <option >select mentor</option> */}
                        {
                            mentor.map((m, i) => (
                                !m.assigned ? <option value={i} key={i}>{m.firstName}</option> : <option key={i} disabled>{m.firstName}</option>

                            ))
                        }
                    </select>
                    {
                        isSelected ? <button className="bg-green-500 rounded-xl  text-xl mt-3 m-6 w-1/6 text-gray-800 font-bold cursor-pointer" onClick={() => handleAssign()} >Assign</button> : ''
                    }

                </div>
            </div>
        </Fragment >

    )
}

export default AssignStudent
