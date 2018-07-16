import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import common from '../../common'
import HomeCard from './HomeCard'

const { api } = common.helpers

class Container extends Component {
  state = {}
  componentWillMount = async () => {
    this.setState({ data: await api.get('homes') })
  }

  render() {
    const { data } = this.state
    if (!data) return null
    return (
      <Grid container spacing={8}>
        {data.map((h, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <HomeCard home={h} />
          </Grid>
        ))}
      </Grid>
    )
  }
}
export default Container
