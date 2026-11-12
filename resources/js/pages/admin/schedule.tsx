import { store } from "@/actions/App/Http/Controllers/Admin/ScheduleController";
import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { dateToString, timeToString } from "@/lib/utils";
import { Form } from "@inertiajs/react";

interface ScheduleObject {
    bus_id: number;
    route_id: number;
    departure_date: Date;
    departure_time: Date;
    available_seats: number;
}

interface BusObject {
    bus_id: number;
    bus_number: number;
}

interface RouteObject {
    route_id: number;
    route_name: string;
}

interface Props {
    schedules?: Array<ScheduleObject>;
    buses?: Array<BusObject>;
    routes?: Array<RouteObject>;
}

export default function Schedule({schedules, buses, routes}: Props) {

    return (
        <>
            <Form {...store.form()} resetOnSuccess className="flex flex-col gap-4">
                {({ processing, errors }) => (
                    <>
                        <div>
                            <Label htmlFor="bus_id">Bus</Label>
                            {/* <Input id="bus_number" name="bus_number" type="number" required /> */}
                            <Select name="bus_id">
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Bus Number" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                    { buses ? buses.map((bus) => (
                                        <SelectItem key={bus.bus_id} value={bus.bus_id.toString()}>
                                            Bus no. {bus.bus_number}
                                        </SelectItem>
                                    )): <></>}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <InputError message={errors.bus_id} />
                        </div>
                        <div>
                            <Label htmlFor="route_id">Route</Label>
                            {/* <Input id="bus_number" name="bus_number" type="number" required /> */}
                            <Select name="route_id">
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Route name" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                    { routes ? routes.map((route) => (
                                        <SelectItem key={route.route_id} value={route.route_id.toString()}>
                                            {route.route_name}
                                        </SelectItem>
                                    )): <></>}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <InputError message={errors.route_id} />
                        </div>
                        <div>
                            <Label htmlFor="available_seats">Available Seats</Label>
                            <Input id="available_seats" name="available_seats" type="number" required />
                            <InputError message={errors.available_seats} />
                        </div>
                        <div>
                            <Label htmlFor="departure_date">Departure Date</Label>
                            <Input id="departure_date" name="departure_date" type="date" required />
                            <InputError message={errors.departure_date} />
                        </div>
                        <div>
                            <Label htmlFor="departure_time">Departure Time</Label>
                            <Input id="departure_time" name="departure_time" type="time" required />
                            <InputError message={errors.departure_time} />
                        </div>

                        <Button type="submit" disabled={processing}>
                            {processing ? 'Saving...' : 'Add Schedule'}
                        </Button>
                    </>
                )}
            </Form>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>
                                Bus ID
                            </td>
                            <td>
                                Route ID
                            </td>
                            <td>
                                Available Seats
                            </td>
                            <td>
                                Departure Date
                            </td>
                            <td>
                                Departure Time
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        { schedules && schedules?.map(schedule => {
                            return (
                                <tr>
                                    <td>{schedule.bus_id}</td>
                                    <td>{schedule.route_id}</td>
                                    <td>{schedule.available_seats}</td>
                                    <td>{dateToString(schedule.departure_date)}</td>
                                    <td>{timeToString(schedule.departure_time)}</td>
                                </tr>
                            )
                        }) }
                    </tbody>
                </table>
            </div>
        </>
    )
}