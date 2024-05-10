function makeSeatsGrid(){
  let seats = document.getElementById('seats');
  let seat = document.getElementById('seat-o');
  let row_lettes = ['N','M','L','K','J','I','H','G','F','E','D','C','B','A']

  for(let row = 0; row < 14; row++){
    const row_letter = document.createElement("p")
    row_letter.innerHTML = row_lettes[row]
    row_letter.style.margin = "0px"
    row_letter.setAttribute("class", "seat-letters")
    seats.appendChild(row_letter)
    for(let col = 0; col < 8; col++){
      const cloneSeat = seat.cloneNode(true);
      cloneSeat.setAttribute("class", "seat");
      cloneSeat.style.display = 'block'
      cloneSeat.setAttribute("id", `seat-${row}-${col}`)
      cloneSeat.setAttribute("onclick", `bookSeat("seat-${row}-${col}")`);
      seats.appendChild(cloneSeat);
    }
  }
}

function checkSeatStatus(seat){
  let num_of_seats_input = document.getElementById('num_seats')
  let num_of_full_price_input = document.getElementById('full_price_ticket')
  let num_of_half_price_input = document.getElementById('half_price_ticket')
  

  if(seat.style.backgroundColor != 'gray'){
    seat.style.backgroundColor = 'gray'  
    num_of_seats_input.innerHTML = 1 + parseInt(num_of_seats_input.innerHTML)
    num_of_full_price_input.max = parseInt(num_of_seats_input.innerHTML)
    num_of_half_price_input.max = parseInt(num_of_seats_input.innerHTML)
  }else{
    seat.style.backgroundColor = 'white'
    num_of_seats_input.innerHTML = parseInt(num_of_seats_input.innerHTML) - 1
    num_of_full_price_input.max = parseInt(num_of_seats_input.innerHTML)
    num_of_half_price_input.max = parseInt(num_of_seats_input.innerHTML)
  }
}

function updateprice(){
  let num_of_full_price_input = document.getElementById('full_price_ticket')
  let num_of_half_price_input = document.getElementById('half_price_ticket')
  let popcorn_input = document.getElementById('popcorn')
  let popcorn_drink_input = document.getElementById('popcorn-drink')
  let price_el = document.getElementById('price')

  let int_half = parseInt(num_of_half_price_input.value)
  let int_full = parseInt(num_of_full_price_input.value)
  let int_popcorn = parseInt(popcorn_input.value)
  let int_popcorn_drink = parseInt(popcorn_drink_input.value)
  
  price_el.innerHTML = int_half * 5 + int_full * 10 + int_popcorn * 3 + int_popcorn_drink * 5
}

function newMax(){
  let num_of_seats_input = document.getElementById('num_seats')
  let num_of_full_price_input = document.getElementById('full_price_ticket')
  let num_of_half_price_input = document.getElementById('half_price_ticket')

  let int_num_of_seats = parseInt(num_of_seats_input.innerHTML)
  let int_half = parseInt(num_of_half_price_input.value)
  let int_full = parseInt(num_of_full_price_input.value)

  num_of_full_price_input.max = int_num_of_seats - int_half
  num_of_half_price_input.max = int_num_of_seats - int_full

  updateprice()
}

function bookSeat(seatId){
  let seat = document.getElementById(seatId)

  checkSeatStatus(seat)
}


window.onload = makeSeatsGrid;