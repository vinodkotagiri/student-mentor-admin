import React, { Fragment } from 'react'
import { FcManager } from 'react-icons/fc'
import { MdViewList } from 'react-icons/md'
import { RiUserAddFill } from 'react-icons/ri'
import { MdAssignmentInd } from 'react-icons/md'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    return (
        <Fragment>
            {/* wrapper for side bar */}
            <div className="flex flex-col h-screen w-1/6 bg-blue-500" >
                {/* brand wrapper */}
                <Link to="/">
                    <div className="flex flex-row space-x-2 items-center justify-start mt-3 p-3 ml-3">
                        <FcManager size={32} />
                        <div className="text-2xl font-bold text-white uppercase">Admin</div>
                    </div>
                </Link>
                <hr className="ml-4 w-5/6 py-0.5 bg-slate-400" />
                {/* Navs wrapper */}
                {/* student */}
                <Link to="add-student">
                    <div className="flex flex-row items-center justify-start ">
                        <div className="flex flex-row justify-center items-center space-x-2 text-xl font-light text-white ml-6 mt-8 capitalize hover:cursor-pointer">
                            <RiUserAddFill size={22} />
                            <div>add student</div>
                        </div>
                    </div>
                </Link>
                <Link to="students">
                    <div className="flex flex-row items-center justify-start ">
                        <div className="flex flex-row justify-center items-center space-x-2 text-xl font-light text-white ml-6 mt-3 capitalize hover:cursor-pointer">
                            <MdViewList size={22} />
                            <div>view students</div>
                        </div>
                    </div>
                </Link>
                <Link to="assign-student">
                    <div className="flex flex-row items-center justify-start ">
                        <div className="flex flex-row justify-center items-center space-x-2 text-xl font-light mb-8 text-white ml-6 mt-3 capitalize hover:cursor-pointer">
                            <MdAssignmentInd size={22} />
                            <div>assign student</div>
                        </div>
                    </div>
                </Link>
                <hr className="ml-4 w-5/6 py-0.5" />
                {/* mentor */}
                <Link to="add-mentor">
                    <div className="flex flex-row items-center justify-start ">
                        <div className="flex flex-row justify-center items-center space-x-2 text-xl font-light text-white ml-6 mt-8 capitalize hover:cursor-pointer">
                            <RiUserAddFill size={22} />
                            <div>add mentor</div>
                        </div>
                    </div>
                </Link>
                <Link to="mentors">
                    <div className="flex flex-row items-center justify-start ">
                        <div className="flex flex-row justify-center items-center space-x-2 text-xl font-light text-white ml-6 mt-3 capitalize hover:cursor-pointer">
                            <MdViewList size={22} />
                            <div>view mentors</div>
                        </div>
                    </div>
                </Link>
                <Link to="assign-mentor">
                    <div className="flex flex-row items-center justify-start ">
                        <div className="flex flex-row justify-center items-center space-x-2 text-xl font-light text-white ml-6 mt-3 capitalize hover:cursor-pointer">
                            <MdAssignmentInd size={22} />
                            <div>assign mentor</div>
                        </div>
                    </div>
                </Link>
            </div>
        </Fragment >
    )
}

export default Sidebar
