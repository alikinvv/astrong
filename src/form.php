 
<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = ''; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = ''; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('phpmails@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress('zayavka@astrong.info');     // zayavka@astrong.info  Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);  

if ($_POST['hide'] === 'uri') {
    $mail->Subject = 'Заявка юр. лица на вывоз ТКО с сайта Астронг';
    $mail->Body    = 'Организация: ' . $_POST['organization'] . ', Адрес: ' . $_POST['address'] . ', ИНН: ' . $_POST['inn'] . ', Телефон: ' . $_POST['phone'] . ', Email: ' . $_POST['email']  . ', Комментарий: ' . $_POST['comment'];
}

if ($_POST['hide'] === 'phy') {
    $mail->Subject = 'Заявка физ. лица на вывоз ТКО с сайта Астронг';
    $mail->Body    = 'ФИО: ' . $_POST['fio'] . ', Адрес: ' . $_POST['address'] . ', Телефон: ' . $_POST['phone'] . ', Email: ' . $_POST['email']  . ', Комментарий: ' . $_POST['comment'];
}

if ($_POST['hide'] === 'questions') {
    $mail->Subject = 'Заявка с сайта Астронг';
    $mail->Body    = 'Имя: ' . $_POST['name'] . ', Телефон: ' . $_POST['phone'] . ', Телефон: ';
}

foreach ($_FILES["attachfile"]["name"] as $k => $v) {
    $mail->AddAttachment( $_FILES["attachfile"]["tmp_name"][$k], $_FILES["attachfile"]["name"][$k] );
}

$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'success';
}
?>