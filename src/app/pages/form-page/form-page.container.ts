import { Component } from '@angular/core';
import { AppFormData } from '../../models/app-form-data.model';
import { FormDataService } from '../../services/form-data/form-data.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

import * as _ from "lodash";

// This component hold its children state and translates its children events to application commmands

@Component({
    selector: 'app-form-page',
    templateUrl: './form-page.component.html',
    styleUrls: ['./form-page.component.scss']
})
export class FormPageContainerComponent {
    private stepsCount = 9;
    private stepsDisabledConditions = [
        (form: AppFormData) => false,
        (form: AppFormData) => !form.marketingName && !form.technicalName,
        (form: AppFormData) => !form.marketingName && !form.technicalName,
        (form: AppFormData) => !form.marketingName && !form.technicalName,
        (form: AppFormData) => !form.marketingName && !form.technicalName,
        (form: AppFormData) => !form.marketingName && !form.technicalName,
        (form: AppFormData) => !form.marketingName && !form.technicalName,
        (form: AppFormData) => !form.marketingName && !form.technicalName,
        (form: AppFormData) => !form.marketingName && !form.technicalName,
    ];

    editedForm = this.formData.getEditedForm() as AppFormData;

    definitionStepFormTouched = false;

    selectedStep = 1;
    stepNumbers = _.range(1, this.stepsCount + 1);
    stepLabels = [
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
    stepDisabled = this.stepsDisabledConditions.map(cond => cond(this.editedForm));

    get stepSelected(): boolean[] {
        return [...Array(this.stepsCount)].map((_, idx) => (idx + 1) === this.selectedStep);
    }

    constructor(private formData: FormDataService, private snackbar: SnackbarService) {
        if (this.editedForm === null) {
            this.formData.stopFormEditing();
        }
    }

    onStepClick(clickedStepNumber: number) {
        if (this.selectedStep === clickedStepNumber) return;
        if (this.stepDisabled[clickedStepNumber - 1]) {
            this.snackbar.displayStepNavigationFailToast();
            this.definitionStepFormTouched = true;
            return;
        }

        this.selectedStep = clickedStepNumber;
    }

    onSave() {
        if (this.formData.isRequiredDataEntered()) {
            this.formData.stopFormEditing();
        } else {
            this.snackbar.displayRequiredStepsNotFilledToast();
            this.selectedStep = 1;
        }
    }

    onFormChange(form: AppFormData) {
        this.stepDisabled = this.stepsDisabledConditions.map(cond => cond(form));
        
        this.formData.updateEditedForm(form);
        this.formData.saveDraft();
    }

    onDefinitionStepExit(form: AppFormData) {
        this.editedForm = form;
        this.definitionStepFormTouched = true;
    }
}
