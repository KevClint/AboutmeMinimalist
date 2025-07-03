document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);
  gsap.from(".sidebar", {
    duration: 1,
    x: "-200px",
    ease: "power1.inOut"
  });

  const linkPopUp = gsap.timeline({defaults: {opacity: 0}});
  linkPopUp.fromTo(
    ".box-link1",
    {duration: 0.2},
    {opacity: 1, scale: 1, delay: 0} // starts at t = 3s
  );
  linkPopUp.fromTo(
    ".box-link2",
    {duration: 0.2},
    {opacity: 1, scale: 1, delay: 0.1} // starts at t = 3s
  );
  linkPopUp.fromTo(
    ".box-link3",
    {duration: 0.2},
    {opacity: 1, scale: 1, delay: 0.2} // starts at t = 3s
    
  );


  // gsap.fromTo(
  //   ".box-link",
  //   {opacity: 0, duration: 1, x: -200},
  //   {opacity: 1, x: 0} 
  // );
});
