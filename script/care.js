function hideButton() {
    const button = document.getElementById('myButton');
    button.style.display = 'none';
  }


const links = document.querySelectorAll(".navbar a");

links.forEach(link => {
  link.addEventListener("click", function() {
    // remove active from all links
    links.forEach(l => l.classList.remove("active"));
    
    // add active to the clicked link
    this.classList.add("active");
  });
});


function toggleBtn() {
    const content = document.getElementById("content");
    const button = document.querySelector("button");

    if (content.style.display === "none") {
      content.style.display = "block";
      button.textContent = "Hide";
    } else {
      content.style.display = "none";
      button.textContent = "Show";
    }
  }

  function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close dropdown when clicking outside
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  // Toggle dropdown visibility
  function myorder() {
    document.getElementById("orderDropdown").classList.toggle("show");
  }

  // Close dropdown when clicking outside
  window.onclick = function(event) {
    if (!event.target.matches('.orderbtn')) {
      let dropdowns = document.getElementsByClassName("order-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function shoporder() {
    document.getElementById("shopDropdown").classList.toggle("show");
  }

  // Close dropdown when clicking outside
  window.onclick = function(event) {
    if (!event.target.matches('.shopbtn')) {
      let dropdowns = document.getElementsByClassName("shop-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
 