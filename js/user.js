let sidebar = document.querySelector(".sidebarpage");
let iconSidebar = document.querySelector(".icon-side-bar i");
let iconBarImage = document.querySelector(".icon-bar");
let logoImage = document.querySelector(".logo");
let headBar = document.querySelector(".headBar");
let logoImgContainer = document.querySelector(".logo-img");
let sidebarText = document.querySelectorAll(".sidebar-text");
let navLinks = document.querySelectorAll(".nav-link");

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

// save data in localStorage

let Username = document.getElementById("Username");
let Email = document.getElementById("Email");
let Telephone = document.getElementById("Telephone");
let updateData = document.querySelector(".update-data");
let OldPassword = document.getElementById("Oldpass");
let newPassword = document.getElementById("Newpass");
let confirmPassword = document.getElementById("confirm-pass");
let IconUserName = document.querySelector(".user-data");
IconUserName.children[1].innerText = Username.innerText = "Rokiya Abd Elsatar";

updateData.onclick = async function updateData(event) {
  event.preventDefault();

  const token = localStorage.getItem("token"); // تأكد من الحصول على الـ token من localStorage

  if (!token) {
    alert("Please sign in first.");
    return;
  }

  if (newPassword.value !== confirmPassword.value) {
    alert("New password and confirm password do not match.");
    return;
  }

  try {
    const response = await fetch("https://ecommerce.routemisr.com/api/v1/auth/update-password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, // إضافة الـ token في الرأس
      },
      body: JSON.stringify({
        oldPassword: OldPassword.value,
        newPassword: newPassword.value,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      alert("Password updated successfully!");
      OldPassword.value = '';
      newPassword.value = '';
      confirmPassword.value = '';
    } else {
      alert(result.message || "Failed to update password.");
    }
  } catch (error) {
    alert("An error occurred while updating password.");
  }
};

// Add comment to user blog
