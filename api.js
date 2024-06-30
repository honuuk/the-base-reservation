import fetch from "node-fetch";

const BASE_URL = "https://futsalbase.com";

export function get(path) {
  return fetch(`${BASE_URL}${path}`).then(checkStatus);
}

export function post(path, body) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), 1200000);

  return fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    signal: controller.signal,
  })
    .then(checkStatus)
    .then((res) => {
      clearTimeout(id);
      return res;
    })
    .catch((res) => {
      clearTimeout(id);
      return res;
    });
}

async function checkStatus(res) {
  if (res.status !== 200) throw new Error(await res.text());
  return res.json();
}
