<?php

use App\Http\Controllers\Admin\BusController;
use App\Http\Controllers\Admin\RouteController;
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
        Route::get('manage-bus', [BusController::class, 'index'])->name('admin.manage-bus.index');
        Route::post('manage-bus', [BusController::class, 'store'])->name('admin.manage-bus.store');

        Route::get('manage-route', [RouteController::class, 'index'])->name('admin.manage-route.index');
        Route::post('manage-route', [RouteController::class, 'store'])->name('admin.manage-route.store');
    });
    
Route::middleware(['auth'])->group(function () {
    Route::post('invitations/{invitation}/accept', [TeamInvitationController::class, 'accept'])->name('invitations.accept');
    Route::delete('invitations/{invitation}', [TeamInvitationController::class, 'decline'])->name('invitations.decline');
});

require __DIR__.'/settings.php';
