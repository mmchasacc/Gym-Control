const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            console.log(entry.target)
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
}, {})

const sectionElements = document.querySelectorAll("section")
sectionElements.forEach(el => observer.observe(el))


