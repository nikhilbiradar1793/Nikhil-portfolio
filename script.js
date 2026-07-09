function showMessage() {

document.getElementById("msg").innerHTML =
"Thank you for visiting my portfolio!";
}

const uploadPhoto =
document.getElementById("uploadPhoto");

const profilePic =
document.querySelector(".profile-pic");

uploadPhoto.addEventListener("change", function(){

const file = this.files[0];

if(file){

const reader = new FileReader();

reader.onload = function(e){

profilePic.src = e.target.result;

};

reader.readAsDataURL(file);

}

});


