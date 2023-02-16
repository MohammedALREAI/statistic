function loadBarChart() {
     const language = document.querySelector("html").getAttribute("lang") || "en";
  const labelArrayAr = [
    "ن1",
    "ن2",
    "ن3",
    "الودائع المصرفية ",
    "الائتمان الإجمالي ",
    "الائتمان المحلي  ",
  ];
  const labelArrayEn = [
    "N1",
    "N2",
    "N3",
    "Bank Deposits ",
    "Total Credit ",
    "Domestic Credit  ",
  ];
  var labelArray = [];
  if (language === "ar") {
    labelArray = labelArrayAr;
  } else {
    labelArray = labelArrayEn;
  }

  var numberArray = [];

  numberArray.push(729.7);
  numberArray.push(1678.1);
  numberArray.push(2110.2);
  numberArray.push(2239.2);
  numberArray.push(1887.7);
  numberArray.push(1670.2);
  var ctx = document.getElementById("barChart-three").getContext("2d");


   new Chart(ctx, {
     type: "bar",
     data: {
       labels: labelArray.reverse(),
       datasets: [
         {
           label: "",
           backgroundColor: "#Daaa00",
           borderRadius: 10,
           borderSkipped: false,
           barThickness: 15,
           data: numberArray.reverse(),
           color: "#001E62",
         },
       ],
     },
     options: {
       responsive: true,
       plugins: {
         showAllTooltips: true,
         tooltip: {
           titleFont: {
             size: 16,
           },
           bodyFont: {
             size: 16,
           },
           padding: 12,
           displayColors: false,
           backgroundColor: "rgba(255,255,255,0.8)",
           titleColor: "#001E62",
           callbacks: {
             labelTextColor: function (context) {
               return "#001E62";
             },
           },
         },
         legend: {
           display: false,
         },
       },
       scales: {
         y:
           {
             ticks: {
               fontColor: "rgba(0,30,98,1)",
               fontStyle: "bold",
               beginAtZero: true,
               maxTicksLimit: 5,
               padding: 20,
             },
             gridLines: {
               drawTicks: false,
               display: false,
             },
           },
         x:
           {
             gridLines: {
               zeroLineColor: "transparent",
             },
             ticks: {
               padding: 20,
               fontColor: "rgba(0,30,98,1)",
               fontStyle: "bold",
             },
           },

       },
     },
   });

  return


}
window.addEventListener("load", function () {
     loadBarChart();

});

