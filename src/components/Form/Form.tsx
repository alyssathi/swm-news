import React, { useState } from "react"
import './formCSS.css'


interface IForm {
    apiKey: string | null
    setApiKey: React.Dispatch<React.SetStateAction<string | null>>
}

export const Form = ({ apiKey, setApiKey }: IForm) => {
    const [val, setVal] = useState<string>(apiKey ?? "")
    const handleSave = () => {
        localStorage.setItem("apiKey", val)
        setApiKey(val)
    }
    return (
        <form className="form-container" onSubmit={handleSave}>
            <input placeholder="API Key" type="text" defaultValue={apiKey ?? ""} onChange={(e) => setVal(e.target.value)} />
            <button type="submit">Save</button>
        </form>
    )
}