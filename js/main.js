const searchEl = document.querySelector('.search'); //document = HTML
const searchInputEl = searchEl.querySelector('input');
//searchEl 안에 있는 input요소를 찾는 것.

searchEl.addEventListener('click', function(){
//addEventListener :  이벤트를 추가하는 것 - 클릭하면 함수발생!!
  searchInputEl.focus(); //input요소에 강제적으로 focus를 해라!!
});
searchInputEl.addEventListener('focus', function(){
//focus라는 이벤트가 되면 핸들러(함수) 실행
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색'); //Attribute: HTML속성을 의미.
  //placeholder : input요소에 입력할 부분을 다음 인수에 적으면 됨.
});
//위에꺼만 하면 focus 1회 하고나서는 안없어짐. 즉 아래 다시 없애는 코드 넣어줘야 한다.
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ''); 
});

const badgeEl = document.querySelector('header .badges');

//window 객체: browser하나의 창을 의미. 우리가 보고있는 창을 의미
//그 창에 스크롤 이벤트를 추가해서 화면이 스크롤이 되면 다음 함수를 실항하겠다.
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY > 500){
    //배지 숨기기
      gsap.to(badgeEl, .6, {
        opacity: 0,
        display: 'none'
      });//gsap은 초 단위 0.6초 의미.
      //gsap.to(요소, 지속시간, 옵션);
  } else{
    //배지 보이기
      gsap.to(badgeEl, .6, {
        opacity: 1,
        display: 'block'
      });
  }
  //자연스러운 애니메이션 위해 gsap cdn사용
}, 300)); //300 : 0.3s 의미. 0.3s단위로 부하를 줘서 여러번 실행하는 것을 방지한다.
  //이렇게 되면 한번 스크롤할때마다 수없이 스크롤 로그가 뜨니... 트래픽이 증가., 버벅이는 현상이 생길 수 있으므로,
  // 외부 자바스크립트 라이브러리로 제어해줄 것. (lodash cdn)
  // _.throttle(함수, 시간)

const fadeEls = document.querySelectorAll('.visual .fade-in');
//.visual클래스 내의 .fade-in 클래스를 몽땅 찾아서 fadeEls에 넣을 것.
fadeEls.forEach(function(fadeEl, index){
//몽땅 찾은 fadeEls의 각각의 요소들에 대해서..함수 실행.
  gsap.to(fadeEl, 1,{
      delay: (index + 1) * .7, //index 는 0부터 시작하므로, 처음꺼는 0.7초뒤, 1.4초뒤, 2.1초뒤, 2.8초뒤에 애니메이션이 동작할 것
      opacity: 1
  });
});

// new Swiper (선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  //new 쓰는 것은 생성자(클래스)라 불림.. 자바스크립트의 클래스임..
  // new 생성자 (CSS클래스(=인수), 함수{옵션})
  direction: 'vertical', //수직으로 설정
  autoplay: true, //자동 재생
  loop: true //슬라이드 전체 반복 재생 여부
});
