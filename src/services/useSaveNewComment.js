import { saveToCollection } from "../data/collectionService";

export default function useSaveNewComment(){

  const saveComment = async (comment)=>{
    
    const id = await saveToCollection(comment, 'content');
    console.log(id);
  }

  return saveComment;
}