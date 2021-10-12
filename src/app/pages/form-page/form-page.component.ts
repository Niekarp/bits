import { Component, ElementRef, ViewChild } from '@angular/core';
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
    public $selectedStep!: ElementRef; // step refers to one of form pages accessed via menu buttons (1-9)

    @ViewChild(DefinitionStepComponent)
    public difinitionStepCmp!: DefinitionStepComponent; // frist step

    public saveFailed: boolean = false; // some required fields were not filled

    public editedFormData: AppFormData;   // currently edited form
    public buttonNames: Array<string> = [ // text for menu buttons
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
        this.editedFormData = formData.forms[formData.editedFormIdx]; // get form selected in dashboard-page
    }

    public onClickAndNotFilled(): void {
        // fires when menu button is clicked despite marketing name being empty
        if (this.difinitionStepCmp) {
            this.difinitionStepCmp.touchRequiredSteps();
        }
    }

    public onSaveFail() {
        // go back to first step and signal save failure
        (this.$selectedStep.nativeElement as HTMLInputElement).value = "1";
        this.saveFailed = true;
    }
}
