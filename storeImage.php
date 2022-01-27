<?php

    // Getting image uri
    $img = $_POST['image'];
    // Getting tag
    $tag = $_POST['tag'];
    // Setting upload spot
    $folderPath = "upload/";

    // Getting the image uri data
    $image_parts = explode(";base64,", $img);
    // Getting the image metadata
    $image_type_aux = explode("image/", $image_parts[0]);
    // Getting the image type
    $image_type = $image_type_aux[1];

    // Decoding the image uri
    $image_base64 = base64_decode($image_parts[1]);
    // Making a unique filename
    $fileName = $tag . "-" . uniqid() . '.png';
    // Making the full file name
    $file = $folderPath . $fileName;
    // Making image file in the upload directory
    file_put_contents($file, $image_base64);

    // Running the python script to upload file to google drive
    shell_exec('python3 upload.py');
    

?>