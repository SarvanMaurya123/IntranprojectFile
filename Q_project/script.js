let currentIndex = 0;
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const totalItems = document.querySelectorAll('.column').length;
    const itemWidth = document.querySelector('.column').offsetWidth;
    function moveCarousel(direction) {
      if (direction === 'left' && currentIndex > 0) {
        currentIndex--;
      } else if (direction === 'right' && currentIndex < totalItems - 4) {
        currentIndex++;
      }
      const translateValue = -currentIndex * itemWidth;
      carouselWrapper.style.transform = `translateX(${translateValue}px)`;
    }
    document.getElementById('prevButton').addEventListener('click', () => moveCarousel('left'));
    document.getElementById('nextButton').addEventListener('click', () => moveCarousel('right'));