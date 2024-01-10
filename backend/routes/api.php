<?php

use App\Http\Controllers\SubtaskController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Api\Auth\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/auth/register', [AuthController::class, 'register']);

Route::post('/auth/login', [AuthController::class, 'login']);

Route::get('/user', [UserController::class, 'showAllUsers']);

Route::get('/user/{id}', [UserController::class, 'showUser']);

Route::put('/user/{id}/update', [UserController::class, 'updateUser']);

Route::delete('/user/{id}/delete', [UserController::class, 'deleteUser']);


Route::get('/task', [TaskController::class, 'showAllTask']);

Route::post('/task/register', [TaskController::class, 'registerTask']);

Route::get('/task/{id}', [TaskController::class, 'showTask']);

Route::put('/task/{id}/update', [TaskController::class, 'updateTask']);

Route::delete('/task/{id}/delete', [TaskController::class, 'deleteTask']);


Route::get('/subtask', [SubtaskController::class, 'showAllSubtask']);

Route::post('/subtask/register', [SubtaskController::class, 'registerSubtask']);

Route::get('/subtask/{id}', [SubtaskController::class, 'showSubtask']);

Route::put('/subtask/{id}/update', [SubtaskController::class, 'updateSubtask']);

Route::delete('/subtask/{id}/delete', [SubtaskController::class, 'deleteSubtask']);

Route::get('/subtask/search', [SubtaskController::class, 'search']); 

Route::get('/subtask/taskid/{task_id}', [SubtaskController::class, 'showTaskId']); 