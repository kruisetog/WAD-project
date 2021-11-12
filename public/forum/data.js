var dateTime = (new Date()).toDateString()


const firebaseConfig = {
    apiKey: "AIzaSyCgxQMgggon4MDJ6Yj0wExgGMnUTPZsRCw",
    authDomain: "wad-test-4f31e.firebaseapp.com",
    databaseURL: "https://wad-test-4f31e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "wad-test-4f31e",
    storageBucket: "wad-test-4f31e.appspot.com",
    messagingSenderId: "705410623197",
    appId: "1:705410623197:web:31f5e58f95f3edd566dd34",
    measurementId: "G-WMJF9DQC3W"
  };

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Variable to access database collection
const db = firebase.database().ref("forum")


function newPost(){

        //Get Form Values
        let postHeader = document.getElementById('postHeader').value
        let postCaption = document.getElementById('postCaption').value
        let postCategory = document.getElementById('postCategory').value
        let postBody = document.getElementById('postBody').value
        let postID = 5 + 1
        console.log(postID)
        console.log(postHeader)
        console.log(postCaption)
        console.log(postCategory)
        console.log(postHeader)

        //Save Form Data to Firebase
        firebase.database().ref("forum").set({
            postID: postID,
            category:postCategory,
            postDate: this.dateTime,
            postHeader:postHeader,
            postCaption:postCaption,
            postBody:postBody,
            pUserId:"",
            upvotes:[],
            downvotes:[],
            comments:[],

        }). then( () =>{
            console.log("Data saved")
        }).catch((error) => {
            console.log(error)
        })
        //Alert
        alert("Your post has been successfully created and posted")
}


const app = Vue.createApp({

    data() {
        return {
            loggedUser : "handsome",
            forum : [],
        };

    },

    created() {

        if (localStorage.loggedUser) {
            this.loggedUser = localStorage.loggedUser;
        } 
        db.once("value").then((snapshot) => {
            if(snapshot.exists()) {
                this.forum = snapshot.val();
                console.log(this.forum)
            }
        })
    },


    methods: {

        logout() {
            this.loggedUser = "";
            localStorage.removeItem("loggedUser");
            alert("Logged Out Successfully")
            window.location.href = "homepage.html"
        },

        writeUserDataWithCompletion() {
                firebase.database().ref('forum').set({
                    forum: this.forum,
                    },
                function (error) {
                    if (error) {
                    document.getElementById("status").innerText = "Chair Registration Failed!";
                    } else {
                    document.getElementById("status").innerText = "Chair Registration Done!";
                    setTimeout(()=>{
                        document.getElementById("status").innerText = "Status";
                
                    }, 3000)
                    }
                })
            },


        categoryfilter(x) {
            db.once("value").then((snapshot) => {
                    this.forum = snapshot.val();
                    if (x == "all") {
                        console.log(this.forum)
                    }
                    else{
                        for (i=0;i<this.forum.length;i++){
                            if (this.forum[i].category != x){
                                this.forum.splice(i,1)
                                i = i-1
                            }
                       }
           
                }
            })
        },

    //     newPost(){

    //         //Get Form Values
    //         let postHeader = document.getElementById('postHeader').value
    //         let postCaption = document.getElementById('postCaption').value
    //         let postCategory = document.getElementById('postCategory').value
    //         let postBody = document.getElementById('postBody').value
    //         let postID = 5 + 1
    //         console.log(postID)
    //         console.log(postHeader)
    //         console.log(postCaption)
    //         console.log(postCategory)
    //         console.log(postHeader)
    
    //         //Save Form Data to Firebase
    //         firebase.database().ref("forum").set({
    //             postID: postID,
    //             category:postCategory,
    //             postDate: this.dateTime,
    //             postHeader:postHeader,
    //             postCaption:postCaption,
    //             postBody:postBody,
    //             pUserId:"",
    //             upvotes:[],
    //             downvotes:[],
    //             comments:[],
    
    //         }). then( () =>{
    //             console.log("Data saved")
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    //         //Alert
    //         alert("Your post has been successfully created and posted")
    // },
    

    //     upVote(x) {
    //         firebase.database().ref('forum/' + x ).set({
    //             hello = byebye
    //             })

    // },
        

            newPost() {

            },


    },
    computed: {
        
    }
})


const vm = app.mount("#forum");

