// Example JS for future interactivity
console.log("Udemy landing section loaded.");

// You can add event listeners here, e.g., for search or buttons
document.querySelector('.login').addEventListener('click', () => {
    alert('Login button clicked');
});

document.querySelector('.signup').addEventListener('click', () => {
    alert('Signup button clicked');
});
// Filter button functionality
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    // In a real application, you would filter courses based on the selected skill
                    console.log(`Filtering by: ${this.textContent}`);
                });
            });
            
            // Show all courses button functionality
            const showAllBtn = document.querySelector('.show-all-btn');
            
            showAllBtn.addEventListener('click', function() {
                alert('Showing all Amazon AWS courses!');
                // In a real application, this would load more courses or navigate to a dedicated page
            });
        });