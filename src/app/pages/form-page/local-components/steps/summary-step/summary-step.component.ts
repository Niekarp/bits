import { Component, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppFormData } from '../../../../../models/app-form-data.model';
import { FormDataService } from '../../../../../services/form-data/form-data.service';

@Component({
    selector: 'app-summary-step',
    templateUrl: './summary-step.component.html',
    styleUrls: ['./summary-step.component.scss']
})
export class SummaryStepComponent {
    @Output()
    public saveFail = new EventEmitter();

    public editedFormData: AppFormData;

    constructor(public formData: FormDataService, private snackbar: MatSnackBar) {
        this.editedFormData = formData.forms[formData.editedFormIdx];
    }
    
    public onSaveButtonClick() {
        if (this.formData.isRequiredDataEntered()) {
            this.formData.stopFormEditing();
        } else {
            this.snackbar.open("required fields not filled", undefined, {
                duration: 2000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['my-snackbar--problem']
            });
            this.saveFail.emit();
        }
    }
    
}
