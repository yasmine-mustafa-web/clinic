const reviews=[{
    name:"كريمة يوسف",text:"دكتورة ممتازة جدا ربنا يباركلها"
},
{
    name:"أحمد حسني",text:"شاطرة جدا و اهتمام مفيش بعد كدا"
},{
    name:"ندى جودة",text:"أحسن دكتورة جلدية في الاسكندرية "
},{
    name:"اسر فرج",text:"كلمة ممتازة شوية عليها ربنا يباركلها"
},{
    name:"علاء عبدالتواب",text:"عالجتلي حب الشباب كان مالي وشي"
},{
    name:"الاء عماد",text:"شعري كان بيسقط و روحت للدكتورة و الحمد لله"
},{
    name:"احمد سامر",text:"دكتورة اكتر من ممتازة"
},{
    name:"هدى عماد",text:"عن تجربة دكتورة مروة شاطرة جدا"
}];
let currentIndex=0;
function updateReview(){
    const textElement=document.getElementById("review");
    const nameElement=document.querySelector(".nameR");
    textElement.textContent=reviews[currentIndex].text;
    nameElement.textContent=reviews[currentIndex].name;
}
function nextReview(){
    currentIndex++;
    if(currentIndex>=reviews.length){
        currentIndex=0;
    }
            updateReview();

}
function prevReview(){
    currentIndex--;
    if (currentIndex<0){
        currentIndex=reviews.length-1;
    }
            updateReview();

}
setInterval(nextReview,6000);
const menuBtn=document.querySelector(".btnToggle")

function toggleMenu(){
const menu=document.querySelector("#menu");
menu.classList.toggle("open");
}
document.addEventListener("click",(event) =>{
if (!menu.contains(event.target) && !menuBtn.contains(event.target)){
    menu.classList.remove("open")
}
});
function openModal(){
    document.getElementById("bookingModal").style.display="block";
}
function closeModal(){
        document.getElementById("bookingModal").style.display="none";

}
const form=document.getElementById("appointmentForm");
form.addEventListener("submit",(e)=>{
e.preventDefault();
const name =document.getElementById("userName").value;
const phone=document.getElementById("userPhone").value;
const userData={name,phone,date:new Date().toLocaleString()};
localStorage.setItem("lastBooking", JSON.stringify(userData));
alert("Data Saved Successfully!");
    console.log("Saved Data:", userData);
    
    closeModal();
    form.reset();
});
document.addEventListener("click",(event) =>{
const modal=document.querySelector(".modal");
if(modal && modal.style.display==="block"){
    if(event.target === modal){
        modal.style.display="none";
    };
};
});
function openSchedule(){
    document.querySelector(".scheduleContainer").style.display="block";
}
function closeSchedule(){
    document.querySelector(".scheduleContainer").style.display="none";
}
function openScheduleMar(){
    document.querySelector(".scheduleContainerMar").style.display="block";
}
function closeScheduleMar(){
    document.querySelector(".scheduleContainerMar").style.display="none";
}

document.addEventListener("click",(event) =>{
    const buttonMar=document.querySelector(".scMar");
const popupMar=document.querySelector(".scheduleContentMar");
const containerMar=document.querySelector(".scheduleContainerMar");
    const button=document.querySelector(".sc");
const popup=document.querySelector(".scheduleContent");
const container=document.querySelector(".scheduleContainer");
if(container && container.style.display==="block"){
    if(event.target === container){
        container.style.display="none";
    };

}
if(containerMar && containerMar.style.display==="block"){
    if(event.target === containerMar){
        containerMar.style.display="none";
    };
}
});
