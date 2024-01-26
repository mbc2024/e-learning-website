document.addEventListener('DOMContentLoaded', function () {
    const educators = document.querySelectorAll('.educator img');
    const extraProfiles = document.querySelectorAll('.extra-educator img');
    const educatorNames = document.querySelectorAll('.educator p');
    const extraNames = document.querySelectorAll('.extra-educator p');

    function replaceProfiles() {
        educators.forEach((educator, index) => {
            const tempSrc = educator.src;
            const tempAlt = educator.alt;
            const tempName = educatorNames[index].textContent;

            educator.src = extraProfiles[index].src;
            educator.alt = extraProfiles[index].alt;
            educatorNames[index].textContent = extraNames[index].textContent;

            extraProfiles[index].src = tempSrc;
            extraProfiles[index].alt = tempAlt;
            extraNames[index].textContent = tempName;
        });
    }

    setInterval(replaceProfiles, 5000);

    replaceProfiles(); // Initial call to replace profiles
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Show the button when scrolling down, hide it when at the top
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.opacity = 1;
        scrollToTopBtn.style.pointerEvents = 'auto';
    } else {
        scrollToTopBtn.style.opacity = 0;
        scrollToTopBtn.style.pointerEvents = 'none';
    }
});

function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display= 'flex';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display= 'none';
}