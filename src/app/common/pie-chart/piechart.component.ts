import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { inputs } from '@syncfusion/ej2-angular-dropdowns/src/drop-down-list/dropdownlist.component';
import { copyFile } from 'fs';
import { filter } from 'rxjs/operators';
import { ChartData, getEnumValue, LegendType } from './chartData';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PieChartComponent implements OnInit {


  private _internalGraphData: any;
  private _internalLegendData: any;
  private legendSelectedList: ChartData[] = [];

  @Input() chartData: ChartData[] = [];
  @Input() showChart: boolean = true;
  @Input() showLegend: boolean = true;
  @Input() legendType: LegendType = LegendType.FILTER;
  @Input() graphName: String = '';
  @Input() graphSubtext: String = '';

  @Output() legendItemSelectEvent: EventEmitter<ChartData[]> = new EventEmitter()

  constructor() { }

  ngOnInit() {
    console.log(this.chartData);
    if (this.showChart)
      this.compileInternalGraphData();
    if (this.showLegend)
      this.compileInternalLegendData();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);

    this.legendSelectedList = Object.assign([], this.chartData)

    if (this.showChart)
      this.compileInternalGraphData();
    if (this.showLegend)
      this.compileInternalLegendData();
  }


  private compileInternalGraphData(chartData:ChartData[]=null) {
    const internalData = (chartData?chartData:this.chartData).map(chartData => {
      return { value: chartData.value, name: chartData.name, itemStyle: { color: chartData.color } }
    })
    this._internalGraphData = {
      title: {
        text: this.graphName,
        subtext: this.graphSubtext,
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          type: 'pie',
          radius: '50%',
          data: internalData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }

  private compileInternalLegendData() {
    const internalData = this.chartData.map(chartData => {
      return { name: (chartData.name + ' - ' + chartData.value), itemStyle: { color: chartData.color } }
    });
    this._internalLegendData = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        selectedMode: getEnumValue(this.legendType)
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: internalData,
        }
      ]
    };

  }

  private legendSelectChanged(legendEvent: ChartData){

    console.log("legendSelectChanged:");
    console.log(legendEvent);

    if (this.legendType == LegendType.STATIC)
    return;


    console.log("legendSelected list is:")
    console.log("Current chartData is:")
    console.log(this.chartData)


    switch(this.legendType){
      case LegendType.CLICK: {
        console.log("Legend Event Type: Click")
           console.log("Outputting legend clicked element:")
        console.log(legendEvent)
        this.legendItemSelectEvent.emit([legendEvent]);
        break;
      }

      case LegendType.FILTER: {
        console.log("Legend Event Type: Filter")
        const index = this.legendSelectedList.indexOf(legendEvent)
        if (index != -1) 
        this.legendSelectedList.splice(index)

        else 
        this.legendSelectedList.push(legendEvent)

        const filteredChartData = this.chartData.filter(data=> this.legendSelectedList.some(sel =>sel.name.includes(data.name)));
        console.log("Outputting legend filtered chart:")
        console.log(filteredChartData)
        this.legendItemSelectEvent.emit(filteredChartData);
        this.compileInternalGraphData(filteredChartData)
        this.legendItemSelectEvent.emit(filteredChartData);
        break;
      }
    }
  }

  
}

