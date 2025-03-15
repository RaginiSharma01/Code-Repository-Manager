const fs = require("fs").promises; // fd <-- file system comes with node
const path = require("path") ;
async function initRepo(){

    const repoPath = path.resolve(process.cwd(),".HiddenGit_folder");
    const commitsPath = path.resolve(repoPath, " commits");// not hidden

    try {
        await fs.mkdir(repoPath , {recursive:true});
        await fs.mkdir(commitsPath , {recursive:true});
        await fs.writeFile(
            path.join(repoPath, "config.json"),
            JSON.stringify({bucket :process.env.S3_BUCKET})
        );

        console.log("Success!, Repository initailzed");


    }catch(err){
        console.error("Error initailzing repository" , err)
    }
}
module.exports = {initRepo}