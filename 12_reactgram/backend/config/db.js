const mongoose = require("mongoose");
const bdUser = process.env.DB_USER;
const bdPass = process.env.DB_PASS;

// connection
async function main() {
  await mongoose.connect(
    `mongodb://${
      bdUser && bdPass
        ? `${bdUser}:${bdPass}0.0.0.0:27017/reactgram`
        : `0.0.0.0:27017/reactgram`
    }`
  );
  console.log("Conectou ao banco");
}

main().catch((err) => console.log(err));

module.exports = mongoose;
