
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AmelieLendo from '../media/AmelieLendo.webp'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function AboutMe() {
    return (
        <div>
            <br />
            <Grid container spacing={0} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={9} md={3}>
                    <ImgMediaCard> </ImgMediaCard>
                </Grid>
                <Grid item xs={12} sm={9} md={8}>
                    <Typography gutterBottom variant="h5" component="div">
                        Quem sou eu?
                    </Typography>
                    <Typography variant="body" color="text.primary">
                        <p>Me chamo Vinicius Zanchetta, atualmente com 22 anos, tenho contato com o mundo de TI desde 2017, onde comecei meu técnico em informática na ETEC Fernando Prestes. Estagiei na área de segurança da informação para descobrir que o que gosto mesmo é programar.</p>
                        <p>Esse site tem como tema o filme FABULOSO DESTINO DE AMÉLIE POULAIN, um de meus filmes favoritos. Ambientado na França, o filme conta a vida de Amélie Poulain e seus prazeres por pequenas e despercebidas coisas da vida.</p>
                        <p>A assimilação com a personagem é evidente: sua rotina como atendente de um café, sua interação com várias pessoas e a apresentação de problemas e tensões cotidianos são literalmente o retrato duma vida comum. O grande diferencial é como Amélie enxegar o mundo.</p>
                    </Typography>
                    <Typography variant="body" color="text.primary">
                        Nas palavras do próprio diretor do filme:
                    </Typography>
                    <blockquote cite="https://brasil.elpais.com/cultura/2021-10-23/o-segredo-do-sucesso-de-amelie-poulain-20-anos-depois-fala-de-coisas-positivas-dos-prazeres-da-vida.html">
                        <p>Uma coisa que toca a alma de todos é que seja uma personagem tão generosa, que realiza atos de generosidade sem pedir nada em troca. Amélie fala de coisas positivas, de pequenos prazeres da vida, como colocar a mão em um saco de sementes.</p>
                    </blockquote>
                    <br />

                </Grid>
            </Grid>
        </div>
    )
}

function ImgMediaCard() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt=" Amélie Lendo"
          height="300"
          image={AmelieLendo}
        />
      </Card>
    );
  }

export default AboutMe;