let users = [
  {firstName: "Axrorbek", lastName: "Mengilov", email: "axror@mail.com", password: "12345678"},
  {firstName: "Bunyodbek", lastName: "Gulomjonov", email: "bunyod@mail.com", password: "77777777"},
  {firstName: "Olim", lastName: "Karimov", email: "olim@mail.com", password: "11111111"},
  {firstName: "Jamshid", lastName: "Ganijonov", email: "jamshid@mail.com", password: "00000000"},
  {firstName: "Sirojiddin", lastName: "Oyosboyev", email: "sirojiddin@mail.com", password: "87654321"}
]
document.getElementById("signUpForm").addEventListener("submit", function(event) {
  event.preventDefault()

  let firstName = document.getElementById("firstName").value.trim()
  let lastName = document.getElementById("lastName").value.trim()
  let email = document.getElementById("email").value.trim()
  let password = document.getElementById("password").value
  let confirmPassword = document.getElementById("confirm").value
  let message = document.getElementById("signMessage")
  let existingUser = users.find(u => u.email === email)
  

  if (password !== confirmPassword) {
    message.style.color = "red"
    message.innerText = "Parollar mos emas!"
    return
  }
  users.push({firstName, lastName, email, password})
  message.style.color = "green"
  message.innerText = "Ro'yxatdan muvaffaqiyatli o'tdingiz!"
})
document.getElementById("LoginForm").addEventListener("submit", function(event) {
  event.preventDefault()

  let email = document.getElementById("Loginemail").value.trim()
  let password = document.getElementById("Mainpassword").value
  let message = document.getElementById("LoginMessage")

  let user = users.find(u => u.email === email && u.password === password)

  if (user) {
    message.style.color = "green"
    message.innerText = "Tabriklaymiz! Muvaffaqiyatli kirdingiz.";
  } else {
    message.style.color = "red"
    message.innerText = "Xatolik! Email yoki parol notogri."
  }
})
