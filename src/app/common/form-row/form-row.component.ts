import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-form-row',
    templateUrl: './form-row.component.html',
    styleUrls: ['./form-row.component.scss']
})
export class FormRowComponent implements OnInit {
    @Input()
    public tooltipUp: boolean | undefined = true;

    public isHovered: boolean = false;
    
    constructor() { }
    
    ngOnInit(): void {
    }
    
}
