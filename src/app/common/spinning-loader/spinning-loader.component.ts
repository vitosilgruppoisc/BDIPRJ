import { Component, Input } from '@angular/core';

@Component({
    selector: 'gepa-spinning-loader',
    templateUrl:'./spinning-loader.component.html'
})
export class SpinningLoaderComponent {

    @Input('type') type : 'border'|'grow' = 'grow';
    @Input('size') size : 'sm'|'md'|'lg' = 'md';
    @Input('color') color: 'secondary'|'primary'|'success'|'danger'|'warning'|'dark'|'light'|'info' = 'secondary';


}