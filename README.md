## project setup

1. create-react-app
2. configured tailwindcss
3. header
4. routing
5. login form
6. signup form 
6. form validatation
7. useRef Hook
8. firebase setup
9. Deploy our app to production
10. Create sigup user account
11. implement singin user api
12. created redux store with userslice
13. implement the sign out
14. update profile
15. fetch from TMDB MOVIES
-  BUG FIXES: 
    1. signup user username and profile picture update
    2. if the user is not login redirect /browse to / login
    3. if the logged in user try to login again redirect / to /browse
    4. ## EFFECIENCY => UNSUBSCRIBE TO THE onAuthStateChanged callback()

16. Add constants file for all hardcoded strings


## Features
- login/signup (before authentiation)
    - signIn / SignUp Form
    - redirect to browser page
- Browse (after authentication)
  - Header 
  - Main movie (or) movie container
        - trailer in background
        - title & description
        - Movie Suggesstions (many suggesstion)
                - MovieList (list of movie)
                       - movie (cards)
- NetflixGPT
    - SearchBar
    - Movie Suggesstions