document.addEventListener('mousemove', function(e) {
    const trail = document.createElement('div');
    trail.className = 'trail';
    document.body.appendChild(trail);
    
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    
    setTimeout(function() {
        trail.remove();
    }, 150);
});
