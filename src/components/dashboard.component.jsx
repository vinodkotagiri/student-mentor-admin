import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Usercontext } from '../App'

const Dashboard = () => {
    const context = useContext(Usercontext)
    const { student, mentor } = context
    const unassignedStudents = student.filter((s) => s.assigned === false)
    const unassignedMentors = mentor.filter((m) => m.assigned === false)
    return (
        <Fragment>
            <div className="w-screen">
                <div className="text-3xl font-bold text-gray-600 flex justify-center items-center mt-6">Stats</div>
                <div className="grid grid-cols-2 mt-6 ml-20 p-20">
                    <div className="text-2xl font-semibold capitalize text-gray-500 py-3">total stundents</div>
                    <div className="text-xl font-normal text-gray-500 py-3" >{student.length}</div>
                    <div className="text-2xl font-semibold capitalize text-gray-500 py-3">total mentors</div>
                    <div className="text-xl font-normal text-gray-500 py-3">{mentor.length}</div>
                    <div className="text-2xl font-semibold capitalize text-gray-500 py-3">unassigned students</div>
                    <div className="text-xl font-normal text-gray-500 py-3">{unassignedStudents.length}</div>
                    <div className="text-2xl font-semibold capitalize text-gray-500 py-3">unassigned mentors</div>
                    <div className="text-xl font-normal text-gray-500 py-3">{unassignedMentors.length}</div>
                </div>
                <div className="btns-wrapper">
                    <Link to="students"><button className="bg-blue-600 rounded-xl w-content p-3 m-3 text-gray-300 font-bold">view students</button></Link>
                    <Link to="mentors"><button className="bg-blue-600 rounded-xl w-content p-3 m-3 text-gray-300 font-bold">view mentors</button></Link>
                </div>
            </div >
        </Fragment>
    )
}

export default Dashboard
