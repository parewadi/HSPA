import { Component } from "@angular/core";


@Component(
    {
        selector: 'app-property-card',
        //template:`<h1>Hello Gurgaon</h1>`,
        templateUrl:"property-card.component.html",
        //styles:['h1{font-weight:normal;}']
        styleUrls: ['property-card.component.css']
    }
)

export class PropertyCardComponent{
    Property:any={
        Id:1,
        Name:"Birla Housing",
        Type:"House",
        Price:120000
    }

}