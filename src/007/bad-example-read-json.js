const fs = require("fs");

const readJson = (file) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, { enconding: "utf8" }, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(data));
    });
  });

readJson(`${__dirname}/data/example-config.json`).then((config) =>
  console.log(config.projectId)
);
