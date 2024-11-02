// document
//   .getElementById("signin-form")
//   .addEventListener("submit", async function (event) {
//     event.preventDefault();

//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     try {
//       const response = await fetch(
//         "https://ecommerce.routemisr.com/api/v1/auth/signin",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email, password }),
//         }
//       );

//       const result = await response.json();

//       if (response.ok) {
//         localStorage.setItem("token", result.token);
//         document.getElementById("signin-message").textContent =
//           "Sign in successful!";
//         document.getElementById("email").value = "";
//         document.getElementById("password").value = "";
//         setTimeout(() => (window.location.href = "../index.html"), 2000);
//       } else {
//         document.getElementById("signin-message").textContent =
//           result.message || "Failed to sign in. Please try again.";
//       }
//     } catch (error) {
//       document.getElementById("signin-message").textContent =
//         "An error occurred during sign in.";
//     }
//   });

// const form = document.getElementById("sign-up-form");

// form.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   const rePassword = document.getElementById("confirm-password").value;
//   const phone = document.getElementById("phone").value;

//   if (password !== rePassword) {
//     document.getElementById("message").innerText =
//       "Confirm password does not match";
//     return;
//   }

//   try {
//     const response = await fetch(
//       "https://ecommerce.routemisr.com/api/v1/auth/signup",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           password,
//           rePassword,
//           phone,
//         }),
//       }
//     );

//     if (response.ok) {
//       document.getElementById("message").innerText =
//         "Registration completed successfully and data saved!";
//       document.getElementById("name").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("password").value = "";
//       document.getElementById("confirm-password").value = "";
//       document.getElementById("phone").value = "";
//       setTimeout(() => (window.location.href = "./Signin.html"), 2000);
//     } else {
//       const error = await response.json();
//       document.getElementById(
//         "message"
//       ).innerText = `Failed to register: ${error.message}`;
//     }
//   } catch (error) {
//     document.getElementById(
//       "message"
//     ).innerText = `Failed to register: ${error.message}`;
//   }
// });