function makeSeatsGrid(){
  let seats_left = document.getElementById('seats-left');
  let seats_center = document.getElementById('seats-center');
  let seats_right = document.getElementById('seats-right');
  let seat = document.getElementById('seat');
  
  // left seats
  for(let row = 0; row < 14; row++){
    for(let col = 1; col < 2; col++){
      const cloneSeat = seat.cloneNode(true);
      cloneSeat.setAttribute("class", "seat left-seat");
      cloneSeat.style.display = 'block'
      cloneSeat.setAttribute("id", `L-${row}-${col}`)
      cloneSeat.setAttribute("onclick", `bookSeat("L-${row}-${col}")`);
      cloneSeat.style.pointerEvents = 'none'
      seats_left.appendChild(cloneSeat);
    }
  }
// center seats
    for(let row = 0; row < 8; row++){
      for(let col = 0; col < 8; col++){
        const cloneSeat = seat.cloneNode(true);
        cloneSeat.setAttribute("class", "seat center-seat");
        cloneSeat.style.display = 'block'
        cloneSeat.setAttribute("id", `C-${row}-${col}`)
        cloneSeat.setAttribute("onclick", `bookSeat("C-${row}-${col}")`);
        cloneSeat.style.pointerEvents = 'none'
        seats_center.appendChild(cloneSeat);
      }
    }
  // right seats
  for(let row = 0; row < 14; row++){
    for(let col = 1; col < 2; col++){
      const cloneSeat = seat.cloneNode(true);
      cloneSeat.setAttribute("class", "seat right-seat");
      cloneSeat.style.display = 'block'
      cloneSeat.setAttribute("id", `R-${row}-${col}`)
      cloneSeat.setAttribute("onclick", `bookSeat("R-${row}-${col}")`);
      cloneSeat.style.pointerEvents = 'none'
      seats_right.appendChild(cloneSeat);
    }
  }
}

function zoomSeats(id, child_class){
  let seats = document.getElementById(id)
  let filhos = document.getElementById(id).querySelectorAll(child_class);
  if(seats.style.transform == "scale(2)"){
    seats.style.transform = "scale(1)"
    seats.style.backgroundColor = "none";
    seats.style.cursor = "zoom-in";
    filhos.forEach(function(filho, index) {
      filho.style.pointerEvents = 'none'
    });
  }else{
    seats.style.transform = "scale(2)";
    seats.style.backgroundColor = "white";
    seats.style.cursor = "zoom-out";
    seats.style.gap = "5px"
    filhos.forEach(function(filho, index) {
      filho.style.pointerEvents = 'auto'
    });
  }
  
}
function checkSeatStatus(seat, booked_seats, price_el){
  if(seat.style.backgroundColor != 'gray'){
    seat.style.backgroundColor = 'gray'

    if(parseInt(booked_seats.innerHTML)){
      booked_seats.innerHTML = 1 + parseInt(booked_seats.innerHTML)
    }else{
      booked_seats.innerHTML = 1
    }

    if(parseInt(price_el.innerHTML)){
      price_int = parseInt(price_el.innerHTML)
      price_el.innerHTML = (12 * booked_seats.innerHTML)
    }else{
      price_el.innerHTML = (12 * booked_seats.innerHTML)
    }

  }else{
    seat.style.backgroundColor = 'white'

    if(parseInt(booked_seats.innerHTML)){
      booked_seats.innerHTML = parseInt(booked_seats.innerHTML) - 1
    }

    if(parseInt(price_el.innerHTML)){
      price_int = parseInt(price_el.innerHTML)
      price_el.innerHTML = (12 * booked_seats.innerHTML)
    }

  }

}

function bookSeat(seatId){
  event.stopPropagation();
  let booked_seats = document.getElementById('numOfSeats')
  let price_el = document.getElementById('price')
  let seat = document.getElementById(seatId)
  
  checkSeatStatus(seat, booked_seats, price_el)
}
function updateprice(){
  let price_el = document.getElementById('price')
  let numOfpop = parseInt(document.getElementById('numOfpop').value)
  let numOfpopDrink = parseInt(document.getElementById('numOfpopDrink').value)
  let numOfSeats = parseInt(document.getElementById('numOfSeats').innerHTML)
  let new_price = 0
  alert(new_price)
  // Verifique se numOfpop é um número válido e maior que zero
  if (!isNaN(numOfpop) && numOfpop > 0) {
    new_price += numOfpop * 7; // Multiplique numOfpop por 7 e adicione ao novo preço
  }
  // Verifique se numOfpopDrink é um número válido e maior que zero
  if (!isNaN(numOfpopDrink) && numOfpopDrink > 0) {
    // Adicione ao novo preço - assumindo que cada numOfpopDrink custa 5
    new_price += numOfpopDrink * 10;
  }
  if (!isNaN(numOfSeats) && numOfSeats > 0) {
    new_price+= numOfSeats*12
  }
  price_el.innerHTML = new_price

}


window.onload = makeSeatsGrid;