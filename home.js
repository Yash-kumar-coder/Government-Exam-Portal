  // Toggle mobile menu
        const toggleBtn = document.getElementById('toggleBtn');
        const navContainer = document.getElementById('navContainer');
        
        toggleBtn.addEventListener('click', () => {
            navContainer.classList.toggle('active');
            
            // Change icon based on state
            if (navContainer.classList.contains('active')) {
                toggleBtn.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
        
        // Close menu when clicking on links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navContainer.classList.remove('active');
                toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Animation for section title
        document.addEventListener('DOMContentLoaded', function() {
            const sectionTitle = document.querySelector('.section-title');
            
            setTimeout(() => {
                sectionTitle.style.animation = 'fadeIn 1s forwards';
            }, 500);
        });