import { Component, OnInit, Output, AfterViewInit, EventEmitter } from '@angular/core';
import { FooterService } from '../../footer/footer.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, AfterViewInit {

  @Output() viewLoaded = new EventEmitter();

  ngAfterViewInit() {
    // this.viewLoaded.next(true);
    setTimeout(() => {
      this.viewLoaded.emit("true");
    }, 500);
  }

  constructor(private _footerService: FooterService) { }

  ngOnInit() {
    this.loadScript("../../../assets/js/jquery.stellar.min.js");
    this.loadScript("../../../assets/js/main.js");
    this._footerService.setLoaded(true);
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
