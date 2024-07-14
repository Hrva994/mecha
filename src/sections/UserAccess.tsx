import React, { FormEvent } from "react";
import Login from "../components/Login";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";

export default function UserAccessLayout() {

    const navigate = useNavigate();

    const handleTabChange = (path: string) => {
        navigate(path)
    }

    function handleFormSubmit(form: FormEvent<HTMLFormElement>, formValues: any) {
        let values = formValues;
        console.log(values);


    }

    return (
        <div className="container mx-auto max-w-lg px-4">
            <div role="tablist" className="tabs tabs-bordered grid-cols-2 container max-w-lg mx-auto py-24">
                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Login" defaultChecked onClick={() => handleTabChange('/login')} />
                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Register" onClick={() => handleTabChange('/register')} />
            </div>
            <Outlet context={[handleFormSubmit]} />
        </div>

    )

}