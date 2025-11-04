const generateBtn = document.querySelector(".generate-meme");
const titlepage = document.querySelector(".meam-title")
const meamimg = document.querySelector(".meam-img")
const authorout = document.querySelector(".auther span")


generateBtn.addEventListener("click", () => {
    console.log("hii");
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const {url,title,author} = data
            titlepage.innerHTML = title
            meamimg.src = url
            authorout.innerHTML = title
        })
        .catch((error) => {
            console.error("Error fetching meme:", error);
        });
})
