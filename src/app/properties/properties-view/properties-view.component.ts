import { Component } from '@angular/core';
import { PropertyService } from '../property.service';
import { Property } from 'src/app/interfaces/property.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-properties-view',
  templateUrl: './properties-view.component.html',
  styleUrls: ['./properties-view.component.css']
})
export class PropertiesViewComponent {

  isPropertyLoading: boolean = true;
  properties: Property[] = [];

  constructor(private propertyService: PropertyService, private router: Router) { }

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe(
      properties => {
        this.properties = properties;
        this.isPropertyLoading = false;
      }
    )
  }

  addProperty() {
    this.router.navigate(["/add-property"]);
  }


}
