

let body = document.querySelector('body');
body.classList.add('container');

// let head = document.querySelector('head');
// let styleSheet = createElement();

let header = `<h1>Internal Company Directory</h1>`;
body.innerHTML = header;



let superTemplate = '';
for (let i=0; i< customers.results.length; i++){

     let template = `
                    <div class= "person">
                        <img src=${customers.results[i].picture.large} class="picture">
                        <p class= "name"> ${customers.results[i].name.first} ${customers.results[i].name.last} </p>
                        <p class= "email"> ${customers.results[i].email}</p>
                        <p class= "address"> ${customers.results[i].location.street} <br>
                            ${customers.results[i].location.city}, ${customers.results[i].location.state} ${customers.results[i].location.postcode}
                            <p class= "phone"> ${customers.results[i].phone}</p>
                    </div>
    `;

    superTemplate += template;
}

  body.innerHTML =superTemplate;
