document.addEventListener('DOMContentLoaded', function() {
  const filterTabs = document.querySelectorAll(".job-id li");
  const jobItems = document.querySelectorAll(".jList");

  // Set the first tab as active by default
  if (filterTabs.length > 0) {
    filterTabs[0].classList.add("active");
  }

  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-target");

      // Update active tab styling
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // Apply smooth transition effect
      jobItems.forEach(item => {
        const itemType = item.getAttribute("data-item");
        
        // Add transition style
        item.style.transition = "opacity 0.3s ease";
        
        if (target === "all" || itemType === target) {
          item.style.opacity = "0";
          setTimeout(() => {
            item.style.display = "block";
            setTimeout(() => {
              item.style.opacity = "1";
            }, 50);
          }, 300);
        } else {
          item.style.opacity = "0";
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  });

  // Add search functionality to homepage
  const searchInput = document.querySelector('.hero .search input');
  const searchButton = document.querySelector('.hero .search a#g-btn');
  
  if (searchInput && searchButton) {
    searchButton.addEventListener('click', function(e) {
      e.preventDefault();
      const searchTerm = searchInput.value.trim().toLowerCase();
      if (searchTerm) {
        // Store search term in sessionStorage to use on jobs page
        sessionStorage.setItem('jstackSearch', searchTerm);
        window.location.href = 'jobs/jobs.html';
      }
    });
    
    // Allow search with Enter key
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm) {
          sessionStorage.setItem('jstackSearch', searchTerm);
          window.location.href = 'jobs/jobs.html';
        }
      }
    });
  }
});