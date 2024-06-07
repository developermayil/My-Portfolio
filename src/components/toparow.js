import '../components/toparrow.css';

export default function TopArrow (){
//     const rootElement = document.documentElement;
// const upToTopBtn = document.getElementById("up-to-top");

// function scrollToTop() {
//   rootElement.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// }

// function showBtn() {
//   if (document.body.scrollTop > 100 || rootElement.scrollTop > 100) {
//     upToTopBtn.classList.add("active");
//   } else {
//     upToTopBtn.classList.remove("active");
//   }
// }

// document.addEventListener("scroll", showBtn);
// upToTopBtn.addEventListener("click", scrollToTop);

return(
    <div id="up-to-top">
  <span><img src="https://i.ibb.co/5krn9rB/arrow-up.png" alt=""/></span>
</div>
)
}