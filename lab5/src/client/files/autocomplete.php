<?php
	
	$mysqli = new mysqli('localhost', 'root', '', 'lw6');
	if ($mysqli->connect_error) {
		die('Connect Error (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
	}
	// $surnamesArray = ['Петров', 'Иванов', 'Скворцов', 'Васильев', 
	// 	'Колобродов', 'Хоббитов', 'Кольцов', 'Лелеков',
	// 	'Кудрявцев', 'Прохоров', 'Кублицкий', 'Красильников', 
	// 	'Геворкян', 'Маркарян', 'Степанов', 'Старовойтов', 
	// 	'Максимов', 'Инеев', 'Фрост', 'Уотсон'];
	// $namesArray = ['Андрей', 'Илья', 'Петр', 'Василий', 
	// 	'Иван', 'Антон', 'Максим', 'Владимир', 'Денис',
	// 	'Алексей', 'Борис', 'Виктор', 'Олег', 'Том', 
	// 	'Джек', 'Захар', 'Юрий', 'Александр', 
	// 	'Федор', 'Николай', 'Мирон', 'Виталий', 'Феликс', 
	// 	'Ян', 'Сергей', ];
	// $position = ['web-разработчик', 'интегратор', 'тестировщик', 'программист',
	// 	'стажер', 'администратор', 'преподаватель', 
	// 	'front-end разработчик', 'специалист по безопасности', 
	// 	'хакер'];
	// $patronymic = ['Алексеевич', 'Андреевич', 'Максимович', 'Иванович', 'Юрьевич', 
	// 	'Владимирович', 'Василиьевич', 'Николаевич', 'Анатольевич', 'Олегович', 
	// 	'Борисович', 'Федорович', 'Викторович', 'Петрович', 'Денисович', 'Сергеевич'];
	// $mysqli = new mysqli('localhost', 'root', '', 'lw6');
	// if ($mysqli->connect_error) {
	// 	die('Connect Error (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
	// }

	// for ($i = 0; $i < 5000; $i++)
	// {
	// 		$query = "INSERT INTO employee (`surname`, `name`, `patronymic`, `position`) VALUES ('"
	// 			. $surnamesArray[array_rand($surnamesArray, 1)] . "', '" 
	// 			. $namesArray[array_rand($namesArray, 1)] . "', '"
	// 			. $patronymic[array_rand($patronymic, 1)] . "', '"
	// 			. $position[array_rand($position, 1)] . "')";
	// 		$result = $mysqli->query($query, MYSQLI_USE_RESULT);
	// }

	$departments = ['Веб отдел', 'Фронтенд отдел', 'Важный отдел №1', 
		'Важный отдел №2', 'Важный отдел №3', 
		'Важный отдел №4', 'Важный отдел №5',
		'Важный отдел №6', 'Важный отдел №7',
		'Важный отдел №8', 'Важный отдел №9',
		'Важный отдел №10', 'Важный отдел №11',
		'Важный отдел №12', 'Важный отдел №13',
		'Важный отдел №14', 'Важный отдел №15', 
		'Важный отдел №16', 'Важный отдел №17'];

	for ($i = 0; $i < 5000; $i++)
	{
			$query = "INSERT INTO department (`id_director`, `name`) VALUES ('"
				. rand(1500, 4500) . "', '" 
				. $departments[array_rand($departments, 1)] . "')";
			$result = $mysqli->query($query, MYSQLI_USE_RESULT);
	}

	// for ($i = 0; $i < 5000; $i++)
	// {
	// 		$query = "INSERT INTO team (`id_leader`, `id_department`, `name`) VALUES ('"
	// 			. rand(500, 8500) . "', '" 
	// 			. rand(0, 1000) . "', '" 
	// 			. $i . "')";
	// 		$result = $mysqli->query($query, MYSQLI_USE_RESULT);
	// }

	// for ($i = 0; $i < 5000; $i++)
	// {
	// 		$query = "INSERT INTO project (`id_team`, `name`, `deadline_date`) VALUES ('"
	// 			. rand(0, 4999) . "', '" 
	// 			. rand(1000000, 5000000) . "', '" 
	// 			. date("Y-m-d H:i:s", rand(1262055681, 1792055681)) . "')";
	// 		$result = $mysqli->query($query, MYSQLI_USE_RESULT);
	// }

	// for ($i = 0; $i < 5000; $i++)
	// {
	// 		$query = "INSERT INTO project_participation (`id_project`, `id_team`) VALUES ('"
	// 			. rand(1, 5000) . "', '" 
	// 			. rand(1, 5000) . "')";
	// 		$result = $mysqli->query($query, MYSQLI_USE_RESULT);
	// }
	echo 'Done';