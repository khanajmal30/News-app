const apiKey = 'ce16b559ff4275ac9e4b399003576e80';
const apiUrl = 'http://localhost/aconews/news.php';

let currentPage = 1;

document.addEventListener('DOMContentLoaded', function() {
    fetchNews();
});

function fetchNews(endpoint = 'top-headlines', query = '', page = 1) {
    fetch(`${apiUrl}?endpoint=${endpoint}&q=${query}&page=${page}`)
        .then(response => response.json())
        .then(data => {
            displayNews(data.articles);
            setupPagination(data.totalResults);
        })
        .catch(error => console.error('Error fetching news:', error));
}

function displayNews(articles) {
    const newsList = document.getElementById('newsList');
    newsList.innerHTML = '';
    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        newsList.appendChild(newsItem);
    });
}

function setupPagination(totalResults) {
    const pagination = document.getElementById('pagination');
    const totalPages = Math.ceil(totalResults / 10); // Assuming 10 items per page
    pagination.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerText = i;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            fetchNews('top-headlines', '', currentPage);
        });
        pagination.appendChild(pageButton);
    }
}

function searchNews() {
    const query = document.getElementById('searchInput').value;
    fetchNews('search', query);
}

function showLogin() {
    document.getElementById('loginForm').classList.remove('hidden');
}

function showSignup() {
    document.getElementById('signupForm').classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}
