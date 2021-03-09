<?php
$root = __DIR__ . "/../API";
$bootstrap = __DIR__ . "/wcb.bootstrap.php";

// Fetches site information from configuration file.
if(!@include_once("siteconfig.php")){
    echo "<b>siteconfig.php</b>  doesn't exist in root site folder. Read <a href='https://github.com/toolboxnz/hrsense/blob/master/readme.md'>readme.md</a> for more details.";
    die();
}

require_once "$root/vendor/autoload.php";
require_once "$root/Framework/.php";

// Create the App
new App($bootstrap);
?>