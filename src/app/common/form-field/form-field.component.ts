import { Component, Input, OnInit } from '@angular/core';

// Wrapper for form fields

@Component({
    selector: 'app-form-field',
    templateUrl: './form-field.component.html',
    styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
    @Input()
    public required: boolean = false; // adds '*'

    @Input()
    public invalid: boolean = false;  // adds red outline
    
    constructor() { }
    
    ngOnInit(): void {
    }
    
}
