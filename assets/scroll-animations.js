// Scroll Animations with Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = getAnimationStyle(entry.target);
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const elementsToAnimate = document.querySelectorAll(
    '.article-card, .sidebar-article, .featured-article, .mm-section-text, .mm-image-full, .mm-two-col, .mm-gallery-item, .mm-timeline-item, .mm-related-card, h2, h3'
  );

  elementsToAnimate.forEach(el => {
    observer.observe(el);
  });

  // Parallax effect on hero and large images
  const parallaxElements = document.querySelectorAll('.mm-hero, .mm-image-full');
  
  window.addEventListener('scroll', () => {
    parallaxElements.forEach(el => {
      const scrollPosition = window.scrollY;
      const elementPosition = el.getBoundingClientRect().top + scrollPosition;
      const distanceToTop = scrollPosition - elementPosition;
      
      if (el.classList.contains('mm-hero')) {
        el.style.backgroundPosition = `center ${distanceToTop * 0.5}px`;
      } else if (el.classList.contains('mm-image-full')) {
        el.style.transform = `translateY(${distanceToTop * 0.1}px) scale(1.01)`;
      }
    });
  });
});

function getAnimationStyle(element) {
  if (element.classList.contains('article-card')) {
    return 'fadeInUp 0.8s ease-out forwards';
  } else if (element.classList.contains('sidebar-article')) {
    return 'slideInLeft 0.8s ease-out forwards';
  } else if (element.classList.contains('featured-article')) {
    return 'fadeInUp 0.8s ease-out forwards';
  } else if (element.classList.contains('mm-section-text')) {
    return 'revealText 0.8s ease-out forwards';
  } else if (element.classList.contains('mm-image-full')) {
    return 'revealImage 0.8s ease-out forwards';
  } else if (element.classList.contains('mm-gallery-item')) {
    return 'fadeInUp 0.8s ease-out forwards';
  } else if (element.classList.contains('mm-timeline-item')) {
    return 'fadeInUp 0.8s ease-out forwards';
  } else if (element.classList.contains('mm-related-card')) {
    return 'fadeInUp 0.8s ease-out forwards';
  } else if (element.tagName === 'H2' || element.tagName === 'H3') {
    return 'slideInLeft 0.8s ease-out forwards';
  }
  return 'fadeInUp 0.8s ease-out forwards';
}
