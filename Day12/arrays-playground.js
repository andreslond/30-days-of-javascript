export function validateForm(formData, registeredUsers) {
    const err = 'Faltan los siguientes campos: ';
    let missingFields = '';
    let newUser = { name: '', lastname: '', email: '' };
    const fields = ['name', 'lastname', 'email', 'password'];
    const PASSWORD_FIELD = 'password';
    const EMAIL_FIELD = 'email';
  
    console.log(formData);
  
    if (!formData) {
      throw new Error(err + "name, lastname, email y password");
    }
  
    if (!registeredUsers) {
      return;
    }
  
    for (const field of fields) {
      console.log(field, ' -->', formData[field]);
      const exist = formData[field] ? formData[field] : false;
      console.log(exist);
      if (!exist) {
        missingFields += field + ', '
      }
  
      if (field === EMAIL_FIELD) {
        if (emailAlredyRegistered(formData[field])) {
          throw new Error("Email duplicado");
        }
      }
  
      if (!field === PASSWORD_FIELD) {
        console.log('value:' + formData[field])
        newUser[field] = formData[field];
      }
  
    }
  
  
    if (missingFields) {
      throw new Error(err + missingFields);
    } else {
      console.log('all OK')
      registeredUsers.push(newUser);
      console.log(registeredUsers);
      console.log(newUser);
      return "Tu registro fue exitoso " + newUser.name;
    }
  
    function emailAlredyRegistered(newEmail) {
      return registeredUsers.some((user) => user.email === newEmail);
    }
  
  }
  