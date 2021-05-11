import React,{Component,useState} from 'react';
import VideoPlayer from './videoPlayer'
import {SearchResult} from './searchresult'


import axios from 'axios'


type MyProps = {
    user: string;
  };

export class PlayList extends React.Component <MyProps,SearchInfo>{
  
    constructor(props:any) {
        super(props);
        this.state={
            video:[],
            friends:[],
            visible:true,
            playingvideo:'',
            username:this.props.user
   
        };
  
      }

    render(){ 
          return(
                    <div>
                        <div className="first"  >
                            <div className="tools">
                            <button type="button" className="btn btn-primary" onClick={()=>
                                this.setState({visible:false})}>
                                Rechercher
                            </button>
                            <button type="button" className="btn btn-primary" onClick={()=>
                                this.componentDidMount()}>
                                Actualiser
                            </button>
                            </div>
                            <div>
                                {this.state.video.map(video=>
                                (
                                <div className="card" style={{width: "18rem",backgroundColor:"rgb(102, 112, 105fd)"}}>
                                    <img className="card-img-top" src={'https://i.ytimg.com/vi/'+video.id+'/mqdefault.jpg'} alt="Card image cap">
                                    </img>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {video.title}
                                        </h5>
                                        <p className="card-text">
                                            {video.id}
                                        </p>
                                        <button type="button" className="btn delete"  onClick={()=>
                                            this.handleDelete(video.id)} >
                                            X
                                        </button>
                                        <button type="button" className="btn " onClick={()=>
                                            this.setState({visible:true,playingvideo:video.id})} >
                                            Voir
                                        </button>

                                        <div className="dropdown">
                                            <button type="button"   className="btn share" onClick={()=>
                                                this.setState({visible:true,playingvideo:video.id})} >
                                                Partager Avec
                                            </button>
                                            <div className="dropdown-content">
                                                
                                            {this.state.friends.map(name=>(
                                                <div>
                                                <a onClick={()=>
                                                   this.shareVideo(video.title,video.id,name)} >{name}</a>
                                               
                                                </div>
                                            
                                            ))}
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="second">
                                {this.state.visible? 
                                <VideoPlayer Id ={this.state.playingvideo}/>
                                : 
                                <SearchResult user={this.props.user}/>
                                }
                            </div>
                        </div>
                    </div>
        
            );           
    }

    handleDelete(id:string){
        axios.post('http://localhost:3000/youtubeRestfulAPI/deleteVideo.php',{id:id,username:this.props.user}).then(response=>{
            this.componentDidMount();
        })
    }

    getOtherUsers(){
        axios.post('http://localhost:3000/youtubeRestfulAPI/getOtherUsers.php',{username:this.props.user}).then(response=>{
            console.log(response);
            this.setState({friends:response.data})  
        })
    } 
    shareVideo(title: string, id: string,name:string){
        axios.post('http://localhost:3000/youtubeRestfulAPI/addVideo.php', {title: title,id: id,user: name}).then(response=>{
            console.log(response);
        })
    } 

    componentDidMount(){
        axios.get('http://localhost:3000/youtubeRestfulAPI/getVideos.php?user='+this.props.user).then(response=>{
           this.setState({video:response.data.videos})  
        })
        this.getOtherUsers();
    }

}
interface SearchInfo{
    video:any[],
    visible:boolean,
    playingvideo:string,
    username:string,
    friends:any[],
}