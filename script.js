const chatForm = document.querySelector('.chat-form')
const chatEmail = chatForm.querySelector('#email')
const chatMsg = chatForm.querySelector('#message')
const chatEmailErrMsg = chatForm.querySelector('#email-error')
const chatMessageErrMsg = chatForm.querySelector('#message-error')
const newsletterForm = document.querySelector('.newsletter-form')
const newsletterEmail = newsletterForm.querySelector('#newsletter-email')
const newsletterErrorMsg = document.querySelector('#newsletter-email-error')

chatForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = chatEmail.value
  const message = chatMsg.value

  console.log({ message })

  if (!validateEmail(email)) {
    chatEmailErrMsg.classList.add('active')

    setTimeout(() => {
      chatEmailErrMsg.classList.remove('active')
    }, 6000)
    return
  }

  if (message.length < 8) {
    chatMessageErrMsg.classList.add('active')

    setTimeout(() => {
      chatMessageErrMsg.classList.remove('active')
    }, 6000)
    return
  }

  chatForm.submit()
})

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = newsletterEmail.value

  if (!validateEmail(email)) {
    newsletterErrorMsg.classList.add('active')

    setTimeout(() => {
      newsletterErrorMsg.classList.remove('active')
    }, 6000)
    return
  }

  newsletterForm.submit()
})

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
