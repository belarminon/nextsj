export type EventModel = {
    id: number;
    name: string;
    event_date: string;
    image_url: string;
    created_at: string;
    available_spots: number;
    price: number
}

export enum SpotStatus{
    available = "available",
    sold="sold"
}

export type SpotModel = {
    id:number;
    name: string;
    status: SpotStatus;
    event_id: number
}