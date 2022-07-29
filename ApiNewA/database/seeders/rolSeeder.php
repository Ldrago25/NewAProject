<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Whoops\Run;

class rolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $administrador = new Role();
        $administrador->name = "admin";
        $administrador->save();

        $usuario = new Role();
        $usuario->name = "user";
        $usuario->save();

    }
}
