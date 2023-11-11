const fs = require('fs');
const process = require('process');
const axios = require('axios');

async function webCat(URL) {
    try {
    let response = await axios.get(URL);
        console.log(response.data);
        } catch (err) {
            console.error("wrong wrong wrong");
            process.exit(1);
        }
    }
    
webCat(process.argv[2]);