const config = require("./config.json");
const readLineSync = require("readline-sync");
const Twilio = require("twilio");

const NO_CHOICE_MADE = -1;

const { TWILIO_SID, MY_SPOUSE_NUMBER, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER } =
  config;

const client = new Twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);

const foodChoices = [
  "spag bowl 2nite",
  "chinese takeaway 2nite",
  "pie n mash 2nite",
  "mushroom risotto",
  "pizza and fries",
  "2 recover from my lunch, no food plz!",
  "2 cook 2nite",
];

const index = readLineSync.keyInSelect(
  foodChoices,
  "What would you like for dinner?"
);

if (index === NO_CHOICE_MADE) process.exit(0);

const smsMessage = {
  body: `Hi Bub, I'd like ${foodChoices[index]}`,
  from: TWILIO_PHONE_NUMBER,
  to: MY_SPOUSE_NUMBER,
};

console.log(`sending message: ${smsMessage.body}`);

client.messages
  .create(smsMessage)
  .then(({ sid }) => {
    console.log("SMS sent. Id:", sid);
  })
  .catch((error) => {
    console.error("Error sending Twilio message", error);
  });
