var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
 var slideCount = sliderImages.length ; 
 var currentSlide = 1 ;
 var sliderNumberElement = document.getElementById('slider-number');
 var pervBtn = document.getElementById('prev');
 var nextBtn = document.getElementById('next');

 nextBtn.onclick = nextSlide ; 
 pervBtn.onclick = prevSlide ; 

 var pagElement = document.createElement('ul');
 pagElement.setAttribute('id' , 'pag-ul');


 for (var i = 1; i <= slideCount; i++) {
    var pagItem = document.createElement('li');
    pagItem.setAttribute('data-index',i)
    pagItem.appendChild(document.createTextNode(i));
    pagElement.appendChild(pagItem);
}

document.getElementById('indicators').appendChild(pagElement);
var pagCreatedUl = document.getElementById('pag-ul');
var pagBullets = Array.from(document.querySelectorAll('#pag-ul li'));
for(var i = 0 ; i < pagBullets.length ; i++){
    pagBullets[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();   
    }
}
theChecker()

 function nextSlide(){
    //  console.log('Next')
    if(nextBtn.classList.contains('disablednext')){
        return false ; 
    }else {
        currentSlide++ ;
        theChecker();
    }
 }

 function prevSlide(){
    if(pervBtn.classList.contains('disabledprev')){
        return false ; 
    }else {
        currentSlide-- ;
        theChecker();
    }
 }

 function theChecker(){
    sliderNumberElement.textContent = 'Slide # ' + ( currentSlide ) + ' Of ' +(slideCount) ;
    removeAllActive()
    sliderImages[currentSlide - 1].classList.add('active');
    pagCreatedUl.children[currentSlide - 1 ].classList.add('active');
    if (currentSlide === 1) {
        pervBtn.classList.add('disabledprev');
        pervBtn.classList.remove('prev');
      } else {
        pervBtn.classList.remove('disabledprev');
        pervBtn.classList.add('prev');
      };
      if (currentSlide === slideCount) {
        nextBtn.classList.add('disablednext');
        pervBtn.classList.remove('next');
      } else {
        pervBtn.classList.remove('disablednext');
        pervBtn.classList.add('next');
      };
    // removeAllActive()
 }


 function removeAllActive(){
    sliderImages.forEach(function(img){
        img.classList.remove('active');
    });
    pagBullets.forEach(function(bullet){
        bullet.classList.remove('active');
    });
 }











