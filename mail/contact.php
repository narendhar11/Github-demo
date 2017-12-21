<?php
session_start();
require_once 'PHPMailer-master/PHPMailerAutoload.php';

$errors=[];
if (isset($_GET['name'], $_GET['mail'], $_GET['message'])) {
	$fields =[
		'name' => $_GET['name'],
		'email' => $_GET['mail'],
		'message' => $_GET['message']
		];
	foreach (($fields) as $field => $data) {
		if(empty($data)){
			$errors[] = 'The' .$field. 'field is required';
		}
	}
	
	if(empty($error)){
		$m = new PHPMailer;

		$m->isSMTP();
		$m->SMTPAuth = true;

		$m->Host = 'smtp.gmail.com';
		$m->Username = 'yourmail@gmail.com';
		$m->Password = 'Password';
		$m->SMTPSecure = 'ssl';
		$m->Port = 465;

		$m->isHTML();

		$m->Subject = 'Contact form submitted';
		$m->Body = 'From:'.$fields['name'].'('.$fields['email'].')<p>'.$fields['message'].'</p>';

		$m->FromName = 'Contact';
		
		$m->AddAddress('naru2112@gmail.com',$fields['name']);

		if($m->send()){
			// header('Location: thanks.php');
			// die();
			echo "1sent";
		}
		// $l = new PHPMailer;

		// $l->isSMTP();
		// $l->SMTPAuth = true;

		// $l->Host = 'smtp.gmail.com';
		// $l->Username = 'jameelgrand@gmail.com';
		// $l->Password = 'XXXXXXXX';
		// $l->SMTPSecure = 'ssl';
		// $l->Port = 465;

		// $l->isHTML();

		// $l->Subject = 'Thans for your reqest';
		// $l->Body = 'we will getback to you soon';
		// $l->FromName = 'Easy2toouch';
		// $l->AddAddress($fields['email'],'Easy2toouch');
		// if($l->send()){
		// 	// header('Location: thanks.php');
		// 	// die();
		// 	echo ",2sent";
		// }
	}	
}else{
	echo 'Something went worng.';
	$error[] = 'Something went worng.';
}
$_SESSION['errors']= $errors;
$_SESSION['fields']= $fields;

?>