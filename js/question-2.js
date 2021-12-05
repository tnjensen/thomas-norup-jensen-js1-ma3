/* API Key RAWG : 640bc89f838c450f998748b557361712 */

const rawgResults = document.querySelector('.main-content');
const apiKey = "640bc89f838c450f998748b557361712";
const games = [
    {
        name: '',
        relaseDate: '2019-01-01'
    },
    {
        name: '',
        relaseDate: '2019-12-31'
    }
]
const searchButton = document.querySelector('.search-btn');
const error = document.querySelector('.error');
const baseURL = 'https://api.rawg.io/api/games';


async function getRawgData(){
    error.innerHTML = "";
    const url =  "?" + "dates=" + games[0].relaseDate + "," + games[1].relaseDate + "&ordering=rating" + "&key=" + apiKey;
    console.log(baseURL + url);
    const response = await fetch(baseURL + url);
    const records = await response.json();
    console.log(records.results[0].ratings[0].title);

    /* if(results.length === 0){
        error.innerHTML = "An error ocurred, please try again...";
        return;
    } */
    for(i = 0; i < records.results.length; i++){
        if(i === 9){
            return;
        }
    
        rawgResults.innerHTML += `<div>
                              <ul>
                                <li>Name: ${records.results[i].name}</li>
                                <li>Rating: ${records.results[0].ratings[0].title}</li>
                                <li>Number of tags: ${records.results[i].tags.length}</li>
                              </ul>
                            </div>`;
    }
}

searchButton.onclick = getRawgData();

