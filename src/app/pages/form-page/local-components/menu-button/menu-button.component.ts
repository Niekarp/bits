import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

// Menu button to navigate between form steps

@Component({
    selector: 'app-menu-button',
    templateUrl: './menu-button.component.html',
    styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent {
    @Input()
    public disabled: boolean = true;

    @Input()
    public selected: boolean = false;

    @Input()
    public number: number = 0;

    @Input()
    public text: string = "";

    constructor() { }
}
