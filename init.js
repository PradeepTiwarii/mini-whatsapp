const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
// app.use(express.static(path.join(__dirname,"public")));

main()
    .then(()=>{
    console.log("connection sucessful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatapp");
}

let allChat = [
    {
        from:"manish",
        to:"priyanshu",
        msg:"jainamore chalo",
        created_at: new Date(),
    },
    {
        from:"shani",
        to:"pankaj",
        msg:"class chalo test ho raha h",
        created_at: new Date(),
    },
    {
        from:"rahul",
        to:"raju",
        msg:"bahar aao sab aayi hai",
        created_at: new Date(),
    },
    {
        from:"sourab",
        to:"suraj",
        msg:"bahar chalo bhook laga hai",
        created_at: new Date(),
    },
];

Chat.insertMany(allChat);