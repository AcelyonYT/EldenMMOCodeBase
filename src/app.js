const {Client, GatewayIntentBits, Partials, Collection, REST, Routes} = require("discord.js");
const { readdirSync } = require("fs");
// const Utility = require("./static/utility.js");
// const Database = require("./classes/database.js");

class NAMEHERE extends Client {
    constructor(){
        super({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent], partials: [Partials.Channel]});
        this.commands = new Collection();
        this.REST = new REST({version: "10"}).setToken(process.env.TOKEN);
        // this.utility = new Utility();
        // this.db = new Database();
    }
    async launch(){
        this.loadEvents();
        await this.loadCommands();
        // await this.db.loadDatabase();
        await this.login(process.env.TOKEN);
        this.registerSlashCommands();
    }
    loadEvents(){
        const eventFiles = readdirSync(`${__dirname}/events`).filter(file => file.endsWith(".js"));
        for( const file of eventFiles ){
            const event = require(`./events/${file}`);
            const eventName = event.name || file.split('.')[0];
            if(eventName == 'ready'){
                this.once('ready', event.bind(this));
            }
            else{
                this.on(eventName, event.bind(this));
            }
            delete require.cache[`./events/${file}`];
        }
    }
    async loadCommands(){
        const categories = readdirSync(`${__dirname}/commands`);
        for(const category of categories){
            let commandFiles = readdirSync(`${__dirname}/commands/${category}`).filter(file => file.endsWith(".js"));
            for(const file of commandFiles){
                const commandName = file.split('.')[0];
                const commandClass = require(`./commands/${category}/${commandName}`);
                const command = new commandClass(this, { category: category });
                this.commands.set(commandName, command);
            }
        }
        console.log("Slash commands have been loaded.");
    }
    async registerSlashCommands() {
        try {
            await this.REST.put(
                Routes.applicationCommands(
                    this.user.id
                ),{
                    body: this.commands.map(x => x.slashCommand),
                },
            );
            console.log("slash commands registered");
        }catch(e){
            throw e;
        }
    }
}

module.exports = NAMEHERE;