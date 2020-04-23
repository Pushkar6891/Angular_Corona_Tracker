import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-coronatracker',
  templateUrl: './coronatracker.component.html',
  styleUrls: ['./coronatracker.component.css']
})
export class CoronatrackerComponent implements OnInit {

  constructor(private service : DataServiceService) { }

  ngOnInit(): void {
    this.service.getCoronaDataFromSpringBootApp();
  }

}
