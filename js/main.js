// setTimeout(() => {
//   document.querySelector(".loader").style.visibility = "hidden";
// }, 500);

  // تهيئة slick slider
  $(".des-imgs").slick({
    centerMode: true,
    autoplay: true,
    centerPadding: "60px",
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
    ],
  });
  
// $(".clientReview").slick({
//   autoplay: true,
//   slidesToShow: 4,
//   responsive: [
//     {
//       breakpoint: 1199,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: "40px",
//         slidesToShow: 4,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: "40px",
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: "40px",
//         slidesToShow: 2,
//       },
//     },
//   ],

//   })



// Handle SignUp
// main.js

// عند تحميل الصفحة، تحقق من وجود التوكن في localStorage لتحديث حالة الواجهة
document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('token');

  // إذا كان هناك توكن، أظهر الأزرار والعناصر المناسبة للمستخدم المسجل الدخول
  if (token) {
      document.getElementById('sign-in-btn').style.display = 'none';
      document.getElementById('sign-up-btn').style.display = 'none';
      document.getElementById('sign-out-btn').style.display = 'block';
      document.getElementById('user-nav').style.display = 'block';
      document.getElementById('blog-nav').style.display = 'block';
  } else {
      document.getElementById('sign-in-btn').style.display = 'block';
      document.getElementById('sign-up-btn').style.display = 'block';
      document.getElementById('sign-out-btn').style.display = 'none';
      document.getElementById('user-nav').style.display = 'none';
      document.getElementById('blog-nav').style.display = 'none';
  }

  // زر تسجيل الخروج
  document.getElementById('sign-out-btn').addEventListener('click', () => {
      localStorage.removeItem('token');
      window.location.href = 'index.html'
  });
});
