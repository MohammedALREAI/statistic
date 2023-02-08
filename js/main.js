///  when the page is loaded



$(document).ready(function () {
  const language = document.querySelector("html").getAttribute("lang") || "en";
  AOS.init({
    duration: 1200,
    easing: "ease-in-cubic",
    delay: 100,
    offset: 300,
  });

  const usd_current_price = document.getElementById("usd_current_price");
  usd_current_price.innerHTML = 6.50093;

  const eur_current_price = document.getElementById("eur_current_price");
  eur_current_price.innerHTML = 5.50093;
  const chf_current_price = document.getElementById("chf_current_price");
  chf_current_price.innerHTML = 5.50093;
  const gbp_current_price = document.getElementById("gbp_current_price");
  gbp_current_price.innerHTML = 5.50093;
  const yen_current_price = document.getElementById("yen_current_price");
  yen_current_price.innerHTML = 0.255;



});

