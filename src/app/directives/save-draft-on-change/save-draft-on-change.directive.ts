import { Directive, HostListener } from '@angular/core';
import { FormDataService } from './../../services/form-data/form-data.service';

@Directive({
    selector: '[appSaveDraftOnChange]'
})
export class SaveDraftOnChangeDirective {
    @HostListener("input", ["$event"])
    onInput(value: any): void {
        console.log(value);
        
        this.saveDraft();
    }

    // @HostListener("ngModelChange", ["value","$event"])
    // onChange(value: any, event: any): void {
    //     console.log('change');
    //     console.log(JSON.stringify(value));
    //     console.log(JSON.stringify(event));
        
        
    //     this.saveDraft();
    // }
    
    constructor(public formData: FormDataService) {}
    
    private saveDraft() {
       this.formData.saveDraft(); 
    }
}
