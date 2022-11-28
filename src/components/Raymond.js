import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Raymond from '../media/Reymond.webp'

export default function ImgMediaCard() {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Raymond Dufayel"
        height="400"
        image={Raymond}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Raymond Dufayel
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Raymond Dufayel, talvez mais conhecido no filme como o homem de vidro, é um homem de simplicidade, detalhismo e teimosa afeição pelos outros. Conta-se, na narração, que seus ossos são quebradiços como vidro e suas mãos podem ser esmagadas por um aperto de mão; todos os seus móveis são acolchoados e ele nunca sai de seu apartamento
        </Typography>
      </CardContent>
    </Card>
  );
}