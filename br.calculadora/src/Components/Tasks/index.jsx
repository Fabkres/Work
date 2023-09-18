import React from "react";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

import { Column, Grid, Padding, Row, RowResponse } from "../../Style/GlobalStyles";
import { BackgroundBody, BackgroundBodyDown, Container, IconPlus, RowRed, Rows, Title, TitleSmall } from "./style";



const firebaseApp = initializeApp({
    apiKey: "AIzaSyAXXopXlejW_mgYfv-2d_8IiXSlJBvvLeY",
    authDomain: "on-ipti.firebaseapp.com",
    projectId: "on-ipti",
});


const Tasks = () => {
    const [name, setName] = useState("");
    const [document, setDocument] = useState("");
    const [activity1, setActivity1] = useState("");
    const [activity2, setActivity2] = useState("");
    const [activity3, setActivity3] = useState("");
    const [world, setWorld] = useState("");
    const [users, setUsers] = useState([]);


    const db = getFirestore(firebaseApp);
    const userCollectionRef = collection(db, "users");

    async function criarUser() {
        const user = await addDoc(userCollectionRef, {
            name,
            document,
            tasks: {
                activities: [activity1, activity2, activity3],
                world,
            },
        });
        // Limpar os campos após criar o usuário
        setName("");
        setDocument("");
        setActivity1("");
        setActivity2("");
        setActivity3("");
        setWorld("");
    }

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, []);

    return (

        <>
            <Container>



                <input type="text" placeholder="Nome..." value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Documento..." value={document} onChange={(e) => setDocument(e.target.value)} />
                <input type="text" placeholder="Activity 1..." value={activity1} onChange={(e) => setActivity1(e.target.value)} />
                <input type="text" placeholder="Activity 2..." value={activity2} onChange={(e) => setActivity2(e.target.value)} />
                <input type="text" placeholder="Activity 3..." value={activity3} onChange={(e) => setActivity3(e.target.value)} />
                <input type="text" placeholder="Mundo..." value={world} onChange={(e) => setWorld(e.target.value)} />
                <button onClick={criarUser}>Criar usuário</button>

                <ul>
                    {users.map((user) => (
                        <div key={user.id}>

                            {user.tasks.world && ( // Verifica se world não é nulo
                                <BackgroundBodyDown>


                                    <li>
                                        <li>Nome: {user.name}</li>
                                        <li>Documento: {user.document}</li>
                                        Mundo: {user.tasks.world}
                                        <li>
                                            Atividades:
                                            <ul>
                                                {user.tasks.activities.map((activity, index) => (
                                                    <li key={index}>{activity}</li>
                                                ))}
                                            </ul>
                                        </li>
                                    </li>
                                </BackgroundBodyDown>
                            )}
                        </div>
                    ))}
                </ul>

                <Padding padding="16px" />
            </Container>
        </>

    );
};

export default Tasks;
