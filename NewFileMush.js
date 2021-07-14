const hover = document.getElementById('beginButton');
const keyFrames = document.querySelector('.animated');

hover.addEventListener('click', function(e){
    document.body.classList.add('animated')

    // document.body.style.animation = 'fadeInAnimation ease 3';
    // document.body.style.animationIterationCount = '4s';
    // document.body.style.animationFillMode = 'forwards';
})

hover.addEventListener('mouseover', function(e){
    hover.style.color = 'rgb(177, 80, 0)'
    hover.style.transition = '1s';
    hover.style.boxShadow = '0px 4px 0px 4px  rgb(0,0,0,0.2)';

})

hover.addEventListener('mouseout', function(e){
    hover.style.color = "rgb(31, 133, 40)";
    hover.style.transition = "1s";
    hover.style.boxShadow = '0.5px 2px rgb(0,0,0,0.3)';
    hover.style.trasition = '1s';
})

hover.addEventListener('mousedown', function(e){
    hover.style.color = 'rgb(241, 241, 182)';
    hover.style.boxShadow = '1px 4px rgba(0, 0, 0,0.35)'
    hover.style.background = 'rgba(126, 126, 126, 0.5)';
    hover.style.transition ='0.3s'
})

hover.addEventListener('mouseup', function(){
    hover.style.color = 'rgb(255, 189, 136)'
    hover.style.transition = '1s';
    hover.style.boxShadow = '4px 7px rgb(0,0,0,0.2)'
    hover.style.position = '6px 0px 0px 0px'
    hover.style.backgroundColor ='rgba(255, 255, 255, 0.5)'
    hover.style.transition ='0.3s'
})

