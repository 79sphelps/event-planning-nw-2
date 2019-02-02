import { Component, OnInit, AfterViewInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../core/api.service';
import { UtilsService } from '../core/utils.service';
import { Subscription } from 'rxjs/Subscription';
import { EventModel } from '../core/models/event.model';

import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

//import { FooterService } from '../footer/footer.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, AfterViewInit, OnDestroy {


  pageTitle = "Events";
  eventListSub: Subscription;
  eventList: EventModel[];

  loading: boolean;
  error: boolean;
  query: "";

  @Output() viewLoaded = new EventEmitter();

  ngAfterViewInit() {
    // this.viewLoaded.next(true);
    setTimeout(() => {
      this.viewLoaded.emit("true");
    }, 500);
  }

  constructor(
    private title: Title,
    public utils: UtilsService,
    private api: ApiService,
    private _sanitizer: DomSanitizer,
    //private _footerService: FooterService
  ) {
  }

  getBackground(image) {
    //return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(../../../${image})`);
    return this._sanitizer.bypassSecurityTrustStyle(`url(../../${image})`);
  }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._getEventList();
    this.loadScript("../../assets/js/jquery.stellar.min.js");
    this.loadScript("../../assets/js/main.js");
    window.scrollTo({ top: -200, behavior: 'smooth' });
    //this._footerService.setLoaded(true);
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

  private _getEventList() {
    this.loading = true;
    // Get future, public events
    this.eventListSub = this.api.getEvents$().subscribe(
      res => {
        this.eventList = res;
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
