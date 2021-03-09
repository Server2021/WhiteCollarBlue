<?php
$react_folder = __DIR__ . "/ClientApp/";
$react_file = $react_folder . "index.html";

$relUrl = strtok($_SERVER["REQUEST_URI"],'?');
$path = substr($relUrl, 1, strlen($relUrl));
$path_file = $react_folder . $path;

// Ensures the File Exists and hasn't escaped the folder.
if(file_exists($path_file) && startswith(realpath($path_file), $react_folder)){
    $react_file = $path_file;

    // Correct the File Type
    $contentType = \Defr\PhpMimeType\MimeType::get($react_file);
    header("Content-Type: $contentType");
    readfile($react_file);
}
else{
    require_once $react_file;
}
?>