import { Component, OnInit } from '@angular/core';
//import { FooterService } from '../footer/footer.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    //private _footerService: FooterService
    ) { }

  ngOnInit() {
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
