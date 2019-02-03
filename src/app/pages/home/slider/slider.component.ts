import { Component, OnInit, OnDestroy, Output, AfterViewInit, EventEmitter  } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../../core/api.service';
import { UtilsService } from '../../../core/utils.service';
import { Subscription } from 'rxjs/Subscription';
import { Testimonial } from '../../../core/models/testimonials.model';

import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy, AfterViewInit {

  pageTitle = 'Events';

  testimonialsListSub: Subscription;
  testimonialsList: Testimonial[];

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
  ) {}

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._getTestimonialList();
    this.loadScript('../../../../assets/js/bootstrap.min.js');
    this.loadScript('../../../../assets/js/carousel.js');
    this.loadScript('../../../../assets/js/owl.carousel.min.js');
    this.loadScript('../../../../assets/js/jquery.stellar.min.js');
    this.loadScript('../../../../assets/js/popper.min.js');
    this.loadScript('../../../../assets/js/main.js');
    //window.scrollTo({ top: -200, behavior: 'smooth' });
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

  getRandomBackground() {
    const id = Math.floor(Math.random() * 8) + 1;
    return this._sanitizer.bypassSecurityTrustStyle(`url('../../../../assets/images/photo-${id}.jpg')`);
  }

  private _getTestimonialList() {
    this.loading = true;
    // Get future, public events
    this.testimonialsListSub = this.api.getTestimonials$().subscribe(
      res => {
        this.testimonialsList = res;
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
    this.testimonialsListSub.unsubscribe();
  }

}
