import FormularioCategoria from "../components/FormularioCategoria";
import ListaCategorias from "../components/ListaCategorias";

const NuevaCategoria = () => {
    return (
        <section>
            <FormularioCategoria tituloForm="Nueva Categoria"/>
            <ListaCategorias />
        </section>

    )
}

export default NuevaCategoria;