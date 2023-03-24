function recData(){
    return fetch("/Kasa/data/Data.json").then(resp=>resp.json()).then(data=>data);
}
export default recData;