
  
function fillTable(userTableBody, users) {
  const html = users.map(user => {
    return `<tr>
    <th scope="row">${user.id}</th>
    <td>${user.name}</td>
    <td>${user.age}</td>
    </tr>`
  }).join("")

  userTableBody.innerHTML = html
}