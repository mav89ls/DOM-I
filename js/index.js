const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};



// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



//Navigation

let navText = document.querySelectorAll("nav a")
navText[0].textContent = siteContent["nav"]["nav-item-1"];
navText[1].textContent = siteContent["nav"]["nav-item-2"];
navText[2].textContent = siteContent["nav"]["nav-item-3"];
navText[3].textContent = siteContent["nav"]["nav-item-4"];
navText[4].textContent = siteContent["nav"]["nav-item-5"];
navText[5].textContent = siteContent["nav"]["nav-item-6"];



//CTA

let headText = document.querySelector("h1")
headText.textContent = siteContent["cta"]["h1"]

let headerImg = document.getElementById("cta-img")
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

let ctaButton = document.querySelector("button")
ctaButton.textContent = siteContent["cta"]["button"]



//Main Content

let middleHeaders = document.querySelectorAll(".main-content h4");
middleHeaders[0].textContent = siteContent["main-content"]["features-h4"]
middleHeaders[1].textContent = siteContent["main-content"]["about-h4"]
middleHeaders[2].textContent = siteContent["main-content"]["services-h4"]
middleHeaders[3].textContent = siteContent["main-content"]["product-h4"]
middleHeaders[4].textContent = siteContent["main-content"]["vision-h4"]

let middleText = document.querySelectorAll(".main-content p")
middleText[0].textContent = siteContent["main-content"]["features-content"]
middleText[1].textContent = siteContent["main-content"]["about-content"]
middleText[2].textContent = siteContent["main-content"]["services-content"]
middleText[3].textContent = siteContent["main-content"]["product-content"]
middleText[4].textContent = siteContent["main-content"]["vision-content"]

let sectionImg = document.querySelector(".main-content img")
sectionImg.setAttribute("src", siteContent["main-content"]["middle-img-src"])




//Contact Content

let contactHeader = document.querySelector(".contact h4")
contactHeader.textContent = siteContent["contact"]["contact-h4"]

let contactText = document.querySelectorAll(".contact p")
contactText[0].textContent = siteContent["contact"]["address"]
contactText[1].textContent = siteContent["contact"]["phone"]
contactText[2].textContent = siteContent["contact"]["email"]


//Footer

let copyR = document.querySelector("footer p")
copyR.textContent = siteContent["copyright"]



//Change Text to Green
navText.forEach(anchor => anchor.style.color = "green")


// Add New Items 

let navAdd = document.querySelector('nav');

let home = document.createElement("a")
home.textContent = "Home"
home.href = "#"
home.style.color = "green"

let testimonials = document.createElement("a")
testimonials.textContent = "Testimonials"
testimonials.href = "#"
testimonials.style.color = "green"

navAdd.prepend(home)
navAdd.append(testimonials)