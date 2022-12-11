const shell = require("shelljs");
const readLineSync = require("readline-sync");
const path = require("path");
const { repository } = require("./config.json");

const { delivery, baseBranch } = repository;
const repoName = delivery.substring(delivery.lastIndexOf("/"));

const repoPath = path.join(__dirname, repoName);
shell.cd(repoPath);

shell.exec(`git checkout ${baseBranch}`);

shell.exec(`git pull origin ${baseBranch}`);

const tickedId = readLineSync.question("What is the ticket ID?\n", {
  limit: (input) => input.trim().length > 0,
  limitMessage: "Please enter a ticket ID (e.g. GOT-123)",
});

shell.exec(`git checkout -b ${tickedId}`);
shell.exec(`git branch --list`);
