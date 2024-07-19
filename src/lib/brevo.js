import * as brevo from '@getbrevo/brevo'

const apiInstance = new brevo.TransactionalEmailsApi()

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
)


export async function sendEmail() {
  try {
    const smtpEmail = new brevo.SendSmtpEmail()
    smtpEmail.subject = "Compra realizada con exito"
    smtpEmail.to = [{ email: "mauricio.agustin.lopez.456@gmail.com", name: "Mauricio Lopez" }]
    smtpEmail.htmlContent = `<html><body><h1>Muchas gracias por comprar un nuestra tienda</h1></body></html>`
    smtpEmail.textContent = 'HOLA A TODES'
    smtpEmail.sender = { name: "Mauro", email: "mauroagustin.lopez.456@gmail.com" }

    await apiInstance.sendTransacEmail(smtpEmail)
  } catch (error) {
    console.log(error)
    console.log("ERROR ====> ", error.message)
    //return {error: error}
  }
}
