import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../../core/api.service';
import { UtilsService } from '../../../core/utils.service';
import { Subscription } from 'rxjs/Subscription';
import { EventModel } from '../../../core/models/event.model';

import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-events-content',
  templateUrl: './events-content.component.html',
  styleUrls: ['./events-content.component.scss']
})
export class EventsContentComponent implements OnInit, OnDestroy {

  pageTitle = 'Events';
  eventListSub: Subscription;
  eventList: EventModel[];

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

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url('../../../${image}')`);
  }


  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    // this.loadScript('../../../assets/js/jquery.stellar.min.js');
    this.loadScript('../../../../assets/js/main.js');
    this.loadStyle('../../../../assets/css/animate.css');
    this._getEventList();
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

  private _getEventList() {
    this.loading = true;
    // Get future, public events
    this.eventListSub = this.api.getEvents$().subscribe(
      res => {
        this.eventList = res;
        console.log(this.eventList);
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
    this.eventListSub.unsubscribe();
  }
}
