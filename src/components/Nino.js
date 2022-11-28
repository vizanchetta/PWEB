import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Nino from '../media/Nino.webp'

export default function ImgMediaCard() {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt=" Nino Quincampoix"
        height="400"
        image={Nino}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Nino Quincampoix
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Nino também é sonhador, e seu hobby é colecionar diversas coisas. No momento do filme ele coleciona fotos 3×4 que as pessoas não gostavam e jogavam fora logo depois de sair da máquina. Outra coisa que ele coleciona eram empregos; ele trabalhava numa locadora de filmes e no parque de diversões ao mesmo tempo.
        </Typography>
      </CardContent>
    </Card>
  );
}