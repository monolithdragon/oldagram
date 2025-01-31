const posts = [
	{
		name: 'Vincent van Gogh',
		username: 'vincey1853',
		location: 'Zundert, Netherlands',
		avatar: 'assets/images/avatar-vangogh.jpg',
		post: 'assets/images/post-vangogh.jpg',
		comment: 'just took a few mushrooms lol',
		likes: 21,
	},
	{
		name: 'Gustave Courbet',
		username: 'gus1819',
		location: 'Ornans, France',
		avatar: 'assets/images/avatar-courbet.jpg',
		post: 'assets/images/post-courbet.jpg',
		comment: "i'm feelin a bit stressed tbh",
		likes: 4,
	},
	{
		name: 'Joseph Ducreux',
		username: 'jd1735',
		location: 'Paris, France',
		avatar: 'assets/images/avatar-ducreux.jpg',
		post: 'assets/images/post-ducreux.jpg',
		comment:
			'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
		likes: 152,
	},
];

const mainPost = document.getElementById('post');

function render(name, username, location, avatar, post, comment, likes) {
	const postArticle = `
    <article class="card">
            <!-- Card Header -->
            <header class="card-header">
                <img src="${avatar}" alt="${name}'s Avatar" class="avatar-img">
                <div class="card-user-info">
                    <p class="bold-text">${name}</p>
                    <p>${location}</p>
                </div>
            </header>

            <!-- Card Image -->
            <figure class="card-feature">
                <img src="${post}" alt="${name}'s Self-Portrait">
            </figure>

            <!-- Card Content -->
            <div class="card-content">
                <div class="card-actions">
                    <button class="btn" aria-label="Like">
                        <img src="assets/images/icon-heart.png" alt="Heart Icon">
                    </button>
                    <button class="btn" aria-label="Comment">
                        <img src="assets/images/icon-comment.png" alt="Comment Icon">
                    </button>
                    <button class="btn" aria-label="Send Direct Message">
                        <img src="assets/images/icon-dm.png" alt="Direct Message Icon">
                    </button>
                </div>
                <p class="bold-text"><span>${likes}</span> likes</p>
                <p><span class="bold-text">${username}</span> ${comment}</p>
            </div>
        </article>    
    `;

	mainPost.innerHTML += postArticle;
}

for (const post of posts) {
	render(
		post.name,
		post.username,
		post.location,
		post.avatar,
		post.post,
		post.comment,
		post.likes
	);
}

