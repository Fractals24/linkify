"use client"
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {signOut} from 'next-auth/react'

export default function Logoutbutton() {
    return (
        <button 
        className="flex items-center gap-2 border-2 border-gray-500 p-2 px-4 "
        onClick={()=>signOut()}>
            <span>Log Out</span>
            <FontAwesomeIcon icon = {faSignOutAlt} />

        </button>
    )
}