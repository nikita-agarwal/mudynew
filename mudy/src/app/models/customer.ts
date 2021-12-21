
export interface Customer {
    name: string;
    _id?: string;
    mobileNumber: string;
    pan?: string;
    gst?: string;
    address: string;
    shippingAddress: string;
    state: string;
    stateCode: string;
    brand: string;
    payments?: Payment[];
    bills?: any[];
    totalBalance?: number;
    totalRecieved?: number;
    rates?: any[];
    subs?: any[];
    subRates?: any[];
}

export interface Invoice {
    goods: Good[];
    customer: Customer;
    _id: string;
    date: string;
}

export interface Good {
    description: string;
    price: number;
    qty: number;
    hsnSac: string;
    serialNumber: string;
    code: string;
}

export interface Part {
    type: string;
    name: string;
    number: string;
    moc: number;
    material: string;
    description: string;
    _id: string;
    quantity: number;
    allowedSubType: string[];
}

export interface Submersibles {
    name: string;
    quantity: number;
    _id: string;
    hsnSac: string;
    description: string;
    code: string;
    rate?: any;
}

export interface Stock {
    id: string;
    moc: number;
    quantity: number;
}

export interface Payment {
    customerId: string;
    ammount: number;
    date: Date;
    mode: string;
}
