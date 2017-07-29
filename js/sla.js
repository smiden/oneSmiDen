 // page 6
 $('.content__six--sl1').slick({
    arrows: false,
  asNavFor: '.content__six--sl2',
  cssEase: 'ease-in',
infinite: false


  });
  

   $('.content__six--sl2').slick({
        asNavFor: '.content__six--sl1',
     slidesToShow:6,
     arrows: true,
    focusOnSelect: true, 
     responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 5,
      
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 4,
       
      }
    },
{
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
       
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
       
      }
    },
   
  
  ]
});


// page 8
    $('.content__eight--sl2').slick({
    arrows: false,
  asNavFor: '.content__eight--sl1',
  cssEase: 'ease-in',
  infinite: true,
infinite: false,
 arrows: false,
centerPadding: '0px'


  });
  

   $('.content__eight--sl1').slick({
        asNavFor: '.content__eight--sl2',
         centerMode: true,
     slidesToShow:3,
     arrows: true,
    focusOnSelect: true, 
    infinite: true,
     arrows: false,
     centerPadding: '0px'

    

         
  });