import { Injectable } from '@angular/core';
import REAL_DATA from './real-data';

@Injectable({
  providedIn: 'root'
})
export class RealService {

  list = REAL_DATA.realisations;

}
