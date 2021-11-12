
// const firebaseConfig = {
//     apiKey: "AIzaSyAuj6iX0Hqp9owZpvWyZRVEiQYLfnKbT2o",
//     authDomain: "wadii-project-7c7dd.firebaseapp.com",
//     projectId: "wadii-project-7c7dd",
//     storageBucket: "wadii-project-7c7dd.appspot.com",
//     messagingSenderId: "987135629921",
//     appId: "1:987135629921:web:50fd77c89ec38592682820",
//     measurementId: "G-PZBNMH36L8"
// }

// //Initialize Firebase
// firebase.initializeApp("firebaseConfig");
// var firestore = firebase.firestore();

// //Variable to access database collection
// const db = firestore.collection("forum")

// //Get Submit Form
// let submitButton = document.getElementById('submit')

// //Event Lister for Form Submission
// submitButton.addEventListener("click", (e) => {
//     //Prevent Default Form Submission Behavior
//     e.preventDefault()

//     //Get Form Values
//     let postHeader = document.getElementsById('postHeader').value
//     let postCaption = document.getElementsById('postCaption').value
//     let postCategory = document.getElementsById('postCategory').value
//     let postBody = document.getElementsById('postBody').value

//     //Save Form Data to Firebase
//     db.doc().set({
//         postHeader:postHeader,
//         postCaption:postCaption,
//         postCategory:postCategory,
//         postBody:postBody,
//     }). then( () =>{
//         console.log("Data saved")
//     }).catch((error) => {
//         console.log(error)
//     })
//     //Alert
//     alert("Your post has been successfully created and posted")
// })


const app = Vue.createApp({

    // DO NOT EDIT - start
    data() {
        return {
            "forum": [
                {
                    "category": "Office Chair",
                    "postDate": Date.now(),
                    "postHeader": "Secret Chair Lab: Is it worth your hard-earned money?",
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
                    "category": ["Office Chair"],
                    "postsID": 1,
                    "postDate": Date.now(),
                    "postHeader": "Secret Chair Lab: Is it worth your hard-earned money?",
                    "postCaption": "Tldr:It's Not worth it",
                    "postBody": "fuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuckfuck fuck fuck fuck",
                    "pUserId": "John",
                    "upvotes": ["UserId","UserId",], //v-if storeduserid in upvotes
                    "downvotes": ["UserId","UserId"],
                    "comments":[
                        {"userId": "Fuck you"},
                        {"userId": "Fuck you 2"}
                    ]
                },
                {
                    "category": ["Office Chair"],
                    "postsID": 1,
                    "postHeader": "Secret Chair Lab: Is it worth your hard-earned money?",
                    "postCaption": "Tldr:It's Not worth it",
                    "postBody": "fuck fuck fuck fuck",
                    "pUserId": 1,
                    "upvotes": ["UserId","UserId"],
                    "downvotes": ["UserId","UserId"],
                    "comments":[
                        {"userId": "Fuck you"},
                        {"userId": "Fuck you 2"}
                    ]
                },
                {
                    "category": ["Office Chair"],
                    "postsID": 1,
                    "postHeader": "Secret Chair Lab: Is it worth your hard-earned money?",
                    "postCaption": "Tldr:It's Not worth it",
                    "postBody": "fuck fuck fuck fuck",
                    "pUserId": 1,
                    "upvotes": ["UserId","UserId"],
                    "downvotes": ["UserId","UserId"],
                    "comments":[
                        {"userId": "Fuck you"},
                        {"userId": "Fuck you 2"}
                    ]
                },
            ]  
        };
    },
    methods: {

        addComment() {
            var commentHtml = `
            <div class="comment">
                <div class="top-comment">
                    <p class="user">
                        ${comment.author}
                    </p>
                    <p class="comment-ts">
                        ${new Date(comment.date).toLocaleString()}
                    </p>
                </div>
                <div class="comment-content">
                    ${comment.content}
                </div>
            </div>
        `
        comments.insertAdjacentHTML('beforeend', commentHtml);
    },

        newPost() {
    // fuck
        },

    computed: {
        activeUsers: function() {
        return _.pickBy(this.forum.category, function(u) {
            return u.active;
        });
        } // contains only {Alex: {…}, James: {…}}
    }

},

});

const vm = app.mount("#forum");

