<?php

namespace Database\Seeders;

use App\Models\Bitacora;
use App\Models\Category;
use App\Models\Comment;
use App\Models\Like;
use App\Models\Message;
use App\Models\Room;
use App\Models\Roomuser;
use App\Models\Ticket;
use App\Models\User;
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
        
       User::factory(4)->create();
       Category::factory(4)->create();
       Ticket::factory(4)->create();
       Like::factory(4)->create();
       Comment::factory(4)->create();
       Room::factory(4)->create();
       Roomuser::factory(4)->create();
       Message::factory(10)->create();
       Bitacora::factory(10)->create();
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
