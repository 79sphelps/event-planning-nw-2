import { Component, OnInit, OnDestroy, Output, AfterViewInit, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../../core/api.service';
import { UtilsService } from '../../../core/utils.service';
import { Subscription } from 'rxjs/Subscription';
import { Service } from '../../../core/models/services.model';

import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-services-section',
  templateUrl: './services.section.component.html',
  styleUrls: ['./services.section.component.css']
})
export class ServicesSectionComponent implements OnInit, OnDestroy, AfterViewInit {

  pageTitle = 'Events';
  servicesListSub: Subscription;
  servicesList: Service[];

  loading: boolean;
  error: boolean;
  query: '';

  @Output() viewLoaded = new EventEmitter();

  ngAfterViewInit() {
    // this.viewLoaded.next(true);
    setTimeout(() => {
      this.viewLoaded.emit('true');
    }, 500);
  }

  constructor(
    private title: Title,
    public utils: UtilsService,
    private api: ApiService,
    private _sanitizer: DomSanitizer
  ) {
  }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._getServiceList();
    this.loadStyle('../../../../assets/css/animate.css');
    this.loadStyle('../../../../assets/css/style.css');
    this.loadScript('../../../../assets/js/main.js');
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

  public loadStyle(styl: string) {
    const head = <HTMLHeadElement>document.head;
    const style = document.createElement('link');
    style.innerHTML = '';
    style.rel = styl;
    // style.async = false;
    // style.defer = true;
    head.appendChild(style);
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url('../../../../${image}')`);
  }

  private _getServiceList() {
    this.loading = true;
    // Get future, public services
    this.servicesListSub = this.api.getServices$().subscribe(
      res => {
        this.servicesList = res;
        console.log(this.servicesList);
        this.loading = false;
      },
      err => {
        console.error(err);
        this.loading = false;
        this.error = true;
      }
    );
  }

  ngOnDestroy() {
    this.servicesListSub.unsubscribe();
  }

}
