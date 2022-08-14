<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */
class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "text" => fake()->sentence(4),
            "date_creation" => Carbon::now(),
            "user_id" => fake()->randomElement([1,2,3,4]),
            "ticket_id" => fake()->randomElement([1,2,3,4])
        ];
    }
}
