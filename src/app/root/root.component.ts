import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadStyle('../../assets/css/animate.css');
    this.loadStyle('../../assets/css/style.css');
    this.loadScript('../../assets/js/main.js');
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

}
