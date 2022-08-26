window.addEventListener("load", function () {
  const clearTableButton = document.getElementById("clearTableButton")
  const fetchUserButton = document.getElementById("fetchUserButton")
  const fetchAsyncUserButton = document.getElementById("fetchAsyncUserButton")
  const axiosUserButton = document.getElementById("axiosUserButton")
  const axiosAsyncUserButton = document.getElementById("axiosAsyncUserButton")
  const userTableBody = document.getElementById("userTableBody")
  
  clearTableButton.addEventListener("click", () => userTableBody.innerHTML = "" )
  
  fetchUserButton.addEventListener("click", function () {
    fetch(URL_USER)
    .then(response => response.json())
    .then(data => {
      fillTable(userTableBody, data)
    })
  })
  
  fetchAsyncUserButton.addEventListener("click", async function () {
    const response = await fetch(URL_USER)
    const data = await response.json()
    fillTable(userTableBody, data)
  })
  
  axiosUserButton.addEventListener("click", function () {
    axios.get(URL_USER)
    .then(response => {
      fillTable(userTableBody, response.data)
    })
  })
  
  axiosAsyncUserButton.addEventListener("click", async function () {
    const response = await axios.get(URL_USER)
    fillTable(userTableBody, response.data)
  })
})