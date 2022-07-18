import React, { Fragment, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Usercontext } from '../App'
import { nanoid } from 'nanoid'
const AddMentor = () => {
    const context = useContext(Usercontext)

    const { mentor, setMentor } = context

    const [firstName, setFName] = useState('')
    const [lastName, setLName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    const handleSave = (e) => {

        let data = { id: nanoid(), firstName, lastName, email, mobile, assignedStudents: false, mentor: '' }
        const mentors = [...mentor]
        mentors.push(data)
        setMentor(mentors)
        navigate('/mentors')
    }
    return (
        <Fragment>
            <form className="w-full max-w-lg m-20">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Vinod" onChange={(event) => setFName(event.target.value)} />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Last Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Kotagiri" onChange={(event) => setLName(event.target.value)} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="user@company.com" onChange={(event) => setEmail(event.target.value)} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Mobile
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-mobile" type="number" placeholder="8888888888" onChange={(event) => setMobile(event.target.value)} />
                    </div>
                </div>

                <div className="flex flex-row items-center justify-center">
                    <button className="bg-green-500 p-3 w-1/4 rounded-3xl text-lg font-thin text-gray-900" onClick={() => handleSave()}>Save</button>
                </div>
            </form>
        </Fragment >
    )
}

export default AddMentor
