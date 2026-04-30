export class Content {
  constructor(content='', type){
    this.content = content;
    this.type = type;
    this.created = 0;
    this.id = 0;
  }
 
  toJSON(){
    return {
      content: this.content,
      type: this.type,
      created: this.created
    }
  }

  populate(data){
    this.content = data.content;
    this.type = data.type;
    this.created = data.created;
    this.id = data.id;
  }
}