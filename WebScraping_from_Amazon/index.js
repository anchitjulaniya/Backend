// Job Title
// Company Name
// Location
// Job Type (Full-time, Part-time, Contract, etc.)
// Posted Date
// Job Description

const cheerio = require('cheerio');

const fs = require('fs');

const axios  = require('axios');

const pageUrl = 'https://www.amazon.com/s?k=phone&page=2&crid=18EUYBSP7O1SQ&qid=1702535235&sprefix=phon%2Caps%2C280&ref=sr_pg_2'

const getPageData = async ()=>{
    try{
        const response = await axios.get(pageUrl);
        const data = response.data;
        // console.log("_  ",data);
        fs.writeFileSync("data.json",data);
        console.log("File Written Successfully!");
    }
    catch(error){
        console.log(error);
    }
}

const html = fs.readFileSync("data.json")
const $ = cheerio.load(html.toString());
// console.log($);

const title = $(".a-size-mini.a-spacing-none.a-color-base.s-line-clamp-2");
const titleData = [];
title.each((index, element)=>{
    titleData.push($(element).text());
})
// console.log(titleData);

const rating = $('.a-row.a-size-small span');
const ratingData = [];
rating.each((index, element)=>{
    ratingData.push($(element).text());
})
// console.log(ratingData);

const price = $('.a-price-whole');
const priceData = [];
price.each((index, element)=>{
    priceData.push($(element).text());
})
// console.log(priceData);

const productJson = titleData.map((title, index) => {
    return {
      title,
      price: priceData[index],
      rating : ratingData[index],
      avalability: "available"
    };
  });

fs.writeFileSync("product.json",JSON.stringify(productJson));

// fs.writeFileSync("targetData.json",)


// getPageData()


const xlsx = require('xlsx');

// creating workbook
const workbook = xlsx.utils.book_new();

// creating a sheet
const sheetdata = xlsx.utils.json_to_sheet(productJson)

xlsx.utils.book_append_sheet(workbook, sheetdata)

xlsx.writeFile(workbook,'product.xlsx');
console.log("Excel Sheet successfully created")





