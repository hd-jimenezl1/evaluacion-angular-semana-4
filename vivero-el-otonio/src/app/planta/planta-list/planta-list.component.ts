import { Component, OnInit } from '@angular/core';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css']
})
export class PlantaListComponent implements OnInit {

  plantas:Planta[] = [];

  constructor(private plantaService:PlantaService) { }

  ngOnInit() {

    this.plantaService.getPlantas().subscribe(plantas => {
      this.plantas = plantas;
    })
  }

}
