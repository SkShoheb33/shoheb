import { Component,OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Aos from 'aos';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  pieChart:Chart = undefined;
  ngOnInit(): void {
    Aos.init();
    this.pieChart = new Chart({
      chart: {
        type: 'pie',
        backgroundColor: 'none'
      },
      title: {
        text: 'Languages',
        style:{
          color: "#61DAFB"
        }
      },
      credits: {
        enabled: true
      },
      plotOptions: {
      pie: {
        dataLabels: {
          style: {
            color: 'white'
          }
        }
      }
    },
      series: [
        {
          name: 'Languages',
          type: 'pie',
          data: [
            ['C/C++', 20],
            ['Python', 35],
            ['Java', 30],
            ['R', 10],
            ['Kotlin', 5]
          ] as any,
        }
      ]
    });
  }
}
