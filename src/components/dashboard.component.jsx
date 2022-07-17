import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
const Dashboard = () => {
    return (
        <div className="w-screen">
            <div className="text-3xl font-bold text-gray-600 flex justify-center items-center mt-6">Stats</div>

            <div className="grid grid-cols-2 mt-6 ml-20 p-20">
                <div className="text-2xl font-semibold capitalize text-gray-500 py-3">total stundents</div>
                <div className="text-xl font-normal text-gray-500 py-3" >20</div>
                <div className="text-2xl font-semibold capitalize text-gray-500 py-3">total mentors</div>
                <div className="text-xl font-normal text-gray-500 py-3">10</div>
                <div className="text-2xl font-semibold capitalize text-gray-500 py-3">unassigned students</div>
                <div className="text-xl font-normal text-gray-500 py-3">2</div>
                <div className="text-2xl font-semibold capitalize text-gray-500 py-3">unassigned mentors</div>
                <div className="text-xl font-normal text-gray-500 py-3">3</div>
            </div>
            <div className="btns-wrapper">
                <Link to="students"><button className="bg-blue-600 rounded-xl w-content p-3 m-3 text-gray-300 font-bold">view students</button></Link>
                <Link to="mentors"><button className="bg-blue-600 rounded-xl w-content p-3 m-3 text-gray-300 font-bold">view mentors</button></Link>
            </div>
        </div >


    )
}

export default Dashboard
