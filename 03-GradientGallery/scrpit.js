const searchform = document.querySelector(".form")
const input_box = document.querySelector("#input_box")
const search_btn = document.querySelector(".search_btn")
const Result_imgs = document.querySelector(".results")
const seemorebtn = document.querySelector(".seemore")

let keyword = "";
let page = 1;
const accesskey = "CcOngTQwkinK7Ika-xB4AW6QuwOkuPqaYX2zCIpnPmo";

async function searchimgs() {
    keyword = input_box.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    if(page === 1)
    {
        Result_imgs.innerHTML = ""; 
    }
    results.map((result)=>{
        const image = document.createElement("img")
        image.src = result.urls.small;
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";
        imagelink.appendChild(image);
        Result_imgs.appendChild(imagelink);
    })
    seemorebtn.style.display = "block"
}

searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchimgs();
})

seemorebtn.addEventListener("click",()=>{
    page++;
    searchimgs();
})
