class ScatterPlotChart {
  constructor(_data, _title) {
    this.data = _data;
    this.title = _title;
    this.chartWidth = 300;
    this.chartHeight = 300;
    this.spacing = 5;
    this.margin = 0;
    this.numTicks = 10;
    this.posX = 50;
    this.posY = 400;
    this.tickIncrements;
    this.maxValue;
    this.numPlaces = 0;
    this.tickSpacing;
    this.barWidth;
    this.availableWidth;

    this.showValues = true;
    this.showLabels = true;
    this.rotateLabels = true;

    this.colors = [
      color("#FF0000"),
      color("#FF9200"),
      color("#FFEB00"),
      color("#3FFF00"),
      color("#00FFDA"),
      color("#0057FF"),
      color("#AF0DFF"),
    ];

    this.updateValues();
    this.calculateMaxValue();
  }

  updateValues() {
    this.tickSpacing = this.chartHeight / this.numTicks;
    this.tickSpacingX = this.chartWidth / this.numTicks;
  }

  calculateMaxValue() {
    let listValues = this.data.map(function (x) {
      return x.price;
    });
    this.maxValue = max(listValues);
    this.minValue = min(listValues);
    this.tickIncrements = this.maxValue / this.numTicks;

    let listNums = this.data.map(function (y) {
      return y.performance;
    });
    this.maxNum = max(listNums);
    this.minNum = min(listNums);
    this.tickIncrementsB = this.maxNum / this.numTicks;
  }

  render() {
    push();
    translate(this.posX, this.posY);
    this.drawTicks();
    this.drawHorizontalLines();
    this.drawVerticalLines();
    this.drawPoints();
    this.drawAxis();
    this.drawTitle();
    pop();
  }

  scaleData(num) {
    return map(num, 0, this.maxValue, 0, this.chartHeight);
  }

  scaleDataX(val) {
    return map(val, 0, this.maxNum, 0, this.chartWidth);
  }

  drawTitle() {
    fill(255, 200);
    noStroke();
    textSize(14);
    textAlign(CENTER, CENTER);
    text(this.title, this.chartWidth / 2, -this.chartHeight - 40);
  }

  drawAxis() {
    //chart
    stroke(255, 180);
    strokeWeight(1);
    line(0, 0, 0, -this.chartHeight); //y
    line(0, 0, this.chartWidth, 0); //x
  }

  drawTicks() {
    //Y-Axis
    for (let i = 0; i <= this.numTicks; i++) {
      //ticks
      stroke(255);
      strokeWeight(1);
      line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);

      //numbers (text)
      if (this.showValues) {
        fill(255, 200);
        noStroke();
        textSize(14);
        textAlign(RIGHT, CENTER);
        text(
          (i * this.tickIncrements).toFixed(this.numPlaces),
          -15,
          this.tickSpacing * -i
        );
      }
    }
    //X-Axis
    for (let i = 0; i <= this.numTicks; i++) {
      //ticks
      stroke(255);
      strokeWeight(1);
      line(this.tickSpacingX * i, 0, this.tickSpacingX * i, 10);

      //numbers (text)
      if (this.showValues) {
        fill(255, 200);
        noStroke();
        textSize(14);
        textAlign(CENTER, CENTER);
        text(
          (i * this.tickIncrementsB).toFixed(this.numPlaces),
          -this.tickSpacing * -i,
          20
        );
      }
    }
  }

  drawHorizontalLines() {
    for (let i = 0; i <= this.numTicks; i++) {
      //horizontal line
      stroke(255, 50);
      strokeWeight(1);
      line(0, this.tickSpacing * -i, this.chartWidth, this.tickSpacing * -i);
    }
  }

  drawVerticalLines() {
    for (let i = 0; i <= this.numTicks; i++) {
      //vertical line
      stroke(255, 50);
      strokeWeight(1);
      line(this.tickSpacing * i, 0, this.tickSpacing * i, -this.chartWidth);
    }
  }

  drawPoints() {
    push();
    translate(0, 0);
    for (let i = 0; i < this.data.length; i++) {
      let colorNumber = i % this.colors.length;

      //plot points
      fill(this.colors[colorNumber]);
      noStroke();
      ellipse(
        this.scaleDataX(this.data[i].performance),
        this.scaleData(-this.data[i].price),
        10,
        10
      );

      //text

      if (this.showLabels) {
        if (this.rotateLabels) {
          push();
          noStroke();
          textSize(14);
          textAlign(LEFT, CENTER);
          translate((this.barWidth + this.spacing) * i + this.barWidth / 2, 10);
          rotate(PI / 2);
          text(this.data[i].name, 0, 0);
          pop();
        } else {
          noStroke();
          fill(255);
          textSize(14);
          textAlign(CENTER, BOTTOM);
          text(
            this.data[i].name,
            (this.barWidth + this.spacing) * i + this.barWidth / 2,
            20
          );
        }
      }
    }
    pop();
  }
}
