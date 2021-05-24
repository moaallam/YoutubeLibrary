import axios from "axios";
import { FunctionComponent,useState } from "react"
import SearchresultView from "./SearchresultView";

const SearchresultController:FunctionComponent<{refresh:any,user:string}>=({refresh,user})=>{
    const [numberOfResults, setNumberOfResults] = useState("")
    const [searchTitle,setSearchTitle]=useState("")
    const [results,setResults]=useState([])
//Using the YoutubeAPi to do a research by the title by HTTP client axios and set the results
    function searchVideoOnline() {
        axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=' + numberOfResults + '&q=' +searchTitle + '&type=video&key='+'AIzaSyAtumzF1SY0nRE3_CgeH-789_Qq81fM9m0').then(response => {
            var results = response.data.items
            setResults(results)
        })
    }
//Using my api to store the video in the database and refresh the playlist by calling refresh function
function addVideoToPlaylist(title: string, id: string) {
    axios.post('http://localhost:3000/youtubeRestfulAPI/addVideo.php', {
        title: title,
        id: id,
        user: user
    }).then(response => {
        console.log(response)
        refresh(user)
    })
}
//To refresh the browser and call the searchVideoOnline when the user submit
function handleSubmit(e: any) {
    e.preventDefault();
    searchVideoOnline();
}
return <SearchresultView 
handleSubmit={handleSubmit} 
setSearchTitle={setSearchTitle}
setNumberOfResults={setNumberOfResults}
addVideoToPlaylist={addVideoToPlaylist}
results={results}
/>
}

export default SearchresultController