<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTaskRequest;
use Illuminate\Http\Request;
use App\Models\Tasks;

class TaskController extends Controller
{
    public function index()
    {
        try {
            $tasks = Tasks::get();

            return response()->json($tasks);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Error fetching task'], 500);
        }
    }

    public function store(StoreTaskRequest $request)
    {
        try {
            Tasks::create($request->validated());

            return response()->json(['message' => 'Task created successfully.'], 201);
        } catch (\Throwable $th) {
            report($th);

            return response($th)->json(['message' => 'Error creating task'], 500);
        }
    }
}
