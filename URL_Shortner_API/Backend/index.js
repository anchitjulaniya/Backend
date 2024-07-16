import express from 'express';
import { nanoid } from 'nanoid';
import fs from 'fs';
import cors from 'cors'
import mongoose from 'mongoose';


const app = express();
const port = 1000;

app.use(express.json()); 
app.use(cors())
const isValidUrl = (url) => {
    try {    
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
};


app.get('/', (req, res) => {
    res.json({
        status: true,
        message: "Welcome to URL Shortner"
    });
});

app.post('/shortner', (req, res) => {
    const longurl = req.body.longurl;
    // const isValid = isValidUrl(longurl);

    // if (!isValid) {
    //     return res.json({
    //         status: false,
    //         message: "Invalid Url 2"
    //     });
    // }

    const shortUrl = nanoid();
    let urlJson = {};

    // Read and parse existing URLs
    try {
        const urlsfromFile = fs.readFileSync("urls.json", { encoding: 'utf-8' });
        urlJson = JSON.parse(urlsfromFile);
    } catch (error) {
        if (error.code !== 'ENOENT') {
            return res.json({
                status: false,
                message: "Error reading URL file"
            });
        }
    }

    urlJson[shortUrl] = longurl;

    // Write new URLs to file
    try {
        fs.writeFileSync("urls.json", JSON.stringify(urlJson, null, 2));
        console.log("Successfully!");
    } catch (error) {
        return res.json({
            status: false,
            message: "Error writing URL file"
        });
    }

    res.json({
        status: true,
        message: `http://localhost:${port}/${shortUrl}`
    });
});

app.get('/:shortUrl', (req, res) => {
    const { shortUrl } = req.params;
    let urls = {};

    // Read and parse existing URLs
    try {
        urls = JSON.parse(fs.readFileSync('urls.json', { encoding: 'utf-8' }));
    } catch (error) {
        if (error.code === 'ENOENT') {
            return res.json({
                status: false,
                message: "URL not found"
            });
        }
        return res.json({
            status: false,
            message: "Error reading URL file"
        });
    }

    const longurl = urls[shortUrl];

    if (!longurl) {
        return res.json({
            status: false,
            message: "Invalid Url"
        });
    }

    res.redirect(longurl);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
