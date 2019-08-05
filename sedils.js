    hljs.initHighlightingOnLoad();

    var slides = document.querySelectorAll('.slide');
    document.getElementById("container").innerHTML = "";

    function getSlideNumber() {
      var slideNumber = parseInt(window.location.hash.substring(1))
      if (isNaN(slideNumber)) {
        return 0
      }
      return slideNumber
    }



    function nextSlide() {
      var nextNumber = getSlideNumber() + 1
      if (nextNumber > (slides.length - 1)) {
        nextNumber = slides.length - 1
      }
      window.location.hash = nextNumber;
    };

    function previousSlide() {
      var previousNumber = getSlideNumber() - 1
      if (previousNumber < 0) {
        previousNumber = 0;
      }
      window.location.hash = previousNumber;

    }

    function displaySlide() {
      var slideNumber = getSlideNumber()
      document.getElementById("container").innerHTML = slides[slideNumber].outerHTML;
      hljs.initHighlighting.called = false;
      hljs.initHighlighting();
    }




    window.addEventListener('hashchange', function () {
      displaySlide()
    }, false);



    document.addEventListener("keyup", event => {
      console.log(event.keyCode);
      if (event.keyCode === 39) {
        console.log("Next");
        nextSlide();
      }
      if (event.keyCode === 37) {
        console.log("Previous");
        previousSlide();
      }
      if (event.keyCode === 70) {
        window.open(window.location.href, 'video',
          'directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,resizable=no,width=1280,height=720'
          );
      }
    });

    displaySlide()
