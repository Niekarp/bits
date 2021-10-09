import { Component } from '@angular/core';
import { AppFormData } from 'src/app/models/app-form-data.model';
import { FormDataService } from 'src/app/services/form-data/form-data.service';

@Component({
    selector: 'app-definition-step',
    templateUrl: './definition-step.component.html',
    styleUrls: ['./definition-step.component.scss']
})
export class DefinitionStepComponent {
    public editedFormData: AppFormData;
    
    constructor(public formData: FormDataService) {
        this.editedFormData = formData.forms[formData.editedFormIdx];
    }

    public updateAndSaveForm(newValue: string, fieldName: string) {
        (this.editedFormData as any)[fieldName] = newValue;
        
        this.formData.saveDraft();
    }
}
