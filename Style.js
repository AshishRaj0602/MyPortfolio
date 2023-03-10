


let project=[{"tiltle":"01","info":"Snake Game","git":"https://github.com/AshishRaj0602/Snake-game","live":"https://verdant-axolotl-0ccb2e.netlify.app/"},{"tiltle":"02","info":"Profile card UI","git":"https://github.com/AshishRaj0602/cards","live":"https://famous-kringle-637b32.netlify.app/"},{"tiltle":"03","info":"UI/UX-Portfolio","live":"https://ui-uxportfolio.netlify.app/","git":"https://github.com/AshishRaj0602/UI_UX_Portfolio"},{"tiltle":"04","info":"Minesweeper-Game","git":"https://github.com/AshishRaj0602/Minesweeper-Game","live":"https://admirable-tarsier-a20a4e.netlify.app/"}];
// console.log(projectContainer);
project.forEach((data,ind)=>{
    // console.log(data);
    let projectContainer=document.getElementById("project");
    // console.log("hello"+projectContainer);
    let tempHtml=`<div class="project-card">
    <img src="fi.jpg" class="project-img" alt="">
    <div class="project-content" id="co${data.tiltle}">
        <h1 class="project-title">${data.tiltle}</h1>
        <p class="project-info">
            ${data.info}
        </p>
        <div class="project-btn-grp">
            <button class="project-btn github" onclick="window.location.href = '${data.git}';">github repo</button>
            <button class="project-btn live"onclick="window.location.href = '${data.live}';">see live</button>
        </div>
    </div>
    </div>`
    projectContainer.insertAdjacentHTML('beforeend',tempHtml);

});


let skill=[{"name":"HTML","Level":"80","info":"","img":"html.png"},{"name":"Css","Level":"75","info":"","img":"css.png"},{"name":"Js","Level":"83","info":"","img":"js.png"},{"name":"Java","Level":"90","info":"","img":"java.png"},{"name":"DSA","Level":"85","info":"","img":"dsa.png"},{"name":"Bootstrap","Level":"90","info":"","img":"bootstrap.png"}];
skill.forEach((data,ind)=>{
    let skillContainer=document.getElementById("sk");
    let tempHtml=`<div class="skcard">
    <div class="percent" style="--clr:#04fc43;--num:${data.Level}">
        <div class="dot"></div>
        <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70"></circle>
        </svg>
        <div class="number">
            <h2>${data.Level}%</h2>
            <p>${data.name}</p>
        </div>
    </div>
</div>`
skillContainer.insertAdjacentHTML('beforeend',tempHtml);
});


let edu=[{"Year":"2022 june-september","info":"Java & DSA","insti":"Newton School"},{"Year":"2022 september-December","info":"HTML CSS & Js","insti":"Newton School"},{"Year":"2020-2022","info":"B.Sc","insti":"AmarSingh Rajpoot Degree collage beera"},{"Year":"2020","info":"Inter","insti":"SBM Inter collage Rath"},{"Year":"2018","info":"High School","insti":"SBM Inter collage Rath"}];
edu.forEach((data,ind)=>{
    let skillContainer=document.getElementById("Card");
    let tempHtml=`<div class="card">
    <div class="card-body">
        <h1 class="card-title">${data.info}</h1>
        <p class="card-detail">${data.Year}</p>
        <p class="card-detail">${data.insti}</p>
    </div>
</div>`
skillContainer.insertAdjacentHTML('beforeend',tempHtml);
});


const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let count = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(count != i){
            links[count].classList.remove('active');
            link.classList.add('active');
            sections[count].classList.remove('active');

            setTimeout(() => {
                count = i;
                sections[i].classList.add('active');
            }, 100);
        }
    })
})


const getElement = (selector) => {
    const element = document.querySelector(selector)
  
    if (element) return element
    throw Error(
      `Please double check your class names, there is no ${selector} class`
    )
  }
  
  const navlinks = getElement('.nav-links')
  const navBtnDOM = getElement('.nav-btn')
  
  navBtnDOM.addEventListener('click', () => {
    navlinks.classList.toggle('show-links')
  })
  let ab=document.getElementById("ab")
  console.log(ab);
  ab.addEventListener('click', () => {
    navlinks.classList.toggle('show-links')
  })

