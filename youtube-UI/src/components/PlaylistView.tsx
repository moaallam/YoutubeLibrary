import { FunctionComponent} from 'react';
const PlaylistView:FunctionComponent<{user:string ,
    setVisible:any,
    setPlayingvideo:any,
    handleDelete:any,
    shareVideo:any,
    video:any[],
    friends:any[]}>= (
{user,
setVisible,
setPlayingvideo,
handleDelete,
shareVideo,
video,
friends}
)=>{

    return<div>
    <div className="first"  >
        <div className="tools">
        <h3>{user}</h3>
        <button type="button" className="btn btn-primary" onClick={()=>setVisible(false)}>
            Rechercher
        </button>
        </div>
        <div>
            {video && video.map(video=>
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
                    <button type="button" className="btn delete" aria-label="Delete" onClick={()=>
                        handleDelete(video.id,user)} >
                        X
                    </button>
                    <button type="button" className="btn" aria-label="Watch the video" onClick={()=>{setVisible(true);setPlayingvideo(video.id);}} >
                        Voir
                    </button>

                    <div className="dropdown">
                        <button type="button" className="btn share" aria-label="Share the video" onClick={()=>{setVisible(true);}} >
                            Partager Avec
                        </button>
                        <div className="dropdown-content">
                            
                        {friends.map(name=>(
                            <div>
                            <a aria-label="share the video" onClick={()=>
                               shareVideo(video.title,video.id,name)} >{name}</a>
                           
                            </div>
                        
                        ))}
                        </div>
                    </div>
                    
                </div>
            </div>
            ))}
        </div>
    </div>
    </div>;
}

export default PlaylistView;