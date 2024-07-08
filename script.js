document.addEventListener('mousemove', function(e) {
    const trail = document.createElement('div');
    trail.className = 'trail';
    document.body.appendChild(trail);
    
    const rect = trail.getBoundingClientRect();
    const offsetX = rect.width / 2;
    const offsetY = rect.height / 2;
    
    trail.style.left = `${e.pageX - offsetX}px`;
    trail.style.top = `${e.pageY - offsetY}px`;
    
    setTimeout(function() {
        trail.remove();
    }, 150);

    const randomColorTrail = document.createElement('div');
    randomColorTrail.className = 'trail';
    document.body.appendChild(randomColorTrail);

    randomColorTrail.style.left = `${e.pageX - offsetX}px`;
    randomColorTrail.style.top = `${e.pageY - offsetY}px`;
    randomColorTrail.style.background = `radial-gradient(circle, rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},0.9) 0%, rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},0.6) 50%, rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},0) 100%)`;
    
    setTimeout(function() {
        randomColorTrail.remove();
    }, 250);
});
