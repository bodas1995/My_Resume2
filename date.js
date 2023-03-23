
    const dateElement = document.getElementById("date");
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('uk-UA', options);
    dateElement.innerText = `Сьогодні ${formattedDate}`;
