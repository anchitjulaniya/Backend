const fs = require('fs');
const cheerio = require('cheerio');
const axios = require('axios');

const fetch = async () => {
    const response = await axios.get('https://internshala.com/jobs/jobs-in-pune/',
         {

            Headers :{
                "Content-Type" : "text/html"
            }    
        }
    );
    const data = response.data;
    
    fs.writeFileSync('data.json', data);
    console.log("File successfully")
}
// fetch()

const data = fs.readFileSync('data.json');

// Job Name
const $ = cheerio.load(data.toString())
const titles = $('.job-internship-name');
const job_title = []
titles.each((index, job)=>{
  job_title.push(($(job).text()).trim());
})
console.log(job_title);



// company name
const company = $('.company-name')
const companies = [];
company.each((index, comp)=>{
  companies.push(($(comp).text()).trim())
})
// console.log(companies);

// Location
const location = $('.row-1-item.locations  span  a');
const location_array = [];
location.each((index, loca)=>{
  location_array.push(($(loca).text()).trim());
})
// console.log(location_array);


// Job Type (Full-time, Part-time, Contract, etc.)
// data not available



// Posted Date
const post_date = $('.status-success span')
const postedDate_array = [];
post_date.each((index, item)=>{
  postedDate_array.push($(item).text());
})
// console.log(postedDate_array);


// Job Description
// Data not available


// converting in JSON format
const details = [];
job_title.map((item, index)=>{
  details.push({
    title : item,
    company : companies[index],
    location : location_array[index],
    posted_date : postedDate_array[index]
  })
})

console.log(details);

// fs.writeFileSync("job.json",JSON.stringify(details))

const xlsx = require('xlsx');

const workbook = xlsx.utils.book_new('workbook');
const sheet = xlsx.utils.json_to_sheet(details)
xlsx.utils.book_append_sheet(workbook, sheet, "Job_Detail")
xlsx.writeFile(workbook,"job.xlsx");


console.log("XLSX file created successfully!");
