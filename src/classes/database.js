const mongoose = require("mongoose");

class Database {
    constructor(){
        this.db = mongoose.connection;

        // PUT YOUR SCHEMAS HERE WHEN USING DATABASE
        // I'M KEEPING THESE HERE AS EXAMPLES, YOU CAN EVEN USE THESE IF YOU WANT
        // this.users = this.db.model("user", require("../static/schema/userSchema"));
        // this.guild = this.db.model("guild", require("../static/schema/guildSchema"));
    }
    loadDatabase(){
        mongoose.set("strictQuery", true);
        this.db.once("open", () => {
            console.log("Successfully connected to the database");
        });
        this.db.on("error", (err) => {
            console.log(`Error encountered on database connection: ${err}`);
        });
        mongoose.connect(process.env.DBURL, {useNewUrlParser: true, useUnifiedTopology: true});
    }
}

module.exports = Database;