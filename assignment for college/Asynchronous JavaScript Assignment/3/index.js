function countdown(number, callback) {
    const intervalId = setInterval(() => {
        console.log(number);
        if (number <= 0) {
            clearInterval(intervalId);
            if (callback) callback();
        }
        number--;
    }, 1000);
}