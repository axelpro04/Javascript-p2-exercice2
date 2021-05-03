  /*test 1*/

// function agrandir() {
//     var herbe = document.getElementById("herbe");
//     var width = herbe.clientWidth;
//     if (width == 600) {
//         alert("Vous avez atteint le niveau de zoom maximal.");
//     } else {
//         herbe.style.width = (width + 20) + "px";
//     }
// }
// function diminuer() {
//     var herbe = document.getElementById("herbe");
//     var width = herbe.clientWidth;
//     if (width == 40) {
//         alert("Vous avez atteint le niveau de zoom minimal.");
//     } else {
//         herbe.style.width = (width - 20) + "px";
//     }
// }

/*test 2*/ 

// function showGrandeImg(img){
//     var srcGrande = img.src2;
//     var srcPetite = img.src;
//     img.src2 = srcPetite;
//     img.src = srcGrande;
//     img.taille = "grande";
//         }
         
//         function showPetiteImg(img){
//     var srcGrande = img.src;
//     var srcPetite = img.src2;
//     img.src2 = srcGrande;
//     img.src = srcPetite;
//     img.taille = "petite";
//         }
         
//         function changeTailleImg(img){
//             if(!img.src2){
//                 img.src2 = img.getAttribute("src2");
//             }
//             if(!img.taille || img.taille=="petite"){
//                 showGrandeImg(img)
//             }else{
//                 showPetiteImg(img)
//             }
//         }

/* test 3*/

document.getElementById('touch').onclick = function imgGrow() {
    var myImg = document.getElementById('touch');
    var width = myImg.clientWidth;
    myImg.style.width = (width + 100) + "px";

    if( width >= 1000 ){
    myImg.style.width = 600 + 'px';
    }
    else if ( width < 1000 ){
      myImg.style.width = ( width + 100) + 'px';
    }
}