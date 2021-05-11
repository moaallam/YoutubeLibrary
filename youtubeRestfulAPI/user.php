<?php

    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow:*');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With,Access-Control-Allow-Origin');
  
    $data = isset($_GET['user']) ? $_GET['user'] : die();
    if(!is_null($data)){

        if(file_exists('./dataBase/'.$data.'.lib')){
            $file = file_get_contents($data.'.lib');
            $file = json_decode($file,true);
            echo json_encode($file);
            http_response_code(200);
        }else{
            echo "no such file exist";
            http_response_code(202);
        }   
         
    }
  