$(function () {

    $('.works__slider').slick({
        nextArrow: '<button type="button" class="slick_button slick-next fa fa-chevron-right"></button>',
        prevArrow: '<button type="button" class="slick_button slick-prev  fa fa-chevron-left"></button>',
        slidesToShow: 3,
        infinite: false,


    });


 

    const progressbarTeamWork = document.querySelector(".progress-teamwork");
    const changeProgressTeamWork = (progress) => {
        progressbarTeamWork.style.width = `${progress}%`;

        setInterval(TeamWorkinterval,60);
        var currentTeamWorkinterval = 0;
        function TeamWorkinterval() {
            $('.teamwork-procent').text(currentTeamWorkinterval).text;
            if (currentTeamWorkinterval < 80) {
                currentTeamWorkinterval++;
            }
        }

    };
    setTimeout(() => changeProgressTeamWork(80), 4000);

    const progressbarC = document.querySelector(".progress-c");
    const changeProgressC = (progress) => {
        progressbarC.style.width = `${progress}%`;

        setInterval(Cinterval,240);
        var currentCinterval = 0;
        function Cinterval() {
            $('.c-procent').text(currentCinterval).text;
            if (currentCinterval < 20) {
                currentCinterval++;
            }
        }
    };
    setTimeout(() => changeProgressC(20), 5000);

    const progressbarHtml = document.querySelector(".progress-html");
    const changeProgressHtml = (progress) => {
        progressbarHtml.style.width = `${progress}%`;

        setInterval(Htmlinterval,100);
        var currentHtmlinterval = 0;
        function Htmlinterval() {
            $('.html-procent').text(currentHtmlinterval).text;
            if (currentHtmlinterval < 50) {
                currentHtmlinterval++;
            }
        }
    };
    setTimeout(() => changeProgressHtml(50), 6000);

    const progressbarAutodesk = document.querySelector(".progress-autodesk");
    const changeProgressAutodesk = (progress) => {
        progressbarAutodesk.style.width = `${progress}%`;

        setInterval(Autodeskinterval,100);
        var currentAutodeskinterval = 0;
        function Autodeskinterval() {
            $('.autodesk-procent').text(currentAutodeskinterval).text;
            if (currentAutodeskinterval < 50) {
                currentAutodeskinterval++;
            }
        }
    };
    setTimeout(() => changeProgressAutodesk(50), 7000);

    const progressbarProteus = document.querySelector(".progress-proteus");
    const changeProgressProteus = (progress) => {
        progressbarProteus.style.width = `${progress}%`;

        setInterval(Proteusinterval,80);
        var currentProteusinterval = 0;
        function Proteusinterval() {
            $('.proteus-procent').text(currentProteusinterval).text;
            if (currentProteusinterval < 60) {
                currentProteusinterval++;
            }
        }
    };
    setTimeout(() => changeProgressProteus(60), 8000);



    const progressbarAltium = document.querySelector(".progress-altium");
    const changeProgressAltium = (progress) => {
        progressbarAltium.style.width = `${progress}%`;

        setInterval(Altiuminterval,120);
        var currentAltiuminterval = 0;
        function Altiuminterval() {
            $('.altium-procent').text(currentAltiuminterval).text;
            if (currentAltiuminterval < 40) {
                currentAltiuminterval++;
            }
        }

        
    };
    setTimeout(() => changeProgressAltium(40), 9000);



    function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
           change.target.classList.add('element-show');
          }
        });
      }
      
      let options = {
        threshold: [0.5] };
      let observer = new IntersectionObserver(onEntry, options);
      let elements = document.querySelectorAll('.element-animation');
      
      for (let elm of elements) {
        observer.observe(elm);
      }
    



    











});
