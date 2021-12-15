import { Store } from "@material-ui/icons";
import {collection, addDoc} from "firebase/firestore";
import db from '../config/firebaseConfig';
import * as type from '../types';

export default async function addCard(card){
    return{
        type:type.ADD_CARD,
    }
    await addDoc(collection(db,"cards"),card);

}





// import { getFirestore } from "redux-firestore"

// export const addCard= (card)=>{
//     return (dispatch, getState, {getFirebase})=>{
//         const firestore = getFirebase().firestore();
//         //const authorId: getState().firebase.auth.uid; 
//         firestore
//          .collection("cards")
//          .add({
//              ...card,
//              //authorId:authorId,
             
//          })
//          .then(()=>{
//              dispatch({
//                  type:"ADD_CARD",
//                  card,
//              });
//          })
//          .catch((err) =>{
//              dispatch({
//                  type:"ADD_CARD_ERR",
//                  err,
//              });
//          });
//     };
// };