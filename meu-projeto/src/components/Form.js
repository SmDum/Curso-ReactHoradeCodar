import { useState } from 'react';

function Form() {
    function cadastrarUsario(e) {
        e.preventDefault();
        console.log(`Usuário ${name} cadastrado com a senha ${password}`);
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    return (
        <div>
            <h1>Meu cadastro: </h1>
            <form onSubmit={cadastrarUsario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Nome" 
                        onChange={(e) => setName(e.target.value)}
                    />

                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Senha" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    );
}

export default Form;