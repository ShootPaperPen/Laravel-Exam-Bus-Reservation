<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Reservation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReservationController extends Controller
{
    function index() {
        $reservations = Reservation::get();

        return Inertia::render("admin/reservation", ["reservations" => $reservations]);
    }

    function store(Request $request) {

        $newReservation = $request->validate([
            "schedule_id" => ["required"],
            "passenger_name" => ["required"],
            "contact_information" => ["required"],
            "seat_number" => ["required"],
            "reservation_date" => ["required"],
            "status" => ["required"]
        ]);

        Reservation::create($newReservation);

        return back()->with("success", "Successfully added new reservation.");
    }
}
