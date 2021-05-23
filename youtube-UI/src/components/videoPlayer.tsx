import React,{Component, FunctionComponent} from 'react';


const VideoPlayer:FunctionComponent<{id:string}> =({id})=>{
 
  var url = 'https://www.youtube.com/embed/'+id;
  return (
    <div >
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
      </div> 
    </div>
  );

}
export default VideoPlayer;
