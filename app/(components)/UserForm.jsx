"use client"

import { useRouter } from "next/navigation"
import React, { useState } from "react"


const UserForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        const res = await fetch("/api/Users", {
            method: "POST",
            body: JSON.stringify({ formData }),
            "content-type": "application/json"
        })

        if (!res.ok) {
            const response = await res.json();
            setErrorMessage(response.message);
        } else {
            router.refresh();
            router.push('/');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} method="post" className="flex flex-col w-1/2 gap-3">
                <h2>Create new User</h2>
                <label>Full Name</label>
                <input id="name" type="text" name="name" onChange={handleChange} required value={formData.name}
                    className="m-2 rounded bg-slate-400" />
                <label>Email</label>
                <input type="text" id="email" name="email" onChange={handleChange} required value={formData.email}
                    className="m-2 rounded bg-slate-400" />
                <label>Password</label>
                <input id="password" name="password" type="password" onChange={handleChange} required value={formData.password}
                    className="m-2 rounded bg-slate-400" />
                <input type="submit" value="Create User" className="bg-blue-200 hover:bg-blue-400" />
            </form>

            <p className="text-red-400">{errorMessage}</p>
        </>
    )
}

export default UserForm