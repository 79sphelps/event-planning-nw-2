import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from './../core/api.service';
import { UtilsService } from './../core/utils.service';
import { Subscription } from 'rxjs/Subscription';
import { Homepage } from '../core/models/homepage.model';

//import { FooterService } from '../footer/footer.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  my_image: string;
  pageTitle = 'About';
  homepageSub: Subscription;
  homepage: Homepage;
  loading: boolean;
  error: boolean;
  query = '';

  constructor(
    private title: Title,
    public utils: UtilsService,
    private api: ApiService,
    //private _footerService: FooterService
  ) {
    this.my_image = '../../assets/images/rachel_phelps.JPG';
  }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._getHomepageDetails();
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

  private _getHomepageDetails() {
    this.loading = true;

    this.homepageSub = this.api.getHomepageDetails$().subscribe(
      res => {
        this.homepage = res;
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
