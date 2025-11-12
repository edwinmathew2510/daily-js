// day 28,2621. Sleep

async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

let t = Date.now();
sleep(2000).then(() => console.log(Date.now() - t)); // 100
