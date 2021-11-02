import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppFormData } from '../../models/app-form-data.model';

@Component({
    selector: 'app-form-page-ui',
    templateUrl: './form-page.component.html',
    styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent {
    @Input()
    editedForm!: AppFormData;

    @Input()
    stepLabels!: string[];

    @Input()
    stepNumbers!: number[];

    @Input()
    stepSelected!: boolean[];

    @Input()
    stepDisabled!: boolean[];

    @Input()
    selectedStep!: number;

    @Input()
    definitionStepFormTouched!: boolean;

    @Output()
    stepClick = new EventEmitter<number>();

    @Output()
    formChange = new EventEmitter<AppFormData>();

    @Output()
    save = new EventEmitter();

    @Output()
    definitionStepExit = new EventEmitter<AppFormData>();

    constructor() {}

    onStepClick(stepNumber: number) {
        this.stepClick.emit(stepNumber);
    }

    onSave() {
        this.save.emit();
    }

    onFormChange(form: AppFormData) {
        this.formChange.emit(form);
    }

    onDefinitionStepExit(form: AppFormData) {
        this.definitionStepExit.emit(form);
    }
}
