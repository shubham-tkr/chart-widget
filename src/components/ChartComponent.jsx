import React, { Component } from "react";
import Highcharts from "highcharts/highstock";
import Highcharts_ex from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
import { sampleData } from "./SampleData";
import { getChartOptions } from "./ChartOptions";
import DropdownComponent from "./DropdownComponent";

class ChartComponent extends Component {
  constructor() {
    super();
    this.state = {
      chartDataArray: sampleData,
      currentVisibleObject: sampleData[0],
    };
  }

  handleDropDownClick(key) {
    const filteredObject = this.state.chartDataArray.filter(
      (objectEach) => key.toString() === objectEach.bdrId.toString()
    );
    this.setState({
      currentVisibleObject: filteredObject[0],
    });
  }

  getDropdownListData() {
    return this.state.chartDataArray.map((objectEach) => objectEach.bdrId);
  }

  render() {
    let options = getChartOptions(this.state.currentVisibleObject);
    window.Highcharts = Highcharts;
    Highcharts_ex(Highcharts);
    return (
      <div className="container">
        <div className="row">
          <DropdownComponent
            handleClick={(e) => {
              this.handleDropDownClick(e);
            }}
            listData={this.getDropdownListData()}
            currentVisibleObject={this.state.currentVisibleObject}
          />
        </div>
        <div className="row">
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
            updateArgs={[true]}
          />
        </div>
      </div>
    );
  }
}

export default ChartComponent;
