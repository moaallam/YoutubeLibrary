<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With,Access-Control-Allow-Origin');


        $path    = './dataBase';
        $files = array_diff(scandir($path), array('.', '..'));
        $arrayName=array();
        foreach ($files as $file) {
            if (pathinfo($path . '/' . $file)['extension'] == 'lib') {
                $without_extension = basename($file, '.lib');         
                array_push($arrayName,$without_extension);
          
            }
        }
        echo json_encode($arrayName);


?>