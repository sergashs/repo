<?php

// $persons = [
// 	[
// 		'name' => 'Victor',
// 		'age' => 20,
// 		'is_married' => true
// 	],
// 	[
// 		'name' => 'Vasyl',
// 		'age' => 22,
// 		'is_married' => false,
// 		'cars' => ['car1', 'car2']
// 	]
// ];

// foreach ($person as $key => $item) {
// 	echo $key . ': ';
// 	echo $item . "\n";
// }

// foreach ($persons as $person) {
// 	echo print_r($person['age']);
// }

// Booleans // false === 0, true ==== 1

// $name = '';

// if ($name) {
// 	echo 'Yes';
// } else {
// 	echo 'No';
// }

// function test($a, $b)
// {
// 	echo $a + $b;
// }

// test(10, 5);

class Person
{
	public $name = 'Victor';
	public $age = 20;

	public function sayHello()
	{
		echo 'Hi';
	}
}

$person = new Person();

echo $person->age;
$person->sayHello();

?>