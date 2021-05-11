<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With,Access-Control-Allow-Origin');


    $dataIn = json_decode(file_get_contents("php://input"),true);
    if(!is_null($dataIn)){
        $file = file_get_contents('./dataBase/'.$dataIn['user'].'.lib');
        $file = json_decode($file,true);
        array_push($file['videos'],array('title'=>$dataIn['title'],'id'=>$dataIn['id']));
        file_put_contents('./dataBase/'.$dataIn['user'].'.lib',json_encode($file,JSON_PRETTY_PRINT));

    }


?>