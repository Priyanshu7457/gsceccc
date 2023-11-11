let backImage = document.querySelectorAll('.background');
// Links

const Instagram =
  "https://www.instagram.com/gauravsirmca_cccolevel/?igshid=OGQ5ZDc2ODk2ZA%3D%3D";
const Facebook = "#";
const WhatsApp = "https://wa.link/08cnqg";
const Youtube =
  "https://youtube.com/@gauravkumarvermanonoiseonl2305?si=CowRR71uJctK26nk";

// Elements
const InstLogo = document.getElementsByClassName("fa-instagram");
const YtLogo = document.getElementsByClassName("fa-youtube");
const WhatsAppLogo = document.getElementsByClassName("fa-whatsapp");
const FbLogo = document.getElementsByClassName("fa-facebook");

// Convert Element Collection into Array

const IArray = Array.from(InstLogo);
const WhatsAppArray = Array.from(WhatsAppLogo);
const YtArray = Array.from(YtLogo);
const FbArray = Array.from(FbLogo);

// Add Links In Logo

IArray.forEach((e) => {
  let a = e.parentNode;
  a.href = `${Instagram}`;
});

YtArray.forEach((e) => {
  let a = e.parentNode;
  a.href = `${Youtube}`;
});
FbArray.forEach((e) => {
  let a = e.parentNode;
  a.href = `${Facebook}`;
});
WhatsAppArray.forEach((e) => {
  let a = e.parentNode;
  a.href = `${WhatsApp}`;
});


backImage = Array.from(backImage);

setInterval(() => {
  backImage.forEach(e => {
    e.classList.toggle('background2');
    e.classList.toggle('background');
  });
}, 3000);