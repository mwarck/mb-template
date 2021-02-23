## Author
@author : Marco Diaz
@mail   : marco@wfs.mx

## About
 Simple Landing page for  website

## Dependencies
 Bootstrap 4.5

## Installation 
1. Move the project to the main location of your domain 
2. Configure controller sendmail \
on controller/sendmail.php edit the credentials 
```php
    $mail->isSMTP();                                          // Send using SMTP
    $mail->Host       = 'your mail host';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = 'true';                             // Enable SMTP authentication
    $mail->Username   = 'your email';                      // SMTP username
    $mail->Password   = 'password of your email';         // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;  // PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 465;                            // Other if required  
```