const redis = require("redis");

const client = redis.createClient({
  port: 6379,
  host: "127.0.0.1",
});

client
  .connect()
  .then(() => {
    console.log("redis connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

client.on("ready", () => {
  console.log("client connected to redis and ready to use....");
});

client.on("error", (err) => {
  console.log(err.message);
});

client.on("end", () => {
  console.log("client disconnected from redis....");
});

process.on("SIGINT", () => {
  client.quit("client disconnected from redis....");
});

module.exports = client;
