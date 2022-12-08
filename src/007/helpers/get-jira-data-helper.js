const jiraData = require("../data/mock-jira-data");

const fetchDataFromJira = (ticketNumber) => jiraData[ticketNumber];

module.exports = fetchDataFromJira;
