import {Component} from '@angular/core';
import {HomePage} from '../home/home'
import {PersonPage} from '../person/person';

@Component({
    templateUrl: 'tabs.html'
})
export class tabs {
    Tabs1 =  HomePage;
    Tabs2 = PersonPage
    constructor(){
      

    }
}