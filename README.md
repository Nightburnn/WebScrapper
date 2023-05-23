## Website Scraper

### Anime Website Scraper

This script fetches anime titles and URLs from the website animepahe.com using Axios and Cheerio libraries. It provides a simple way to scrape and retrieve anime information from the website.

### Prerequisites

- Node.js installed
- Dependencies installed: axios, cheerio, express

### Usage

1. Clone the repository or download the script file (`index.js`).
2. Install dependencies by running the following command:

```bash
npm install axios cheerio express
```
3. Open the `index.js` file and make any necessary modifications.
4. Run the script using the following command:

```bash
npm run start
```

5. The console will display the grouped output of anime titles and URLs.
6. Optionally, the script can start a server to display the data on a specified port.

### Configuration
The following configuration options are available in the 'index.js' file:

- `PORT`: The port number to run the server on.
- `baseUrl`: The base URL of the animepahe.com website.
- `url`: The URL to scrape anime information from.

### Acknowledgments
- [Axios](https://axios-http.com/) - Promise-based HTTP client for Node.js
- [Cheerio](https://cheerio.js.org/) - Fast, flexible, and lean implementation of core jQuery designed for the server
- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js

