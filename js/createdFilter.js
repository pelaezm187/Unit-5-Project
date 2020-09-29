const search = document.getElementById('search');
let gallery = document.getElementsByClassName('photo');

searchBar.addEventListener('keyup', (e) => {
	const searchString = e.target .value.toUpperCase();

	for (let i = 0; i < gallery.length; i++) {
		const searchInput = gallery[i].getAttribute('data-caption').toUpperCase()
		
		if (searchInput.includes(searchString)) {
			gallery[i].style.display = '';
			
		} else {
            gallery[i].style.display = 'none';
        }
    }
});