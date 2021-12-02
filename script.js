async function manipTable(url , table) {
    //fetching json data
    const response = await  fetch(url);
    const {
        headers,
        rows
    } = await response.json();

    //targetting table head and body element
    const Head = table.querySelector("thead")
    const Body = table.querySelector("tbody")

    //populating table dynamically using fetch api with json data
    //Table headers
    HeadElementHtml = "";
    for (headTd of headers) {
        HeadElementHtml += "<td>"+headTd+"</td>"
    }

    Head.innerHTML = HeadElementHtml;

    //table body
    trelem = "";
    for (bodyTd of rows) {
        tdata = "";
        for (bodyData in bodyTd) {
            tdata += "<td>"+bodyTd[bodyData]+"</td>";
        }
        trelem += "<tr>"+tdata+"</tr>";
    }
    Body.innerHTML = trelem;
    
    
    console.log(response)
}


function refreshData() {
    manipTable("./data.json", document.querySelector("table"))
}

function refresh() {
    location.reload()}