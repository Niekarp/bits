import { Component } from '@angular/core';
import { AppFormData } from 'src/app/models/app-form-data.model';
import { FormDataService } from 'src/app/services/form-data/form-data.service';

@Component({
    selector: 'app-summary-step',
    templateUrl: './summary-step.component.html',
    styleUrls: ['./summary-step.component.scss']
})
export class SummaryStepComponent {
    public editedFormData: AppFormData; 

    constructor(private formData: FormDataService) {
        this.editedFormData = formData.forms[formData.editedFormIdx];
    }
    
    public onSaveButtonClick() {
        if (this.formData.isRequiredDataEntered()) {
            this.formData.stopFormEditing();
        } else {
            
        }
    }
    
}
