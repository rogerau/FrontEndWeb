// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");

// Get the image and insert it inside the modal
var img1 = document.getElementById("image1");
var modalImg1 = document.getElementById("img01");
var img2 = document.getElementById("image2");
var modalImg2 = document.getElementById("img02");
var img3 = document.getElementById("image3");
var modalImg3 = document.getElementById("img03");
var img4 = document.getElementById("image4");
var modalImg4 = document.getElementById("img04");
var img5 = document.getElementById("image5");
var modalImg5 = document.getElementById("img05");
var img6 = document.getElementById("image6");
var modalImg6 = document.getElementById("img06");
img1.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = this.src;
}
img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
}
img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
}
img4.onclick = function(){
    modal4.style.display = "block";
    modalImg4.src = this.src;
}
img5.onclick = function(){
    modal5.style.display = "block";
    modalImg5.src = this.src;
}
img6.onclick = function(){
    modal6.style.display = "block";
    modalImg6.src = this.src;
}

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];
var span5 = document.getElementsByClassName("close")[4];
var span6 = document.getElementsByClassName("close")[5];
// When the user clicks on <span> (x), close the modal

span1.onclick = function closeModal(){
    modal1.style.display = "none";
}

span2.onclick = function closeModal() {
    modal2.style.display = "none";
}
  
span3.onclick = function closeModal() {
    modal3.style.display = "none";
}
  
span4.onclick = function closeModal() {
    modal4.style.display = "none";
}
  
span5.onclick = function closeModal() {
    modal5.style.display = "none";
}
  
span6.onclick = function closeModal() {
    modal6.style.display = "none";
}

//When the user clicks anywhere on the webpage, close the modal
