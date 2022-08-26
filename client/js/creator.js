window.addEventListener("load", function () {
  const userCreateForm = document.getElementById("userCreateForm")
  const userNameInput = document.getElementById("userNameInput")
  const userAgeInput = document.getElementById("userAgeInput")
  const userCreateAxiosButton = document.getElementById("userCreateAxiosButton")

  userCreateForm.addEventListener("submit", async e => {
    e.preventDefault()
    const name = userNameInput.value
    const age = userAgeInput.value
    const response = await fetch(URL_USER, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
      },
      body: JSON.stringify({
        name,
        age,
      })
    })
    const data = await response.json()
    if (response.ok) {
      alert(data.message) //Success
    } else {
      prompt(data.message) //Error
    }
  })

  userCreateAxiosButton.addEventListener("click", async () => {
    const name = userNameInput.value
    const age = userAgeInput.value
    try {
      const response = await axios.post(URL_USER, { name, age }, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        }
      })
      alert(response.data.message) //Success
    } catch (error) {
      console.error(error)
      prompt(error.response.data.message) //Error
    }
  })
})

