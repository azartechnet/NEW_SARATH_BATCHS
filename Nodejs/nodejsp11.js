let count=0;
const interval = setInterval(() => {
    if(count==15)
    {
        clearInterval(interval);
        console.log("Interval cleared after 15 executions");
    }
    else
    {
        const date = new Date();
        console.log("Current Date and Time:", date.toLocaleString());
        count++;
        console.log("Interval executed " + count + " times");
        console.log("Current Time:", date.toLocaleTimeString());
        console.log("Current Date:", date.toLocaleDateString());
        console.log("Current Year:", date.getFullYear());
        console.log("Current Month:", date.getMonth() + 1); // Months are zero-based
        console.log("Current Day:", date.getDate());
        console.log("Current Hour:", date.getHours());
        console.log("Current Minute:", date.getMinutes());
        console.log("Current Second:", date.getSeconds());
        console.log("Current Millisecond:", date.getMilliseconds());
        console.log("Current Timezone Offset (in minutes):", date.getTimezoneOffset());
        console.log("Current Day of the Week:", date.getDay()); // 0 (Sunday) to 6 (Saturday)
    }
})