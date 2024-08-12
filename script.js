// Mostrar conteúdo após o carregamento do loader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    
    loader.style.display = 'none';
    content.classList.remove('hidden');
});
