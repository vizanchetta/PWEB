import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Amelie from '../media/Amelie.png'

export default function ImgMediaCard() {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Amelie Poulain"
        height="450"
        image={Amelie}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Amélie Poulain
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Amélie tem a capacidade de provocar uma forte empatia no espectador, que acompanha sua história desde seu nascimento até a vida adulta. Um detalhe interessante é que na abertura do filme passam cenas da personagem ainda criança em seu solitário mundo, todavia povoado de criatividade e diversão, o que a deixa mais íntima de quem está assistindo ao filme.
        </Typography>
      </CardContent>
    </Card>
  );
}