/* Practice Assignment 9:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

////////////////////////
// NOTE: Use the API endpoints available at
// https://jsonplaceholder.typicode.com/
// to get the data required in these exercises.
// HINT: Read the documented Resources and Routes.
// Also the guide:
// https://jsonplaceholder.typicode.com/guide/
///////////////////////

// 1) Create a function named "getAllPosts".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.

async function getAllPosts(){
    try{
        const data = await Response.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

// 2) Create a function named "getAllUsers".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.

async function getAllUsers(){
    const posts = await fetch("<https://jsonplaceholder.typicode.com/>");
    return await posts.json();
}

// 3) Create a function named "getComments".
// This function needs to accept a "postID"
// parameter.
// Use Fetch with Async/Await to request
// all the comments for the postID that
// is passed in as a parameter.
// The function should return all the
// comments for the requested postID
// as JSON data.

async function getComments(postID){
    const comments = await fetch("<https://jsonplaceholder.typicode.com/>comments?postId=${postID}");
    return await comments.json();
}

// 4) Create a function named "getUser".
// This function needs to accept a "userID"
// parameter.
// Use Fetch with Async/Await to request
// the data for the requested user.
// The function should return JSON data.

async function getUser(userID){
    let res = await fetch("https://jsonplaceholder.typicode.com/%27");
    let data = res.json();
    console.log(data);
}

// 5) Create a function named "getTodosForUser".
// This function needs to accept a "userID"
// parameter.
// Use Fetch with Async/Await to request
// all of the todos for the requested user.
// The function should return JSON data.

const getTodosForUser = async (userID) => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/%27");
    const data = await resp.json();
    return data;
}