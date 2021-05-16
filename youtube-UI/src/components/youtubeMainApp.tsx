import React,{Component} from 'react';
import ReactPlayer from 'react-player/youtube';
import axios from 'axios'
import {PlayList} from './playList'

type MyProps = {
    user: string;
  };
export class YoutubeMainApp extends React.Component<MyProps,SearchInfo>{
    state={
        user:"",       
    } 
    handleSubmit(e:any){
        e.preventDefault();
    }

    render(){      
        console.log(this.state.user);
        return (
                <div>
                    <PlayList user={this.props.user}/>
                </div>
          );           
  }

}
interface SearchInfo{
    user:string;

}


