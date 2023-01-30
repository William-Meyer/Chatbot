<?php
   // data sent in header are in JSON format
   header('Content-Type: application/json');
   // takes the value from variables and Post the data
   $name = $_POST['message'];
   $to = "buckeyewill2004@icloud.com";
   $subject = "Contact Us";
   // Email Template
   $message = "<b>Name : </b>". $name ."<br>";

   $header = "Test";
   $retval = mail ($to,$subject,$message,$header);
   // message Notification
   if( $retval == true ) {
      echo json_encode(array(
         'success'=> true,
         'message' => 'Message sent successfully'
      ));
   }else {
      echo json_encode(array(
         'error'=> true,
         'message' => 'Error sending message'
      ));
   }
?>
