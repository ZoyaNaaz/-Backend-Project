import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

let myusername = process.env.username;
console.log(myusername, process.env.database);
console.log("Setup of an awesome project");
console.log("hello");
