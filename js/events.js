const btn = document.querySelector('#btn');

btn.onclick = () => alert("button clicked");


const btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', () => {
    alert('EventListener');
});

// using named functions best practice


function alt(){
    alert('alert function');
}


btn.onclick = alt;

btn2.addEventListener('click',alt);



//call backs recheck

btn.addEventListener('click',function(e){
    e.target.style.background = 'blue';;
})


//attaching event listeners to a group of nodes

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {

    button.addEventListener('click', () => {
        alert(button.id);
    });
    
});