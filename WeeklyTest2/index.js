/*
DATA TO SCRAP AND SHOW : Scrape data of last 5 seasons for
Top 10 players who deserves orange cap in each season with their runs
Top 10 players who hit most 4's in each season
Top 10 players who hit most 6's in each season
Top 10 players who hit most centuries in each season
Top 10 players who hit most 50's in each season

*/

const url = 'https://www.iplt20.com/stats/2024'


const fs = require('fs');
const cheerio = require('cheerio');

const fetchign = async () => {
    try{
        const response = await fetch(url)
        const data = await response.text();
        console.log(data)
        fs.writeFileSync("data.txt", data)
    }
    catch(error){
        console.log("error", error);
    }
}
// fetchign()

const data = fs.readFileSync('data.txt')

const $ = cheerio.load(data)

const players = $('.st-ply-name.ng-binding')

console.log(players);
