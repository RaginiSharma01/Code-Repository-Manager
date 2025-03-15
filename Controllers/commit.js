const fs = require('fs').promises;
const { error } = require('console');
const path = require('path');
const {v4: uuid4} = require('uuid');//<-- v4 is for simplar application also the time taken for loading time is less


async function commitRepo(argv) {
   const repoPath = path.resolve(process.cwd(),".HiddenGit_folder");
   const stagingPath = path.join(repoPath, "staging");
   const commitPath = path.join(repoPath,"commits");

   try{
    //logic
    const message = argv.message;
    const commitID = uuid4();
    const commitDir = path.join(commitPath, commitID);
    await fs.mkdir(commitDir,{recursive:true});
    //^--- is the creating and folder for commit path
//<< for moving to staging
    const files = await fs.readdir(stagingPath);
//for creating copies of file
    for(const file of files){
        await fs.copyFile(path.join
            (stagingPath,file),
            path.join(commitDir,file)
        )
    }

    await fs.writeFile(path.join(commitDir, "commit.json"),JSON.stringify({message, date:new Date().toISOString()}, null,2)
);

console.log(`Commit ${commitID} created with message : ${message}`);

   }catch(err){
    console.error("Error in commiting file" , err);
   }
}


module.exports = {commitRepo};