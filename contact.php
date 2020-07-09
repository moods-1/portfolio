<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = " ";
    $email_subject = "Interested in hiring!";
    $email_body = "Sender: $name.\n".
                    "Sender email: $visitor_email.\n".
                        "Message: $message.\n";
    $to = "ceemoods@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");
?>