import { Content } from "./Content";

export class Photo extends Content {
  constructor(url=''){
    super(url, 'picture');
  }
}