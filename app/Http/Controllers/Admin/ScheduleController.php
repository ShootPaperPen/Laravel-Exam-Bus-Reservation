<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Bus;
use App\Models\Route;
use App\Models\Schedule;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ScheduleController extends Controller
{
    function index() {
        $schedules = Schedule::get();
        $buses = Bus::get(["bus_id", "bus_number"]);
        $routes = Route::get(["route_id", "route_name"]);

        return Inertia::render(
            "admin/schedule",
            [
                "schedules" => $schedules,
                "buses" => $buses,
                "routes" => $routes
            ]
        );
    }

    function store(Request $request) {
        $newSchedule = $request->validate([
            "bus_id" => ["required"],
            "route_id" => ["required"],
            "departure_date" => ["required"],
            "departure_time" => ["required"],
            "available_seats" => ["required"],
        ]);

        Schedule::create($newSchedule);

        return back()->with("success", "Successfully created new schedule.");
    }
}
