/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlantaListComponent } from './planta-list.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';
import { faker } from '@faker-js/faker';

describe('PlantaListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;
  let debug:DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantaListComponent ],
      providers: [provideHttpClient(), provideHttpClientTesting(), PlantaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;
    
    const planta1 = new Planta(
      faker.number.int(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.number.int(),
      faker.lorem.sentence(),
      faker.lorem.sentence()      
    );
    const planta2 = new Planta(
      faker.number.int(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.number.int(),
      faker.lorem.sentence(),
      faker.lorem.sentence()      
    );
    const planta3 = new Planta(
      faker.number.int(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.number.int(),
      faker.lorem.sentence(),
      faker.lorem.sentence()      
    );
    const plantas:Planta[] = [planta1, planta2, planta3];
    component.plantas = plantas;

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have table header with the corresponding column titles', () => {
    const tableHeader = debug.queryAll(By.css('thead'));
    expect(tableHeader).toHaveSize(1);

    const headerColumns = tableHeader[0].queryAll(By.css('th'));
    expect(headerColumns).toHaveSize(4);
    expect(headerColumns[0].nativeElement.textContent).toContain("#");
    expect(headerColumns[1].nativeElement.textContent).toContain("Nombre Común");
    expect(headerColumns[2].nativeElement.textContent).toContain("Tipo");
    expect(headerColumns[3].nativeElement.textContent).toContain("Clima");    
  });

  it('should have 3 table rows with the data of the plants', () => {
    const tableRows = debug.queryAll(By.css('tbody tr'));
    expect(tableRows).toHaveSize(3);

    tableRows.forEach((tableRow, i) => {

      const rowColumns = tableRow.children;
      expect(rowColumns).toHaveSize(4);
      expect(rowColumns[0].nativeElement.textContent).toContain(component.plantas[i].id);
      expect(rowColumns[1].nativeElement.textContent).toContain(component.plantas[i].nombre_comun);
      expect(rowColumns[2].nativeElement.textContent).toContain(component.plantas[i].tipo);
      expect(rowColumns[3].nativeElement.textContent).toContain(component.plantas[i].clima);
    });
  });

});
