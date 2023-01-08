import React, { useEffect, useState, useCallback } from 'react'
import Form from '../Form';
import ListTodo from '../List';
import InputAdornments from '../InputAdornments'
import DrawerMini from '../Drawer'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function Todo(){
    
    const [task, setTask] = useState("");
    const [itemList, setItemList] = useState([]);
    const [hasBackground, setHasBackground] = useState([]);

    function handleOnChange(event) {
        const createNewTask = event.target.value;
        setTask(createNewTask);
    }

    function handleOnChangeUpdateItemList(event) {
        const indexUpdateString = event.target.key; // Recupera o indice da posicao no vetor que queremos modificar

        const indexUpdate = parseInt(indexUpdateString,10); // Transforma String para Inteiro
        
        const newList = itemList.map( (item,index) => { // Encontra qual item deve ser atualizado e retorna a nova lista
            
            if(index === indexUpdate){ // encontra task com base no index

                itemList[index] = event.target.value;

            }
            return item; // atualiza task com base no index

        })

        setItemList(newList); // atualiza a nova lista
    }

    const validateBackground = useCallback(async () => {

        itemList.map( (item,indexItemList) => {

            let words = item.split(" ");
            const responseListBoolean = words.map( (word) => { // Retorna uma lista com valores booleans -> [false,true]

                if (word !== "estudar" || word !== "ler"){

                    if(hasBackground.length < itemList.length){
                        setHasBackground( [...hasBackground, {index: indexItemList , status: false} ]);
                        return true;
                    }

                    // Caso de Uso para Atualizacao do item ja inserido (Update Case)
                    const haBackgroundNoUpdated = hasBackground.map( (item, indexHasBackground) => {
                        if(indexItemList === indexHasBackground) {
                            item = {index: indexItemList , status: false}
                        }
                        return item;
                    })

                    setHasBackground(haBackgroundNoUpdated);
                }
                
                if (word === "estudar" || word === "ler") {

                    const haBackgroundUpdated = hasBackground.map( (item, indexHasBackground) => {
                        if(indexItemList === indexHasBackground) {
                            item = {index: indexItemList , status: true}
                        }
                        return item;
                    })

                    setHasBackground(haBackgroundUpdated);
                    return true;
                }

                return false;
            })
            
            return responseListBoolean;
        })

    }, [hasBackground, itemList])

    

    function handleOnClickRemoveItemList(event){

        const indexRemovedString = event.target.value // Recupera index do item selecionado 

        const indexRemovedInt = parseInt(indexRemovedString,10) // converte de string para inteiro na base decimal

        let newList = itemList.filter( (item,indexCurrent) => { return item[indexCurrent] !== item[indexRemovedInt]  } ) // remove item selecioado com base no index

        setItemList(newList); // Atualiza a lista com algum item removido
    }

    function handleOnSubmitAddItemToList(event){
        event.preventDefault(); // Desabilita o refrest na página ao enviar o formulario

        if(!task){ // Se nao houver task para adicionar entao nao faz nada
            return;
        }

        const newList = [...itemList, task]; // Resgata todos os itens (tasks) anteriores e acrescenta mais uma task
        setItemList(newList); // Atualiza a lista dinamicamente  
        setTask(""); // <----- Reseta o valor do input

    }

    useEffect( () => { 
        validateBackground();
    }, [validateBackground] )

    return(
        <Box 
            sx={{  
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0 auto",
                maxWidth: "360px",
                minWidth: "90%",
                padding: "4rem 2rem",
            }}>

            <Typography variant="h1" component="h2"
                sx={{
                    color: "#fff",
                    fontSize: "3.2rem",
                    marginBottom: "2rem",
                    paddingBottom: "0.5rem",
                    borderBottom: "2px solid #4eb879",
                    transition: "color 0.3s",
                    fontFamily: "'Permanent Marker', cursive",
                    "& h1:hover" : {
                        color: "#4eb879",
                    }
                }}
            >
            Todo List
            </Typography>
 
            <Form onSubmit={handleOnSubmitAddItemToList}>
                <DrawerMini> 
                    <InputAdornments onChange={handleOnChange} value={task} onClick={handleOnSubmitAddItemToList}></InputAdornments>  
                </DrawerMini>
            </Form>

            <ListTodo 
                itemlist={itemList} 
                onClick={handleOnClickRemoveItemList} 
                onChange={handleOnChangeUpdateItemList} 
                hasbackground={hasBackground}
                />
        </Box>
    );
}

export default Todo;