const data = `
{
    "category": "animaux",
    "entries": [
        "chien",
        "chat",
        "lion",
        "singe"
    ]
}
`;

const datasJson = JSON.parse(data)

let cateJson = document.createElement('h2')
cateJson.textContent = datasJson.category
document.body.appendChild(cateJson)
for (let i = 0; i < datasJson.entries.length; i++) {
    let tempData = document.createElement("p");
        tempData.textContent = datasJson.entries[i]
        document.body.appendChild(tempData);
    
}


