import { Pipe, PipeTransform } from '@angular/core';
import { AppFormData } from '../models/app-form-data.model';

// Prepares AppFormData to be displayed
// - empty fields becomes "<empty>"
// - date fields becomes short date drings

@Pipe({
    name: 'formDisplay'
})
export class FormDisplayPipe implements PipeTransform {
    
    transform(formDate: AppFormData, ...args: unknown[]): object {
        let displayFormData = Object.assign({}, formDate) as any;

        if (displayFormData.startDate) {
            displayFormData.startDate =  new Date(displayFormData.startDate).toDateString();
        }
        if (displayFormData.finishDate) {
            displayFormData.finishDate = new Date(displayFormData.finishDate).toDateString();
        }

        for (let field in displayFormData) {
            if (!displayFormData[field]) {
                displayFormData[field] = "<empty>";
            }
        }

        return displayFormData;
    }
    
}
