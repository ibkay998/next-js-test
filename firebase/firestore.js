import firebase from "firebase/app"
import 'firebase/firestore'
import { Button} from "@chakra-ui/react"

const WriteToCloudFiresore = () => {

    const sendData = () => {
        try{
            firebase.firestore().collection("collection").doc("document").set({
                Timestamp: "17/06/2021 10:18:30",
                Color: "Black, Or Blue",
                Product: "W",
                Your: "Awoyode Taiwo Oluwatomi",
                Fellowship: "Christ Apostolic Church Youth Fellowship (CACYOF)",
                Phone: 8161554477,
                Email: "oluwatomi9@gmail.com",
                Preferred: "Phone, Email",
                Questions: ""
                }).then(alert("data was succesfully sent to cloud firestore"))
            }
        catch(error){
            console.log(error)
            alert(error)
        }
    }
    return(
        <Button onClick={sendData}> Send Data</Button>
    )
}

export default WriteToCloudFiresore
