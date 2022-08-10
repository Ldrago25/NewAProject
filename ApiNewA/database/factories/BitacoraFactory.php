<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Bitacora>
 */
class BitacoraFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "date" => \Carbon\Carbon::now(),
            "action" => fake()->randomElement(["accion1","accion2","accion3"]),
            "user_id" => fake()->randomElement([1,2,3,4])
        ];
    }
}
