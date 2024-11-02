
// ADD COMMENT & IT'S METHODS

let userComment = document.getElementById("user-comment");
let CommentText = document.querySelector(".userComment");
let postcomment = document.querySelector(".postcomment");
let commentSection = document.querySelector(".userComments");
let leaveCommentSection = document.querySelector(".Comment h2");
let commentForm = document.getElementById("commentform");
let editButton = document.querySelector(".edit i");
let removeButton = document.querySelector(".remove i");
let blogBody = document.querySelector(".blogBody");

window.addEventListener("DOMContentLoaded", function () {
  let savedComments = JSON.parse(localStorage.getItem("savedComments")) || [];
  let currentPageTitle = blogBody.querySelector(".Info h2").innerText;

  if (savedComments.length > 0) {
    // التأكد من أن التعليق يخص هذه الصفحة فقط
    let currentComment = savedComments.find(
      (item) => item.travelBlogTitle === currentPageTitle
    );

    if (currentComment) {
      CommentText.innerText = currentComment.travelBlogComment;
      commentSection.style.display = "block";
      leaveCommentSection.style.display = "none";
      commentForm.style.display = "none";
    }
  }
});

editButton.addEventListener("click", function () {
  userComment.value = CommentText.innerText;
  commentForm.style.display = "block";
  leaveCommentSection.style.display = "none";
});

postcomment.addEventListener("click", function (event) {
  event.preventDefault();
  if (userComment.value.trim() !== "") {
    let savedComments = JSON.parse(localStorage.getItem("savedComments")) || [];
    let currentPageTitle = blogBody.querySelector(".Info h2").innerText;
    
    const item = {
      travelBlogImg: blogBody.children[0].children[0].getAttribute("src"),
      travelBlogTitle: currentPageTitle,
      travelBlogComment: userComment.value,
      PageURL:window.location.href
    };

    // تحديث أو إضافة التعليق الجديد للصفحة الحالية فقط
    let existingCommentIndex = savedComments.findIndex(
      (currentItem) => currentItem.travelBlogTitle === currentPageTitle
    );

    if (existingCommentIndex === -1) {
      savedComments.push(item); // إضافة التعليق الجديد
    } else {
      savedComments[existingCommentIndex].travelBlogComment = userComment.value; // تحديث التعليق الحالي
    }

    localStorage.setItem("savedComments", JSON.stringify(savedComments));

    CommentText.innerText = userComment.value;
    commentSection.style.display = "block";
    leaveCommentSection.style.display = "none";
    commentForm.style.display = "none";
    userComment.value = "";
  } else {
    alert("Please enter a comment before posting.");
  }
});

removeButton.addEventListener("click", function () {
  if (confirm("Are you sure you want to delete this comment?")) {
    let savedComments = JSON.parse(localStorage.getItem("savedComments")) || [];
    let currentPageTitle = blogBody.querySelector(".Info h2").innerText;

    // إزالة التعليق الخاص بالصفحة الحالية فقط
    savedComments = savedComments.filter(
      (item) => item.travelBlogTitle !== currentPageTitle
    );

    localStorage.setItem("savedComments", JSON.stringify(savedComments));

    CommentText.innerText = "";
    commentSection.style.display = "none";
    leaveCommentSection.style.display = "block";
    commentForm.style.display = "block";
  }
});
