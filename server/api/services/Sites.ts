import axios from 'axios';
export async function search(query: any) {
    const result = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
    const fourItems = [];
    for(let a = 0; a < 4; a++) {
        fourItems.push(result.data.results[a]);
    }
    return fourItems;
}