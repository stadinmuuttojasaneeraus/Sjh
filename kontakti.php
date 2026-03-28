<?php
if($_POST){
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = "dinmail@example.com";
  $subject = "Ny kontakt från hemsidan";
  $body = "Namn: $name\nEmail: $email\nMeddelande: $message";

  if(mail($to, $subject, $body)){
    echo "Tack! Meddelandet skickades.";
  } else {
    echo "Fel: Meddelandet kunde inte skickas.";
  }
}
?>
