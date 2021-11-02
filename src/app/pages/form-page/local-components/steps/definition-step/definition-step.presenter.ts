import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { AppFormData, requiredAppFormDataFields } from "../../../../../models/app-form-data.model";

// Service that takes logic away from definition-step.component and handles form

@Injectable()
export class DefinitionStepPresenter {
    form = this.formBuilder.group({
        marketingName: [''],
        technicalName: [''],
        description: [''],
        condition: [''],
        type: [''],
        benefitAmount: [''],
        startDate: [''],
        finishDate: [''],
        businessConditions: [''],
        promotionConnection: [''],
        backPromotion: ['']
    });

    formChange$ = new Observable<AppFormData>(subscriber => {
        this.form.valueChanges.subscribe((form: AppFormData) => subscriber.next(form));
    });

    constructor(private formBuilder: FormBuilder) {}

    getForm() {
        return this.form.value;
    }

    getControlInvalidity(controlName: string): boolean {
        return !this.form.controls[controlName].valid && this.form.controls[controlName].touched;
    }

    setForm(form: AppFormData) {
        this.form.setValue(form);        
        
        for (const requiredFieldName of requiredAppFormDataFields) {
            this.form.controls[requiredFieldName].setValidators([Validators.required]);
        }
    }

    setFormTouched() {
        this.form.markAllAsTouched();
    }
}
