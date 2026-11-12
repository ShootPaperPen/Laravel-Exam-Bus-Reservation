<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RouteController extends Controller
{
    function index() {
        $allRoutes = Route::get();

        return Inertia::render(
            "admin/route",
            ["routes" => $allRoutes]
        );
    }

    function store(Request $request) {
        $newRoute = $request->validate([
            "route_name" => ["required"],
            "departure_location" => ["required"],
            "destination" => ["required"],
            "distance" => ["required"],
            "duration" => ["required"]
        ]);

        Route::create($newRoute);

        return back()->with(
            'success',
            'Successfully added new route.'
        );
    }
}
