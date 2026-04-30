
import { validateObject } from '../services/security';
import { db } from './server'
import { collection, addDoc, Timestamp, query, onSnapshot, orderBy } from "firebase/firestore"; 

export const saveToCollection = async (object, collectionName)=>{

  const data = object.toJSON();
  data.created = Timestamp.now();

  // validate data
  if(validateObject(data) === false)  return false;

  const docId = await addDoc(collection(db, collectionName), data);
  return docId;
} 

export const subscribeToCollection = (collectionName, callback)=>{

  const q = query(collection(db, collectionName), orderBy("created", "desc")  );

  const unsubscribe = onSnapshot(q, (querySnapshot) => {

    const content = [];

    querySnapshot.forEach((doc) => {
      const item = doc.data();
      item.id = doc.id
      content.push(item);
    });

    callback(content);
  });
}