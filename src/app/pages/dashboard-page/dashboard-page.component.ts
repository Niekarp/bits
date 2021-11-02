import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppFormData } from '../../models/app-form-data.model';

@Component({
    selector: 'app-dashboard-page-ui',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent{
    @Input()
    forms!: AppFormData[];

    @Output()
    add = new EventEmitter();

    @Output()
    edit = new EventEmitter<number>();

    @Output()
    delete = new EventEmitter<number>();

    onAddClick() {
        this.add.emit();
    }

    onEditClick(formIdx: number) {
        this.edit.emit(formIdx);
    }

    onDeleteClick(formIdx: number) {
        this.delete.emit(formIdx);
    }
}
