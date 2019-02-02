import { Injectable } from '@angular/core';

@Injectable()
export class FooterService {

  loadFooterFlag = false;

  constructor() { }

  setLoaded(cat: any) {
      this.loadFooterFlag = cat;
  }

  checkLoaded() {
      return this.loadFooterFlag;
  }
}
