import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppFormData } from '../../../../../models/app-form-data.model';

@Component({
    selector: 'app-summary-step',
    templateUrl: './summary-step.component.html',
    styleUrls: ['./summary-step.component.scss']
})
export class SummaryStepComponent {
    @Input()
    editedForm!: AppFormData;

    @Output()
    save = new EventEmitter();

    constructor() {}
    
    onSaveButtonClick() {
        this.save.emit();
    }
}
