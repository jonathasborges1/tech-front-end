import React, { useEffect, useState } from 'react'
import Form from '../Form';
import ListTodo from '../List';
import InputAdornments from '../InputAdornments'
import DrawerMini from '../Drawer'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'


function Todo(){
    
    const [task, setTask] = useState("");
    const [itemList, setItemList] = useState([]);
    // const [applyEffect, setApplyEffect] = useState({beforeEvent: false, afterEvent: false});
    const [hasBackground, setHasBackground] = useState({id: '', hasBackground: false});

    function handleOnChange(event) {
        const createNewTask = event.target.value;
        setTask(createNewTask);
    }

    function handleOnChangeUpdateItemList(event) {
        const indexUpdateString = event.target.id; // Recupera o indice da posicao no vetor que queremos modificar
        const indexUpdate = parseInt(indexUpdateString,10); // Transforma String para Inteiro

        const newList = itemList.map( (item,index) => { // Encontra qual item deve ser atualizado e retorna a nova lista
            
            if(index === indexUpdate){ // encontra task com base no index
                return event.target.value; // atualiza task com base no index
            }else {
                return item; // retorna os demais valores da lista sem qualquer alteração
            }
        })

        setItemList(newList); // atualiza a nova lista
        // validateBackground();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function validateBackground(){

        // eslint-disable-next-line array-callback-return
        // itemList.map( (item) => {

        //     let words = item.split(" ");
        //     const responseListBoolean = words.map( (word) => { // Retorna uma lista com valores booleans -> [false,true]

        //         if (word === "estudar" || word === "ler") {
        //             return true;
        //         }

        //         return false;
        //     })

        //     if(responseListBoolean.find( (item) => item === true )){
        //         setHasBackground(true);
        //     }else {
        //         setHasBackground(false);
        //     }
            
        //     console.log("x -> ", responseListBoolean);
        // })
    }

    function handleOnClickRemoveItemList(event){
        // index.preventDefault();
        console.log("event -> ", event.target.value)

        const indexRemovedString = event.target.value // Recupera index do item selecionado 
        // console.log("indexRemovedString -> ", indexRemovedString)

        const indexRemovedInt = parseInt(indexRemovedString,10) // converte de string para inteiro na base decimal
        // console.log("indexRemovedInt -> ", indexRemovedInt)
        console.log("itemList antes -> ", itemList)

        let newList = itemList.filter( (item,indexCurrent) => { return item[indexCurrent] !== item[indexRemovedInt]  } ) // remove item selecioado com base no index
        console.log("newList depois -> ", newList)

        setItemList(newList); // Atualiza a lista com algum item removido
        console.log("deveria excluir o elemento")
    }

    function handleOnSubmitAddItemToList(event){
        console.log("enter");
        event.preventDefault(); // Desabilita o refrest na página ao enviar o formulario

        if(!task){ // Se nao houver task para adicionar entao nao faz nada
            return;
        }

        const newList = [...itemList, task]; // Resgata todos os itens (tasks) anteriores e acrescenta mais uma task
        setItemList(newList); // Atualiza a lista dinamicamente  
        setTask(""); // <----- Reseta o valor do input

        // setApplyEffect({beforeEvent: true}); // faz com que a funcao useEffect atualize nossa lista com a nova task em tempo de execução
    }

    useEffect( () => { 
        console.log("validateBackground");
        validateBackground();
        // console.log("validateBackground hasBackground  -> ", hasBackground)         

        // if(applyEffect.beforeEvent){ // O boolean applyEffect serve para controlar o evento de click do botao para Aplicar o Efeito apenas quando ocorrer click no botao

        //     const newList = [...itemList, task]; // Resgata todos os itens (tasks) anteriores e acrescenta mais uma task
        //     setItemList(newList); // Atualiza a lista dinamicamente  

        //     setTask(""); // <----- Reseta o valor do input

        //     setApplyEffect({beforeEvent: false, afterEvent: true} );
        // }
        // if(applyEffect.afterEvent && itemList.length > 0 ){
        //     validateBackground(); // aplica background se encontrar palavras "estudar" ou "ler"    
        //     setApplyEffect({beforeEvent: false, afterEvent: false} );
        // }
    }, [itemList, hasBackground, validateBackground] )

    console.log("status itemList -> ", itemList)

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

            <Form onSubmit={handleOnSubmitAddItemToList}>
                {/* <Input type="text" placeholder="Adicione uma tarefa" onChange={handleOnChange} value={task} /> */}
                {/* <Button type="submit" onClick={handleOnSubmitAddItemToList} >Adicionar</Button> */}
            </Form>

            <ListTodo 
                itemList={itemList} 
                onClick={handleOnClickRemoveItemList} 
                onChange={handleOnChangeUpdateItemList} 
                style={ { background: !hasBackground ? "blue" : "none", width: "20rem" } } />
        </Box>
    );
}

export default Todo;