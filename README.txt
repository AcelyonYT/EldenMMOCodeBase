Hello so this is a codebase for a discord bot
This bot will be able to allow you to use a mongodb database

If using a database
    - You need to uncomment everything I have commented since the stuff commented
    is mainly about adding the database
PUT YOUR SCHEMAS IN src/static/schema

IN THE ENV FILE
You will need to add your bot token where it says TOKEN=, put it next to the =
You will also need to add your DBURL (srv) that you get from the mongodb site
You will need to put it there

The utility class will allow you to add any methods that you can reuse in all your commands
for example if you want a random number generater that includes min and max value
you can put it there and you will be allowed to use it throughout the commands by simply doing
this.app.utility.MyMethod(args);

ALSO IN APP.JS YOU WILL NEED TO NAME THE CLASS TO WHATEVER YOU WANT OR JUST LEAVE IT BE
BUT IF YOU DO CHANGE IT, YOU WILL HAVE TO CHANGE IT IN SOME FILES. YOU WILL HAVE TO LOOK AT ALL
THE FILES TO FIND THE CLASS NAME CALLED "NAMEHERE" CHANGE IT TO THE NAME YOU CHANGED THE CLASS TO

