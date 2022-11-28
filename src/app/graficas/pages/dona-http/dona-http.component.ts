import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css'],
  styles: [`
    div{
      height:50%;
      width:50%;
    }
  `]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [], backgroundColor:['#0075ED','#00BAF7','#00E0D8','#00F7AD','00ED63'] },
      
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {

    /* this.graficasService.getUsuariosRedesSociales()
      .subscribe(data => {
        console.log(data);
        const labels = Object.keys(data);
        const values = Object.values(data);

        this.doughnutChartData= {
          labels: labels,
          datasets:[
            {data: values}
          ]
        }

      }) */

      this.graficasService.getUsuariosDos()
        .subscribe( ({labels, values}) => {
          this.doughnutChartData= {
            labels: labels,
            datasets:[
              {data: values}
            ]
          }
        })

  }

}
