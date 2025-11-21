

//  for search or buttons
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

//for swipe        
// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.getElementById('carousel-container');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const dotsContainer = document.getElementById('carousel-dots');
    
    if (!carouselContainer) return;
    
    const cards = carouselContainer.querySelectorAll('.skill-card');
    const cardWidth = cards[0].offsetWidth + 16; // card width + gap
    const visibleCards = 3; // Number of cards visible at once
    const totalCards = cards.length;
    const totalSlides = Math.ceil(totalCards / visibleCards);
    let currentSlide = 0;
    
    // Create dot indicators
    function createDots() {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = `dot ${i === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }
    
    // Update dot indicators
    function updateDots() {
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Scroll to specific slide
    function goToSlide(slideIndex) {
        currentSlide = Math.max(0, Math.min(slideIndex, totalSlides - 1));
        
        const scrollPosition = currentSlide * cardWidth * visibleCards;
        carouselContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        
        updateDots();
        updateButtonStates();
    }
    
    // Update button states based on current slide
    function updateButtonStates() {
        prevButton.disabled = currentSlide === 0;
        nextButton.disabled = currentSlide === totalSlides - 1;
        
        // Visual feedback for disabled state
        prevButton.style.opacity = currentSlide === 0 ? '0.5' : '1';
        nextButton.style.opacity = currentSlide === totalSlides - 1 ? '0.5' : '1';
    }
    
    // Next slide
    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            goToSlide(currentSlide + 1);
        }
    }
    
    // Previous slide
    function prevSlide() {
        if (currentSlide > 0) {
            goToSlide(currentSlide - 1);
        }
    }
    
    // Handle scroll events to update dots
    function handleScroll() {
        const scrollLeft = carouselContainer.scrollLeft;
        const newSlide = Math.round(scrollLeft / (cardWidth * visibleCards));
        
        if (newSlide !== currentSlide) {
            currentSlide = newSlide;
            updateDots();
            updateButtonStates();
        }
    }
    
    // Keyboard navigation
    function handleKeyboardNavigation(event) {
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            prevSlide();
        } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            nextSlide();
        }
    }
    
    // Initialize carousel
    function initCarousel() {
        createDots();
        updateButtonStates();
        
        // Event listeners
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);
        carouselContainer.addEventListener('scroll', handleScroll);
        document.addEventListener('keydown', handleKeyboardNavigation);
        
       
    }
    
    
    // Initialize everything
    initCarousel();
    // startAutoPlay(); // Uncomment if you want auto-play
});
