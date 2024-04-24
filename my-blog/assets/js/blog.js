const backButton = document.querySelector('#backBtn');
const articleEl = document.querySelector('#article');
const clearBtn = document.querySelector('#clearBtn');
//sends back to index.html when back button click
backButton.addEventListener('click', function(){
   
   window.location.replace('index.html'); 
    if (!blogPosts){
        return;
    }
    
})
// adds blogs to html on load using local storage
const blogPosts = JSON.parse(localStorage.getItem('jsonBlog'));
    console.log(blogPosts);
    for (blogPost of blogPosts){
        //creates, fills, and positions new blogs using Array 
       const card = document.createElement('figure');
       const titleEl = document.createElement('h3');
       const contentEl = document.createElement('p');
       const authorEl = document.createElement('p');

       titleEl.textContent = `${blogPost.title}`;
       contentEl.textContent = `${blogPost.content}`;
       authorEl.textContent = `Posted by: ${blogPost.username}`;
    
       card.appendChild(titleEl);
       card.appendChild(contentEl);
       card.appendChild(authorEl);
       articleEl.appendChild(card);
        // CSS Styling on new elements
       card.setAttribute('class', 'card');
       titleEl.setAttribute('class', 'title');
       contentEl.setAttribute('class', 'contents');
       authorEl.setAttribute('class', 'author');
    } 
    // just for fun
    // A button to clear blogs with two confirms and must be clicked twice to function  
    clearBtn.addEventListener('dblclick', function(){
        const areYouSure = window.confirm('Are you sure you wish to clear all blogs?');
        if (areYouSure){
            const areYouReallySure = window.confirm('Are you REALLY sure?');
            if (areYouReallySure){
                localStorage.clear();
                window.location.reload();
            }
        }
    })