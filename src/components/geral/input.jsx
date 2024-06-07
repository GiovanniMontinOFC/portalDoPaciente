import React from "react"; 

const Input = ({ title, tipo, nome, text, valor, desativado, onChange, classLabel, classInput }) => {

  return (
    <>
        <label className={classLabel}> 
            {title}
            <input 
                className={classInput}
                type={tipo} 
                name={nome} 
                placeholder={text}
                value={valor}
                disabled={desativado}
                onChange={onChange}
            >
            </input>   
        </label>    
    </>
  );
};

export default Input;