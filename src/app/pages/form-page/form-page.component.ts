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
    public buttonNames: Array<string> = [
        "definition",
        "choose products",
        "exclude products",
        "bonus products",
        "products limits",
        "choose clients",
        "exclude clients",
        "clients limits",
        "summary"
    ];

    constructor(public formData: FormDataService) {
        this.editedFormData = formData.forms[formData.editedFormIdx];
    }
}
