const loadUserData = async (searchKey) => {
    errorDisplay.innerHTML = '';
    const url = `https://api.github.com/users/${searchKey}`;
    const res = await fetch(url);
    if (!res.ok) {
        if (res.status === 404) {
            console.log("User not found");
            showError(`"${searchKey}" Not Found`)

        } else {
            console.log('Data is incomplete, try again later');
            showError('Data is incomplete, try again later');
        }
        return;
    }

    try {
        const data = await res.json();
        displayUserData(data);
    } catch (error) {
        console.log(error + ' from catch');
        showError('Failed to connect to the API, try again later.');
    }
}
const interfaceCard = document.getElementById('interface-card');
const userPhotoElement = document.getElementById('user-photo');
const interfaceRightTop = document.getElementById('interface-right-top');
const interfaceRightMiddle = document.getElementById('interface-right-middle');
const interfaceRightBottom = document.getElementById('interface-right-bottom');
const displayUserData = (data) => {
    const date = convertDate(data.created_at); // calling function from another js
    console.log(data);
    console.log(data.blog);
    userPhotoElement.src = data.avatar_url;
    interfaceRightTop.innerHTML = `
    <section id = 'top-left'>
    <h2 id = 'user-name'>${data.name}</h2>
    <h4 id = 'user-blog'>${data.login}</h4>
    <p id = 'user-bio' style = 'color: ${data.bio ? '' : 'gray'}'>${data.bio ? data.bio : 'This profile has no bio'}</p>
    </section>
    <section id = 'top-right'>
    <p id = 'join-date'><span>Joined</span> ${date}</p>
    </section>
    `;
    interfaceRightMiddle.innerHTML = `
    <section class = 'middle-item'>
    <h4>Repos</h4>
    <p>${data.public_repos}</p>
    </section>
    <section class = 'middle-item'>
    <h4>Followers</h4>
    <p>${data.followers}</p>
    </section>
    <section class = 'middle-item'>
    <h4>Following</h4>
    <p>${data.following}</p>
    </section>
    `;
    interfaceRightBottom.innerHTML = `
    <section class = 'bottom-item'>
    <i class="fa-solid fa-location-dot"}"></i>
    <p>${data.location ? data.location : '<span style = "color: gray">Not Available</span>'}</p>
    </section>
    <section class = 'bottom-item'>
    <i class="fa-brands fa-twitter"></i>
    <p>${data.twitter_username ? data.twitter_username : '<span style = "color: gray">Not Available</span>'}</p>
    </section>
    <section class = 'bottom-item'>
    <i class="fa-solid fa-blog"></i>
    <p>${data.blog ? `<a href = "${data.blog}" target = "_blank">Website-link</a>` : '<span style = "color: gray">Not Available</span>'}</p>
    </section>
    <section class = 'bottom-item'>
    <i class="fa-solid fa-link"></i>
    <p>${data.html_url ? `<a href = "${data.html_url}" target = "_blank">Github-link</a>` : '<span style = "color: gray">Not Available</span>'}</p>
    </section>
    `;

}

// setting search button up
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', function () {
    const searchValue = searchInput.value;
    if (searchValue === ''){
        alert('Enter a user name')
    } else {
        loadUserData(searchValue);
    }
})
window.addEventListener('load', function () {
    searchInput.focus();
    loadUserData("nishathub");
})