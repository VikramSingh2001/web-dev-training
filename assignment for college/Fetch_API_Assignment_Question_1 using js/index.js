const datafetching = () => {
    setTimeout(async () => {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/users');
            let data = await response.json();

            data.forEach((element) => {
                console.log({ name: element.name });
                console.log({ email: element.email });
                console.log({ address: element.address });
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, 1000);
};

datafetching();
