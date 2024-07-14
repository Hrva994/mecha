import { useCar } from "../sections/MyCars";

export default function CarDetails() {
    const {selectedCar} = useCar();
    return (
        <div className="sticky w-full top-0 p-5">

        <div className="card bg-base-100 shadow-xl opacity-1
        ">
            <div className="card-body">
                <h2 className="card-title">{selectedCar?.model}, {selectedCar?.yearOfMake}</h2>
                <p>Plate number: {selectedCar?.plateNumber}</p>
                <p>Owner: {selectedCar?.username}</p>
                <p>Phone number: {selectedCar?.phoneNumber}</p>
                <section>
                    <h2 className="text-xl font-bold py-2">Work description</h2>
                    <div className="max-w-2xl flex flex-col gap-1">
                        {
                            selectedCar?.workDetails?.map((work: any) => 
                                <div className="flex flex-row justify-between items-center p-3 bg-neutral-300" key={work.id}>
                                    <div>{work.workDone}</div>
                                    <div>{work.cost}</div>
                                </div>
                            )
                        }
                         <div className="flex flex-row justify-between items-center p-3 bg-neutral-300">
                                    <div className="font-bold text-xl">Amount</div>
                                    <div className="font-bold text-xl">1213412</div>
                                </div>
                    </div>
                </section>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Notify owner</button>
                </div>
            </div>
        </div>
        </div>

    )
}