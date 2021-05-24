import React, { FunctionComponent, useState } from 'react';

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
        <label >Nom de la video</label>
        <input 
            type="text" 
            className="form-control"  
            onChange={e=>setSearchTitle(e.target.value)}
        />
        </div>
        <div className="form-group">
        <label >Nombre de resultat</label>
        <input 
        type="number" 
        className="form-control" 
        onChange={e=>setNumberOfResults(e.target.value)}
        min="0"
        />
        </div>    
        <button type="submit" className="btn btn-primary" >Rechercher</button>
    </form>
        <div className="searchresults">
    {results.map(video=>(
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
                    <button type="button" className="btn btn-success" onClick={()=>addVideoToPlaylist(video.snippet.title,video.id.videoId)}>Ajouter</button>
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