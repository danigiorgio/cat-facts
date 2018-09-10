const app = document.getElementById('root');
const logo = document.createElement('img');
const h1= document.createElement('h1');
const container = document.createElement('div');

h1.textContent ="Cat Facts"
container.setAttribute('class', 'container');

app.appendChild(h1);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://cors.io/?https://catfact.ninja/facts?limit=1000&max_length=300', true);
request.onload = function () {
  
    var data = JSON.parse(this.response);
        for (var fact in data) {
        const catFact = data.data[Math.floor(Math.random() * data.data.length)].fact;
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const img = document.createElement('img');
        const id =  Math.floor(Math.random()*1000001);
        img.src = `https://robohash.org/${id}200x200?set=set4`
        const p = document.createElement('p');
        p.textContent = `${catFact}...`; 

        container.appendChild(card);
        card.appendChild(img);
        card.appendChild(p);
    };
 }
request.send();





