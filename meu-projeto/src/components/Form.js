function Form() {
    function cadastrarUsario(e) {
        e.preventDefault();
        console.log('Usuário cadastrado com sucesso!');
    }
  return (
    <div>
        <h1>Meu cadastro: </h1>
        <form onSubmit={cadastrarUsario}>
        <div>
            <input type="text" placeholder="Nome"/>
        </div>
        <div>
            <input type="submit" value="Cadastrar"/>
        </div>
        </form>
    </div>
  );
}

export default Form;