import { Passenger } from './passenger';
export interface PassengerResponse{
  totalPassengers: number;
  totalPages: number;
  data: Passenger[];
}
