import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BarrasComponent } from '../../pages/barras/barras.component';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType, ChartData, ChartEvent } from 'chart.js';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit  {

  //proviene del html barras-doble
  @Input() horizontal: boolean = false;
  //@Input() barCharLabels: string[] = [];
  

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  
  public barChartType: ChartType = 'bar';
 

  @Input() public barChartData: ChartData<'bar'> = {
     labels: [ ],
    datasets: [
      { data: [ ]},
      { data: [ ]}
    ] 
  };





  constructor() { }


  ngOnInit(): void {
    if(this.horizontal){
      this.barChartOptions!.indexAxis = 'y';
    }
  }
}
