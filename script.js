window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    setTimeout(function () {
        loader.style.display = 'none';
        content.classList.remove('hidden');
    }, 1500);
});
