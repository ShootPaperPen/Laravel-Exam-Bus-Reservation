import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "@inertiajs/react";
import { store } from "@/actions/App/Http/Controllers/Admin/BusController";
import { dateTimeToString } from "@/lib/utils";

interface BusObject {
    bus_number: number;
    seating_capacity: number;
    driver_name: string;
    departure_location: string;
    destination: string;
    departure_time: Date;
    arrival_time: Date;
}

interface Props {
    buses?: Array<BusObject>;
}

export default function Bus({buses}: Props) {

    return (
        <>
            <Form {...store.form()} resetOnSuccess className="flex flex-col gap-4">
                {({ processing, errors }) => (
                    <>
                        <div>
                            <Label htmlFor="bus_number">Bus Number</Label>
                            <Input id="bus_number" name="bus_number" type="number" required />
                            <InputError message={errors.bus_number} />
                        </div>
                        <div>
                            <Label htmlFor="seating_capacity">Seating Capacity</Label>
                            <Input id="seating_capacity" name="seating_capacity" type="number" required />
                            <InputError message={errors.seating_capacity} />
                        </div>
                        <div>
                            <Label htmlFor="driver_name">Driver Name</Label>
                            <Input id="driver_name" name="driver_name" required />
                            <InputError message={errors.driver_name} />
                        </div>
                        <div>
                            <Label htmlFor="departure_location">Departure Location</Label>
                            <Input id="departure_location" name="departure_location" required />
                            <InputError message={errors.departure_location} />
                        </div>
                        <div>
                            <Label htmlFor="destination">Destination</Label>
                            <Input id="destination" name="destination" required />
                            <InputError message={errors.destination} />
                        </div>
                        <div>
                            <Label htmlFor="departure_time">Departure Time</Label>
                            <Input id="departure_time" name="departure_time" type="datetime-local" required />
                            <InputError message={errors.departure_time} />
                        </div>
                        <div>
                            <Label htmlFor="arrival_time">Arrival Time</Label>
                            <Input id="arrival_time" name="arrival_time" type="datetime-local" required />
                            <InputError message={errors.arrival_time} />
                        </div>

                        <Button type="submit" disabled={processing}>
                            {processing ? 'Saving...' : 'Add Bus'}
                        </Button>
                    </>
                )}
            </Form>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>
                                Bus Number
                            </td>
                            <td>
                                Seating Capacity
                            </td>
                            <td>
                                Departure Location
                            </td>
                            <td>
                                Destination
                            </td>
                            <td>
                                Departure Time
                            </td>
                            <td>
                                Arrival Time
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        { buses && buses?.map(buses => {
                            return (
                                <tr>
                                    <td>{buses.bus_number}</td>
                                    <td>{buses.seating_capacity}</td>
                                    <td>{buses.departure_location}</td>
                                    <td>{buses.destination}</td>
                                    <td>{dateTimeToString(buses.departure_time)}</td>
                                    <td>{dateTimeToString(buses.arrival_time)}</td>
                                </tr>
                            )
                        }) }
                    </tbody>
                </table>
            </div>
        </>
    );
}