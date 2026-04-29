import { Content } from "./Content";

export class Comment extends Content {
  constructor(text=''){
    super(text, 'comment');
  }
}