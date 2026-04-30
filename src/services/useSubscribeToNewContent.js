
import { Comment } from "./Comment";
import { subscribeToCollection } from '../data/collectionService';
import Picture from "../components/camera/Picture";
import { formatDate } from './utils'
import { validateObject } from './security';

export default function useSubscribeToNewContent(){

  const subscribe = (callback)=>{

    const prepareData = (data)=>{

      data = data.map(item=>{

        let c;
        if(item.type === 'comment'){
          c = new Comment();
        }else{
          c = new Picture();
        }
        c.populate(item);

        const validate = validateObject(c);
        if(validate === false) return false;
        
        c.created = formatDate(c.created.toDate());

        return c;
      })

      callback(data);
    };

    subscribeToCollection('content', prepareData);
  }
  
  return subscribe;
}