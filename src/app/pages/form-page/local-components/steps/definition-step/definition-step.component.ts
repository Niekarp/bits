import { AfterContentInit, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { AppFormData } from '../../../../../models/app-form-data.model';
import { FormDataService } from '../../../../../services/form-data/form-data.service';


@Component({
    selector: 'app-definition-step',
    templateUrl: './definition-step.component.html',
    styleUrls: ['./definition-step.component.scss']
})
export class DefinitionStepComponent {
    @Input()
    public saveFailed: boolean = false;

    @ViewChild("marketingName")
    public $marketingName!: any;

    public editedFormData: AppFormData;
    
    constructor(public formData: FormDataService) {
        this.editedFormData = formData.forms[formData.editedFormIdx];
    }

    public updateAndSaveForm(newValue: string, fieldName: string) {
        (this.editedFormData as any)[fieldName] = newValue;

        this.formData.saveDraft();
    }

    public touchRequiredSteps(): void {
        this.$marketingName.control.markAsTouched();
        // this.$technicalName.control.markAsTouched();
    }

    public showCalendar(calendarElm: any) {
        // calendarElm._flatpickr.open();
        // console.log(this.$condition);
        
    }
}
