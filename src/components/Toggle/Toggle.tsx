import React, { useState } from "react"
import './toggleCSS.css'


interface IToggle {
    off: string
    on: string
    dynamic: boolean
    setDynamic: React.Dispatch<React.SetStateAction<boolean>>
}

export const Toggle = ({ off, on, dynamic, setDynamic }: IToggle) => {

    return (
        <div className="toggle-container">
            <p>{off}</p>
            <label className="switch">
                <input type="checkbox" checked={dynamic} onChange={() => setDynamic(prev => {
                    localStorage.setItem("dynamic", String(!prev))
                    return !prev
                })} />
                <span className="slider round"></span>
            </label>
            <p>{on}</p>
        </div>
    )
}