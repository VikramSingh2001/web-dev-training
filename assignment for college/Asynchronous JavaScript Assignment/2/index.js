function countdown(number) {
    if (number <= 0) return;
    console.log(number);
    setTimeout(() => countdown(number - 1), 1000);
}
countdown(5);