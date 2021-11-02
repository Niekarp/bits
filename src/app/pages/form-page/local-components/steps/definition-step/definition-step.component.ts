import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, Self } from '@angular/core';
import { AppFormData } from '../../../../../models/app-form-data.model';
import { DefinitionStepPresenter } from './definition-step.presenter';

// First step of the form

@Component({
    selector: 'app-definition-step',
    templateUrl: './definition-step.component.html',
    styleUrls: ['./definition-step.component.scss'],
    viewProviders: [DefinitionStepPresenter],
})
export class DefinitionStepComponent implements OnInit, OnDestroy {
    @Input()
    editedForm!: AppFormData;

    @Input()
    set formTouched(touched: boolean) {
        if (touched) this.presenter.setFormTouched();
    } 

    @Output()
    formChange = this.presenter.formChange$;

    @Output()
    exit = new EventEmitter<AppFormData>();

    get editedFormGroup() {
        return this.presenter.form;
    }
    
    constructor(@Self() private presenter: DefinitionStepPresenter) {}

    ngOnInit() {
        this.presenter.setForm(this.editedForm);
    }

    ngOnDestroy() {
        this.exit.emit(this.presenter.getForm());
    }

    formControlInvalidity(controlName: string): boolean {
        return this.presenter.getControlInvalidity(controlName);
    }
}
