import Grid from '@mui/material/Grid';
const src = "https://www.youtube.com/embed/MOD11gnTKyA"

import Typography from '@mui/material/Typography';



function Movie() {
    return (
        <div style={{ height: "100vh"}}>
            <br></br>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={9} md={6}>
                    <iframe width="560"
                        height="315"
                        src={src}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </Grid>
                <Grid item xs={12} sm={10} md={10}>
                    <Typography variant="body" color="text.primary">
                        <p>Simples, ingênuo e engraçado.O novo filme do cinesta francês Jean - Pierre Jeunet já levou mais de sete milhões de franceses ao cinema e está tendo uma carreira gloriosa fora da Europa.Além de faturar vários prêmios nos Estados Unidos(Melhor Filme estrangeiro pela Broadcast Films Critics Association e pela Online Films Critics Association), chega ao Oscar 2002 cotadíssimo, mesmo tendo sido preterido no Globo de Ouro por "Terra de Ninguém".</p>
                    </Typography>

                    <Typography variant="body" color="text.primary">
                        <p>Mas do que se trata esse filme com nome de menina e sorrisos na tela ? O "Fabuloso Destino de Amélie Poulain"("Le Fabuleux destin d'Amélie Poulain" - FRA 2001) fala das coisas simples da vida.As neuras de uma família.Os sonhos de uma garota que nunca teve amigos.A busca do amor.Dizem que o quanto mais simples algo é, mais difícil é de se conseguir, certo ? Errado, e Amélie está aqui para provar isso. </p>

                    <Typography variant="body" color="text.primary">

                        <p>Fechada em seu mundo interior, Amélie vê tudo no mais cor de rosa e, impulsionada por uma descoberta em seu próprio banheiro, decide ajudar o mundo.Durante sua caminhada, ela aprende a ajudar a  si mesma. </p>

                        <p>O filme tem passagens ótimas logo de cara.Jean - Pierre Jeunet mostra o gosto de cada personagem da família Poulain.A mãe de Amélie, por exemplo, acha o suprasumo da diversão encerar o piso com suas pantufas(as donas de casa de plantão enxergarão um certo exagero aí).Mas no decorrer das cenas, o cineasta mescla humor com ternura.O resultado é que o espectador fica tocado pela inocência de Amélie e se pergunta: será que ainda existem pessoas boas ? Pessoas capazes de dar a mão a um ceguinho e ajudá - lo a atravessar a rua ?</p>
                    </Typography>

                        <p>"Amélie Poulain" é adorável, doce, comovente e universal.É simples, ingênuo e engraçado.Se o mundo for realmente perfeito, o Oscar 2002 de filme estrangeiro já tem dono.</p>
                    </Typography>
                </Grid>
            </Grid>


        </div >
    );
};

export default Movie;

