function greet()
{
    console.log("Hello, World!");
}
const intervalId = setInterval(greet, 1000);
function stopGreeting()
{
    clearInterval(intervalId);
    console.log("Greeting stopped.");
}
setTimeout(stopGreeting, 5000);
console.log("Greeting will stop after 5 seconds.");