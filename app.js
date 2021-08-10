var shape = 0;
var color = 0;
var items = 100;
document.getElementById('page2').style.display = 'none';
document.getElementById('page3').style.display = 'none';
// (bg.html) berilgan shakildagi div larni generatsiya qilib style bilan chiqarin beradi
function generate(){
    var clr = document.querySelectorAll('span');
    for (let i = 0; i < clr.length; i++) {
        d = document.querySelector('span');
        d.parentNode.removeChild(d);
    }
    if (window.innerWidth < 500) {
        items = 200
    }
    for (let i = 0; i < items; i++) {
        var element = document.createElement('div');
        var span = document.createElement('span');
        span.appendChild(element);
        span.classList.add('shadow');
        element.classList.add('block');
        document.body.appendChild(span);
        element.style.opacity = 0;

// shaklga berildigan rangni aniqlash
        if( color === 1){
            element.style.background = 'rgb(237,185,185)';
        }else if(color === 2){
            element.style.background = 'rgb(143,35,35)';
        }else if(color === 3){
            element.style.background = 'rgb(255,0,0)';
        }else if(color === 4){
            element.style.background = 'rgb(0,0,0)';
        }else if(color === 5){
            element.style.background = 'rgb(255,255,0)';
        }else if(color === 6){
            element.style.background = ' rgb(185,215,237)';
        }else if(color === 7){
            element.style.background = 'rgb(35,98,143)';
        }else if(color === 8){
            element.style.background = 'rgb(115,115,115)';
        }else if(color === 9){
            element.style.background = 'rgb(0,234,255)';
        }else if(color === 10){
            element.style.background = 'rgb(231,233,185)';
        }else if(color === 11){
            element.style.background = 'rgb(143,106,35)';
        }else if(color === 12){
            element.style.background = 'rgb(204,204,204)';
        }else if(color === 13){
            element.style.background = 'rgb(170,0,255)';
        }else if(color === 14){
            element.style.background = 'rgb(220,185,237)';
        }else if(color === 15){
            element.style.background = 'rgb(107,35,143)';
        }else if(color === 16){
            element.style.background = 'rgb(255,127,0)';
        }else if(color === 17){
            element.style.background = 'rgb(185,237,224)';
        }else if(color === 18){
            element.style.background = 'rgb(79,143,35)';
        }else if(color === 19){
            element.style.background = 'rgb(191,255,0)';
        }else if(color === 20){
            element.style.background = 'rgb(0,149,255)';
        }else if(color === 21){
            element.style.background = 'rgb(255,0,170)';
        }else if(color === 22){
            element.style.background = 'rgb(255,212,0)';
        }else if(color === 23){
            element.style.background = 'rgb(106,255,0)';
        }else if(color === 24){
            element.style.background = 'rgb(0,64,255)';
        }
    // shaklga berildigan rangni aniqlash

        if (shape === 1) {
            element.style.clipPath = 'polygon(25% 0%, 75% 0%, 100% 25%, 98% 85%, 25% 100%, 0 64%)';
        }else if(shape === 2){
            element.style.clipPath = 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';
        }else if(shape === 3){
            element.style.clipPath = 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)';
        }else if(shape === 4){
            element.style.clipPath = 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)';
        }else if(shape === 5){
            element.style.clipPath = 'circle(50% at 50% 50%)';
        }else if(shape === 6){
            element.style.clipPath = 'polygon(50% 0%, 63% 30%, 100% 25%, 68% 57%, 100% 86%, 50% 73%, 18% 100%, 32% 57%, 0 24%, 39% 35%)';
        }
}
   

            anime({
                targets: '.block',
                translateX: function(){
                    return anime.random(-700,700)
                },
                translateY: function(){
                    return anime.random(-700,700)
                },
                scale: function(){
                    return anime.random(1,5)
                },
                opacity: function(){
                    return 1;
                }
              });
        }

// Asosiy pageda berilgan shakklar hover bo'ganda body background rangining o'zgarishi

        var shakl1 = document.getElementById('shakl1');
        var shakl2 = document.getElementById('shakl2');
        var shakl3 = document.getElementById('shakl3');
        var shakl4 = document.getElementById('shakl4');
        var shakl5 = document.getElementById('shakl5');
        var shakl6 = document.getElementById('shakl6');

// 1 - shakl hover buganda ishga tushadi

        shakl1.addEventListener('mouseover', ()=>{
            document.body.classList.add('color1')
        });
        shakl1.addEventListener('mouseleave', ()=>{
            document.body.classList.remove('color1')
        });

// 2 - shakl hover buganda ishga tushadi

        shakl2.addEventListener('mouseover', ()=>{
            document.body.classList.add('color2')
        });
        shakl2.addEventListener('mouseleave', ()=>{
            document.body.classList.remove('color2')
        });

// 3 - shakl hover buganda ishga tushadi

        shakl3.addEventListener('mouseover', ()=>{
            document.body.classList.add('color3')
        });
        shakl3.addEventListener('mouseleave', ()=>{
            document.body.classList.remove('color3')
        });

// 4 - shakl hover buganda ishga tushadi

        shakl4.addEventListener('mouseover', ()=>{
            document.body.classList.add('color4')
        });
        shakl4.addEventListener('mouseleave', ()=>{
            document.body.classList.remove('color4')
        });

// 5 - shakl hover buganda ishga tushadi

        shakl5.addEventListener('mouseover', ()=>{
            document.body.classList.add('color5')
        });
        shakl5.addEventListener('mouseleave', ()=>{
            document.body.classList.remove('color5')
        });

// 6 - shakl hover buganda ishga tushadi

        shakl6.addEventListener('mouseover', ()=>{
            document.body.classList.add('color6')
        });
        shakl6.addEventListener('mouseleave', ()=>{
            document.body.classList.remove('color6')
        });
        
        var page1 = document.getElementsByClassName('tauch');
        for (var i = 0 ; i < page1.length; i++) {
            page1[i].addEventListener('click', function(){
                document.getElementById("page1").style.display = "none";
                document.getElementById("page2").style.display = "unset";
            });
         }
         var page2 = document.getElementsByClassName('rang');
         for (var i = 0 ; i < page2.length; i++) {
             page2[i].addEventListener('click', function(){
                 document.getElementById("page2").style.display = "none";
                 document.body.style.padding = 0;
                 document.body.style.overflow = "hidden";
                 document.body.style.width = "100vw";
                 document.body.style.height = "100vh";
                 document.getElementById("page3").style.display = "block";
             });
          }