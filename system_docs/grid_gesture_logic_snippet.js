// ==========================================
// NATIVE MOBILE GRID GESTURES
// ==========================================
const gridElement = document.getElementById('main-grid');
let touchStartX = 0;
let touchStartY = 0;
let touchThreshold = 30; // Pixels required to register a swipe
let hasSwiped = false;

// 1. Capture the initial touch point
gridElement.addEventListener('touchstart', (e) => {
    // Prevent default to stop double-firing on some browsers, 
    // but ensure we only grab the first finger (touches[0])
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    hasSwiped = false;
}, { passive: false });

// 2. Track the drag across the screen
gridElement.addEventListener('touchmove', (e) => {
    e.preventDefault(); // CRITICAL: Stops the whole webpage from scrolling down
    if(gameOver || isPaused || !gameStarted) return;

    let touchCurrentX = e.touches[0].clientX;
    let touchCurrentY = e.touches[0].clientY;
    
    let deltaX = touchCurrentX - touchStartX;
    let deltaY = touchCurrentY - touchStartY;

    // Check for Horizontal Swipe (Left/Right)
    if (Math.abs(deltaX) > touchThreshold) {
        hasSwiped = true;
        if (deltaX > 0) {
            moveRight();
        } else {
            moveLeft();
        }
        // Reset the start X/Y to allow continuous sliding without lifting finger
        touchStartX = touchCurrentX;
        touchStartY = touchCurrentY; 
    }

    // Check for Vertical Swipe (Downward soft drop)
    if (deltaY > touchThreshold) {
        hasSwiped = true;
        moveDown();
        touchStartX = touchCurrentX;
        touchStartY = touchCurrentY;
    }
}, { passive: false });

// 3. Detect Tap for Rotation
gridElement.addEventListener('touchend', (e) => {
    if(gameOver || isPaused || !gameStarted) return;
    
    // If the user lifted their finger without swiping, it's a tap!
    if (!hasSwiped) {
        e.preventDefault();
        rotate();
    }
});