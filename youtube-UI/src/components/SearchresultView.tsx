import React, { FunctionComponent, useState } from 'react';
import ReactDOM from "react-dom";
import dompurify from 'dompurify';
const sanitizer = dompurify.sanitize;
const SearchresultView:FunctionComponent<{handleSubmit:any,
    setSearchTitle:any,
    setNumberOfResults:any,
    addVideoToPlaylist:any,
    results:any[]
}>=({
    handleSubmit,
    setSearchTitle,
    setNumberOfResults,
    addVideoToPlaylist,
    results
}
)=>{
    return  <div>
    <form onSubmit={e=>handleSubmit(e)}>
        <div className="form-group">
        <label htmlFor="Videoname"  >Nom de la video</label>
        <input 
            type="text" 
            className="form-control"  
           id="Videoname"
            onChange={e=>setSearchTitle(sanitizer(e.target.value))}
        />
        </div>
        <div className="form-group">
        <label htmlFor="number of results">Nombre de resultat</label>
        <input 
        id="number of results"
        type="number" 
        className="form-control" 
        onChange={e=>setNumberOfResults(e.target.value)}
        min="0"
        />
        </div>    
        <button type="submit" aria-label="Search"  className="btn btn-primary" >Rechercher</button>
    </form>
        <div className="searchresults">
    {results.map(video=>(
        <div className="container-fluid">
        <div className="row">
            <div className="col-12 mt-3">
                <div className="card">
                    <div className="card-horizontal">
                        <div className="img-square-wrapper">
                            <img  src={video.snippet.thumbnails.high.url} alt="Card image cap"></img>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{video.snippet.title}</h4>
                            <p className="card-text">{video.id.videoId}</p>
                            
                        </div>
                    </div>
                    <div className="card-footer">
                    <button type="button" aria-label="add video to playlist" className="btn btn-success" onClick={()=>addVideoToPlaylist(video.snippet.title,video.id.videoId)}>Ajouter</button>
                    </div>
                </div>
            </div>
        </div>
        </div> 
    ))}
    </div>
    
</div>  
}


export default SearchresultView
