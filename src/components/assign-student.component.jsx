import React from 'react'
import Select from 'react-select'
import { useContext } from 'react'
import { Usercontext } from '../App'
import { useNavigate } from 'react-router-dom'
const AssignStudent = () => {
    const context = useContext(Usercontext)
    const { mentor, student, setmentor, setStudent } = context




    return (
        <div>

        </div>
    )
}

export default AssignStudent
