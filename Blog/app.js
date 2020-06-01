const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require('lodash');

const app = express();
const cwd = __dirname;
const port = 3000;

// set apps view enjine to ejs
app.set('view engine', 'ejs');
// use bodyparser
app.use(bodyParser.urlencoded( {extended: true} ));
// public files server will use
app.use(express.static("public")); 

//connect (but name of db you want to connnect to OR create if  doesnt exist at end of string)
mongoose.connect("mongodb://localhost:27017/blogDB", { 
    useNewUrlParser: true, useUnifiedTopology: true 
} );

//create new schema of how data in a particular collection of documents will be structured
const postSchema = new mongoose.Schema( {
    title: {
        type: String, 
        required: [true, "Must add a title for each post."]
        },
    post: {
        type: String
        }
});

//make new mongo collection
const Post = mongoose.model("Post", postSchema);

// page content
const homeContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                    in culpa qui officia deserunt mollit anim id est laborum.`

const aboutContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                    in culpa qui officia deserunt mollit anim id est laborum.`

const contactContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                    in culpa qui officia deserunt mollit anim id est laborum.`



// Home page
app.get("/", (req, res) => {

    Post.find({}, (err, foundPosts) => {
        if(!err) {
            res.render('home', {
                homeContent: homeContent,
                allPosts: foundPosts
            });
        } else {
            console.log(err);
        }
    });
});


// Aboute page
app.get("/about", (req, res) => {
    res.render('about', {
        aboutContent: aboutContent
    });
});


// contact page
app.get("/contact", (req, res) => {
    res.render('contact', {
        contactContent: contactContent
    });
});


// compose page
app.get("/compose", (req, res) => {
    res.render("compose");
});

app.post("/compose", (req, res) => {

    // get title and body of post using their html names
    const newPostTitle = req.body.postTitle;
    const newPostBody = req.body.composedPost;

    const post = new Post({
        title: newPostTitle,
        post: newPostBody
    });

    // add new post to posts collection and redirect to "/"
    post.save()
    res.redirect("/");
})


// posts pages with Express routing
app.get('/posts/:postName', (req, res) => {

    // utilize lodash to make routing to pages more robust
    let requested = _.lowerCase(req.params.postName);
    // if requested url is in posts.title
    posts.forEach( (post) => {
        if ( requested === _.lowerCase(post.title) ) {
            // render posts page with post infor only, along with header and footer 
            res.render('posts', {
                title: post.title,
                post: post.post
            });
        };
    });
  });


// listen on port
app.listen(port, () => console.log(`Listening on port ${port}`));