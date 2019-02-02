import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../core/api.service';
import { UtilsService } from '../../core/utils.service';
import { Subscription } from 'rxjs/Subscription';
import { Service } from '../../core/models/services.model';

import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-services-content',
  templateUrl: './services-content.component.html',
  styleUrls: ['./services-content.component.scss']
})
export class ServicesContentComponent implements OnInit, OnDestroy {

  pageTitle = 'Events';
  servicesListSub: Subscription;
  servicesList: Service[];

  loading: boolean;
  error: boolean;
  query: '';

  constructor(
    private title: Title,
    public utils: UtilsService,
    private api: ApiService,
    private _sanitizer: DomSanitizer
  ) {
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement("script");
    script.innerHTML = "";
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  getBackground(image) {
    //return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url('../../${image}')`);
    return this._sanitizer.bypassSecurityTrustStyle(`url('../../${image}')`);
  }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._getServiceList();
    this.loadScript("../../assets/js/jquery.stellar.min.js");
    this.loadScript("../../assets/js/main.js");
    window.scrollTo({ top: -200, behavior: 'smooth' });
  }
  private _getServiceList() {
    this.loading = true;
    // Get future, public services
    this.servicesListSub = this.api.getServices$().subscribe(
      res => {
        this.servicesList = res;
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
