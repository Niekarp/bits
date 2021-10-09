import { Injectable } from '@angular/core';
import { AppFormData } from 'src/app/models/app-form-data.model';

@Injectable({
    providedIn: 'root'
})
export class FormDataService {
    private readonly LOCAL_STORAGE_FORMS_KEY = "forms";
    private readonly LOCAL_STORAGE_EDITED_FORM_KEY = "forms-edited-index";

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
}
