import { RealService } from './../real.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.css']
})
export class RealisationsComponent implements OnInit {

  constructor(public realService: RealService) { }

  ngOnInit() {
    console.log(this.realService.list);
  }

}
