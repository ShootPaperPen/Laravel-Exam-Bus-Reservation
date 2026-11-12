<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Bus;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BusController extends Controller
{ 
    function index() {

        $allBuses = Bus::get();

        return Inertia::render(
            "admin/bus",
            ["buses" => $allBuses]
        );
    }

    function store(Request $request) {

        $newBus = $request->validate([
            'bus_number' => ["required", "unique:buses"],
            'seating_capacity' => ["required"],
            'driver_name' => ["required"],
            'departure_location' => ["required"],
            'destination' => ["required"],
            'departure_time' => ["required"],
            'arrival_time' => ["required"]
        ]);

        Bus::create($newBus);

        return back()
            ->with("success", "Bus created successfully!");
    }
}
