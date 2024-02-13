const ytVideos = document.getElementById('ytVideos')
const cardVideos = document.getElementById('cardVideos').content
//const ytVideosDetails = document.getElementById('videoDetails')
//const cardDetails = document.getElementById('cardDetails').content
const fragment = document.createDocumentFragment()
let contents

document.addEventListener('DOMContentLoaded', () => {
    loadData()
})
const loadData = async () => {
    const url = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCX6OQ3DkcsbYNE6H8uQQuVA&hl=en&gl=US';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8608917c9emsh7f5e6b12a812d15p1f34cbjsnbb86019cb253',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
    };

    try {
        const response = await fetch(url, options);
        contents = await response.json();
        console.log('$$Videos => ',contents);
        createCards()
    } catch (error) {
        console.error(error);
    }
}

const createCards = () => {
    ytVideos.innerHTML = ''
    contents.contents.forEach((videos) => {
        const clone = cardVideos.cloneNode(true)
        clone.querySelector('.miniatura').setAttribute('src', videos.video.thumbnails[0].url)
        clone.querySelector('.titulo').textContent = videos.video.title
        
        fragment.appendChild(clone)
    })
    
    
    ytVideos.appendChild(fragment)
}