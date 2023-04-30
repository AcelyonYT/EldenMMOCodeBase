require("dotenv").config();
const NAMEHERE = require("./src/app.js");
const bot = new NAMEHERE();
bot.launch();
process.on("SIGINT", async () => {
    // await bot.db.db.close();
    process.exit(0);
});