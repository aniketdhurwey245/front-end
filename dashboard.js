const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
else{
    entry.target.classList.remove('show');
}
    })
});


const hiddenElement = document.querySelectorAll(".hidden")
hiddenElement.forEach((el) => observer.observe(el));

//create elements by javascript//

const noticeBoard = document.querySelector('.notice');
console.log(noticeBoard);

const info = document.querySelector('.info');
info.innerText = 'All the Student get their information from here ! We hope you  have got the notice the all the circuler provided by the college.'
info.style.margin = "8px"
info.style.color = "brown"





//addEventListner to nav-content

const navContent  = document.querySelector(".nav-content").addEventListener('click', function(){
alert("click me !")
})