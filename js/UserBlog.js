let sidebar = document.querySelector(".sidebarpage");
let iconSidebar = document.querySelector(".icon-side-bar i");
let iconBarImage = document.querySelector(".icon-bar");
let logoImage = document.querySelector(".logo");
let headBar = document.querySelector(".headBar");
let logoImgContainer = document.querySelector(".logo-img");
let sidebarText = document.querySelectorAll(".sidebar-text");
let navLinks = document.querySelectorAll(".nav-link");
let searchInput = document.getElementById("searchInput");

iconSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("small-sidebar");

  if (sidebar.classList.contains("small-sidebar")) {
    iconSidebar.classList.remove("fa-angle-left", "close-bar-icon");
    iconSidebar.classList.add("fa-bars", "open-bar-icon");

    iconBarImage.style.display = "none";
    logoImage.style.display = "block";

    headBar.style.flexDirection = "column";
    headBar.style.alignItems = "center";
    logoImgContainer.style.display = "flex";
    logoImgContainer.style.flexDirection = "column";
    logoImgContainer.style.alignItems = "center";

    sidebarText.forEach(function (textElement) {
      textElement.style.display = "none";
    });
  } else {
    iconSidebar.classList.remove("fa-bars", "open-bar-icon");
    iconSidebar.classList.add("fa-angle-left", "close-bar-icon");

    iconBarImage.style.display = "block";
    logoImage.style.display = "none";

    headBar.style.flexDirection = "row";
    headBar.style.alignItems = "center";

    sidebarText.forEach(function (textElement) {
      textElement.style.display = "inline";
    });
    sidebar.querySelectorAll('.nav-item').forEach(item => {
        let link = item.querySelector('.nav-pills');
        link.style.display = 'flex';
        link.style.alignItems = 'center';
        // link.style.marginTop = '10px'; 
    });
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});
let userComments = JSON.parse(localStorage.getItem("savedComments")) || [];
console.log(userComments);

 searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", function () {
  SearchComment(this.value);
});

const noCommentsMessage = document.createElement("div");
noCommentsMessage.textContent = "No comments found.";
noCommentsMessage.style.display = "none"; 
document.querySelector(".userComments").appendChild(noCommentsMessage);

function SearchComment(placeTitle) {
  let commentList = document.querySelectorAll(".userComment li");
  let hasMatchingComments = false; 

  commentList.forEach(commentItem => {
    const title = commentItem.querySelector(".card-title").textContent.toLowerCase();
    
    if (title.includes(placeTitle.toLowerCase())) {
      commentItem.style.display = ""; 
      hasMatchingComments = true; 
    } else {
      commentItem.style.display = "none"; 
    }
  });

  if (!hasMatchingComments) {
    noCommentsMessage.style.display = "block"; 
  } else {
    noCommentsMessage.style.display = "none"; 
  }
}

function displayComments() {
  let commentList = document.querySelector(".userComment");
  commentList.innerHTML = "";

  userComments.forEach(comment => {
    let commentItem = `
     <li class="col-lg-4 mb-4 list-unstyled"> 
        <div class="card shadow-sm h-100"> 
          <img src="${comment.travelBlogImg}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${comment.travelBlogTitle}</h5>
            <p class="card-text">${comment.travelBlogComment}</p>
            <a href="${comment.PageURL}" class="btn btn-primary">Show more</a>
          </div>
        </div>
      </li>
    `;
    console.log(comment.PageURL);
    commentList.innerHTML += commentItem; 
  });
}

window.addEventListener("DOMContentLoaded", displayComments);
