import React, { useEffect, useState } from "react"
import UserAccessLayout from "./UserAccess"
import { Link, NavLink, Outlet, Route, Routes, useNavigate } from "react-router-dom"
import Login from "../components/Login"

export default function Home() {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false)

    const handleTabChange = (path: string) => {
        navigate(path)
    }

    useEffect(() => {
        if(!isAuth) {
            navigate('/login')
        }
    }, [])

    return (
        <>
        {
            !isAuth ? (
                <UserAccessLayout />
            ) : (
                <div>Home</div>
            )
        }
        </>
    )
}