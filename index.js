const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

main()
    .then(()=>{
    console.log("connection sucessful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatapp");
}

//Index Route
app.get("/chats", async (req, res)=>{
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
});

//New chat
app.get("/chats/new", (req, res)=>{
    res.render("new.ejs");
});

app.post("/chats", (req, res)=>{
    let {from, msg, to} = req.body;
    let newChat = new Chat({
        from: from,
        msg: msg,
        to: to,
        created_at: new Date(),
    });

    newChat.save().then((res)=>{console.log("new chat added")}).catch((err)=>{console.log(err)});
    res.redirect("/chats");
});

// new route 
app.get("/chats/:id", async(req, res)=>{
    let {id} = req.params;
    let chate = await Chat.findById(id);
    res.render("edit.ejs",{chate});
});

//edit Route
app.get("/chats/:id/edit", async(req,res)=>{
    let {id} = req.params;
    let chate = await Chat.findById(id);
    res.render("edit.ejs",{chate});
});

//update Route
app.put("/chats/:id", async(req, res)=>{
    let {id} = req.params;
    let {msg: newMsg} = req.body;
    let {date} = new Date();
    let newChat = await Chat.findByIdAndUpdate(id, 
                {msg: newMsg},
                {runValidators: true, new: true});
    // console.log(newChat);
    res.redirect("/chats");
});

//delete route
app.delete("/chats/:id",async(req, res)=>{
    let {id} = req.params;
    let delChat = await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});

app.get("/", (req, res)=>{
    res.send("root is working");
});

app.listen(8080, ()=>{
    console.log("server is lisning port 8080");
}); 