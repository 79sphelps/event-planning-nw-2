import { Component, OnInit, OnDestroy, Output, AfterViewInit, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './../../../auth/auth.service';
import { ApiService } from './../../../core/api.service';
import { UtilsService } from './../../../core/utils.service';
import { FilterSortService } from './../../../core/filter-sort.service';
import { Subscription } from 'rxjs/Subscription';
import { Image } from '../../../core/models/images.model';

import { FooterService } from '../../../footer/footer.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy, AfterViewInit {
  pageTitle = 'Images';
  imagesSub: Subscription;
  imageList: Image[];
  randomImageList: Image[];
  filteredImages: Image[];
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
    public auth: AuthService,
    private api: ApiService,
    public utils: UtilsService,
    public fs: FilterSortService,
    private _footerService: FooterService,
    private _sanitizer: DomSanitizer
  ) {}


  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._getImageList();

    this.loadScript('../../../../assets/js/jquery.stellar.min.js');
    this.loadScript('../../../../assets/js/main.js');
    this._footerService.setLoaded(true);
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(../../../${image})`);
  }

  getHREF(image) {
    // console.log('looking for: ' + image);
    return this._sanitizer.bypassSecurityTrustResourceUrl(`../../../${image}`);
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

  private _getImageList() {
    this.loading = true;

    // Get all (admin) events
    this.imagesSub = this.api.getImages$().subscribe(
      res => {
        this.imageList = res;
        // console.log(this.imageList);
        this.filteredImages = res;
        this.loading = false;
        this.getRandomFiveImages();
      },
      err => {
        console.error(err);
        this.loading = false;
        this.error = true;
      }
    );
  }

  public getRandomFiveImages() {
    const set = new Set();
    for (let i = 0; set.size < 5; i++) {
      const tmp = Math.floor(Math.random() * (this.imageList.length - 1)) + 1;
      if (!set.has(this.imageList[tmp])) {
        set.add(this.imageList[tmp]);
      }
    }
    this.randomImageList = Array.from(set);
    // console.log(this.randomImageList);
  }

  searchImages() {
    this.filteredImages = this.fs.search(this.imageList, this.query, '_id');
  }

  resetQuery() {
    this.query = '';
    this.filteredImages = this.imageList;
  }

  ngOnDestroy() {
    this.imagesSub.unsubscribe();
  }
}
