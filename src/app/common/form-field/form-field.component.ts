import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-form-field',
    templateUrl: './form-field.component.html',
    styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
    @Input()
    public required: boolean = false;

    @Input()
    public invalid: boolean = false;
    
    constructor() { }
    
    ngOnInit(): void {
    }
    
}
