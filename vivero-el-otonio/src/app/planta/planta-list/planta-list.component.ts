import { Component, OnInit } from '@angular/core';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';

const TIPO_INTERIOR = "Interior";
const TIPO_EXTERIOR = "Exterior";

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css']
})
export class PlantaListComponent implements OnInit {

  plantas:Planta[] = [];

  constructor(private plantaService:PlantaService) { }

  getPlantasInterior():number {

    if(this.plantas) {

      return this.plantas.filter(planta => TIPO_INTERIOR === planta.tipo).length
    }
    else
    {
      return 0;
    }
  }

  getPlantasExterior():number {

    if(this.plantas) {

      return this.plantas.filter(planta => TIPO_EXTERIOR === planta.tipo).length
    }
    else
    {
      return 0;
    }
  }

  ngOnInit() {

    this.plantaService.getPlantas().subscribe(plantas => {
      this.plantas = plantas;
    })
  }

}
