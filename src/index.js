import "./styles.css";

if(document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function() {
      console.log("Document is ready after waiting!");
      initializeCode();
  })
}

function initializeCode() {
  const submitButton = document.querySelector("#submit-data")
  const usernameElement = document.querySelector("#input-username")
  const emailElement = document.querySelector("#input-email")
  const addressElement = document.querySelector("#input-address")
  const adminElement = document.querySelector("#input-admin")
  const emptyButton = document.querySelector("#empty-data")

  const tableElement = document.querySelector("table")
  
  submitButton.addEventListener("click", function (event) {
    event.preventDefault()

    let lineOfTable = document.createElement("tr")

    let thUsername = document.createElement("td")
    thUsername.innerText = usernameElement.value
    let thEmail = document.createElement("td")
    thEmail.innerText = emailElement.value
    let thAddress = document.createElement("td")
    thAddress.innerText = addressElement.value
    let thAdmin = document.createElement("td")
    thAdmin.innerText = (adminElement.checked === true) ? "X" : "-"

    lineOfTable.appendChild(thUsername)
    lineOfTable.appendChild(thEmail)
    lineOfTable.appendChild(thAddress)
    lineOfTable.appendChild(thAdmin)

    tableElement.appendChild(lineOfTable)

    /*
    console.log(usernameElement.value)
    console.log(emailElement.value)
    console.log(addressElement.value)
    console.log(adminElement.checked)
    */
  })

  emptyButton.addEventListener("click", function (event) {
    event.preventDefault()

    //console.log(document.querySelector("td").parentNode)
    //console.log(document.querySelector("data"))

    while (document.querySelector("td") !== null) {
      let tr = document.querySelector("td").parentNode
      tr.parentElement.removeChild(tr)
    }

  })
}

