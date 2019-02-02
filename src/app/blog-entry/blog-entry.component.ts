import { Component, OnInit, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../core/api.service';
import { UtilsService } from '../core/utils.service';
import { Subscription } from 'rxjs/Subscription';
import { EventModel } from '../core/models/event.model';

import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
//import { FooterService } from '../footer/footer.service';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.css']
})
export class BlogEntryComponent implements OnInit, AfterViewInit {
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

  ngOnInit() {
    //this.title.setTitle(this.pageTitle);
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
}
