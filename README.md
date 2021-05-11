the root contains two folders


    1)youtubeRestfulAPI:
        the folder has several php files that handle http requests from the front end 
        and one folder that stores the database in ".lib" files with the filename representing the user.

        for the app to work the server must be open in port 3000
           for instance this is what the URL should look like
             ---http://localhost:3000/youtubeRestfulAPI/addVideo.php-----
        

    2)my-app:
        to start the front end, type npm start in the CLI
        if that leads to a script starting error
        delete node_modules and reinstall it by the following command  node install

    3) how to use the app:
        to access the app the  user must enter his name(Mark or John /!\ its case sensitive /!\) in the first login page
            if the login fails an alert will show
        otherwise the main app UI will show up
        the user then has the possiblity to access his play list on the left side and he can either play a video
        delete it or share it to other users
        if he wants to add an other video he must click on the search button on the top left corner of the playlist scrollview

        when pressing the search button, the youtube search form will render, and then the user can type the
        video title along with the number of results
        
        fetching  the results is done using the youtube Data APi V3.

        
        
