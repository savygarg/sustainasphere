// new nav bar efffect
window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#013320";
    } else {
        navbar.style.backgroundColor = "#013320";
    }
};

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 

// Team members animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    // Set initial state
    teamMembers.forEach(member => {
        member.style.opacity = '1'; // Start visible
        member.style.transform = 'translateY(0)'; // No initial transform
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px'
    });

    // Observe each team member
    teamMembers.forEach(member => {
        observer.observe(member);
    });

    // Hover effects
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 40px rgba(45, 106, 79, 0.2)';
        });

        member.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 30px rgba(45, 106, 79, 0.1)';
        });
    });
});

// Banner text animation
window.addEventListener('DOMContentLoaded', () => {
    const bannerText = document.querySelector('.team-banner h1');
    if (bannerText) {
        bannerText.style.opacity = '1';
        bannerText.style.transform = 'translateX(0)'; 
    }
});

// Add loading animation for team member images
document.querySelectorAll('.team-img img').forEach(img => {
    img.style.opacity = '1'; // Start visible
    img.style.transition = 'transform 0.3s ease';
}); 
