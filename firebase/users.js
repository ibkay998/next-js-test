import { firestore } from './firebase'

export default async function getUser()  {
    const snapshot = await firestore.collection("users").get()
    snapshot.docs.forEach(doc => console.log(doc.data()))
}
