import { Component, OnInit, Output, AfterViewInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blog-slider',
  templateUrl: './blog-slider.component.html',
  styleUrls: ['./blog-slider.component.css']
})
export class BlogSliderComponent implements OnInit, AfterViewInit {
  @Output() viewLoaded = new EventEmitter();

  ngAfterViewInit() {
    // this.viewLoaded.next(true);
    setTimeout(() => {
      this.viewLoaded.emit("true");
    }, 500);
  }

  constructor() { }

  ngOnInit() {
    this.loadScript("../../../assets/js/jquery.stellar.min.js");
    this.loadScript("../../../assets/js/main.js");
    //window.scrollTo({ top: -200, behavior: 'smooth' });
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
