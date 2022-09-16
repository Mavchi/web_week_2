import "./styles.css";

if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
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
  const uploadButton = document.querySelector("#upload")
  const tableElement = document.querySelector("table")

  submitButton.addEventListener("click", function (event) {
    event.preventDefault()

    const tableLinesElements = document.querySelectorAll("tr")

    // let's find out if given username already exists in our database-set
    let usernameAlreadyIncluded = false
    for (let i = 1; i < tableLinesElements.length; i++) {
      if (tableLinesElements[i].querySelector("td").innerText === usernameElement.value) {
        usernameAlreadyIncluded = true
      }
    }

    // if username exists we simply update (stright below)
    // after else we expect to add unique addition without conditionals attached
    if (usernameAlreadyIncluded) {
      for (let i = 1; i < tableLinesElements.length; i++) {
        // see if correct bracket and line to be updated with new information
        if (tableLinesElements[i].querySelector("td").innerText === usernameElement.value) {
          let allComponents = tableLinesElements[i].querySelectorAll("td")
          // order of td: username = 0 / email = 1 / address = 2 / admin = 3
          allComponents[1].innerText = emailElement.value
          allComponents[2].innerText = addressElement.value
          allComponents[3].innerText = (adminElement.checked === true) ? "X" : "-"
        }
      }
    } else {
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
    }
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


  const container = document.querySelector("#image-container")
  uploadButton.addEventListener("click", function () {
    const imageFile = document.querySelector("#input-image").files[0]
    let imageSrc = ""
    if(!imageFile) return

    const img = document.createElement("img")
    img.src = URL.createObjectURL(imageFile)
    img.height = 64
    img.width = 64
    container.appendChild(img)
  }) 
}

