<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            CompaniesTableSeeder::class,
            CorpusesTableSeeder::class,
            UsersTableSeeder::class,
            CorpusClassesTableSeeder::class,
            CorpusCreativesTableSeeder::class
        ]);
    }
}
