import {Component} from '@angular/core';
import {onsNotification} from 'angular2-onsenui';

@Component({
    selector: 'app',
    template: require('./app.html'),
    styles: [require('./app.css')]
})
export class MyApp {
    events = [
        {name: "event1", description: "first event"},
        {name: "event2", description: "second event"}
    ];

    constructor() {
    }
}
