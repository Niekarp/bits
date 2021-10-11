import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppFormData } from '../../models/app-form-data.model';
import { FormDataService } from '../../services/form-data/form-data.service';
import { DefinitionStepComponent } from './local-components/steps/definition-step/definition-step.component';

@Component({
    selector: 'app-form-page',
    templateUrl: './form-page.component.html',
    styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent { 
    @ViewChild("selectedStep")
    public $selectedStep!: ElementRef;

    @ViewChild(DefinitionStepComponent)
    public difinitionStepCmp!: DefinitionStepComponent;

    public saveFailed: boolean = false;

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

    public onClickAndNotFilled(): void {
        if (this.difinitionStepCmp) {
            this.difinitionStepCmp.touchRequiredSteps();
        }
    }

    public onSaveFail() {
        (this.$selectedStep.nativeElement as HTMLInputElement).value = "1";
        this.saveFailed = true;
    }
}
