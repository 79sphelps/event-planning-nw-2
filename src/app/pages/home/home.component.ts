import {
  Component,
  OnInit, AfterViewInit, Output, EventEmitter
} from '@angular/core';

import { UtilsService } from '../../core/utils.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  displayHomeSlider: string;
  displayAboutSection: string;
  displayEventsSection: string;
  displayServicesSection: string;
  displaySliderSection: string;
  displayBlogSliderSection: string;
  displayGallerySection: string;

  loading: boolean;

  constructor(public utils: UtilsService) {}

  ngAfterViewInit() {
    this.loading = false;
  }

  ngOnInit() {
    this.loadScript('../../../assets/js/jquery.stellar.min.js');
    this.loadScript('../../../assets/js/main.js');
    window.scrollTo({ top: -200, behavior: 'smooth' });
    this.loading = true;
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  setAboutSectionStatus(status: string) {
    this.displayAboutSection = status;
  }

  setEventsSectionStatus(status: string) {
    this.displayEventsSection = status;
  }

  setServicesSectionStatus(status: string) {
    this.displayServicesSection = status;
  }

  setSliderSectionStatus(status: string) {
    this.displaySliderSection = status;
  }

  setBlogSliderSectionStatus(status: string) {
    this.displayBlogSliderSection = status;
  }

  setGallerySectionStatus(status: string) {
    this.displayGallerySection = status;
  }

}
