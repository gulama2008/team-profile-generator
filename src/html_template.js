//function of creating the full html template
function writeHtml(cards) { 
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    
    <title>My Team</title>
</head>
<body>
    <header>My Team</header>
    <div id="card-container">
        ${cards}
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"></script>
</body>
</html>`;
}

//function for generating html code of member card for manager member
function createManagerCard(managerObj) { 
    return `<div class="card" style="width: 18rem;">
  <div class="card-header">
    ${managerObj.name}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${managerObj.id}</li>
    <li class="list-group-item">Email: ${managerObj.email}</li>
    <li class="list-group-item">Office Number: ${managerObj.officeNumber}</li>
  </ul>
</div>`;
}

//function for generating html code of member card for engineer member
function createEngineerCard(engineerObj) { 
    return `<div class="card" style="width: 18rem;">
  <div class="card-header">
    ${engineerObj.name}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineerObj.id}</li>
    <li class="list-group-item">Email: ${engineerObj.email}</li>
    <li class="list-group-item">Github: ${engineerObj.github}</li>
  </ul>
</div>`;
}

//function for generating html code of member card for intern member
function createInternCard(internObj) { 
    return `<div class="card" style="width: 18rem;">
  <div class="card-header">
    ${internObj.name}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${internObj.id}</li>
    <li class="list-group-item">Email: ${internObj.email}</li>
    <li class="list-group-item">School: ${internObj.school}</li>
  </ul>
</div>`;
}

//function for dynamically creating html code of member cards based on type of member objects in the member array and stores in the card array
function createCards(array) { 
    var cards = [];
    for (let i = 0; i < array.length;i++) { 
        if (array[i].getRole() === 'Manager') {
            cards.push(createManagerCard(array[i]));
        } else if (array[i].getRole() === 'Engineer') {
            cards.push(createEngineerCard(array[i]));
        } else { 
            cards.push(createInternCard(array[i]));
        }
    }
    return cards;
}

module.exports = {
    writeHtml,
    createCards,
}