import { Component } from '@angular/core';
import { FormDataService } from 'src/app/services/form-data/form-data.service';

@Component({
    selector: 'app-summary-step',
    templateUrl: './summary-step.component.html',
    styleUrls: ['./summary-step.component.scss']
})
export class SummaryStepComponent {    
    constructor(private formData: FormDataService) { }
    
    public onSaveButtonClick() {
        this.formData.stopFormEditing();
    }
    
}
