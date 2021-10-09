import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu-button',
    templateUrl: './menu-button.component.html',
    styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {
    @Input()
    public disabled: boolean = true;

    @Input()
    public selected: boolean = false;

    stopClickPropagationIfDisabled($event: Event): void {
        if (this.disabled) {
            $event.stopPropagation();
        }
    }

    constructor() { }
    
    ngOnInit(): void {
    }
    
}
