export class Content {
  constructor(content='', type){
    this.content = content;
    this.type = type;
    this.created = 0;
  }
 
  toJSON(){
    return {
      content: this.content,
      type: this.type,
      created: this.created
    }
  }
}