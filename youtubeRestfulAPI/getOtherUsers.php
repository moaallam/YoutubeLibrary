<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With,Access-Control-Allow-Origin');
        // This algo scan the folders of the directory "database" base to extract the names of users 
        $inputData = json_decode(file_get_contents("php://input"),true);
        $path    = './dataBase';
        $files = array_diff(scandir($path), array('.', '..'));
        $arrayName=array();
        foreach ($files as $file) {
            if (pathinfo($path . '/' . $file)['extension'] == 'lib') {
                $without_extension = basename($file, '.lib');
                if($inputData['username']!=$without_extension) { //We add all the users except the user who use connected    
                array_push($arrayName,$without_extension);
                }
          
            }
        }
        echo json_encode($arrayName);


?>