import { Component } from '@angular/core';
import { FormDataService } from './services/form-data/form-data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    // Hello :)
    get isFormEdited() {
        return !!this.formData.getEditedForm();
    }
    
    constructor(private formData: FormDataService) {}
}
