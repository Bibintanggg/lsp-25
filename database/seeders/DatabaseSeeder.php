<?php

namespace Database\Seeders;

use App\Enum\UserRole;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('password'),
            'role' => UserRole::ADMIN
        ]);

        User::factory()->create([
            'name' => 'user',
            'email' => 'user@example.com',
            'password' => Hash::make('password'),
            'role' => UserRole::USER
        ]);
    }
}
