import VideoCard from "../../carrusel/VideoCard";
import styled from "styled-components";
import { CounterContext } from "../../Context";
import { useContext } from "react";



const StyledDiv = styled.div`
display: flex;
align-items: center;
h2{
    font-size: 1.2rem;
    padding: .7rem 1.5rem;
    border-radius: 1rem;
    color: white;
}
h3{
    color: #8a8a8a;
    font-size: .9rem;
    margin-left: 1rem;
    width: 60%;
}
`


const CategoriasVideos = () => {
    const CounterData = useContext(CounterContext);

    const categoriasConVideos = CounterData.categorias.filter(categoria =>
        CounterData.videos.some(video => video.categoria === categoria.titulo)
    );
    return (
        <>
            {categoriasConVideos.map(categoria => (
                <div key={categoria.id}>
                    <StyledDiv>
                        <h2 style={{backgroundColor: categoria.color}}>{categoria.titulo}</h2>
                        <h3>{categoria.subtitulo}</h3>
                    </StyledDiv>
                    <div>
                        <VideoCard
                            CounterData={CounterData}
                            videos={CounterData.videos.filter(video => video.categoria === categoria.titulo)}
                            color={categoria.color}
                        />
                    </div>
                </div>
            ))}
        </>
    );
};


export default CategoriasVideos