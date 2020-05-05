const express = require("express");
const bodyParser = require("body-parser");
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

// contains blog posts to render
const posts = [];

// Home page
app.get("/", (req, res) => {

    res.render('home', {
        homeContent: homeContent,
        allPosts: posts
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

    const newPostTitle = req.body.postTitle;
    const newPostBody = req.body.composedPost;
    const newPost = {
        title: newPostTitle,
        post: newPostBody
    };

    posts.push(newPost);
    res.redirect("/");

})


// posts pages with Express routing
app.get('/posts/:postName', (req, res) => {

    const requested = _.lowerCase(req.params.postName);

    posts.forEach( (post) => {
        if ( requested === _.lowerCase(post.title) ) {

            const newPostTitle = post.title;
            const newPostBody = post.post;

            res.render('posts', {
                title: newPostTitle,
                post: newPostBody
            });
        } else {
            res
        }
    });
  });

app.o


app.listen(port, () => console.log(`Listening on port ${port}`));