const socials = document.querySelector(".open-share")
const shareBtn = document.getElementById("share")
const removeShareBtn = document.getElementById("remove-share")
const struggleArrow = document.getElementById("struggle")

shareBtn.addEventListener('click', () => {
    socials.classList.toggle("clicked")
    struggleArrow.classList.toggle("open-share-beta")
})

removeShareBtn.addEventListener('click', () => {
    socials.classList.remove("clicked")
})



