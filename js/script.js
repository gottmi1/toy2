    const $orchid = document.querySelectorAll('#blackorchid > h1');
    console.log($orchid);
    const $tomBot = document.querySelectorAll('#tomford-bot>div');
    console.log($tomBot);


    const $herSec = document.querySelectorAll('#hermes>section');
    console.log($herSec);
    const $hermes = document.querySelector('#hermes');

    function move(X, Y) {
      scrollTo(X, Y);
    }

    const $topbtn =document.querySelector('#topbtn'); 
    const $section = document.querySelectorAll('.back>section');
    console.log($section)
    const outputEle = document.querySelector('.back');
    console.log(outputEle);

    //slider

    const $slides = document.querySelectorAll('#slide');
    console.log($slides);

    let index = 0;
    setInterval(() => {
      if(index < $slides.length-1) {
        $slides[index].style.marginLeft = '-100vw';
        index += 1;
      } else { 
        index = 0;
        for(let i = 0; i< $slides.length; i++) {
        $slides[i].style.marginLeft = '0vw';
        }
      }
    }, 2000);
    //slider 
  

    
    const kurTxt = document.querySelector('#section1 h1');
    const kurImg = document.querySelectorAll('#section1>div');
    console.log(kurTxt);
    console.log(kurImg);
    const $satin = document.querySelector('#satin');
    const $satinTitle = document.querySelector('#section2>h1')
    console.log($satinTitle);
    const $satinImg = document.querySelectorAll('#section2 div');
    console.log($satinImg);

    const $dipSection = document.querySelectorAll('#section3 div')
    console.log($dipSection);

  
    window.addEventListener('scroll', (e) => {

      const posY = outputEle.getBoundingClientRect().bottom;
      console.log(scrollY);
      console.log(posY);

      if (scrollY >= 300) {
        kurTxt.style.opacity = "1";
        kurImg[0].style.opacity = "1";
        kurImg[1].style.opacity = "1";
      } else {
        kurTxt.style.opacity = "0"
        kurImg[0].style.opacity = "0";
        kurImg[1].style.opacity = "0";
      }
      // 섹션 1박스

      if (scrollY >= 1000 && scrollY <= 1800) {
      $satin.style.top = "0px";
      $satin.style.opacity = "1";
      $satin.style.position = "fixed";
      } else {
      $satin.style.opacity = "0";
      }

      //섹션2 사틴무드 이미지

      if ( scrollY >= 1800 && scrollY < 2300) {
        $satinTitle.style.transform = "scale(1)";
        $satinTitle.style.top = "5vh";
        $satinTitle.style.position = "fixed";
        
      } else {
        $satinTitle.style.transform = "scale(0)";
        $satinTitle.style.top = "-30%";
      }

      // 섹션3 사틴무드 텍스트

      if (scrollY >= 1900) {
        $section[1].style.opacity = "1";
        for(let i = 0; i<$satinImg.length; i++) {
          setInterval(() => {  
            $satinImg[i].style.opacity = "1";
          }, (500) * (i+1));
        }
        $topbtn.style.opacity = "1";
        //사틴무드 이미지 3개
      }

      if (scrollY >= 2900 && scrollY < 4100) {
        $dipSection[0].style.left = "10vw";
        $dipSection[0].style.opacity = "0.7";
        $dipSection[1].style.right = "5vw";
        $dipSection[1].style.opacity = "0.7";
        $dipSection[2].style.left = "20vw";
        $dipSection[2].style.opacity = "0.7";
      } else {
        $dipSection[0].style.left = "-10vw";
        $dipSection[0].style.opacity = "0";
        $dipSection[1].style.right = "-5vw";
        $dipSection[1].style.opacity = "0";
        $dipSection[2].style.left = "-20vw";
        $dipSection[2].style.opacity = "0";
      }

      if (scrollY > 4100) {
        $section[3].style.opacity = 1;
        $satin.style.position = "";
      }

      if (scrollY > 4200 && scrollY < 6800) {
        $section[3].style.opacity = "1";
        $section[3].style.position = "fixed";
        $section[3].style.top = "0";
      } else {
        $section[3].style.opacity = "0";

      }

      if (scrollY > 5100) {
        $section[3].children[0].style.opacity = "1";
      } else {
        $section[3].children[0].style.opacity = "0";
      }
      if (scrollY > 5800) {
        $section[3].children[1].style.opacity = "1";
      } else {
        $section[3].children[1].style.opacity = "0";
      }
      if (scrollY > 6400) {
        $section[3].children[2].style.opacity = "1";
      } else {
        $section[3].children[2].style.opacity = "0";
      }

      if (scrollY >= 8500) {
        $section[3].style.display = "none";
      }

      if (scrollY >= 8200 && scrollY <= 9500) {
        $hermes.style.position = "fixed";
        $hermes.style.top = "0";
      } else {
        $hermes.style.position = "";
        $hermes.style.top = "8200px";
      }

      if (scrollY >= 8500) {
        $herSec[2].style.opacity = "0";
        $herSec[0].style.opacity = "1";
      } else {
        $herSec[2].style.opacity = "1";
        $herSec[0].style.opacity = "0";
      }

      if (scrollY >= 8700 && scrollY <= 9100) {
        $herSec[1].style.opacity = "1";
      } else if(scrollY >= 8900 && scrollY <= 9400) {
        $herSec[0].style.backgroundImage = "url(./img/hermesperfume.jpg)";
        $herSec[0].children[0].style.opacity = "0";
        $herSec[0].children[1].style.opacity = "1";
      } else {
        $herSec[1].style.opacity = "0";
      }
      // 이걸로 [1]이 중간에 나오게 하고 -> 그 사이에 [0]안의 이미지 url을 변경해서 이미지가 더 여러개 인 효과를 줘보자.


      if (scrollY >= 9500) {
        $hermes.style.top = "9500px";
        $hermes.style.position = "absolute";
      }

      if (scrollY >= 10300){
        for(let i = 0; i<$orchid.length; i++) {
        setInterval(() => {
            $orchid[i].style.opacity = "1";
        }, (80) * (1+i));
      }
      document.querySelector('#section8 > #logo').style.left = "15vw";
      }


      if ( scrollY >= 12100 && scrollY <= 12700) {
        for ( let i = 0; i < $tomBot.length; i++) {
          $tomBot[i].style.transform = "scale(1.0)";
        } 
        $tomBot[0].style.top = "10vh";
        $tomBot[1].style.top = "5vh";
        $tomBot[2].style.top = "45vh";
      } else {
        for ( let i = 0; i < $tomBot.length; i++) {
          $tomBot[i].style.transform = "scale(0)";
          $tomBot[i].style.top = "-50vh";
        } 
      }

      for(let i =0; i < $tomBot.length; i++) {
        $tomBot[i].addEventListener('click', () => {
          $tomBot[i].style.opacity = "0"
        })
      }
    })

    
//git