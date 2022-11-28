import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Brotodeau from '../media/Brotodeau.jpeg'

export default function ImgMediaCard() {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Maurice Brotodeau"
        height="400"
        image={Brotodeau}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Maurice Brotodeau
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Se não fosse por Dominique Bretodeau, nada em Amélie aconteceria. Quarenta anos atrás, quando ele era apenas uma criança, ele colocou uma latinha com seus tesouros em um esconderijo e então... esqueceu.
Sua família se mudou, o mundo continuou e ninguém percebeu.
Até que Amélie encontra a caixa escondida atrás de um azulejo em seu banheiro.
        </Typography>
      </CardContent>
    </Card>
  );
}