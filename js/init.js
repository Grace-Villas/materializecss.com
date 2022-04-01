document.addEventListener('DOMContentLoaded', function() {
    /*NAVEGACION*/
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    /*SLIDER*/
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems,{
        indicators:false,
        height: 500,
        duration: 500,
        interval: 3000
    });
  });