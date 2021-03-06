<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);
        $captcha = $_POST["g-recaptcha-response"];

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "alexandre.conflitti@h-drones.com";

        // Set the email subject.
        $subject = "Message de h-drones.com";

        // Build the email content.
        $email_content = "Name: $name\r\n";
        $email_content .= "Email: $email\r\n";
        $email_content .= "Message:\n$message\n";

        // Build the email headers.
        $email_headers  = 'MIME-Version: 1.0' . "\r\n";
        $email_headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

        $secretKey = "6LdVSdQUAAAAAE96AaIhnFOdkF4XrKQuso5igVRG";
        $ip = $_SERVER['REMOTE_ADDR'];
        // post request to server
        $url = 'https://www.google.com/recaptcha/api/siteverify?secret=' . urlencode($secretKey) .  '&response=' . urlencode($captcha);
        $response = file_get_contents($url);
        $responseKeys = json_decode($response,true);
        // should return JSON with success as true

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers) && $responseKeys["success"]) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>
