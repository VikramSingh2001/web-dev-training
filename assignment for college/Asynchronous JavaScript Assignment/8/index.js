function randomDelayMessage(message) {
    return new Promise(resolve => {
        const delay = Math.floor(Math.random() * 5000) + 1000; // Random delay between 1 and 5 seconds
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}

// Example usage:
randomDelayMessage("This message is delayed randomly!").then(() => console.log("Message logged!"));