import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "@inertiajs/react";
import { store } from "@/actions/App/Http/Controllers/Admin/BusController";

export default function Bus() {

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
        </>
    );
}