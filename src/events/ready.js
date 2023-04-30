const { ActivityType } = require("discord.js");

module.exports = async (app) => {
    console.log(`Logged in as ${app.user.tag}`);
    app.user.setActivity("Fighting a Boss", {type: ActivityType.Watching});
}