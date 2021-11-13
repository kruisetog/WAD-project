var dateTime = (new Date()).toDateString()

// const firebaseConfig = {
//     apiKey: "AIzaSyCgxQMgggon4MDJ6Yj0wExgGMnUTPZsRCw",
//     authDomain: "wad-test-4f31e.firebaseapp.com",
//     databaseURL: "https://wad-test-4f31e-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "wad-test-4f31e",
//     storageBucket: "wad-test-4f31e.appspot.com",
//     messagingSenderId: "705410623197",
//     appId: "1:705410623197:web:31f5e58f95f3edd566dd34",
//     measurementId: "G-WMJF9DQC3W"
//   };

// Ryan's firebase

const firebaseConfig = {
    apiKey: "AIzaSyAuj6iX0Hqp9owZpvWyZRVEiQYLfnKbT2o",
    authDomain: "wadii-project-7c7dd.firebaseapp.com",
    projectId: "wadii-project-7c7dd",
    storageBucket: "wadii-project-7c7dd.appspot.com",
    messagingSenderId: "987135629921",
    appId: "1:987135629921:web:50fd77c89ec38592682820",
    measurementId: "G-PZBNMH36L8"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Variable to access database collection
const db = firebase.database().ref("forum")

var postHeader = document.getElementById('postHeader').value
var postCaption = document.getElementById('postCaption').value
var postCategory = document.getElementById('postCategory').value
var postBody = document.getElementById('postBody').value



const app = Vue.createApp({

    data() {
        return {
            loggedUser : "",
            forum : [],
            postCategory:"Office Chair",
            postHeader:"",
            postBody:"",
            postCaption:"",
            upvotes: "",
            downvotes: "",
            comments: "",
            postComment:"",

        };

    },

    created() {
        this.getDatabase()
        if (localStorage.loggedUser) {
            this.loggedUser = localStorage.loggedUser;
        } 
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

        getDatabase() {db.once("value").then((snapshot) => {
            if(snapshot.exists()) {
                this.forum = snapshot.val();
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

        newPost(){
            //Get Form Values
            if(this.loggedUser === ""){
                alert("You need to be login to post new thread!")
            }
            else{
                let postID = this.forum.length
                console.log(postID)
                console.log(this.postHeader)
                console.log(this.postCaption)
                console.log(this.postCategory)
                console.log(this.postBody)
                if(this.postHeader === "" || this.postCaption === "" || this.postBody === ""){
                    alert("Please fill up all the field")
                }
                else{
    
                //Save Form Data to Firebase
                firebase.database().ref("forum/" + postID).set({
                    postID: postID,
                    category:this.postCategory,
                    postDate: dateTime,
                    postHeader:this.postHeader,
                    postCaption:this.postCaption,
                    postBody:this.postBody,
                    pUserId:this.loggedUser,
                    upvotes:this.upvotes,
                    downvotes:this.downvotes,
                    comments:this.comments,
        
                }). then( () =>{
                    console.log("Data saved")
                    this.postCaption = ""
                    this.postCategory = "Office Chair"
                    this.postBody = ""
                    this.postHeader = ""
                }).catch((error) => {
                    console.log(error)
                })
                //Alert
                alert("Your post has been successfully created and posted")
                this.getDatabase()
    
                }
            }
            
    

        },
    
        addComment(x){
            if(this.loggedUser === ""){
                alert("You need to be login to post comment!")
            }
            else{
                if (this.postComment == "Comment" || this.postComment == "") {
                    alert("Please fill out the comment")
                }
                else{
                    var commentThread = this.forum[x].comments
                    if(commentThread == "") {
                        commentThread = []
                    }
                    commentThread.push([this.loggedUser,this.postComment,"less than a day ago"])
                    console.log(commentThread)
                    var commentRef = firebase.database().ref("forum").child(x).child("comments");
                    commentRef.set(commentThread)
                    this.postComment = ""
                    this.getDatabase()
                }
            }
        },

        upVote(x) {
            var upvotesRef = firebase.database().ref("forum").child(x).child("upvotes");

            var upvoteList = this.forum[x].upvotes
            if(upvoteList == "") {
                upvoteList = []
            }
            if(upvoteList.includes(this.loggedUser)){
                    upvoteList.pop(this.loggedUser)
                    if(upvoteList.length >= 1 || upvoteList === []){
                        upvotesRef.set(upvoteList)
                    }
                    else{
                        upvotesRef.set("")
                    }
            }
            else{
                upvoteList.push(this.loggedUser)
                upvotesRef.set(upvoteList)
            }
            this.getDatabase()
        },
        downVote(x) {
            var downvotesRef = firebase.database().ref("forum").child(x).child("downvotes");
            var downvoteList = this.forum[x].downvotes
            if(downvoteList == "") {
                downvoteList = []
            }
            if(downvoteList.includes(this.loggedUser)){
                    downvoteList.pop(this.loggedUser)
                    if(downvoteList.length >= 1 || downvoteList === []){
                        downvotesRef.set(downvoteList)
                    }
                    else{
                        downvotesRef.set("")
                    }
            }
            else{
                downvoteList.push(this.loggedUser)
                downvotesRef.set(downvoteList)
            }
            this.getDatabase()
        },
        

    },
})


const vm = app.mount("#forum");

