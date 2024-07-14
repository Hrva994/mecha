import React, { useState } from "react"
import CarTile from "../components/CarTile"
import { Car } from "../types/Car";
import { Link, Outlet, useNavigate, useOutletContext } from "react-router-dom";
import { computed, signal, useSignal, useSignalEffect } from "@preact/signals-react";

type CustomContextType = {selectedCar: Car | null}

export enum CarStatus {
    "IN_PROGRESS" = 'Radovi u tijeku',
    "DONE" = "Radovi zavrseni i vlasnik obavijesten",
    "NOT_STARTED" = "Radovi jos nisu zapoceli"
}
export const cars: Car[] = [
    {
        id: 1,
        dateCreated: Date.now(),
        status: "DONE",
        model: "Toyota Camry",
        yearOfMake: 2020,
        plateNumber: "ABC123",
        phoneNumber: "+1234567890",
        username: "car_owner1",
        workDetails: [
            {id: Math.random(), workDone: "Engine repair", cost: 500 },
            {id: Math.random(), workDone: "Brake replacement", cost: 300 },
            {id: Math.random(), workDone: "Brake fluid change", cost: 50 },
            {id: Math.random(), workDone: "Tires replacement", cost: 1400 }
        ]
    },
    {
        id: 2,
        dateCreated: Date.now(),
        status: "IN_PROGRESS",
        model: "Honda Civic",
        yearOfMake: 2018,
        plateNumber: "XYZ456",
        phoneNumber: "+1987654321",
        username: "car_owner2",
        workDetails: [
            {id: Math.random(), workDone: "Engine repair", cost: 300 },
            {id: Math.random(), workDone: "Brake replacement", cost: 143 },
            {id: Math.random(), workDone: "Windshield replacement", cost: 800 }
        ]
    },
    {
        id: 4,
        dateCreated: Date.now(),
        status: "IN_PROGRESS",
        model: "Ford Mustang",
        yearOfMake: 2020,
        plateNumber: "DEF789",
        phoneNumber: "+1234567890",
        username: "car_owner4",
        workDetails: [
            { id: Math.random(), workDone: "Transmission Service", cost: 500 },
            { id: Math.random(), workDone: "Coolant Flush", cost: 120 },
            { id: Math.random(), workDone: "Alignment", cost: 80 }
        ]
    },
    {
        id: 5,
        dateCreated: Date.now(),
        status: "IN_PROGRESS",
        model: "Chevrolet Silverado",
        yearOfMake: 2017,
        plateNumber: "GHI987",
        phoneNumber: "+9876543210",
        username: "car_owner5",
        workDetails: [
            { id: Math.random(), workDone: "Battery Replacement", cost: 150 },
            { id: Math.random(), workDone: "Spark Plug Change", cost: 100 },
            { id: Math.random(), workDone: "Brake Service", cost: 200 }
        ]
    },
    {
        id: 3,
        dateCreated: Date.now(),
        status: "NOT_STARTED",
        model: "Ford Mustang",
        yearOfMake: 2022,
        plateNumber: "DEF789",
        phoneNumber: "+1122334455",
        username: "car_owner3",
        workDetails: [
            {id: Math.random(), workDone: "Lights repair", cost: 123 },
            {id: Math.random(), workDone: "Brake replacement", cost: 542 },
            {id: Math.random(), workDone: "Oil change", cost: 25 }
        ]
    }
];

export default function MyCars() {
    useSignal();
   
    const [selectedCar, setSelectedCar] = useState({} as Car)
    function handleCarDetails(car: Car) {
        setSelectedCar(car);
    }

    function statusColor(status: any) {
        switch (status) {
            case 'DONE':
                return 'badge-success'
            case 'IN_PROGRESS':
                return 'badge-info'
            default:
                return 'badge-error';
        }
    }

    // Tabs
    const [tabState, setTabState] = useState('IN_PROGRESS')
    const tabValue = signal(tabState)
    function handleTab(tabState: string) {
        setTabState(tabState)
    }  

    const filteredCarsView = computed(() => {
        return cars.filter((car: Car) => car.status === tabValue.value as any)
    })

    const activeTab = computed(() => {
        return tabState;
    })
    return (
        <div className="flex gap-4">
            <section className="flex flex-col p-5 max-w-2xl justify-center gap-6">
            <div role="tablist" className="tabs tabs-boxed">
                <a role="tab" className={`tab ${activeTab.value === 'IN_PROGRESS' ? 'tab-active' : ''}`} onClick={() => handleTab('IN_PROGRESS')}>U tijeku</a>
                <a role="tab" className={`tab ${activeTab.value === 'NOT_STARTED' ? 'tab-active' : ''}`} onClick={() => handleTab('NOT_STARTED')}>Na cekanju</a>
                <a role="tab" className={`tab ${activeTab.value === 'DONE' ? 'tab-active' : ''}`} onClick={() => handleTab('DONE')}>Zavrseno</a>
            </div>
                {
                    filteredCarsView.value.map((item: Car) => 
                        <Link to={item.id.toString()} key={item.id}>
                            <CarTile car={item} handleCarDetails={handleCarDetails} statusColor={statusColor} />
                        </Link>
                    )
                }
            </section>
            {
                selectedCar.id &&  <section className="relative w-full max-w-2xl xl:max-w-5xl">
                <Outlet context={{selectedCar} satisfies CustomContextType}/>
             </section>
            }
        </div>

    )
}
export function useCar() {
    return useOutletContext<CustomContextType>();
}