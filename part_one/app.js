let baseUrl = "http://numbersapi.com";
let favNumber = 5;

async function getNumber() {
    console.log("Heres my favorite number");
    let number = await $.getJSON(`${baseUrl}/${favNumber}?json`);
    console.log(number);
}

getNumber();

const favNumbers = [7, 11, 22];
async function getFavNumbers() {
    let data = await $.getJSON(`${baseUrl}/${favNumbers}?json`);
    console.log(data);
}

getFavNumbers();

async function factAboutNumber() {
    let facts = await Promise.all(Array.from({ length: 4 }, () => $.getJSON(`${baseUrl}/${favNumber}?json`))
    );
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}

factAboutNumber();