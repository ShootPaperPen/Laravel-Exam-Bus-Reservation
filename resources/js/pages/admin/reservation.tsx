import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { dateToString } from "@/lib/utils";
import { store } from "@/routes/admin/manage-reservations";
import { Form } from "@inertiajs/react";

interface ReservationObject{
    schedule_id: number;
    passenger_name: string;
    contact_information: string;
    seat_number: number;
    reservation_date: Date;
    status: string;
}

interface Props{
    reservations: Array<ReservationObject>;
}

export default function Reservation({reservations}: Props) {
    return (
        <>
            <Form {...store.form()} resetOnSuccess className="flex flex-col gap-4">
                {({ processing, errors }) => (
                    <>
                        <div>
                            <Label htmlFor="schedule_id">Schedule ID</Label>
                            <Input id="schedule_id" name="schedule_id" type="number" required />
                            <InputError message={errors.schedule_id} />
                        </div>
                        <div>
                            <Label htmlFor="passenger_name">Passenger Name</Label>
                            <Input id="passenger_name" name="passenger_name" required />
                            <InputError message={errors.seating_capacity} />
                        </div>
                        <div>
                            <Label htmlFor="contact_information">Contact Information</Label>
                            <Input id="contact_information" name="contact_information" required />
                            <InputError message={errors.contact_information} />
                        </div>
                        <div>
                            <Label htmlFor="seat_number">Seat Number</Label>
                            <Input id="seat_number" name="seat_number" type="number" required />
                            <InputError message={errors.seat_number} />
                        </div>
                        <div>
                            <Label htmlFor="reservation_date">Reservation Date</Label>
                            <Input id="reservation_date" name="reservation_date" type="date" required />
                            <InputError message={errors.destination} />
                        </div>
                        <div>
                            <Label htmlFor="status">Status</Label>
                            <Input id="status" name="status" required />
                            <InputError message={errors.status} />
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
                                Schedule ID
                            </td>
                            <td>
                                Passenger Name
                            </td>
                            <td>
                                Contact Information
                            </td>
                            <td>
                                Seat Number
                            </td>
                            <td>
                                Reservation Date
                            </td>
                            <td>
                                Status
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        { reservations && reservations?.map(reservation => {
                            return (
                                <tr key={reservation.schedule_id}>
                                    <td>{reservation.schedule_id}</td>
                                    <td>{reservation.passenger_name}</td>
                                    <td>{reservation.contact_information}</td>
                                    <td>{reservation.seat_number}</td>
                                    <td>{dateToString(reservation.reservation_date)}</td>
                                    <td>{reservation.status}</td>
                                </tr>
                            )
                        }) }
                    </tbody>
                </table>
            </div>
        </>
    )
}
