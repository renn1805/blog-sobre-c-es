const Input = ({descricao, tipoInput, placeholderInput}: any) => {
   return (
      <label className="conteiner-input">
         <span>{descricao}</span>
         <input type={tipoInput} name="nome" placeholder={placeholderInput} />
      </label>
   );
};

export default Input;
