// var id = null;
// function myMove() {
//   var elem = document.getElementById("myAnimation");
//   var pos = 0;
//   clearInterval(id);
//   id = setInterval(frame, 10);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + 'px';
//       elem.style.left = pos + 'px';
//     }
//   }
// }

function popup() {
    if(confirm("Are you sure you would like to open a resume?")) {
        open("files/resume.pdf", '_blank');
    }
}