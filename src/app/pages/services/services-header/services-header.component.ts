import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-services-header',
  templateUrl: './services-header.component.html',
  styleUrls: ['./services-header.component.scss']
})
export class ServicesHeaderComponent implements OnInit, AfterViewInit {

  @Output() viewLoaded = new EventEmitter();

  ngAfterViewInit() {
    setTimeout(() => {
      this.viewLoaded.emit('true');
    }, 500);
  }

  constructor() { }

  ngOnInit() {
    this.loadScript('../../../../assets/js/jquery.stellar.min.js');
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
}
