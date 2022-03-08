let data01 = [
  { name: "Volkswagen", total: 12422 },
  { name: "Toyota", total: 12435 },
  { name: "Hyundai", total: 10032 },
  { name: "Skoda", total: 8656 },
  { name: "Ford", total: 7255 },
  { name: "Kia", total: 6307 },
  { name: "VW ID3", total: 1418 },
];

let data03 = [
  { name: "2018", values: [46776, 65814, 1222, 7345], total: 121157},
  { name: "2019", values: [45761, 53201, 3443, 10900], total: 113305},
  { name: "2020", values: [31507, 36208, 3940, 12654], total: 84309},
  { name: "2021", values: [32950, 34396, 8554, 25661], total: 101561}
];

let data04 = [
  { price: 24150, performance: 33 },
  { price: 27600, performance: 33 },
  { price: 40295, performance: 25 },
  { price: 34130, performance: 54.3 },
  { price: 36910, performance: 47.9 },
  { price: 32350, performance: 26 },
  { price: 33625, performance: 166 },
];

let data05 = [
  { year: 2015, sales: 1.4 },
  { year: 2016, sales: 1.27 },
  { year: 2017, sales: 1.36 },
  { year: 2018, sales: 1.39 },
  { year: 2019, sales: 1.34 },
  { year: 2020, sales: 1.42 },
  { year: 2021, sales: 1.27 },
  { year: 2022, sales: 1.73 }
];

let data06 = [
  { year: 2015, sales: 1.3 },
  { year: 2016, sales: 1.16 },
  { year: 2017, sales: 1.27 },
  { year: 2018, sales: 1.3 },
  { year: 2019, sales: 1.29 },
  { year: 2020, sales: 1.31 },
  { year: 2021, sales: 1.19 },
  { year: 2022, sales: 1.73 }
];

let chart01;
let chart03;
let chart04;
let chart05;
let chart06;

function setup() {
  createCanvas(1500, 1000);

  chart01 = new VerticalChart(data01, "Sales By Brand for 2021");
  chart01.chartWidth = 250;
  chart01.chartHeight = 250;
  chart01.posX = 100;
  chart01.posY = 350;
  chart01.updateValues();

  chart03 = new StackedChart(data03, "Sales By Fuel Type Per Year");
  chart03.chartWidth = 250;
  chart03.chartHeight = 250;
  chart03.posX = 100;
  chart03.posY = 800;
  chart03.updateValues();

  chart04 = new ScatterPlotChart(data04, "Price(€) Vs MPG For The Most Sold Cars Of 2021");
  chart04.chartWidth = 250;
  chart04.chartHeight = 250;
  chart04.posX = 900;
  chart04.posY = 350;
  chart04.updateValues();

  chart05 = new LineGraph(data05, "Sales By Fuel Type Per Year","#ffe066");
  chart05.chartWidth = 250;
  chart05.chartHeight = 250;
  chart05.posX = 900;
  chart05.posY = 800;
  chart05.updateValues();

  chart06 = new LineGraph(data06, "Sales By Fuel Type Per Year","#3FFF00");
  chart06.chartWidth = 250;
  chart06.chartHeight = 250;
  chart06.posX = 900;
  chart06.posY = 800;
  chart06.updateValues();
}

function draw() {
  background(50);
  chart01.updateValues();
  chart01.render();

  chart03.updateValues();
  chart03.render();

  chart04.updateValues();
  chart04.render();

  chart05.updateValues();
  chart05.render();

  chart06.updateValues();
  chart06.render();
}
