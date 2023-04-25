// let panel = document.querySelector(".panel")
// let panel_li = panel.querySelectorAll("li")
// let btns = document.querySelectorAll(".btns li")
// let rot0 = document.querySelector(".rot0")

// // 유사배열로 li를 모두 바인딩해서 반환한값이 btns
// btns.forEach(function(el, index){
//     el.addEventListener("click", function(e){
//         e.preventDefault();
//         //모든 버튼을 반복을 돌면서 비활성화 시킨뒤
//         for(let el of btns){el.classList.remove("on")}
//         //클릭한 순번의 버튼만 활성화를 시킨다
//         btns[index].classList.add("on")

//         panel.style.marginLeft = "-100" * index + "%";
//         rot0.style.rotate = "70" * index + "deg"
//     })
// })

let panel = document.querySelector(".panel");
let btns = document.querySelectorAll(".btns li");
let ring = document.querySelector("#ring");

// 버튼에 반복을 돌면서
btns.forEach((el, index) => {
  // 각 버튼 요소에 클릭이벤트를 입히고
  el.addEventListener("click", (e) => {
    e.preventDefault();
    // a 태그 이전 이벤트를 막아주고
    panel.style.marginLeft = "-100" * index + "%";
    // 패널을 움직이게하고
    panel.style.transition + "0.5s";
    // 모든 버튼을 비활성화한뒤
    for (let el of btns) el.classList.remove("on");
    // 클릭한 대상의 버튼만 활성화
    btns[index].classList.add("on");

    // 링 돌리기
    ring.className = "";
    ring.classList.add("rot" + index);
  });
});
