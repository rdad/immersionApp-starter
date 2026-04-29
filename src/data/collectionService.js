
import { validateObject } from '../services/security';
import { db } from './server'
import { collection, addDoc, Timestamp } from "firebase/firestore"; 


export const saveToCollection = async (object, collectionName)=>{

  const data = object.toJSON();
  data.created = Timestamp.now();

  console.log(data);

  // validate data
  if(validateObject(data) === false)  return false;

  const docId = await addDoc(collection(db, collectionName), data);
  return docId;
} 