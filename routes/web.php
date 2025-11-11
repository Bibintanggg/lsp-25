<?php

use App\Enum\UserRole;
use App\Http\Controllers\Admin\DataAbsensiController;
use App\Http\Controllers\Admin\LandingController as AdminLandingController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\LandingController as UserLandingController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function() {
    Route::middleware(['role:'.UserRole::ADMIN->value])->group(function() {
        Route::get('/admin/dashboard', [AdminLandingController::class, 'index'])->name('admin.dashboard');
        Route::get('/admin/data-absensi', [DataAbsensiController::class, 'index'])->name('admin.data-absensi');
    });

    Route::middleware(['role:'.UserRole::USER->value])->group(function() {
        Route::get('/user/dashboard', [UserLandingController::class, 'index'])->name('user.dashboard');
    });
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
