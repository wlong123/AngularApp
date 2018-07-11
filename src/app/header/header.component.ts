import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    @Output() selected = new EventEmitter<string>();

    onSelect(selectedComponent: string) {
        this.selected.emit(selectedComponent);
    }
}
