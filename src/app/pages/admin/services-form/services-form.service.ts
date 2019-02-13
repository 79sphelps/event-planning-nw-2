import { Injectable } from '@angular/core';

@Injectable()
export class ServicesFormService {

  validationMessages: any;
  // Set up errors object
  formErrors = {
    caption: '',
    path: '',
    editable: '',
    description: ''
  };

  // Min/maxlength validation
  textMin = 3;
  titleMax = 36;
  thumbnailMax = 100;
  locMax = 1000;
  timeMax = 8;
  descMax = 2000;

  constructor() {
    this.validationMessages = {
      title: {
        required: `Title is <strong>required</strong>.`,
        minlength: `Title must be ${this.textMin} characters or more.`,
        maxlength: `Title must be ${this.titleMax} characters or less.`
      },
      description: {
        maxlength: `Description must be ${this.descMax} characters or less.`
      },
      thumbnail: {
        required: `Thumbnail is <strong>required</strong>.`,
        minlength: `Thumbnail must be ${this.textMin} characters or more.`,
        maxlength: `Thumbnail must be ${this.thumbnailMax} characters or less.`
      },
    };
  }
}
