import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
}

const HomeCard = props => {
  const {
    home: { house_type, full_address, county },
    classes
  } = props
  return (
    <Card>
      <CardHeader
        title="Vacant Property"
        subheader={`${house_type} in county ${county}`}
      />
      <CardMedia
        className={classes.media}
        image="/placeholder.jpg"
        title={full_address}
      />
      <CardContent>
        <Typography component="p">{full_address}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(HomeCard)
