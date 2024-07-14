export type Car = {
    id: number;
    dateCreated: number,
    status: string,
    model: string;
    yearOfMake: number;
    plateNumber: string;
    phoneNumber: string;
    username: string;
    workDetails?: {
        id: number,
        workDone: string;
        cost: number;
    }[];
}