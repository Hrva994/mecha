import React, { useEffect, useState } from "react"
import { cars } from "./MyCars"
import CountUp from "react-countup"
import { signal } from "@preact/signals-react";
import { Car } from "../types/Car";

export default function Overview() {
    const [numberOfDoneCars, setDoneCars] = useState(0);
    const [numberOfWaitingCars, setWaitingCars] = useState(0);
    const [numberOfCurrentCars, setCurrentCars] = useState(0);
    useEffect(() => {
        let doneCars = cars.filter((car: Car) => car.status === 'DONE').length;
        let waitingCars = cars.filter((car: Car) => car.status === 'NOT_STARTED').length;
        let numberOfCurrentCars = cars.filter((car: Car) => car.status === 'IN_PROGRESS').length;
        setCurrentCars(numberOfCurrentCars);
        setDoneCars(doneCars);
        setWaitingCars(waitingCars);
    }, [])

    return <>
        <div className="grid grid-cols-3 max-w-2xl mx-auto py-12">
            <div className="text-center flex justify-center flex-col gap-3">
                <div className="rounded-full shadow-xl shadow-gray-400 text-center h-36 w-36 content-center mx-auto">
                    <CountUp className="text-2xl font-extrabold" end={numberOfDoneCars} />
                </div>
                <h1 className="font-extrabold">Zavrseno</h1>
            </div>
            <div className="text-center flex justify-center flex-col gap-3"> 
                <div className="rounded-full shadow-xl shadow-gray-400 text-center h-36 w-36 content-center mx-auto">
                    <CountUp className="text-2xl font-extrabold" end={numberOfCurrentCars} />
                </div>
                <h1 className="font-extrabold">U tijeku</h1>
            </div>
            <div className="text-center flex justify-center flex-col gap-3">
                <div className="rounded-full shadow-xl shadow-gray-400 text-center h-36 w-36 content-center mx-auto">
                    <CountUp className="text-2xl font-extrabold" end={numberOfWaitingCars} />
                </div>
                <h1 className="font-extrabold">Na cekanju</h1>
            </div>

        </div>
    </>
}