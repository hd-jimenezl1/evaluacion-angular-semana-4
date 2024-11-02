import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planta } from './planta';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable()
export class PlantaService {

    plantasUrl = environment.plantasJsonUrl;

    constructor(private httpClient: HttpClient) { }

    public getPlantas(): Observable<Planta[]> {

        return this.httpClient.get<Planta[]>(this.plantasUrl);
    }
}