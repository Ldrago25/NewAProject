<?php

namespace Database\Seeders;


use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(rolSeeder::class);

        \App\Models\User::factory(4)->create();
        \App\Models\Category::factory(4)->create();
        \App\Models\Ticket::factory(4)->create();
        \App\Models\Like::factory(4)->create();
        \App\Models\Comment::factory(4)->create();
        \App\Models\Room::factory(4)->create();
        \App\Models\Roomuser::factory(4)->create();
        \App\Models\Message::factory(10)->create();
        \App\Models\Bitacora::factory(10)->create();
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
