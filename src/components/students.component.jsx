import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiFillCheckCircle } from 'react-icons/ai'
import { MdError, MdDeleteForever, MdAssignmentTurnedIn } from 'react-icons/md'
import { FiEdit2 } from 'react-icons/fi'
import { Usercontext } from '../App'

const Students = () => {

    const context = useContext(Usercontext)
    const [students, setStudents] = [context.student, context.setStudent]

    const deleteHandler = (id) => {
        let filteredStudents = students.filter((student) => student.id !== id)
        setStudents(filteredStudents)

    }


    return (
        <div className="flex flex-col mx-20" >
            <div className="flex flex-row justify-center my-6 text-4xl font-bold text-gray-600">Students</div>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead className="border-b">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-600 px-6 py-4 text-left">
                                        Id
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-600 px-6 py-4 text-left">
                                        First Name
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-600 px-6 py-4 text-left">
                                        Last Name
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-600 px-6 py-4 text-left">
                                        Email
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-600 px-6 py-4 text-left">
                                        Mobile
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-600 px-6 py-4 text-left">
                                        Assigned
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-600 px-6 py-4 text-left">
                                        Mentor
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-600 px-6 py-4 text-left">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    students.map((student, index) => (
                                        <tr className="border-b capitalize" key={student.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {student.firstName}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {student.lastName}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 lowercase whitespace-nowrap">
                                                {student.email}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {student.mobile}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {student.assigned === true ? <AiFillCheckCircle className="text-green-500" /> : <MdError className="text-red-500" />}

                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {student.mentor.firstName ? student.mentor.firstName : 'un assigned'}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <Link to={`/edit-student/${index}`}><button className="bg-blue-500 rounded-xl p-2 m-1"><FiEdit2 size={18} /></button></Link>
                                                <button className="bg-red-500 rounded-xl p-2 m-1"><MdDeleteForever size={18} onClick={() => deleteHandler(student.id)} /></button>
                                                {
                                                    !student.assigned ? <Link to={`/assign-student/${index}`}><button className="bg-green-500 rounded-xl p-2 m-1"><MdAssignmentTurnedIn size={18} /></button></Link> : ''
                                                }

                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Students
