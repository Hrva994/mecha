import React from "react";
import { Car } from "../types/Car";
import { CarStatus } from "../sections/MyCars";

interface CarProps {
    car: Car,
    handleCarDetails: any,
    statusColor: Function
}

export default function CarTile(props: CarProps) {
    const { car, handleCarDetails, statusColor } = props
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <div className="card-body">
               
                <div className={`badge ${statusColor(car.status)} badge-lg`}>
                {
                    CarStatus[car.status as keyof typeof CarStatus]
                }
                </div>
                <h2 className="card-title">{car.model}, {car.yearOfMake}</h2> 
                <p>Plate number: {car.plateNumber}</p>
                <p>Owner: {car.username}</p>
                <p>Phone number: {car.phoneNumber}</p>
                <p className="text-blue-500 underline hover:cursor-pointer" onClick={() => handleCarDetails(car)}>Details</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Notify owner</button>
                </div>
            </div>
        </div>
    )
}