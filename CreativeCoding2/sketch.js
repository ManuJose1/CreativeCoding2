let data01 = [
  { name: "Oranges", total: 23 },
  { name: "Bananas", total: 34 },
  { name: "Pears", total: 23 },
  { name: "Apples", total: 18 },
];

let data02 = [
  { name: "Pineapples", total: 223 },
  { name: "Carrots", total: 134 },
  { name: "Potatoes", total: 233 },
  { name: "Tomatoes", total: 118 },
];

let data03 = [
  { name: "Pineapples", total: [120, 240, 80, 100] },
  { name: "Carrots", total: [100, 250, 50, 90] },
  { name: "Potatoes", total: [150, 200, 90, 120] },
  { name: "Tomatoes", total: [130, 260, 90, 100] },
];

let chart01;
let chart02;
let chart03;

function setup() {
  createCanvas(800, 800);

  chart01 = new VerticalChart(data01, "Fruit Sales During COVID");
  chart01.chartWidth = 200;
  chart01.chartHeight = 200;
  chart01.posX = 100;
  chart01.posY = 300;
  chart01.updateValues();

  chart02 = new HorizontalChart(data02, "Fruit Sales Before COVID");
  chart02.chartWidth = 200;
  chart02.chartHeight = 200;
  chart02.posX = 500;
  chart02.posY = 300;
  chart02.updateValues();

  chart03 = new StackedChart(data03, "Fruit Sales Per Sales Quarter at Each Store");
  chart03.chartWidth = 200;
  chart03.chartHeight = 200;
  chart03.posX = 100;
  chart03.posY = 650;
  chart03.updateValues();
}

function draw() {
  background(50);
  chart01.updateValues();
  chart01.render();

  chart02.updateValues();
  chart02.render();

  chart03.updateValues();
  chart03.render();
}
