export function sendEmail(email, subject, body) {
    // Tu código aquí 👈
    console.log('before promise code');
    return new Promise((resolve, reject) => {
      console.log('promise code');
      window.setTimeout(() => {
        console.log(email, subject, body);
        if (!email || !subject || !body) {
          console.log('reject');
          reject(new Error('Error: Hacen falta campos para enviar el email'));
        }
        let result = {
          email: email,
          subject: subject,
          body: body
        }
        resolve(result);
      }, 2000)
    });
  
  }
  