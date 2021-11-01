const app = Vue.createApp({

    // DO NOT EDIT - start
    data() {
        return {
            "forum": [
                {
                    "category": ["Office Chair"],
                    "postsID": 1,
                    "postDate": Date.now(),
                    "postHeader": "Secret Chair Lab: Is it worth your hard-earned money?",
                    "postCaption": "Tldr:It's Not worth it",
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
                    "pUserId": 1,
                    "upvotes": ["UserId","UserId"],
                    "downvotes": ["UserId","UserId"],
                    "comments":[
                        {"userId": "Fuck you"},
                        {"userId": "Fuck you 2"}
                    ]
                }
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

}});



const vm = app.mount("#forum");