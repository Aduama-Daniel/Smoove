window.addEventListener('scroll', function() {
    var navTop = document.querySelector('.nav_top');
    var logoToggle = document.querySelector('.logo-toggle');
    
    if (window.scrollY > 0) {
        navTop.style.position = 'fixed';
        navTop.style.top = '0';
        navTop.style.left = '0';
        logoToggle.style.display = 'block'; // Show the logo-toggle element
    } else {
        navTop.style.position = 'relative';
        logoToggle.style.display = 'none'; // Hide the logo-toggle element
    }
});

// Simulate scrolling on page load
window.scrollTo(0, 1);
    // Simulate scrolling on page load
    window.scrollTo(0, 1);

    // menu expanding
    var menu = document.querySelector('.menu');
    var linkItems = document.querySelector('#link_items');
    var mainNav = document.querySelector('#main_nav');

    
// Event listener for the "menu" element
menu.addEventListener('click', function() {
        // Toggle the display of the link_items container
        linkItems.style.display = (linkItems.style.display === 'block') ? 'none' : 'block';

        // Toggle the display of the main_nav container
        mainNav.style.display = (mainNav.style.display === 'block') ? 'none' : 'block';
    });

    // Event listener for the link_items overlay (to hide it when clicked)
    linkItems.addEventListener('click', function() {
        linkItems.style.display = 'none';
        mainNav.style.display = 'none'; // Hide main_nav when overlay is clicked
    });

    function toggleMenu() {
        const linkItems = document.getElementById("link_items");
        linkItems.classList.toggle("active"); // Add or remove "active" class
        
        const mainNav = document.getElementById("main_nav");
        mainNav.classList.toggle("active"); // Add or remove "active" class for #main_nav
    }


    // searching
    const searchInput = document.getElementById("searchInput");
    const searchIcon = document.getElementById("searchIcon");
    const searchCloseIcon = document.getElementById("searchCloseIcon");

    searchIcon.addEventListener("click", function() {
        searchInput.style.display = "block";
        searchCloseIcon.style.display = "block";
        searchInput.focus(); // Set focus on the search input
    });

    searchCloseIcon.addEventListener("click", function() {
        searchInput.style.display = "none";
        searchCloseIcon.style.display = "none";
    });

    // Add event listener for search icon to perform search
    searchIcon.addEventListener("click", function() {
        if (searchInput.style.display === "block") {
            const searchTerm = searchInput.value.trim();
            if (searchTerm !== "") {
                // Perform a search action based on the searchTerm
                // For example, you can redirect the user to a search results page:
                window.location.href = "search-results.html?q=" + encodeURIComponent(searchTerm);
            }
        }
    });

    // Initially hide search input and close icon
    searchInput.style.display = "none";
    searchCloseIcon.style.display = "none";