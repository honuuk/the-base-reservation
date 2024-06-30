import { post } from "./api.js";

const stadiumTimeMap = {
  A: "19:00 ~ 21:00", // 1구장
  B: "18:00 ~ 20:00", // 2구장
  C: "19:00 ~ 21:00", // 3구장
  D: "19:00 ~ 21:00", // 7구장
  E: "18:00 ~ 20:00", // 6구장
};

const REPLICA = 2;
const DATES = ["2024-08-04", "2024-08-11", "2024-08-18", "2024-08-25"];

const SZ_ID = process.env.SZ_ID;
const STADIUMS = ["A", "B", "C", "D", "E"];
const TARGETS = STADIUMS.flatMap((stadium) =>
  DATES.map((date) => ({ stadium, date, time: stadiumTimeMap[stadium] }))
);

async function reserve(szId, target) {
  try {
    const { message } = await post("/api/reservation/addList", {
      szId,
      szStadium: target.stadium,
      szDDate: target.date,
      seletedList: [
        {
          id: 9,
          ssdate: target.date,
          nnprice: 125000,
          strtime: target.time,
          szDTime: "G",
          szState: "",
          szPDate: "",
          szManager: "",
          message: "",
        },
      ],
    });

    console.log(`reserve ${message}: ${target.date}`);
  } catch (e) {
    console.log(`error occured while reserve: ${e.name} ${e.message}`);
  }
}

async function run() {
  if (!SZ_ID) return console.log("no sz_id provided");

  await Promise.all(
    Array(REPLICA)
      .fill(TARGETS)
      .flat()
      .map((target) => reserve(parseInt(SZ_ID), target))
  );
}

run();
