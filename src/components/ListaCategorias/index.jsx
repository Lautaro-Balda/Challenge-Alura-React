import styled from "styled-components"

const StyledSection = styled.section`


    & > div{
        margin: 1rem 1rem;
    }
    & > div > ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: 1.2rem;
        color: white;
    }
    & > div > ul > li {
        padding: 1rem 5%;
        border: 1px solid white;
    }
`

const ListaCategorias = () => {
  return (
    <StyledSection>
      <div>
        <ul>
          <li>Nombre</li>
          <li>Descripción</li>
          <li>Editar</li>
          <li>Remover</li>
        </ul>
      </div>
    </StyledSection>
  )
}

export default ListaCategorias
