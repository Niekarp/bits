import { Injectable } from '@angular/core';
// relative paths must be used because of stackblitz
import { AppFormData } from '../../models/app-form-data.model';

// Service to store form data and sync it with localstorage

@Injectable({
    providedIn: 'root'
})
export class FormDataService {
    private readonly LOCAL_STORAGE_FORMS_KEY = "forms";                     // key to form data
    private readonly LOCAL_STORAGE_EDITED_FORM_KEY = "forms-edited-index";  // key to currently edited form

    private readonly requiredFieldNames = ["marketingName", "condition", "type", "startDate"];

    public forms!: Array<AppFormData>; // initialized with initDataFromLocalStorage
    public editedFormIdx!: number;     // initialized with initDataFromLocalStorage

    constructor() {
        if (localStorage.getItem(this.LOCAL_STORAGE_FORMS_KEY) === null ||
            localStorage.getItem(this.LOCAL_STORAGE_EDITED_FORM_KEY) === null) {
            this.initLocalStorage();
        }

        this.initDataFromLocalStorage();
    }

    private initLocalStorage(): void {
        localStorage.setItem(this.LOCAL_STORAGE_FORMS_KEY, JSON.stringify([new AppFormData()]));
        localStorage.setItem(this.LOCAL_STORAGE_EDITED_FORM_KEY, "0");
    }

    private initDataFromLocalStorage(): void {
        this.forms = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_FORMS_KEY) as string);
        this.editedFormIdx = Number(localStorage.getItem(this.LOCAL_STORAGE_EDITED_FORM_KEY));
    }

    public addForm() {
        this.forms.push(new AppFormData());
        this.editedFormIdx = this.forms.length - 1;

        this.saveDraft();
        this.saveEditingStatus();
    }

    public startFormEditing(formIdx: number) {
        if (formIdx >= this.forms.length) return;

        this.editedFormIdx = formIdx;
        this.saveEditingStatus();
    }

    public stopFormEditing() {
        this.editedFormIdx = -1;
        this.saveEditingStatus();
    }

    public saveDraft(): void {
        localStorage.setItem(this.LOCAL_STORAGE_FORMS_KEY, JSON.stringify(this.forms));
    }

    public saveEditingStatus(): void {
        // saves the index of currently edited form
        localStorage.setItem(this.LOCAL_STORAGE_EDITED_FORM_KEY, JSON.stringify(this.editedFormIdx));
    }

    public deleteForm(formIdx: number): void {
        if (formIdx >= this.forms.length) return;

        this.forms.splice(formIdx, 1);

        if (this.forms.length === 0) {
            this.initLocalStorage();
            this.initDataFromLocalStorage();
        }

        this.saveDraft();
    }

    public isFieldRequired(fieldName: string): boolean {
        return this.requiredFieldNames.includes(fieldName);
    }

    public isRequiredDataEntered(): boolean {
        const formData = this.forms[this.editedFormIdx];

        if (!formData) return true;

        return !!formData.marketingName
            && !!formData.condition
            && !!formData.type
            && !!formData.startDate;
    }
}
