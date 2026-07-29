<?php

use App\Http\Controllers\Api\TaskController;
use Illuminate\Support\Facades\Route;


Route::prefix('tasks')->controller(TaskController::class)->group(function () {
    Route::get('/', 'index');
    Route::post('/', 'store');
});
