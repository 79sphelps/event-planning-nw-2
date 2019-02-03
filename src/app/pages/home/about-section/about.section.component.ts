import { Component, OnInit, OnDestroy, Output, AfterViewInit, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../../core/api.service';
import { UtilsService } from '../../../core/utils.service';
import { Subscription } from 'rxjs/Subscription';
import { Homepage } from '../../../core/models/homepage.model';

@Component({
  selector: 'app-about-section',
  templateUrl: './about.section.component.html',
  styleUrls: ['./about.section.component.css']
})
export class AboutSectionComponent implements OnInit, OnDestroy, AfterViewInit {

  pageTitle = 'Homepage';

  homepageSub: Subscription;
  homepage: Homepage;

  loading: boolean;
  error: boolean;
  query = '';

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
    private api: ApiService
  ) {}

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._getHomepageDetails();
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

  private _getHomepageDetails() {
    this.loading = true;
    // Get future, public events
    this.homepageSub = this.api.getHomepageDetails$().subscribe(
      res => {
        this.homepage = res;
        console.log(this.homepage);
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
    this.homepageSub.unsubscribe();
  }

}
