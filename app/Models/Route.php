<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Route extends Model
{
    protected $table = "routes";

    protected $fillable = [
        "route_name",
        "departure_location",
        "destination",
        "distance",
        "duration",
        "created_at",
        "updated_at"
    ];
}
