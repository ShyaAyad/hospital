document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".link").forEach(link => {
        link.addEventListener("click", function (event) {
            let target = this.getAttribute("href");

            if (target.startsWith("#")) {
                event.preventDefault(); // this prevents normally moving to the desired place when user clicks a link 
                
                let targetElement = document.querySelector(target);
                if (targetElement) {
                    window.scrollTo({ top: targetElement.offsetTop - 80, behavior: "smooth" });
                }
            } else {
                // If it's an external page (departments.html, doctors.html), navigate normally
                window.location.href = target;
            }
        });
    });
});

const menuList = document.querySelector('.menu_list')
const btn = document.querySelector('.btn')

btn.addEventListener('click', function(){

    // we check if there is a class called active if so we remove it 
    if(menuList.classList.contains('active')){
        menuList.classList.remove('active')
    }else{
        /*if there is not we add it so when we click on the menu
          icon we get the list on smaller screens instead of the nav links */
        menuList.classList.add('active')
    }
    
})