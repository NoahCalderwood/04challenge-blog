const user = document.querySelector('#user');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const form = document.querySelector('.form');
const modeswitch = document.querySelector('#modeswitch');
const body = document.querySelector('body');
const submitBtn = document.querySelector('#submit')

let mode = "light"
modeswitch.addEventListener('click', function(){
    if (mode === "light"){
        mode = "dark";
        body.setAttribute('class', "dark");
        modeswitch.textContent = "🌔"; 
        submitBtn.setAttribute('style', 'background-color: black; color: white;');
    } else{
        mode = "light"
        body.setAttribute('class', "light");
        modeswitch.textContent = "☀️";
        submitBtn.setAttribute('style', 'background-color: lightgrey; color: black;'); 
    }
});

const blogArray = [];

form.addEventListener('submit',function(e){
    e.preventDefault();
    const blogPost = {
        username: user.value,
        title: title.value,
        content: content.value,
    }
    if (!blogPost.username || !blogPost.title || !blogPost.content){
        window.alert('Please fill out each space.');
        return;
    }
    
    const blog = JSON.parse(localStorage.getItem('jsonBlog'));
    if (blog){
        for (bPost of blog){
            blogArray.push(bPost);
        }
    }
    blogArray.push(blogPost);
    const jsonBlog = JSON.stringify(blogArray);
    localStorage.setItem('jsonBlog', jsonBlog);
    user.value = '';
    title.value = '';
    content.value = '';
    window.location.replace('blog.html');
})
