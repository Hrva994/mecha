import React, { FormEvent } from "react";
import Login from "../components/Login";
import { Outlet, Route, Routes } from "react-router-dom";

export default function UserAccessLayout() {

    function handleFormSubmit(form: FormEvent<HTMLFormElement>, formValues: any) {
        let values = formValues;
        console.log(values);
        
        
    }

    return (
       <div className="container mx-auto max-w-lg px-4">
            <Outlet context={[handleFormSubmit]}/>
       </div>
       
    )
      
}