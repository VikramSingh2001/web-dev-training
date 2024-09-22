let arr = [1, 2, 3, 4, 5];
function wait(delay) {
    return new Promise(resolve => {
        let index = 0;
        function printNext() {
            if (index < arr.length) {
                setTimeout(() => {
                    console.log(`${arr[index]}`);
                    index++;
                    printNext(); // Call the next number
                }, delay);
            } else {
                resolve(); // Resolve the promise after the last number
            }
        }

        printNext(); // Start the printing process
    });
}

wait(2000).then(() => console.log("Waited for 2 seconds!"));
