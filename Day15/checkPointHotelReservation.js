export function hotelSystem(rooms) {

  let reservations = [];

  function searchReservation(id) {
    console.log('searchReservation: ', id);
    const reservation = reservations.find((element) => element.id === id);
    if (!reservation) {
      return 'La reservación no fue encontrada.'
    }
    return reservation;
  }

  function getSortReservations() {
    console.log('getSortReservations');
    let ordered = structuredClone(reservations);
    return ordered.sort((resA, resB) => comapreTo(resA.checkIn, resB.checkIn));
  }

  function addReservation(reservation) {
    console.log('addReservation: ', reservation);
    const roomN = parseInt(reservation.roomNumber);
    const checkIn = reservation.checkIn;
    const checkOut = reservation.checkOut;

    //Check if the room is avaiable between that dates.
    const availableRooms = getAvailableRooms(checkIn, checkOut);
    if (availableRooms.includes(roomN)) {
      console.log('New reservation added...');
      reservations.push(reservation);
      return '';
    } else {
      throw new Error("La habitación no está disponible");
    }
  }

  function removeReservation(id) {
    console.log('removeReservation: ', id);
    const res = reservations.find((reservation) => reservation.id === id);
    if (!res) {
      throw new Error("La reservación que se busca remover no existe");
    }
    reservations = reservations.filter((reservation) => reservation.id !== id);
    return res
  }

  function getReservations() {
    console.log('getReservations: ', reservations);
    return reservations;
  }

  function getAvailableRooms(checkIn, checkOut) {
    console.log('getAvailableRooms: ', checkIn, '--', checkOut);
    //1
    //Identity the Not available rooms and create an array
    //with all the other numbers from 1 to rooms?

    //2
    //It is possible that the same room has two reservations.
    //When the proces check all the array, the same room could
    //be check two times and result as available.
    //Or the rooms could be available after compare with 
    //the frist reservaton but with hte second reservation it is busy 
    //and the room already was pushed as available.

    const busyRooms = reservations.map((room) => {
      console.log('checking', room);
      //check if the arguments range contains the room range.
      //If arguments contain it, the room is not available.
      if (!room) {
        return 0;
      }
      const compareCheckIn_checkIn = comapreTo(checkIn, room.checkIn);
      const compareCheckOut_CheckIN = comapreTo(checkOut, room.checkIn);
      console.log('compareCheckIn_checkIn:' + compareCheckIn_checkIn);
      console.log('compareCheckOut_CheckIN:' + compareCheckOut_CheckIN);

      if (compareCheckIn_checkIn < 0 && compareCheckOut_CheckIN <= 0) {
        console.log('free before');
        return 0;
      }

      const compareCheckIn_CheckOut = comapreTo(checkIn, room.checkOut);
      const compareCheckOut_CheckOut = comapreTo(checkOut, room.checkOut);
      console.log('compareCheckIn_CheckOut:' + compareCheckIn_CheckOut);
      console.log('compareCheckOut_CheckOut:' + compareCheckOut_CheckOut);

      if (compareCheckIn_CheckOut >= 0 && compareCheckOut_CheckOut > 0) {
        console.log('free after');
        return 0;
      }
      return room.roomNumber;
    });

    console.log('busyRooms:', busyRooms);

    return buildRooms(busyRooms);
  }

  function buildRooms(busyRooms) {
    let availableRooms = [];
    for (let i = 0; i < rooms; i++) {
      let roomNumber = parseInt(i + 1);      
      if (!busyRooms.includes(roomNumber)) {
        availableRooms.push(roomNumber);
      }
    }
    console.log('free rooms:', availableRooms);
    return availableRooms;
  }

  //function isTheRoomAvailable(is, checkIn, checkOut) {
  //  console.log('getAvailableRooms: ', checkIn, '<->', checkOut);
  //}

  function comapreTo(dateA, dateB) {
    console.log('compare: ', dateA, ' - ', dateB);
    const dayMonthA = dateA.split('/');
    const dayMonthB = dateB.split('/');

    console.log(dayMonthA[0] + '..' + dayMonthB[0])
    if (dayMonthA[0] === dayMonthB[0]) {
      console.log(dayMonthA[1] + ' ... ' + dayMonthB[1])
      return dayMonthA[1] - dayMonthB[1];
    }
    console.log(dayMonthA[0] + ' ... ' + dayMonthB[0])
    return dayMonthA[0] - dayMonthB[0];
  }

  return {
    'searchReservation': searchReservation,
    'getSortReservations': getSortReservations,
    'addReservation': addReservation,
    'removeReservation': removeReservation,
    'getReservations': getReservations,
    'getAvailableRooms': getAvailableRooms,
  }
}
