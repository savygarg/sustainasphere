// Utility functions
const fadeIn = (element) => {
    if (!element) return;
    element.style.display = 'block';
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, 50);
};

const fadeOut = (element) => {
    if (!element) return;
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    setTimeout(() => {
        element.style.display = 'none';
    }, 300);
};

// Category filtering
document.addEventListener('DOMContentLoaded', function() {
    try {
        const categoryButtons = document.querySelectorAll('.category-btn');
        const blogCards = document.querySelectorAll('.blog-card');

        if (!categoryButtons.length) {
            console.warn('No category buttons found');
            return;
        }

        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                try {
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');

                    const selectedCategory = button.dataset.category;
                    if (!selectedCategory) {
                        console.warn('Category not specified for button:', button);
                        return;
                    }

                    blogCards.forEach(card => {
                        if (selectedCategory === 'all' || card.dataset.category === selectedCategory) {
                            fadeIn(card);
                        } else {
                            fadeOut(card);
                        }
                    });
                } catch (err) {
                    console.error('Error in category filtering:', err);
                }
            });
        });
    } catch (err) {
        console.error('Error initializing category filtering:', err);
    }
});

// Search functionality
const initializeSearch = () => {
    try {
        const searchInput = document.getElementById('search-input');
        const searchButton = document.getElementById('search-button');
        const blogCards = document.querySelectorAll('.blog-card');

        if (!searchInput || !searchButton) {
            console.warn('Search elements not found');
            return;
        }

        const performSearch = () => {
            try {
                const searchTerm = searchInput.value.toLowerCase().trim();
                
                if (searchTerm === '') {
                    blogCards.forEach(card => fadeIn(card));
                    return;
                }
                
                blogCards.forEach(card => {
                    const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
                    const excerpt = card.querySelector('.post-excerpt')?.textContent.toLowerCase() || '';
                    const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
                    
                    if (title.includes(searchTerm) || 
                        excerpt.includes(searchTerm) || 
                        tags.some(tag => tag.includes(searchTerm))) {
                        fadeIn(card);
                    } else {
                        fadeOut(card);
                    }
                });
            } catch (err) {
                console.error('Error performing search:', err);
            }
        };

        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    } catch (err) {
        console.error('Error initializing search:', err);
    }
};

// Newsletter form submission
const initializeNewsletterForm = () => {
    try {
        const newsletterForm = document.querySelector('.newsletter-form');
        if (!newsletterForm) {
            console.warn('Newsletter form not found');
            return;
        }

        newsletterForm.addEventListener('submit', function(e) {
            try {
                e.preventDefault();
                const emailInput = this.querySelector('input[type="email"]');
                if (!emailInput || !emailInput.value.trim()) {
                    alert('Please enter a valid email address');
                    return;
                }
                alert('Thank you for subscribing!');
                this.reset();
            } catch (err) {
                console.error('Error in newsletter submission:', err);
                alert('Sorry, there was an error. Please try again.');
            }
        });
    } catch (err) {
        console.error('Error initializing newsletter form:', err);
    }
};

// Smooth scroll functionality
const initializeSmoothScroll = () => {
    try {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                try {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (!target) {
                        console.warn('Scroll target not found:', this.getAttribute('href'));
                        return;
                    }
                    target.scrollIntoView({ behavior: 'smooth' });
                } catch (err) {
                    console.error('Error in smooth scroll:', err);
                }
            });
        });
    } catch (err) {
        console.error('Error initializing smooth scroll:', err);
    }
};

// Back to top button
const initializeBackToTop = () => {
    try {
        const backToTopButton = document.getElementById('back-to-top');
        if (!backToTopButton) {
            console.warn('Back to top button not found');
            return;
        }

        const toggleBackToTop = () => {
            try {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.add('show');
                } else {
                    backToTopButton.classList.remove('show');
                }
            } catch (err) {
                console.error('Error toggling back to top button:', err);
            }
        };

        window.addEventListener('scroll', toggleBackToTop);
        backToTopButton.addEventListener('click', (e) => {
            try {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } catch (err) {
                console.error('Error scrolling to top:', err);
            }
        });
    } catch (err) {
        console.error('Error initializing back to top button:', err);
    }
};

// Animation on scroll
const initializeScrollAnimation = () => {
    try {
        const elements = document.querySelectorAll('.blog-card, .featured-post, .newsletter-signup, .popular-topics');
        if (!elements.length) {
            console.warn('No elements found for scroll animation');
            return;
        }

        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        });

        const animateOnScroll = () => {
            try {
                elements.forEach(element => {
                    const rect = element.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }
                });
            } catch (err) {
                console.error('Error in scroll animation:', err);
            }
        };

        window.addEventListener('scroll', animateOnScroll);
        // Initial check
        animateOnScroll();
    } catch (err) {
        console.error('Error initializing scroll animation:', err);
    }
};

// Topic tags hover effect
const initializeTopicTags = () => {
    try {
        const topicTags = document.querySelectorAll('.topic-tag');
        if (!topicTags.length) {
            console.warn('No topic tags found');
            return;
        }

        topicTags.forEach(tag => {
            tag.addEventListener('mouseenter', () => {
                try {
                    tag.style.transform = 'translateY(-5px)';
                } catch (err) {
                    console.error('Error in tag hover effect:', err);
                }
            });
            
            tag.addEventListener('mouseleave', () => {
                try {
                    tag.style.transform = 'translateY(0)';
                } catch (err) {
                    console.error('Error in tag hover effect:', err);
                }
            });
        });
    } catch (err) {
        console.error('Error initializing topic tags:', err);
    }
};

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeSearch();
    initializeNewsletterForm();
    initializeSmoothScroll();
    initializeBackToTop();
    initializeScrollAnimation();
    initializeTopicTags();
});