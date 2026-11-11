<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Bus;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BusController extends Controller
{ 
    function index() {
        return Inertia::render(
            "admin/bus",
            ["meow" => "index"]
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

        // dd($newBus);

        Bus::create($newBus);

        return back()
            ->with("success", "Bus created successfully!");
    }
}
