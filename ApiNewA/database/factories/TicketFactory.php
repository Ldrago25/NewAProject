<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tickect>
 */
class TicketFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
         
        return [
            "user_id" => fake()->randomElement([1,2,3,4]),
            "categorie_id" => fake()->randomElement([1,2,3,4]),
            "tex_enty" => fake()->sentence(3),
            "imageUrl" => "public/foto2.jpg" 
        ];
        
    }
}
