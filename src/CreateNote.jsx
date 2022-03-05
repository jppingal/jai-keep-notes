import React, {useState} from 'react';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);
    const [notes, setNotes] = useState({
        title: " ",
        content: " ",
    });

    const inputEvent = (event) => {
        // const value = event.target.value;
        // const name = event.target.name;

        const {name, value} = event.target; 
            setNotes((prevData) => {
                return {
                    ...prevData,
                    [name]: value,
                };
            }
        );  
        console.log("notes");
    };
    
    const addEvent = () => {
        props.passNote(notes);  
        setNotes({
            title: "",
            content: "",
        });
     };
     const expendIt = ()=>{
        setExpand(true);
     };
     const btdNormal = ()=>{
        setExpand(false);
     };

 return(
    <>
        <div className='main_note'  onDoubleClick={btdNormal}>
            <form>
                {expand?
                <input type="text"
                    name="title"
                    value={notes.title}
                    onChange={inputEvent}
                    placeholder="Title"
                    autoComplete='off'
                />: null}
                <textarea 
                    row=" " 
                    column =" " 
                    name="content"
                    value={notes.content}
                    onChange={inputEvent}
                    placeholder="Write a note..." 
                    onClick={expendIt}
                   
                >
                </textarea>
               { expand?
                <Button onClick={addEvent} >
                    <AddIcon className='plus_sign'/>
                </Button>: null}
            </form>
        </div>
    </>
)};

export default CreateNote;