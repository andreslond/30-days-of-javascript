export function hotelSystem(rooms) {
  let roomList = [];

  // Buscar reserva por id
  function searchReservation(id) {
    let foundRoom = roomList.find((room) => room.id === id);
    if (foundRoom) {
      return foundRoom;
    }
    throw new Error("La reservación no fue encontrada");
  }

  // Ordenar reservas
  function getSortReservations() {
    let sortedRooms = [...roomList].sort((a, b) => {
      let dateA = convertToDate(a.checkIn);
      let dateB = convertToDate(b.checkIn);
      return dateA - dateB;
    });
    return sortedRooms;
  }

  // Convertir a fechas
  function convertToDate(date) {
    return new Date(`${date} ${new Date().getFullYear()}`);
  }

  // Agregar reserva
  function addReservation(reservation) {
    if (!isAvailable(reservation)) {
      throw new Error("La habitación no está disponible");
    }

    roomList.push(reservation);
    return 'Reserva exitosa';
  }

  // Verificar si la habitación está disponible
  function isAvailable(reservation) {
    let resIn = reservation.checkIn;
    let resOut = reservation.checkOut;

    for (let actRes of roomList) {
      let actCheckIn = actRes.checkIn;
      let actCheckOut = actRes.checkIn;

      if (
        (resIn >= actCheckIn && resIn < actCheckOut)
        ||
        (resOut > actCheckIn && resOut <= actCheckOut)
        ||
        (resIn <= actCheckIn && resOut >= actCheckOut)
      ) {
        if (actRes.roomNumber === reservation.roomNumber) {
          return false;
        }
      }
    }
    return true;
  }

  // Remover reserva por id
  function removeReservation(id) {
    let index = roomList.findIndex((room) => room.id === id);
    if (index > -1) {
      return roomList.splice(index, 1)[0];
    } else {
      throw new Error("La reservación que se busca remover no existe");
    }
  }

  // Retornamos todas las reservas
  function getReservations() {
    return roomList;
  }

  // Retornar las habitaciones disponibles
  function getAvailableRooms(checkIn, checkOut) {
    let availableRooms = [];

    for (let i = 1; i <= rooms; i++) {
      let reservation = { checkIn, checkOut, roomNumber: i };

      if (isAvailable(reservation)) {
        availableRooms.push(i);
      }
    }

    return availableRooms;
  }

  return {
    searchReservation,
    getSortReservations,
    addReservation,
    removeReservation,
    getReservations,
    getAvailableRooms
  };
}