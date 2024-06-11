import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyService } from '../property.service';
import { CustomPropertyFormValidators } from './validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-properties-create',
  templateUrl: './properties-create.component.html',
  styleUrls: ['./properties-create.component.css']
})
export class PropertiesCreateComponent {

  propertyForm: FormGroup;
  errorMessage: string = "";
  selectedFiles: File[] = [];
  isCreatePropertyLoading: boolean = true;



  constructor(private fb: FormBuilder, private propertyService: PropertyService, private router: Router) {
    this.propertyForm = this.fb.group({
      title: [[Validators.required, CustomPropertyFormValidators.titleValidator]],
      description: [[Validators.required, CustomPropertyFormValidators.descriptionValidator]],
      location: [Validators.required],
      price: [[Validators.required, Validators.min(0), CustomPropertyFormValidators.priceValidator]],
      property_type: [Validators.required],
      size: [[Validators.required, Validators.min(0)]]
    });
  }

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isCreatePropertyLoading = false;
    }, 100);
  }

  viewProperties() {
    this.router.navigate(['/properties']);
  }

  onSubmit() {
    const propertiesValues = this.propertyForm.value;
    console.log(propertiesValues);
    this.propertyService.createProperty(propertiesValues).subscribe(
      (response) => {
        console.log('Property saved succesfully');
        console.log(response);
      },
      (error) => {
        console.log('=========> Observable error.')
        this.errorMessage = "Amnaa louyy deconner dehh";
      }
    )
  }
}
