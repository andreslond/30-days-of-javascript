export function hotelSystem(rooms) {

    let reservations = [];
  
    function searchReservation(id) {
      if (!id) return 'La reservación no fue encontrada.'
      const reservation = reservations.find((element) => element.id === id);
      if (!reservation) {
        return 'La reservación no fue encontrada.'
      }
      return reservation;
    }
  
    function getSortReservations() {
      let ordered = [...reservations];
      return ordered.sort((resA, resB) => resB.checkIn - resA.checkIn);
    }
  
    function addReservation(reservation) {
      //reservations.push(reservation);
      const roomN = reservation.roomNumber;
      const checkIn = reservation.checkIn;
      const checkOut = reservation.checkOut;
  
      //Check if the room is avaiable between that dates.
      const availableRooms = getAvailableRooms(checkIn, checkOut);
  
      if (!availableRooms.includes(roomN)) {
        reservations.push(reservation);
      }
    }
  
    function getAvailableRooms(checkIn, checkOut) {
      return reservations.map(room => {
        //check if the arguments range contains the room range.
        //If arguments contain it, the room is not available.
        if (room.checkIn) {
          return roomNumber;
        }
      });
    }
  
    return {
      'searchReservation': searchReservation,
      'getSortReservations': getSortReservations,
      'addReservation': addReservation,
      // 'removeReservation':,
      // 'getReservations':,
      'getAvailableRooms': getAvailableRooms,
  
    }
  }
  