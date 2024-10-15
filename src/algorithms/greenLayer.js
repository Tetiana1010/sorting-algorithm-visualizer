import sleep from "./sleep";

async function greenLayer(data, speed, jump) {
  let i;
  const n = data.length;
  for (i = 0; i < n; i++) {
    document.getElementById(i).style.backgroundColor = "green";
  }
  await sleep(250);
  for (i = 0; i < n; i++) {
    document.getElementById(i).style.backgroundColor = "black";
  }
}

export default greenLayer;
