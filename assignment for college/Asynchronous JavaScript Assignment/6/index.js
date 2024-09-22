function wait(delay) {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    });
}

function delayedLogSequence(messages) {
    let promise = Promise.resolve();
    messages.forEach(({ message, delay }) => {
        promise = promise.then(() => wait(delay)).then(() => console.log(message));
    });
}

// Example usage:
delayedLogSequence([
    { message: "First message", delay: 1000 },
    { message: "Second message", delay: 2000 },
    { message: "Third message", delay: 1500 }
]);