export class Authorization {

    checkAuthorization(user, task) {
      if (task.users.some(authUser => authUser.name === user.name)) {
        return true;
      }
      throw new Error("No autorizado");
    }
  }
  