import { Component , ViewChild, ElementRef} from '@angular/core';
import { NavController } from 'ionic-angular';
import {GoogleMap, GoogleMaps, LatLng, CameraPosition, GoogleMapsEvent , Marker, MarkerOptions } from '@ionic-native/google-maps';
import {Geolocation} from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 @ViewChild('map') mapelement : ElementRef;
 map : GoogleMap;
 initialMapLoad: boolean = true;
  constructor(public navCtrl: NavController, private _googlemap : GoogleMaps, 
    private _geolocation : Geolocation) {
      
  }
  ionViewDidLoad(){

    this.initMap();
   
  /*  this.map.one(GoogleMapsEvent.MAP_READY).then(()=> {
      this.getlocation().then(
        res => {
          console.log(res.coords.latitude)
          console.log(res.coords.longitude)
          let loc = new LatLng(res.coords.latitude, res.coords.longitude);
          this.movecamer(loc);
          this.createmarker(loc, "Me").then((marker: Marker) =>{
            marker.showInfoWindow();
          }).catch(err => {
            console.log(err);
          })
        }
      ).catch ( err => {
        console.log(err);
      } );
    });
    */
  }
 

  initMap(){
    let element = this.mapelement.nativeElement;
    this.getlocation().then(res => {
      let loc = new LatLng(res.coords.latitude, res.coords.longitude);
      this.map = this._googlemap.create('map', {      
        camera:{
          target: loc,
          zoom: 15
        }
        
      });
      this.createmarker(loc, 'Me');
    }).catch (err => {
       console.log(err);
    });
    
   
  }
  ionViewDidEnter(){
    if (!this.initialMapLoad) {
      this.map.setDiv('map');
    } else {
      this.initialMapLoad = false;
    }
  }
  getlocation(){
    return this._geolocation.getCurrentPosition();
  }
  movecamer(loc : LatLng){
   let options : CameraPosition<LatLng> ={
     target: loc,
     zoom: 15,
     tilt: 10
   }
   this.map.moveCamera(options)
  }
  createmarker(loc: LatLng, title : string){
    let markeroptions : MarkerOptions = {
        position : loc,
        title : title
    }
    return this.map.addMarker(markeroptions);
  }

}
