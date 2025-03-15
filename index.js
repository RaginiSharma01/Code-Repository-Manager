const yargs= require("yargs");
const { hideBin } = require("yargs/helpers");
// creating functions 

const{initRepo} = require('./Controllers/init');
const {addRepo} = require("./Controllers/add");
const {pushRepo} = require("./Controllers/push");
const {commitRepo} = require("./Controllers/commit");
const{pullRepo} = require("./Controllers/pull");
const{revertRepo} = require("./Controllers/revert")


yargs(hideBin(process.argv))
.command('init' , 
    "Initialise a new repository",
     {},
    initRepo
)
.command("add <file>","Adds the file to repository",(yargs)=>{yargs.positional("file" ,{
    describe:"file to add to stagging area",
    type:"string"
});
}, 
addRepo
)

.command('commit <message>' , "Commit the stagged" ,(yargs) =>{yargs.positional("message:" , {
    describe:"file to commit",
    type:"String"
});

},
commitRepo
)
.command('push' , 
    "push the fill to the repository",
     {},
    pushRepo
)

.command('pull' , 
    "pull the fill to the repository",
     {},
    pullRepo
)
.command('revert <commitID' , "Revert to a specific commit" , (yargs)=>{yargs.positional("commitID:" , {
    describe:"commit to be revert",
    type:"string"
});
},
revertRepo
)
.demandCommand(1,"You need atleast one command").help().argv;// <-- chaining
//logic