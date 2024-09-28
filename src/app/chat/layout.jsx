import React from 'react'
import Cathar from './Chatbar'
import SideChat from './SideChat'

export default function layout({ children }) {
    return (
        <div>
            <Cathar />
            <SideChat />
            <div className="ml80 mt40 ">
                {children}
            </div>
        </div>
    )
}
