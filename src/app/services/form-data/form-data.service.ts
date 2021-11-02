import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// relative paths must be used because of stackblitz
import { AppFormData, requiredAppFormDataFields } from '../../models/app-form-data.model';
import { LocalstorageService } from '../localstorage/localstorage.service';

import * as _ from "lodash";

@Injectable({
    providedIn: 'root'
})
export class FormDataService {
    private forms!: AppFormData[];
    private editedFormIdx!: number;

    change$ = new Subject<AppFormData[]>();

    constructor(private storage: LocalstorageService) {
        const storedForms = storage.getForms();
        const storedEditedFormIdx = storage.getEditedFormIdx();

        this.forms = storedForms ? storedForms : [];
        this.editedFormIdx = storedEditedFormIdx ? storedEditedFormIdx : 0;
    }

    getForms(): AppFormData[] {
        return _.cloneDeep(this.forms);
    }

    getFormsCount(): number {
        return this.forms.length;
    }

    getEditedForm(): AppFormData | null {
        const editedForm = this.forms[this.editedFormIdx];

        if (!editedForm) return null;
        return _.cloneDeep(editedForm);
    }

    addForm() {
        this.forms.push(new AppFormData());
        this.change$.next(this.getForms());
    }

    deleteForm(formIdx: number) {
        if (formIdx >= this.forms.length) return;

        this.forms.splice(formIdx, 1);
        this.change$.next(this.getForms());
    }

    startFormEditing(formIdx: number) {
        if (formIdx >= this.forms.length) return;

        this.editedFormIdx = formIdx;
    }

    stopFormEditing() {
        this.editedFormIdx = -1;
    }

    updateEditedForm(form: AppFormData) {
        const editedForm = this.forms[this.editedFormIdx];
        
        _.assign(editedForm, form);
        this.change$.next(this.getForms());
    }

    saveDraft() {
        this.storage.saveForms(this.forms);
        this.storage.saveEditedFormIdx(this.editedFormIdx);
    }

    isRequiredDataEntered(): boolean {
        const editedForm = this.getEditedForm();

        if (!editedForm) return true;

        for (const requiredFiedName of requiredAppFormDataFields) {
            if (!editedForm[requiredFiedName]) return false;
        }
        return true;
    }
}
