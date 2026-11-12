<?php

use App\Http\Controllers\Admin\BusController;
use App\Http\Controllers\Admin\ReservationController;
use App\Http\Controllers\Admin\RouteController;
use App\Http\Controllers\Admin\ScheduleController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Teams\TeamInvitationController;
use App\Http\Middleware\EnsureTeamMembership;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::prefix('{current_team}')
    ->middleware(['auth', 'verified', EnsureTeamMembership::class])
    ->group(function () {
        Route::get('dashboard', DashboardController::class)->name('dashboard');
    });
        
Route::prefix('admin')
    ->middleware(['auth'])
    ->group(function() {
        Route::get('manage-buses', [BusController::class, 'index'])->name('admin.manage-buses.index');
        Route::post('manage-buses', [BusController::class, 'store'])->name('admin.manage-buses.store');

        Route::get('manage-routes', [RouteController::class, 'index'])->name('admin.manage-routes.index');
        Route::post('manage-routes', [RouteController::class, 'store'])->name('admin.manage-routes.store');
        
        Route::get('manage-schedules', [ScheduleController::class, 'index'])->name('admin.manage-routes.index');
        Route::post('manage-schedules', [ScheduleController::class, 'store'])->name('admin.manage-routes.store');
        
        Route::get('manage-reservations', [ReservationController::class, 'index'])->name('admin.manage-reservations.index');
        Route::post('manage-reservations', [ReservationController::class, 'store'])->name('admin.manage-reservations.store');
    });
    
Route::middleware(['auth'])->group(function () {
    Route::post('invitations/{invitation}/accept', [TeamInvitationController::class, 'accept'])->name('invitations.accept');
    Route::delete('invitations/{invitation}', [TeamInvitationController::class, 'decline'])->name('invitations.decline');
});

require __DIR__.'/settings.php';
