//setInterval
setInterval(() => {
    console.log("setInterval function executed every 1 second");
}
, 1000);
//setTimeout
setTimeout(() => {
    console.log("setTimeout function executed after 1 second");
}
, 1000);
//clearInterval
let count = 0;
let interval = setInterval(() => {
    console.log("setInterval function executed every 1 second");
    count++;
    if (count === 5) {
        clearInterval(interval);
    }
}, 1000);
