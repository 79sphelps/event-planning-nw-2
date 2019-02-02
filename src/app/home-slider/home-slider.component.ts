import { Component, OnInit, Output, AfterViewInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit, AfterViewInit {

  @Output() viewLoaded = new EventEmitter();

  ngAfterViewInit() {
    // this.viewLoaded.next(true);
    setTimeout(() => {
      this.viewLoaded.emit("true");
    }, 500);
  }

  constructor() {

  }

  ngOnInit() {
    //this.loadScript("../../assets/js/jquery.stellar.min.js");
    //this.loadScript("../../assets/js/owl.carousel.min.js");
    //this.loadScript("../../assets/js/main.js");
    //this.loadStyle("../../assets/css/style.css");
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = "";
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  public loadStyle(styl: string) {
    const head = <HTMLHeadElement>document.head;
    const style = document.createElement('link');
    style.innerHTML = "";
    style.rel = styl;
    //style.async = false;
    //style.defer = true;
    head.appendChild(style);
  }

}
