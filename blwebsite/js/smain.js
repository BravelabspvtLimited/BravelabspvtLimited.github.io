$(document).ready(function(){
    
    //Init Scrollmagic
    
   // var controller = new ScrollMagic.Controller();
    
    //$('.container').each(function(){
        
        //var mainScene = new ScrollMagic.Scene({
            //triggerElement: this.children[0],
            //triggerHook: 0.8
            
            
        //})
        //.setClassToggle(this, 'fade-in')
        //.addIndicators(
            //{
                //name: 'fade scene',
                //colorTrigger: 'black',
                //colorStart: 'orange',
                //colo00000rEnd: 'indigo'

            //})
        
        
        
        
        //.addTo(controller);
    
    
    
    //var el = $(".el");
//TweenMax.set(el,{autoAlpha:0,left:'0%',xPercent:"-50%"})
//var tl = new TimelineMax({repeat:-1});

//for(var i=0;i<el.length;i++){
  //E = el[i];
  //tl.to(E,0.5,{autoAlpha:1,left:'30%',ease:Power2.easeIn})
  	//.to(E,2,{left:'70%',ease:Power0.easeNone})
  	//.to(E,0.5,{left:'100%',autoAlpha:0,ease:Power2.easeOut})
//};
        
        
    //})
    
   /* var slide2 = $(".titleanim");
    TweenMax.set(slide2, {autoAlpha:0, left:'0%', xPercent:"-250%"})
    var slide2tl = new TimelineMax({repeat: -1});
    
    
    for(var i=0; i<slide2.length; i++){
        E = slide2[i];
        slide2tl.to(E,0.5,{autoAlpha:1, left:'30%', ease:Power2.easeIn})
        .to(E,2,{left:'70%',ease:Power0.easeNone})
        .to(E,0.5,{left:'100%',autoAlpha:0,ease:Power2.easeOut})
        
        
    };*/
    
     /*var controller0 = new ScrollMagic.Controller();
    var animatein0 = new TimelineMax({repeat: -1});
    
    animatein0
    .from('.titleanim', 0.6, {autoAlpha:0, x:"0", y:"80%"}, 0.4);
    
    
    var fadeScene0 = new ScrollMagic.Scene({
        triggerElement: '#homepage',
        triggerHook: 0.2
        
        
    })
    .setTween(animatein0)
    .addTo(controller0);
    */
    
    
    
    
    
   
    
    /*var slide2 = $(".titleanim");
    TweenMax.set(slide2,{left:'0%',xPercent:"-250%"});
    
    var slidet2 = new TimelineMax({repeat:-1});
    
    slidet2.staggerTo(slide2,3,{left:'100%',xPercent:"150%", opacity:0.5, ease:SlowMo.ease.config(0.5,0.9)},3);*/
    
    
     /*var controller0 = new ScrollMagic.Controller();
    var animatein0 = new TimelineMax({repeat: -1});
    
    animatein0
    .from('.titleanim', 0.6, {autoAlpha:0, x:"0", y:"80%"}, 0.4);
    
    
    var fadeScene0 = new ScrollMagic.Scene({
        triggerElement: '#homepage',
        triggerHook: 0.2
        
        
    })
    .setTween(animatein0)
    .addTo(controller0);
    */   
    
    
    
    
    
var tl = new TimelineMax({repeat:-1});

$(".titleanim").each(function(index, element){

    tl.to(element, 3, {left:"15%", opacity:1})
    .to(element, 2, {left:"40%", opacity:0, ease:Power2.easeIn}, "+=1")

})
   
    

//    
    
    var controller7 = new ScrollMagic.Controller();
    
    var animate32a = new TimelineMax();
    animate32a
    .from("#ctitle", 0.4, {autoAlpha:0, x:"-45%", y:"0"}, 0.2)
    .from(".caption-photo one", 0.6, {autoAlpha:0, x:"45%", y:"0"}, 0.2)
    ;
    
    var titleScene = new ScrollMagic.Scene(
        {
            triggerElement: '#ctitle',
            triggerHook: 0.6
            
        }
    
    )
    .setTween(animate32a)
    .addTo(controller7);
    
    ////
    
    var controller1 = new ScrollMagic.Controller();
    
    
    var animatein = new TimelineMax();
    animatein
    
    .from('#bulb img', 1, {scaleX:0,scaleY:0},0.3)
    .from('#howdo', 0.5, {autoAlpha:0.7, ease:Power4.easeIn}, 0.4)
    .from('#dotitle', 1, {autoAlpha:0, ease:Power1.easeIn},0.8)
    
    .from('#tsstyle', 1, {autoAlpha:0, ease:Power2.easeIn},1)
    .from('#taoofsixtitle', 1.2, {autoAlpha:0, ease:Power3.easeNone},1.2)
    
    .from('#taoofsix1', 1, {autoAlpha:0, x:"-100%",y:"0"},2)
    .from('#taoofsix2', 1, {autoAlpha:0, x:"-50%",y:"0"},2);
    
    
    var bulbScene = new ScrollMagic.Scene({
        triggerElement: '#howdo',
        triggerHook: 0.2
        
        
    })
    .setTween(animatein)
    .addTo(controller1);
    
    //
    
    
    var controller1a = new ScrollMagic.Controller();
    
    var animatein2a = new TimelineMax();
    animatein2a
    .from('#sode2 img', 3, {autoAlpha:0, x:"-50%", y:"0"},0.2)
    .from('.dt2', 0.6, {autoAlpha:0, x:"25%", y:"0"},0.2)
    .from('.caption-title1', 0.6,{autoAlpha:0, x:"0", y:"15%"}, 0.6)
    .from('#dwcopy2', 0.6, {autoAlpha:0, x:"0", y:"15%"}, 0.6)
    ;
    
    var whyusScene = new ScrollMagic.Scene({
        triggerElement: '#powerofdata',
        triggerHook: 0.2
    })
    .setTween(animatein2a)
    .addTo(controller1a);
    
    
    
    
   //
    
    
    
    var controller2 = new ScrollMagic.Controller();
    
    var animatein2 = new TimelineMax();
    animatein2
    .from('#sode img', 3, {autoAlpha:0, x:"50%", y:"0"},0.2)
    .from('.dt', 0.6, {autoAlpha:0, x:"-25%", y:"0"},0.2)
    .from('#dwcopy', 0.6, {autoAlpha:0, x:"0", y:"15%"}, 0.6)
    .from('#dwicon', 1.2, {autoAlpha:0, x:"0", y:"40%"}, 1.2)
    ;
    
    var whyusScene = new ScrollMagic.Scene({
        triggerElement: '#whyus',
        triggerHook: 0.2
    })
    .setTween(animatein2)
    .addTo(controller2);
    
    //build a scene alt
    
    var controller47 = new ScrollMagic.Controller();
    var animatein47 = new TimelineMax();
    animatein47
    .from('#sode3 img', 3, {autoAlpha:0, x:"50%", y:"0"}, 0.2)
    .from('.dt3', 0.6, {autoAlpha:0, x:"-25%", y:"0"},0.4)
    .from('#dwcopy3', 0.8, {autoAlpha: 0, x:"0", y:'20%'}, 0.6)
    
    var randomScene = new ScrollMagic.Scene(
    
        {
            triggerElement: '#whyus3',
            triggerHook: 0.5
        
        
        
        }
    
    
    
    )
    .setTween(animatein47)
    .addTo(controller47);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //build a scene
    
    
    
    
    
    
    
    
    
    
    
    var controller3 = new ScrollMagic.Controller();
    var animatein3 = new TimelineMax();
    animatein3
    .from('#solutionst', 0.6, {autoAlpha:0, x:"0", y:"80%"}, 0.4)
    .from('.single-blog', 1.2, {autoAlpha:0, x:"0", y:"80%"}, 0.8)
    //.from('.blog-photo', 0.8, {autoAlpha:0, ScaleX:0, ScaleY:0}, 1.6)
    .from('.blog-content', 0.6, {autoAlpha:0, x:'0', y:'80%'}, 0.8)
    ;
    
    
    var ourSolScene = new ScrollMagic.Scene({
        triggerElement:'#services',
        triggerHook: 0.2
        
    })
    .setTween(animatein3)
    .addTo(controller3);
    
    
    
    ///4th scene
    
    
    //var controller4 = new ScrollMagic.Controller();
    //var animatein4 = new TimelineMax();
    //animatein4
    //.from('#cm', 0.4, {autoAlpha:0, x:'0', y:'80%', ease:Power0.easeOut},1.2)
    //.from('#cmblocker img', 1, {autoAlpha:0, x:"50%", y:"0"},0.4)
    //.from('#VCtitle', 0.4, {autoAlpha:0, x:'0', y:'80%', ease:Power0.easeOut},1.8)
    //.from('#adhd img', 2, {autoAlpha:0, scaleX:0, scaleY:0, ease: Bounce.easeOut}, 0.9)
    //.from('.VCbeliever', 1.2, {autoAlpha:0, ease:Power1.easeOut},2.1)
    //.from('#accordion', 1.4, {autoAlpha:0, ease:Power1.easeOut}, 2.4)
    //.from('#copyprocess1', 1.4, {autoAlpha:0, ease:Power1.easeOut}, 2.5)
    //.from('#copyprocess2', 1.4, {autoAlpha:0, ease:Power1.easeOut}, 2.6)
    //.from('#copyprocess3', 1.4, {autoAlpha:0, ease:Power1.easeOut}, 2.7)
    //.from('#logo-row', 1, {scaleX:0,scaleY:0, ease:Bounce.easeOut},1.8)
    
    
    //;
    
    
    
    
    
    //var cmScene = new ScrollMagic.Scene({
        //triggerElement: '#cm',
        //triggerHook: 0.9
        
    //})
    //.setTween(animatein4)
    //.addTo(controller4);
     
    
    
    //5th scene
    
    
    
    var controller5 = new ScrollMagic.Controller();
    var animatein5 = new TimelineMax();
    animatein5
    .from('#workedw', 0.6, {autoAlpha:0, ease:Power1.easeOut}, 0.6)
    .from('#client-page', 0.6, {autoAlpha:0, ease:Power1.easeOut}, 0.7)
    .from('#team-page', 1.2, {autoAlpha:0,ease:Power1.easeOut}, 0.8)
    ;


    var wwScence = new ScrollMagic.Scene({
        triggerElement: '#worked-with',
        triggerHook: 0.75
        
        
    })
    .setTween(animatein5)
    .addTo(controller5);
  
    
    //6th scene
    
   
    
    
    
    //7th scene
    
    
    var controller7 = new ScrollMagic.Controller();
    var animatein7 = new TimelineMax();
    animatein7
    .from('#contactt', 0.6, {autoAlpha:0, x:'0%', y:'-30%', ease:Bounce.easeOut}, 0.6)
    .from('#add', 0.8, {autoAlpha:0, x:'-40%', y:'0%', ease: Bounce.easeOut})
    .from('#form-name', 0.8, {autoAlpha:0, x:'50%', y:'0%', ease:Power0.easeOut}, 0.9)
    .from('#form-email', 0.8, {autoAlpha:0, x:'70%', y:'0%', ease:Power0.easeOut}, 1.2)
    .from('#form-subject', 0.8, {autoAlpha:0, x:'50%', y:'0%', ease:Power0.easeOut}, 1.5)
    .from('#form-message', 0.8, {autoAlpha:0, x:'70%', y:'0%', ease:Power0.easeOut}, 1.7)
    .from('#btncontact', 0.4, {autoAlpha:0, x:'0%', y:'120%', ease:Power0.easeOut}, 1.9)
    .from('#facebook', 1, {x:'0%', y:'-50%', ease:Bounce.easeOut}, 2.5)
    .from('#twitter', 1, {x:'5%', y:'-50%', ease:Bounce.easeOut}, 2.8)
    .from('#google', 1, {x:'10%', y:'-50%', ease:Bounce.easeOut}, 3.1)
    .from('#linkedin', 1, {x:'15%', y:'-50%', ease:Bounce.easeOut}, 3.4)
    .from('#github', 1, {x:'20%', y:'-50%', ease:Bounce.easeOut}, 3.7)
    
    ;
    
    
    
    var contactScene = new ScrollMagic.Scene({
        
        triggerElement: '#contact-form',
        triggerHook: 0.4
        
    })
    .setTween(animatein7)
    .addTo(controller7);
    
    
});







    