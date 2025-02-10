import Item from './Item';

function List() {
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Fiat" ano_lancamento = {1964} />
                <Item marca="Ford"  ano_lancamento = {2003}/>
                <Item marca="Chevrolet" ano_lancamento = {1981}/>
                <Item marca="Volkswagen" ano_lancamento = {2014}/>
                <Item marca="Renault" ano_lancamento = {2004}/>
            </ul>
        </>
    )
}

export default List;