import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiFillCheckCircle } from 'react-icons/ai'
import { MdError, MdDeleteForever, MdAssignmentTurnedIn } from 'react-icons/md'
import { FiEdit2 } from 'react-icons/fi'
import { Usercontext } from '../App'

const Mentors = () => {
    const navigate = useNavigate()
    const context = useContext(Usercontext)
    const { mentor, setMentor } = context

    const deleteHandler = (id) => {
        let filteredMentors = mentor.filter((m) => m.id !== id)
        setMentor(filteredMentors)
    }


    return (
        <div className="flex flex-col mx-20" >
            <div className="flex flex-row justify-center my-6 text-4xl font-bold text-gray-600">Mentors</div>
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
                                        Assigned Students
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-600 px-6 py-4 text-left">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    mentor.map((m, i) => (
                                        <tr className="border-b capitalize" key={m.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{i + 1}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {m.firstName}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {m.lastName}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 lowercase whitespace-nowrap">
                                                {m.email}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {m.mobile}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {m.assigned === true ? <AiFillCheckCircle className="text-green-500" /> : <MdError className="text-red-500" />}

                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {


                                                    m.assignedStudents ? [].join(",") : 'un assigned'
                                                }
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <button className="bg-blue-500 rounded-xl p-2 m-1"><FiEdit2 size={18} onClick={() => navigate(`/edit-mentor/${i}`)} /></button>
                                                <button className="bg-red-500 rounded-xl p-2 m-1"><MdDeleteForever size={18} onClick={() => deleteHandler(m.id)} /></button>
                                                {
                                                    !m.assigned ? <button className="bg-green-500 rounded-xl p-2 m-1"><MdAssignmentTurnedIn size={18} /></button> : ''
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

export default Mentors
