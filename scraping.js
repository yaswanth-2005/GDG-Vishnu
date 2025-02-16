// const axios = require('axios')
// const cheerio = require('cheerio')

// // URL of the website to scrape
// const url =
//     'https://vision.hack2skill.com/event/solutionschallenge2025/?tab=challenges&utm_source=hack2skill&utm_medium=homepage'

// // Function to fetch and extract data
// async function fetchData() {
//     try {
//         // Fetch the HTML of the page
//         const { data } = await axios.get(url)
//         // console.log(data)
//         // Load the HTML into cheerio
//         const $ = cheerio.load(data)
//         console.log($)
//         // Define class name patterns to search for
//         const classSelectors = [
//             'tracking-[0.034em] text-base mb-1 apac-hack-font-medium',
//             'tracking-[0.034em] line-clamp-3 text-sm mb-2',
//             'flex items-center gap-1 text-sm text-[var(--gdgHack2025-primary1)]',
//         ]

//         // Iterate over each class selector and extract the corresponding elements
//         classSelectors.forEach((selector) => {
//             // Select elements with the given class pattern
//             const elements = $(selector)

//             // Process each selected element
//             elements.each((index, element) => {
//                 const textContent = $(element).text().trim()
//                 console.log(
//                     `Selector: ${selector}, Element ${index + 1}: ${textContent}`
//                 )
//             })
//         })
//     } catch (error) {
//         console.error('Error fetching data:', error)
//     }
// }

// // Execute the function
// fetchData()

const axios = require('axios')
const cheerio = require('cheerio')

// URL of the website you want to scrape
const url =
    'https://vision.hack2skill.com/event/solutionschallenge2025/?tab=challenges&utm_source=hack2skill&utm_medium=homepage'

axios
    .get(url)
    .then((response) => {
        const html = response.data
        const $ = cheerio.load(html)

        // Example: Scraping all the titles from a website
        const titles = []
        $('div').each((index, element) => {
            titles.push($(element).text())
        })

        console.log(titles)
    })
    .catch((error) => {
        console.error(`Error fetching the URL: ${error}`)
    })
