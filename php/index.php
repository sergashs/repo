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


// objects
class Person
{
	public $name = 'Victor';
	public $age = 20;
	public $hobby = 'swimming';


	// setter
	public function setName($name)
	{
		$this->name = $name;
	}

	// getter 
	public function getName()
	{
		return $this->name;
	}

	// __construct автоматично створює

	public function setProperty($name, $age, $hobby)
	{
		$this->name = $name;
		$this->age = $age;
		$this->hobby = $hobby;
	}

}


class Developer extends Person
{

}



// $person = new Person();

// $person->setName('Vasya');

// echo $person->getName();

// $person->setProperty('Io', 1000, 'hfhf');

// echo $person->hobby;

$developer = new Developer();

$developer->setProperty('Io', 1000, 'hfhf');

echo $developer->name;


?>