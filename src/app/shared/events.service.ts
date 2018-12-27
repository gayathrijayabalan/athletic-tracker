import { Injectable } from '@angular/core';
import { Events } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
formData:Events;
  constructor() { }
}
