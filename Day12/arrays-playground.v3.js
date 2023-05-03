export function validateForm(formData, registeredUsers) {
  //Datos requeridos
  const requiredData = ["name", "lastname", "email", "password"]
  //Encontrar que datos faltan
  const missingData = requiredData.filter(x => !Object.keys(formData).includes(x))

  //Mensaje de error si faltan datos
  if (missingData.length)
    throw new Error(`Faltan los siguientes campos: ${missingData.join(", ")}`);

  //Extraer los valores necesarios de formData
  const { name, lastname, email } = formData

  //Comprobar si ya esta registrado ese email
  if (registeredUsers.some(x => x.email == email))
    throw new Error(`Email ya existe: ${email}`);

  //Agregar el registro
  registeredUsers.push({ name, lastname, email })

  //Retorno
  return (`Tu registro fue exitoso ${name} ${lastname}`)

}