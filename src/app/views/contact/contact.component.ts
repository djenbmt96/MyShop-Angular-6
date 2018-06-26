import { Component,ViewChild, OnInit } from '@angular/core';
import {} from '@types/googlemaps';

@Component({
    templateUrl: 'contact.component.html'
})

export class ContactComponent implements OnInit{
    constructor(){}

    @ViewChild('gmap') gmapElement: any;
    map: google.maps.Map;
    marker: google.maps.Marker;
    ngOnInit() {
        var mapProp = {
          center: new google.maps.LatLng(10.7924006, 106.6411219),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var uluru = {lat: 10.7924006, lng: 106.6411219};
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        this.marker = new google.maps.Marker({position: uluru, map: this.map});
      }
}