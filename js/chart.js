
function generateLineChart(data, labels) {

     const options = {
       type: "line",
       data: {
         labels: labels.reverse(), //["12:00", "12:10", "12:20", "12:30", "12:40", "12:50", "13:00"],
         datasets: [
           {
             label: "",
             borderColor: "#001E62",
             pointBorderColor: "#001E62",
             pointBackgroundColor: "#001E62",
             pointHoverBackgroundColor: "#001E62",
             pointHoverBorderColor: "#001E62",
             pointHoverRadius: 10,
             pointRadius: 3,
             fill: false,
             data: data.reverse(), //[.reverse(), //[100, 120, 150, 170, 180, 170, 150],
             color: "#001E62",
           },
         ],
       },
       options: {
         responsive: true,
         maintainAspectRatio: false,
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
           y: [
             {
               ticks: {
                 fontColor: "rgba(0,30,98,1)",
                 fontStyle: "bold",
                 beginAtZero: true,
                 maxTicksLimit: 5,
                 padding: 10,
               },
               gridLines: {
                 drawTicks: false,
                 display: false,
               },
             },
           ],
           x: [
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
           ],
         },
       },
     };
     return options;
}
function loadItems(menu,subMenu) {
     console.log("loadItems", `barChart${menu}One`);
  let  context=null
      context = document.getElementById(`barChart${menu}One`).getContext("2d");

  let data = [3.6725, 3.6725, 3.6725, 3.6725, 3.6725];


  const language = document.querySelector("html").getAttribute("lang") || "en";

  if (language == "en") {
    labels = ["Tuesday", "Wednesday", "Thursday", "Friday", "Monday"]
  }
  if (language == "ar") {
    labels = ["الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "الإثنين"]
  }

  var numberArray = [3.6725,3.6725,3.6725,3.6725,3.6725]

const option = generateLineChart(numberArray,labels)

  new Chart(context, option);
}



function loadItemsMath(menu, subMenu) {
  let  context= document.getElementById(`barChart${menu}Tow`).getContext("2d") || null;

  let data = [3.6725, 3.6725, 3.6725, 3.6725, 3.6725];

  const language = document.querySelector("html").getAttribute("lang") || "en";

     var currentManth = moment().format("MMMM");
     var previousManth = moment().subtract(1, "months").format("MMMM");



  if (language == "en") {
     labels = [previousManth, currentManth].reverse();
  }

  if (language == "ar") {
     let  converManthTOArabic = {
          "January": "يناير",
          "February": "فبراير",
          "March": "مارس",
          "April": "أبريل",
          "May": "مايو",
          "June": "يونيو",
          "July": "يوليو",
          "August": "أغسطس",
          "September": "سبتمبر",
          "October": "أكتوبر",
          "November": "نوفمبر",
          "December": "ديسمبر",
     }
     previousManth = converManthTOArabic[previousManth];
     currentManth = converManthTOArabic[currentManth];


     labels = [previousManth, currentManth];
  }

  var numberArray = [];

  numberArray.push(729.7);
  numberArray.push(1670.2);
  const  option = generateLineChart(numberArray,labels)



  new Chart(context, option);
}


function loadItemsYear(menu, subMenu) {
     console.log("loadItemsYear")
  let context =  document.getElementById(`barChart${menu}Three`).getContext("2d")|| null;


  let data = [3.6725, 3.6725, 3.6725, 3.6725, 3.6725];

  const language = document.querySelector("html").getAttribute("lang") || "en";

  // moment to  ger  CURRENT YEAR
  var currentYear = new Date().getFullYear();

    labels = [currentYear, currentYear - 1].reverse();




  var numberArray = [];

  numberArray.push(729.7);
  numberArray.push(1670.2);
  let options = {
    type: "line",
    data: {
      labels: labels.reverse(), //["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      datasets: [
        {
          label: "",
          borderColor: "#001E62",
          pointBorderColor: "#001E62",
          pointBackgroundColor: "#001E62",
          pointHoverBackgroundColor: "#001E62",
          pointHoverBorderColor: "#001E62",
          pointHoverRadius: 10,
          pointRadius: 3,
          fill: false,
          data: [3.8385565042735, 3.96110130769231].reverse(), //[180, 170, 100, 120, 150, 170, 150],
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
        y: [
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
        ],
        x: [
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
        ],
      },
    },
  };

  new Chart(context, options);
}



function loadItemsFiveYear(menu, subMenu) {
  let context = document.getElementById(`barChart${menu}Four`).getContext("2d")|| null;


  let data = [3.6725];


  // moment to  ger  CURRENT YEAR
  var currentYear = new Date().getFullYear()-5

  labels = [currentYear].reverse();

  var numberArray = [];

  numberArray.push(729.7);
  let options = {
    type: "line",
    data: {
      labels: labels.reverse(),
      datasets: [
        {
          label: "",
          borderColor: "#001E62",
          pointBorderColor: "#001E62",
          pointBackgroundColor: "#001E62",
          pointHoverBackgroundColor: "#001E62",
          pointHoverBorderColor: "#001E62",
          pointHoverRadius: 10,
          pointRadius: 3,
          fill: false,
          data: [4.15584004012061].reverse(), //[180, 170, 100, 120, 150, 170, 150, 180, 170, 100, 120, 150],
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
        y: [
          {
            ticks: {
              fontColor: "rgba(0,30,98,1)",
              fontStyle: "bold",
              beginAtZero: true,
              maxTicksLimit: 5,
              padding: 20,
            },
            gridLines: {
              drawTicks: true,
              display: true,
            },
          },
        ],
        x: [
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
        ],
      },
    },
  };

  new Chart(context, options);
}




function loadItemWeek(item) {
  let data = [3.6725, 3.6725, 3.6725, 3.6725, 3.6725];

  const language = document.querySelector("html").getAttribute("lang") || "en";

  if (language == "en") {
    labels = ["Tuesday", "Wednesday", "Thursday", "Friday", "Monday"].reverse();
  }
  if (language == "ar") {
    labels = ["الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "الإثنين"].reverse();
  }

  let options = {
    type: "line",
    data: {
      labels: labels.reverse(),
      datasets: [
        {
          label: "",
          borderColor: "#001E62",
          pointBorderColor: "#001E62",
          pointBackgroundColor: "#001E62",
          pointHoverBackgroundColor: "#001E62",
          pointHoverBorderColor: "#001E62",
          pointHoverRadius: 10,
          pointRadius: 3,
          fill: false,
          data: data.reverse(),
          color: "#001E62",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
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
        y: [
          {
            ticks: {
              fontColor: "rgba(0,30,98,1)",
              fontStyle: "bold",
              beginAtZero: true,
              maxTicksLimit: 5,
              padding: 10,
            },
            gridLines: {
              drawTicks: false,
              display: false,
            },
          },
        ],
        x: [
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
        ],
      },
    },
  };
  new Chart(item, options);
}
