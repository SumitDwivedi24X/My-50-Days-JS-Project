const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        togglePanel(panel);
    });    
    panel.addEventListener('touchstart', (e) => {
        e.preventDefault();
        togglePanel(panel);
    });
});
function togglePanel(clickedPanel) {
    panels.forEach(panel => {
        if (panel !== clickedPanel) {
            panel.classList.remove('active');
        }
    });
    clickedPanel.classList.add('active');
}
