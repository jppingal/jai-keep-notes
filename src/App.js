import React, { useState } from 'react';
import  "./index.css";
import Header from "./Header";
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

const App = () => {

  const [addItems, setAddItems]= useState([]);

  const addNote = (notes) => {
    // alert('i am clicked');
    setAddItems((prevData)=>{
      return[...prevData, notes];
    });
    console.log(notes);
  };
  const onDelete = (id ) =>{
    setAddItems((oldData) =>
      oldData.filter((currData, index) => {
        return index !== id;
      })
    );

  };
  return(
    <>
      <Header />
      <CreateNote passNote={addNote} />
      
        {addItems.map((val, index) => {
          return (
            <Note 
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          )}
        )}
      <Footer/>
    </>
    )
  };

export default App;
