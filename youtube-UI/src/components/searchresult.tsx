import React,{Component} from 'react';
import ReactPlayer from 'react-player/youtube';
import axios from 'axios'
import { PlayList } from './playList';




export class SearchResult extends React.Component<{user:string,refresh:any},SearchInfo>{
    apiKey:string='AIzaSyAtumzF1SY0nRE3_CgeH-789_Qq81fM9m0'

    constructor(props:{user:string,refresh:any}){
        super(props);
        this.state={
            numberOfResults:"",
            searchTitle:"",
            results:[],        
        }
    }
    
    render(){      
        return (         
        <div>
            <form onSubmit={e=>this.handleSubmit(e)}>
                <div className="form-group">
                <label htmlFor="exampleInputEmail1">Nom de la video</label>
                <input 
                    type="text" 
                    className="form-control"  
                    onChange={e=>this.setState({searchTitle:e.target.value})}
                />
                </div>
                <div className="form-group">
                <label htmlFor="exampleInputPassword1">Nombre de resultat</label>
                <input 
                type="number" 
                className="form-control" 
                onChange={e=>this.setState({numberOfResults:e.target.value})}
                min="0"
                />
                </div>    
                <button type="submit" className="btn btn-primary" >Rechercher</button>
            </form>
                <div className="searchresults">
            {this.state.results.map(video=>(
                <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-horizontal">
                                <div className="img-square-wrapper">
                                    <img className="" src={video.snippet.thumbnails.high.url} alt="Card image cap"></img>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">{video.snippet.title}</h4>
                                    <p className="card-text">{video.id.videoId}</p>
                                    
                                </div>
                            </div>
                            <div className="card-footer">
                            <button type="button" className="btn btn-success" onClick={()=>this.addVideoToPlaylist(video.snippet.title,video.id.videoId)}>Ajouter</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div> 
            ))}
            </div>
            
        </div>  
          );           
    }

    handleSubmit(e: any) {
        e.preventDefault();
        this.searchVideoOnline();
    }

    searchVideoOnline() {
        axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=' + this.state.numberOfResults + '&q=' + this.state.searchTitle + '&type=video&key='+this.apiKey).then(response => {
            var results = response.data.items
            this.setState({
                results: results
            })
        })
    }
    addVideoToPlaylist(title: string, id: string) {
        axios.post('http://localhost:3000/youtubeRestfulAPI/addVideo.php', {
            title: title,
            id: id,
            user: this.props.user
        }).then(response => {
            console.log(response)
            this.props.refresh()
            console.log("HEllo refrsh")
        })
    }


}
interface SearchInfo{
    numberOfResults:string;
    searchTitle:string;
    results:any[];
}


