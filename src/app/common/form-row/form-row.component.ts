import { Component, Input, OnInit } from '@angular/core';

// Wrapper for form row
// adds tooltip at the end of form row

@Component({
    selector: 'app-form-row',
    templateUrl: './form-row.component.html',
    styleUrls: ['./form-row.component.scss']
})
export class FormRowComponent implements OnInit {
    @Input()
    public tooltipUp: boolean | undefined = true;  // positions tooltip to te top of input

    public isHovered: boolean = false;
    
    constructor() { }
    
    ngOnInit(): void {
    }
    
}
