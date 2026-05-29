// Main JavaScript File

function showPage(pageId, element) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    const page = document.getElementById('page-' + pageId);
    if (page) {
        page.classList.add('active');
    }

    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    if (element && element.classList.contains('nav-item')) {
        element.classList.add('active');
    }

    window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', () => {
    const now = new Date();

    // Live Date
    const liveDate = document.getElementById('live-date');
    if (liveDate) {
        const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        liveDate.textContent = now.toLocaleDateString('en-IN', opts);
    }

    const footerYear = document.getElementById('footer-year');
    if (footerYear) {
        footerYear.textContent = now.getFullYear() + ' \u00A9 Gokul Accord CHS Ltd';
    }
});
