import { Injectable } from '@angular/core';
import { AppFormData } from '../../models/app-form-data.model';

@Injectable({
    providedIn: 'root'
})
export class LocalstorageService {
    private readonly LOCAL_STORAGE_FORMS_KEY = "forms";                     // key to form data
    private readonly LOCAL_STORAGE_EDITED_FORM_KEY = "forms-edited-index";  // key to currently edited form
    
    constructor() {}

    getForms(): AppFormData[] | null {
        const  formsStr = localStorage.getItem(this.LOCAL_STORAGE_FORMS_KEY);
        return formsStr ? JSON.parse(formsStr) : null;
    }

    getEditedFormIdx(): number | null {
        const  editedFormIdxStr = localStorage.getItem(this.LOCAL_STORAGE_EDITED_FORM_KEY);
        return editedFormIdxStr ? JSON.parse(editedFormIdxStr) : null;
    }

    saveForms(forms: AppFormData[]) {
        localStorage.setItem(this.LOCAL_STORAGE_FORMS_KEY, JSON.stringify(forms));
    }

    saveEditedFormIdx(formIdx: number) {
        localStorage.setItem(this.LOCAL_STORAGE_EDITED_FORM_KEY, JSON.stringify(formIdx));
    }
}
