import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "@inertiajs/react";
import { store } from "@/actions/App/Http/Controllers/Admin/RouteController";

interface RouteObject {
    route_name: string,
    departure_location: string,
    destination: string,
    distance: number,
    duration: number
}

interface Props {
    routes?: Array<RouteObject>;
}

export default function Route({routes}: Props) {

    return (
        <>
            <Form {...store.form()} resetOnSuccess className="flex flex-col gap-4">
                {({ processing, errors }) => (
                    <>
                        <div>
                            <Label htmlFor="route_name">Route Name</Label>
                            <Input id="route_name" name="route_name" required />
                            <InputError message={errors.route_name} />
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
                            <Label htmlFor="distance">Distance</Label>
                            <Input id="distance" name="distance" type="number" required />
                            <InputError message={errors.distance} />
                        </div>
                        <div>
                            <Label htmlFor="duration">Duration</Label>
                            <Input id="duration" name="duration" type="number" required />
                            <InputError message={errors.duration} />
                        </div>

                        <Button type="submit" disabled={processing}>
                            {processing ? 'Saving...' : 'Add Route'}
                        </Button>
                    </>
                )}
            </Form>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>
                                Route Name
                            </td>
                            <td>
                                Departure Location
                            </td>
                            <td>
                                Destination
                            </td>
                            <td>
                                Distance
                            </td>
                            <td>
                                Duration
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        { routes && routes?.map(route => {
                            return (
                                <tr>
                                    <td>{route.route_name}</td>
                                    <td>{route.departure_location}</td>
                                    <td>{route.destination}</td>
                                    <td>{route.distance}</td>
                                    <td>{route.duration}</td>
                                </tr>
                            )
                        }) }
                    </tbody>
                </table>
            </div>
        </>
    );
}