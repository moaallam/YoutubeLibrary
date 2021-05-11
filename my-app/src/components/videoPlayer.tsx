import React,{Component} from 'react';
import ReactPlayer from 'react-player/youtube';
import {PlayList} from './playList'


interface Props{
  Id:string;
}


const VideoPlayer =({Id}:Props)=>{
 
  var url = 'https://www.youtube.com/embed/'+Id;
  return (
    <div >
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
      </div> 
    </div>
  );

}
export default VideoPlayer;
