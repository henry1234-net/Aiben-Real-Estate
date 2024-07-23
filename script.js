const navSelect = document.querySelectorAll('nav ul li a');

navSelect.forEach(nav =>{
  nav.addEventListener('click',()=>{
    navSelect.forEach(activeNav=>{
      activeNav.classList.remove('active');
    })
    nav.classList.add('active');
});
});

// navbar dropdown menu reveal
const dropdown = document.querySelector('#dropdown')
const dropMenu = document.querySelector('#dropdownMenu')

dropdown.addEventListener('mouseover', () =>{
  dropMenu.style.display = 'block';

  dropdown.addEventListener('mouseout', () =>{
    dropMenu.style.display = 'none';
  })
})

const parallax1TxtAnimation = document.querySelector("#animation")
let parallax1AnimatedTxt = [
    "development",
    "construction",
    "hospitality",
    "consultancy"
];

let parallax1Txt= "";
for(const value of parallax1AnimatedTxt){
    parallax1Txt +=value +"\n";
    parallax1TxtAnimation.innerText = parallax1Txt;
}

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  
  

  // staff hover
  const staffElements = document.querySelectorAll('.staff');
  hover(staffElements);

  const projectElements = document.querySelectorAll('.projects');

  const lastProjectElement = projectElements[projectElements.length - 1];

  if(projectElements.length > 2){
    lastProjectElement.style.opacity = "0.2";
  }

  function hover(hovered) {
    hovered.forEach(hovers => {
        hovers.addEventListener('mouseover', () => {
            hovers.style.opacity = '1';
            
            // Reduce opacity of other hovered elements
            hovered.forEach(otherHover => {
                if (otherHover !== hovers) {
                    otherHover.style.opacity = '0.2';
                }
            });
        });

        hovers.addEventListener('mouseout', () => {
            // Reset opacity of all hovered elements to 1 (fully opaque)
            hovered.forEach(otherHover => {
                otherHover.style.opacity = '1';
            });
        });
    });
  }    