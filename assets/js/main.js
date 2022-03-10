// button
const genera = document.getElementById("genera");
genera.addEventListener("click",
  function ticket(){
    const ticket = document.getElementById("ticket");
    ticket.className = "d-unset";
  }
);

genera.addEventListener("click",
  function getName() {
    const userName = document.querySelector("input").value;
    document.getElementById("name").innerHTML = userName;
  }
);

genera.addEventListener("click",
  function getName() {
    const select = document.getElementById("age");
    let text = select.options[select.selectedIndex].text;
    let typeOfTicket = "";
    const km = document.getElementById("km").value; 
    let kmPrice = 0.21 * km

    if (text == "Under 18"){
      typeOfTicket += "Biglietto Under 18";
      kmPrice -= (kmPrice * 0.2);
    } else if (text == "Over 65"){
      typeOfTicket += "Biglietto Over 65";
      kmPrice -= (kmPrice * 0.4);
    } else {
      typeOfTicket += "Biglietto Standard";
      kmPrice;
    }

    document.getElementById("typeofticket").innerHTML = typeOfTicket;
    document.getElementById("price").innerHTML = kmPrice.toFixed(2) + " &#8364;";

    // carrozza
    document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 50 + 1);

    // codice CP
    document.getElementById("cp").innerHTML = Math.floor(Math.random() * 100000 + 1);
  }
);

const annulla = document.getElementById("annulla");
annulla.addEventListener("click",
  function ticket(){
    const ticket = document.getElementById("ticket");
    ticket.className = "d-none";
  }
);