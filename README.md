# netflix-gpt

-create React app
-configure TailwindCss
-header
-Routing Paths
-Login ui
-toggle signIn/ signout
-validate form
-useRef Hooks
-firebase setup
-deploying the live app
-create sign up user Account 
- implement sign in user api
-created redux store with userSlice
-Implemented signOut
-update profile
-fixed a bugs if the user is not login then it not go to /browse of web
-unsubscribe the onAuthStateChange callback
- add all hardCoded data in constant.js
-register to TMDB API & create an app & get access token
-Get Data from TMDB now playing movies list API
-Custom Hook for Now playing Movies
-Create MovieSlice
-update Store With Movies Data
- Planning for MainContainer and Secondary container
-Fetch data for Trailer video
-Update Store with Trailer Video 
-Embedded the YouTube video and make it autoPlay and mute
-tailwind classes to make main Container look awesome
-build Secondary component
-build Movie List 
-build movie card
-TMDB Image CDN_URL
-made browse page amazing using tailwind
-usePopularMovie custom hook
-making Gpt-Search bar by clicking gone to search bar page
-in search bar page we have features of searching and after search  showing results movies
-in search bar we have created multi-language button to select as convinece (good experience in creating)
-integrate gptSearchMovies
-gpt search Movies in amazing if we give command likewise command it gives  us result accordingly
-fetch the openai gpt api 
-fetch gptMovies suggestion from TNDB
-memoization 
-the ui is updated after search of gpt search with help of created Redux store and having serval slices
-most  important feature is that when we click any movie it display  trailer of that particular movie
- this is done by creating Redux store  and using useSelector to fetch the id of clicked movie and then using this id we are getting movie in ui
-ADDING .env files
-makes website responsive for phone and desktop


# features

-signIn/signOut logout/in
    - signIN singOut page
    -redirect to Browser
    -Header
    -Login form


-Browser(after authentication)
    -Header
    -Main Movie
        -Trailer in background
        -description
        -Movie Suggestion 
        -movie List*N
-Netflix gpt 
    searchBar
    Movie suggestion

    ******************************************
    -> by here i have developed the basic signIn / signOut page . Now its time to authenticate the password and email. but here for authentication backend comes in the picture . we use firebase to authenticate our user name and password. 