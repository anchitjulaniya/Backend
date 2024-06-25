const fs = require('fs');
const cheerio = require('cheerio');
const axios = require('axios');

// const fetch = async () => {
//     const response = await axios.get('https://www.naukri.com/it-jobs?src=gnbjobs_homepage_srch',
//          {

//             Headers :{
//                 "Content-Type" : "text/html"
//             }    
//         }
//     );
//     const data = response.data;
    
//     fs.writeFileSync('data.json', data);
//     console.log("File successfully")
// }
// fetch()


// const cheerio = require('cheerio');
// // const data = fs.readFileSync('data.txt');

// // const $ = cheerio.load(data.toString())
// // const titles = $('.title');










const getPageData = async () => {
    try {
      const response = await axios.get(pageUrl, {
        headers: {
          "Content-Type": "text/html",
        },
      });
      const data = response.data; // HTML Data
      console.log(data);
      fs.writeFileSync("data.txt", data);
      console.log("successfully Written")
    }
    catch(error){
        console.log(error);
    }

}