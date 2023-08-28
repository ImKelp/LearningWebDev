// fetch() method starts the process of fetching a response from a server
fetch("https://api.nasa.gov/planetary/apod?api_key={own api key here}")
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Network Response Error")
        }
    }) .then(data => {
        //console.log(data);
        getApiData(data);
    })  .catch((error) => console.error("Fetch Error:", error));  



function getApiData(data){

        // Creating a reference for each data point
        const copyright = data.copyright;  
        const date_yymmdd = reverseDate(data.date);
        const explanation = data.explanation;
        const hdurl = data.hurl;
        const title = data.title;
        const media_tpye = data.media_tpye;
        const second_url = data.url;

        // Selecting and modifying each respective html element
        document.getElementById("title").innerText = title;
        document.getElementById("url_image").src = second_url;
        document.getElementById("copyright").innerHTML = copyright;
        document.getElementById("date").innerHTML = date_yymmdd;
        document.getElementById("description").innerText = explanation;

}

function reverseDate(input) {
    return input.split('-').reverse().join('-');
}
