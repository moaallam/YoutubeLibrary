<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With,Access-Control-Allow-Origin');


//this algo delete the video from the data base

$inputData = json_decode(file_get_contents("php://input"),true);


if(!is_null($inputData)){

     $fileData = file_get_contents('./dataBase/'.$inputData['username'].'.lib');
     $fileData = json_decode($fileData,true);
     $replacementArray = removeElementWithValue($fileData['videos'],"id",$inputData['id']);
     $fileData['videos']=$replacementArray;
     file_put_contents('./dataBase/'.$inputData['username'].'.lib',json_encode($fileData,JSON_PRETTY_PRINT));

    
}

 /*Cette fonction prend en argument :
    -Un tableau de video 
    -la clé
    -la clé de la vidéo à rajouter
     la fonction retourne tableau sans la video avec la clé passé en argument
    */

     function removeElementWithValue($array, $key, $value){
     foreach($array as $subKey => $subArray){
          if($subArray[$key] == $value){
               unset($array[$subKey]);
          }
     }
     return array_values($array);
     }

?>