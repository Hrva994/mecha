import React, { useEffect } from "react"
import UserAccessLayout from "./UserAccess"
import { Link, NavLink, Outlet, Route, Routes, useNavigate } from "react-router-dom"
import Login from "../components/Login"

export default function Home() {
    const navigate = useNavigate();

    const handleTabChange = (path: string) => {
        navigate(path)
    }
    const testView = !true;

    // useEffect(() => {
    //     if (!testView) {
    //         handleTabChange('/login')
    //     } else {
    //         navigate('/overview')
    //     }
    // }, [])

    return (
        <>
            {
                <div role="tablist" className="tabs tabs-bordered grid-cols-2 container max-w-lg mx-auto py-24">
                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Login" defaultChecked onClick={() => handleTabChange('/login')} />
                    <div role="tabpanel" className="tab-content"><UserAccessLayout /></div>

                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Register" onClick={() => handleTabChange('/register')} />
                    <div role="tabpanel" className="tab-content"><UserAccessLayout /></div>
                </div>
            }
        </>
    )
}