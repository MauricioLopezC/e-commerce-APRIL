import * as brevo from '@getbrevo/brevo'

const apiInstance = new brevo.TransactionalEmailsApi()

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
)


export async function sendEmail(email, cartItems) {
  let listItems = ''
  cartItems.forEach(element => {
    listItems = listItems.concat(`<li>${element.quantity}X  ${element.product.name}</li>`)
  });

  const productList = `
    <ul>
    ${listItems}
    </ul>
  `

  try {
    const smtpEmail = new brevo.SendSmtpEmail()
    smtpEmail.subject = "Compra realizada con exito"
    smtpEmail.to = [{ email: `${email}`, name: "Mauricio Lopez" }]
    smtpEmail.htmlContent = `
        <html>
          <body>
            <h1>Muchas gracias por comprar en nuestra tienda</h1>
            <p>Resumen de su compra: </p>
            ${productList}
          </body>
        </html>
    `;
    smtpEmail.textContent = 'Muchas gracias por comprar un nuestra tienda'
    smtpEmail.sender = { name: "Mauro", email: "mauroagustin.lopez.456@gmail.com" }

    await apiInstance.sendTransacEmail(smtpEmail)
  } catch (error) {
    console.log(error)
    console.log("ERROR ====> ", error.message)
    //return {error: error}
  }
}
