import { Component, OnInit } from '@angular/core';
import { AppFormData } from 'src/app/models/app-form-data.model';
import { FormDataService } from 'src/app/services/form-data/form-data.service';

@Component({
    selector: 'app-form-page',
    templateUrl: './form-page.component.html',
    styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent { 
    public editedFormData: AppFormData;

    constructor(public formData: FormDataService) {
        this.editedFormData = formData.forms[formData.editedFormIdx];
    }
}
