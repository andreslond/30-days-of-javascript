export function hotelSystem(rooms) {
  let reservations = [];

  function searchReservation(id) {
    console.log('searchReservation: ', id);
    const reservation = reservations.find((element) => element.id === id);
    if (!reservation) {
      throw new Error('La reservación no fue encontrada.');
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
      return 'Reserva Exitosa';
    } else {
      throw new Error('La habitación no está disponible');
    }
  }

  function removeReservation(id) {
    console.log('removeReservation: ', id);
    const delIndex = reservations.findIndex((reservation) => reservation.id === id);
    if (delIndex > -1) {
      return reservations.splice(delIndex, 1)[0];
    }
    throw new Error('La reservación que se busca remover no existe');
  }

  function getReservations() {
    console.log('getReservations: ', reservations);
    return reservations;
  }

  // function getAvailableRooms(checkIn, checkOut) {
  //   console.log('getAvailableRooms: ', checkIn, '--', checkOut);
  //   //1
  //   //Identity the Not available rooms and create an array
  //   //with all the other numbers from 1 to rooms?

  //   //2
  //   //It is possible that the same room has two reservations.
  //   //When the proces check all the array, the same room could
  //   //be check two times and result as available.
  //   //Or the rooms could be available after compare with
  //   //the frist reservaton but with hte second reservation it is busy
  //   //and the room already was pushed as available.

  //   const busyRooms = reservations.map((room) => {
  //     console.log('checking', room);
  //     //check if the arguments range contains the room range.
  //     //If arguments contain it, the room is not available.
  //     if (!room) {
  //       return 0;
  //     }
  //     const compareCheckIn_checkIn = comapreTo(checkIn, room.checkIn);
  //     const compareCheckOut_CheckIN = comapreTo(checkOut, room.checkIn);
  //     console.log('compareCheckIn_checkIn:' + compareCheckIn_checkIn);
  //     console.log('compareCheckOut_CheckIN:' + compareCheckOut_CheckIN);

  //     if (compareCheckIn_checkIn < 0 && compareCheckOut_CheckIN <= 0) {
  //       console.log('free before');
  //       return 0;
  //     }

  //     const compareCheckIn_CheckOut = comapreTo(checkIn, room.checkOut);
  //     const compareCheckOut_CheckOut = comapreTo(checkOut, room.checkOut);
  //     console.log('compareCheckIn_CheckOut:' + compareCheckIn_CheckOut);
  //     console.log('compareCheckOut_CheckOut:' + compareCheckOut_CheckOut);

  //     if (compareCheckIn_CheckOut >= 0 && compareCheckOut_CheckOut > 0) {
  //       console.log('free after');
  //       return 0;
  //     }
  //     return room.roomNumber;
  //   });

  //   console.log('busyRooms:', busyRooms);

  //   return buildRooms(busyRooms);
  // }

  // function buildRooms(busyRooms) {
  //   let availableRooms = [];
  //   for (let i = 0; i < rooms; i++) {
  //     let roomNumber = parseInt(i + 1);
  //     if (!busyRooms.includes(roomNumber)) {
  //       availableRooms.push(roomNumber);
  //     }
  //   }
  //   console.log('free rooms:', availableRooms);
  //   return availableRooms;
  // }

  function getAvailableRooms(checkIn, checkOut) {
    console.log('getAvailableRooms');
    console.log('checkIn:', checkIn);
    console.log('checkOut:', checkOut);
    let freeRooms = [];
    for (let i = 1; i <= rooms; i++) {
      let newReservation = { checkIn, checkOut, roomNumber: i };

      if (!isRoomBusy(newReservation)) {
        freeRooms.push(i);
      }
    }
    console.log('freeRooms: ', freeRooms);
    return freeRooms;
  }

  function isRoomBusy(newRes) {
    console.log('isRoomBusy:', newRes.roomNumber);
    const newCheckIn = convertToDate(newRes.checkIn);
    const newCheckOut = convertToDate(newRes.checkOut);

    return reservations.some((busyRoom) => {
      console.log('busyRoom:', busyRoom.roomNumber);
      const busyCheckIn = convertToDate(busyRoom.checkIn);
      const busyCheckOut = convertToDate(busyRoom.checkOut);

      const freeBefore = newCheckIn < busyCheckIn && newCheckOut <= busyCheckIn;
      const freeAfter = newCheckIn >= busyCheckOut && newCheckOut > busyCheckOut;

      const busy1 = busyCheckIn >= newCheckIn && busyCheckIn < newCheckOut;

      const busy2 = busyCheckOut > newCheckIn && busyCheckOut <= newCheckOut;

      const busy3 = busyCheckIn <= newCheckIn && busyCheckOut >= newCheckOut;

      if (!freeBefore || !freeAfter) {
      //if (busy1 || busy2 || busy3) {
        if (busyRoom.roomNumber === newRes.roomNumber) {
          console.log('true');
          console.log('busyyyyyyy', busyRoom);
          return true;
        }
      }
      console.log('false');
      return false;
    });
  }

  function comapreTo(dateA, dateB) {
    console.log('compare: ', dateA, ' - ', dateB);
    const fullDateA = convertToDate(dateA);
    const fullDateB = convertToDate(dateB);

    console.log(fullDateA + ' ... ' + fullDateB);
    return fullDateA - fullDateB;
  }

  function convertToDate(date) {
    return new Date(`${date} ${new Date().getFullYear()}`);
  }

  return {
    searchReservation,
    getSortReservations,
    addReservation,
    removeReservation,
    getReservations,
    getAvailableRooms,
  };
}
