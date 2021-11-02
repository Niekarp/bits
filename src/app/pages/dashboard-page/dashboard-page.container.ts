import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormDataService } from '../../services/form-data/form-data.service';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.container.html',
})
export class DashboardPageContainerComponent implements OnInit, OnDestroy {
    forms = this.formData.getForms();

    private formChangeSub!: Subscription;

    constructor(private formData: FormDataService) {}

    ngOnInit() {
        this.formChangeSub = this.formData.change$.subscribe(forms => this.forms = forms);
    }

    ngOnDestroy() {
        this.formChangeSub.unsubscribe();
    }

    onAdd() {
        this.formData.addForm();
        this.formData.startFormEditing(this.formData.getFormsCount() - 1);
        this.formData.saveDraft();
    }

    onEdit(formIdx: number) {
        this.formData.startFormEditing(formIdx);
        this.formData.saveDraft();
    }

    onDelete(formIdx: number) {
        this.formData.deleteForm(formIdx);
        this.formData.saveDraft();
    }
}
