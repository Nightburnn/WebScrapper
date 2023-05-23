/**
 * Anime Website Scraper
 *
 * This script fetches anime titles and URLs from the website animepahe.com using Axios and Cheerio libraries.
 * It also provides an option to start a server and display the scraped data on a specified port.
 *
 * Prerequisites:
 * - Node.js installed
 * - Dependencies installed: axios, cheerio, express
 *
 * Usage:
 * 1. Run the script using: node app.js
 * 2. The console will display the grouped output of anime titles and URLs.
 * 3. Optionally, the script can start a server to display the data on a specified port.
 *
 * @version 1.0.0
 */

// Import required libraries
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

// Configuration
const PORT = 8000;
const app = express();
const baseUrl = 'https://animepahe.com';
const url = `${baseUrl}/anime`;

// Fetch anime titles and URLs
axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    const titles = [];
    const urls = [];

    // Extract titles and URLs from the HTML
    $('a').each(function() {
      const title = $(this).text().trim();
      const relativeUrl = $(this).attr('href');
      const absoluteUrl = `${baseUrl}${relativeUrl}`;

      titles.push(title);
      urls.push(absoluteUrl);
    });

    // Group the titles and URLs together
    const groupedOutput = titles.map((title, index) => `${title}: ${urls[index]}\n\n`).join('');
    console.log(groupedOutput);
  })
  .catch(error => {
    console.log(error);
  });

// Start the server to display the data
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
