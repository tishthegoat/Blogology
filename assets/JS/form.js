const nameInp = document.getElementById("name");
const titleInp = document.getElementById("title");
const contentInp = document.getElementById("content");
const submitBtn = document.getElementById("postBtn");


submitBtn.addEventListener('click', function(submitForm){
	submitForm.preventDefault();

	let previousBlogs = JSON.parse(localStorage.getItem('blogs'));
	if(previousBlogs == null || previousBlogs == undefined) previousBlogs = [];
	
	if(!nameInp.value){
		alert('Please enter your username');
		return;
	}
	if(!titleInp.value){
		alert('Please enter a title');
		return;
	}
	if(!contentInp.value){
		alert('Please enter content');
		return;
	}
	

	const name = nameInp.value;
	const title = titleInp.value;
	const content = contentInp.value;
	
	
	let blogData = { 
		"name": name,
		"title":title,
		"content": content
	};

	previousBlogs.push(blogData);
	
	localStorage.setItem('blogs', JSON.stringify( previousBlogs));
	
	window.location.href = 'blog.html';
});
