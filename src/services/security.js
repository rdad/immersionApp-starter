
import { Timestamp } from 'firebase/firestore';

export const validateObject = (object)=>{

  const types = ["comment", "picture"];

  if(object.content.length < 1 || typeof object.content != 'string') return false;
  if(typeof object.created != 'object') return false;
  if(object.type.length < 1  || 
    typeof object.type != 'string' ||
    types.includes(object.type) === false) return false;

  return true;
}