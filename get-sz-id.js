import { post } from "./api.js";

const ID = process.env.ID;
const PASSWORD = process.env.PASSWORD;

async function run() {
  const { status, user } = await post("/api/login", {
    id: ID,
    password: PASSWORD,
  });

  if (status === 0) {
    return console.log(`로그인 실패\nID: ${ID}, PASSWORD: ${PASSWORD}`);
  }

  console.log(`your szId is ${user.szId}`);
}

run();
