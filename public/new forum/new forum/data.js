
const firebaseConfig = {
    apiKey: "AIzaSyAuj6iX0Hqp9owZpvWyZRVEiQYLfnKbT2o",
    authDomain: "wadii-project-7c7dd.firebaseapp.com",
    projectId: "wadii-project-7c7dd",
    storageBucket: "wadii-project-7c7dd.appspot.com",
    messagingSenderId: "987135629921",
    appId: "1:987135629921:web:50fd77c89ec38592682820",
    measurementId: "G-PZBNMH36L8"
}

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Variable to access database collection
const db = firebase.database().ref("users")

//Get Submit Form
let submitButton = document.getElementById('submit')
console.log(submitButton)
//Event Lister for Form Submission
submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior

    e.preventDefault()

    //Get Form Values
    let postHeader = document.getElementsById('postHeader').value
    let postCaption = document.getElementsById('postCaption').value
    let postCategory = document.getElementsById('postCategory').value
    let postBody = document.getElementsById('postBody').value

    //Save Form Data to Firebase
    db.doc().set({
        postHeader:postHeader,
        postCaption:postCaption,
        postCategory:postCategory,
        postBody:postBody,
    }). then( () =>{
        console.log("Data saved")
    }).catch((error) => {
        console.log(error)
    })
    //Alert
    alert("Your post has been successfully created and posted")
})


const app = Vue.createApp({

    // DO NOT EDIT - start
    data() {
        return {
            loggedUser : "",
            "forum": [
                {
                    "postID": 1,
                    "category": "Office Chair",
                    "postDate": Date.now(),
                    "postHeader": "Secret Chair Lab: Is it worth your hard-earned money?1",
                    "postCaption": "Tldr:It's Not worth it",
                    "postBody": "fuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuck",
                    "pUserId": "John",
                    "upvotes": ["UserId","UserId",], //v-if storeduserid in upvotes
                    "downvotes": ["UserId","UserId"],
                    "comments":[
                        ["userId", "Secret Lab sucks"],
                        ["userId", "U suck more"]
                    ]
                },
                {
                    "postID": 2,
                    "category": "Office Chair",
                    "postDate": Date.now(),
                    "postHeader": "Secret Chair Lab: Is it worth your hard-earned money?2",
                    "postCaption": "Tldr:It's Not worth it",
                    "postBody": "fuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuck",
                    "pUserId": "John",
                    "upvotes": ["UserId","UserId",], //v-if storeduserid in upvotes
                    "downvotes": ["UserId","UserId"],
                    "comments":[
                        ["userId", "Secret Lab sucks"],
                        ["userId", "U suck more"]
                    ]
                },
                {
                    "postID": 3,
                    "category": "Office Chair",
                    "postDate": Date.now(),
                    "postHeader": "Secret Chair Lab: Is it worth your hard-earned money?3",
                    "postCaption": "Tldr:It's Not worth it",
                    "postBody": "fuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuck",
                    "pUserId": "John",
                    "upvotes": ["UserId","UserId",], //v-if storeduserid in upvotes
                    "downvotes": ["UserId","UserId"],
                    "comments":[
                        ["userId", "Secret Lab sucks"],
                        ["userId", "U suck more"]
                    ]
                },
                {
                    "postID": 3,
                    "category": "Office Chair",
                    "postDate": Date.now(),
                    "postHeader": "Secret Chair Lab: Is it worth your hard-earned money?4",
                    "postCaption": "Tldr:It's Not worth it",
                    "postBody": "fuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuck",
                    "pUserId": "John",
                    "upvotes": ["UserId","UserId",], //v-if storeduserid in upvotes
                    "downvotes": ["UserId","UserId"],
                    "comments":[
                        ["userId", "Secret Lab sucks"],
                        ["userId", "U suck more"]
                    ]
                },
                {
                    "postID": 3,
                    "category": "Office Chair",
                    "postDate": Date.now(),
                    "postHeader": "Secret Chair Lab: Is it worth your hard-earned money?5",
                    "postCaption": "Tldr:It's Not worth it",
                    "postBody": "fuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuck",
                    "pUserId": "John",
                    "upvotes": ["UserId","UserId",], //v-if storeduserid in upvotes
                    "downvotes": ["UserId","UserId"],
                    "comments":[
                        ["userId", "Secret Lab sucks"],
                        ["userId", "U suck more"]
                    ]
                },
              
            ]  
        };
    },
    
    created() {
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
        categoryfilter(x) {
            if (x == "all") {
                return this.forum
            }
            else{
                
                for (i=0;i<this.forum.length;i++){
                    console.log("fuck")
                    if (this.forum[i].category != x){
                        this.forum.splice(i,1)
                        i = i-1
                    }
               }
            }
        },

    //     addComment() {
    //         var commentHtml = `
    //         <div class="comment">
    //             <div class="top-comment">
    //                 <p class="user">
    //                     ${comment.author}
    //                 </p>
    //                 <p class="comment-ts">
    //                     ${new Date(comment.date).toLocaleString()}
    //                 </p>
    //             </div>
    //             <div class="comment-content">
    //                 ${comment.content}
    //             </div>
    //         </div>
    //     `
    //     comments.insertAdjacentHTML('beforeend', commentHtml);
    // },

        // newPost() {

        // },

    computed: {
        // activeUsers: function() {
        // return _.pickBy(this.forum.category, function(u) {
        //     return u.active;
        // });
        // } // contains only {Alex: {…}, James: {…}}


        }

    },
    

});

const vm = app.mount("#forum");

