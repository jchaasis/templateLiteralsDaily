

let body = document.querySelector('body');



let heading = `
             <h1> Internal Company Directory </h1>
`;

body.innerHTML = heading;

let main = document.createElement('main');
body.appendChild(main);


let superTemplate = '';
for (let i=0; i< customers.results.length; i++){

     let template = `
                    <div class= "person">
                        <img src=${customers.results[i].picture.large} class="picture">
                        <p class= "name"> ${customers.results[i].name.first} ${customers.results[i].name.last} </p>
                        <p class= "email"> ${customers.results[i].email}</p>
                        <p class= "address"> ${customers.results[i].location.street} <br>
                            ${customers.results[i].location.city}, ${customers.results[i].location.state} ${customers.results[i].location.postcode}</p>
                            <p class= "phone"> ${customers.results[i].phone}</p>
                    </div>
    `;

    superTemplate += template;
}

  main.innerHTML =superTemplate;
