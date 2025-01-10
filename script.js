const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

// Fetch and create user cards, initially hide them
fetch("https://xutilities.github.io/js-search-bar/database.json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      header.textContent = user.name
      header.href = `https://example.com/${user.name.replace(/\s+/g, '-').toLowerCase()}`

      // Initially hide the card by adding the hide class
      card.classList.add("hide")

      userCardContainer.append(card)

      return { name: user.name, element: card }
    })
  })
  .catch(error => {
    console.error("Error fetching user data:", error)
  })

// Handle search input and toggle visibility of matching cards
searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  
  // If the search query is empty, hide all cards
  if (value === "") {
    users.forEach(user => {
      user.element.classList.add("hide") // Hide all cards when search is empty
    })
  } else {
    // Otherwise, filter the cards based on the search term
    users.forEach(user => {
      const isVisible = user.name.toLowerCase().includes(value)
      user.element.classList.toggle("hide", !isVisible)
    })
  }
})
