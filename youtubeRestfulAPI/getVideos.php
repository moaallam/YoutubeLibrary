<?php

    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow:*');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With,Access-Control-Allow-Origin');
   //We extarct the JSON data from the file
    $data = isset($_GET['user']) ? $_GET['user'] : die();
    if(!is_null($data)){
       $file = file_get_contents('./dataBase/'.$data.'.lib');
       $file = json_decode($file,true);
       echo json_encode($file);
                 
    }
  