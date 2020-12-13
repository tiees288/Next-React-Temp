import React from 'react'
import Layouts from './layouts/layouts'
import Data from '../data/sample'
import { Container, Divider, Grid } from '@material-ui/core'

// import React from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ProductsCards = (props) => {
    const { products } = props

    console.log(products)

    return (
        <Grid xs={4} item={true} className="CardFood-Block">
            <Card style={{
                width: '96%',
                height: '350px',
                marginTop:"15px"
            }} variant="outlined">
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {products}
                    </Typography>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Grid>

    )
}


export default function Home() {


    return (
        <Layouts pageName="Home">
            <Container maxWidth="lg">
                <h2 style={{
                    paddingLeft: 40,
                    marginBottom :10
                }}>Products Recommends</h2>
                <Divider style={{
                    marginTop: "0",
                }} />

                <Grid container style={{
                    // paddingTop: 10
                }} justify="center">
                    < ProductsCards products="Test" />
                    < ProductsCards products="Test" />
                    < ProductsCards products="Test" />
                    < ProductsCards products="Test" />
                    < ProductsCards products="Test" />
                    < ProductsCards products="Test" />
                </Grid>

            </Container>
        </Layouts>
    )
}
