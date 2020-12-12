import React from 'react'
import Layouts from './layouts/layouts'
import Data from '../data/sample'
import { Container, Divider } from '@material-ui/core'

// import React from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ProductsCards = (props) => {
    const { products } = props

    const useStyles = makeStyles({
        root: {
            minWidth: 275,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });

    const classes = useStyles();

    console.log(products)

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {products}
                </Typography>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </CardContent>
        </Card>

    )
}


export default function Home() {

    return (
        <Layouts pageName="Home">
            <Container maxWidth="md">
                <h2 style={{
                    marginBottom: 10,
                    paddingLeft: 40
                }}>Products Recommends</h2>
                <Divider style={{
                    marginTop: "0",
                    paddingTop: "0"
                }} />
              
                
                        < ProductsCards products="Test" />
             
              
            </Container>
        </Layouts>
    )
}
