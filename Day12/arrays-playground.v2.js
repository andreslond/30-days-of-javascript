export function validateForm(formData, registeredUsers) {
  // Tú código aquí 👈

  const fieldNames = ['name', 'lastname', 'email', 'password'];
  const errorFields = 'Faltan los siguientes campos: ';

  checkData(formData, fieldNames);

  if (isEmailNew(formData.email, registeredUsers)) {
    throw new Error("Email duplicado");
  };

  return addNewUser(formData, registeredUsers);

  function addNewUser(userData, registeredUsers) {
    console.log('start addNewUser');
    const userToAdd = {
      name: userData.name,
      lastname: userData.lastname,
      email: userData.email
    };
    console.log('userToAdd:', userToAdd);
    registeredUsers.push(userToAdd);
    console.log('registeredUsers:', registeredUsers)
    console.log('end addNewUser');
    return `Tu registro fue exitoso ${userData.name} ${userData.lastname}`
  }

  function isEmailNew(newEmail, registeredUsers) {
    console.log('start isEmailNew');
    return registeredUsers.find((user) => user.email === newEmail);
  }


  function checkData(formData, fieldNames) {
    console.log('start checkData');
    let currentFields = '';
    console.log(formData);
    for (const field of fieldNames) {
      if (!formData[field]) {
        currentFields += field + ', ';
      }
    }
    console.log('error fields: ', currentFields);
    if (currentFields) {
      currentFields = currentFields.slice(0, (currentFields.length - 1));
      throw new Error(errorFields + currentFields);
    }
    console.log('end checkData');

  }

}