import { Component, Input, NgModule, ViewChild } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import { AppFormData } from '../../../../../models/app-form-data.model';
import { FormDataService } from '../../../../../services/form-data/form-data.service';

// First step of the form

@Component({
    selector: 'app-definition-step',
    templateUrl: './definition-step.component.html',
    styleUrls: ['./definition-step.component.scss']
})
export class DefinitionStepComponent {
    @Input()
    public saveFailed: boolean = false; // highlight required fields when true

    @ViewChild("marketingName")
    public $marketingName!: any;

    public editedFormData: AppFormData; // currently edited form
    
    constructor(public formData: FormDataService) {
        this.editedFormData = formData.forms[formData.editedFormIdx];
    }

    public updateAndSaveForm(newValue: string, fieldName: string) {
        // i tried to use banana in the box syntax [()] + custom directive to save form but
        // the directive had been receiving old value to save
        (this.editedFormData as any)[fieldName] = newValue;

        this.formData.saveDraft();
    }

    public touchRequiredSteps(): void {
        // highlights marketing field when user tries to navigate to the next step before filling it
        this.$marketingName.control.markAsTouched();
    }

    public badInput(field: NgModel): boolean {
        return !!(field.touched && !field.value);
    }

    public badAfterSave(field: NgModel): boolean {
        return !!(!field.value && !field.touched && this.saveFailed);
    }
}
