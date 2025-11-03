const Input = ({descricao, tipoInput, placeholderInput}: any) => {
   return (
      <label className="conteiner-input">
         <span>{descricao}</span>
         <input
            type={tipoInput}
            placeholder={placeholderInput}
            required
         />
      </label>
   );
};

export default Input;
