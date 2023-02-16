function loadPriceChartOne() {

  const language = document.querySelector("html").getAttribute("lang") || "en";

  var headerLabelsAr = [
    "لليلة واحدة",
    "أسبوع واحد",
    "شهر واحد",
    "3 أشهر",
    "6 أشهر",
    "سنة واحدة",
  ].reverse();
  var headerLabelsEn = [
    "O/N",
    "1 Week",
    "1 Month",
    "3 Month",
    "6 Month",
    "1 Year",
  ];


  var headerLabels = [];
  var headerData = [];
  if (language=="en") {
    headerLabels = headerLabelsEn;
  } else {
    headerLabels = headerLabelsAr;
  }

  //  from  html  lang get  lang

  var headerData = [4.50093, 4.56633, 4.7077, 4.74927, 4.70406, 5.00837];


  var headerLabels = [];
  var headerData = [1, 2, 3, 2, 5, 6];
  if (language == "en") {
    headerLabels = headerLabelsEn;
  }
  if (language == "ar") {
    headerLabels = headerLabelsAr;
  }

  var ctx = document.getElementById("lineChart").getContext("2d");
   new Chart(ctx, {
     type: "line",
     data: {
       labels: headerLabels,
       datasets: [
         {
           label: "",
           borderColor: "#Daaa00",
           pointBorderColor: "#Daaa00",
           pointBackgroundColor: "#Daaa00",
           pointHoverBackgroundColor: "#Daaa00",
           pointHoverBorderColor: "#Daaa00",
           pointHoverRadius: 10,
           pointRadius: 3,
           fill: false,
           data: headerData,
           color: "#Daaa00",
           tension: 0.1,
         },
       ],
     },
     options: {
       responsive: true,

       plugins: {
         legend: {
           display: false,
         },
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
               return "#Daaa00";
             },
           },
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
               //   drawTicks: true,
               display: true,
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
  return;
}


window.addEventListener("load", function () {
     loadPriceChartOne();
});
