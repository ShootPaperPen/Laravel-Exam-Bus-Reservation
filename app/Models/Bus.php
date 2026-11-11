<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bus extends Model
{
    protected $table = 'buses';

    protected $fillable = [
        "bus_number",
        "seating_capacity",
        "driver_name",
        "departure_location",
        "destination",
        "departure_time",
        "arrival_time",
        "created_at",
        "updated_at"
    ];
}
