function createMeme(topText,bottomText,imageUrl){
    const memeContainer=document.getElementById('memeContainer');
    const memeDiv=document.createElement('div');
    memeDiv.classList.add('meme');
    const img=document.createElement('img');
    img.src=imageUrl;
    img.alt='Meme Image';
    const topTextDiv=document.createElement('div');
    topTextDiv.classList.add('top-text');
    topTextDiv.innerText=topText;
    const bottomTextDiv=document.createElement('div');
    bottomTextDiv.classList.add('bottom-text');
    bottomTextDiv.innerText=bottomText;
    const deleteButton=document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerText='Delete';
    deleteButton.addEventListener("click",function(){
        memeContainer.removeChild(memeDiv);
    });
    memeDiv.appendChild(img);
    memeDiv.appendChild(topTextDiv);
    memeDiv.appendChild(bottomTextDiv);
    memeDiv.appendChild(deleteButton);
    memeContainer.appendChild(memeDiv);
};
function handleFormSubmit(event){
    event.preventDefault();
    const topText=document.getElementById('topText').value;
    const bottomText=document.getElementById('bottomText').value;
    const imageUrl=document.getElementById('imageUrl').value;
    createMeme(topText,bottomText,imageUrl);
    clearForm();
};




document.getElementById('memeForm').onsubmit=handleFormSubmit;
// document.addEventListener(click,handleDeleteMeme);