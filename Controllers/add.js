const fs = require("fs").promises; // File system module (Promise-based)
const path = require("path");

async function addRepo(filePath) {
    try {
        const repoPath = path.resolve(process.cwd(), '.HiddenGit_folder');
        const stagingPath = path.join(repoPath, "staging");

        // Create the staging directory (if it doesn't exist)
        await fs.mkdir(stagingPath, { recursive: true });

        // Get the file name from the path
        const fileName = path.basename(filePath);

        // Copy the file to the staging area
        await fs.copyFile(filePath, path.join(stagingPath, fileName));

        console.log(`File ${fileName} added to the staging area!`);
    } catch (error) {
        console.error("Error adding file:", error);
    }
}

module.exports = { addRepo };
