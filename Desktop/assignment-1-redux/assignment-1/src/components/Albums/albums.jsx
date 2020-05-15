import React, { Component } from 'react'

import '../../assets/styles/Posts.css'

import Typography from '@material-ui/core/Typography'

import { Link } from 'react-router-dom'
import { fetchAlbums } from '../../redux/async-api/albums.js'
import { connect } from 'react-redux'

class Albums extends Component {
  componentDidMount() {
    this.props.albumsList()
  }

  render() {
    const { loading, albums, error } = this.props

    console.log(albums)

    const albumsList = albums.map((album) => {
      return (
        <Link key={`album-${album.id}`} to={`/album/${album.id}`}>
          <div id={`album-${album.id}`} className="card">
            <Typography gutterBottom component="p">
              <b>Title</b>:{album.title}
            </Typography>
          </div>
        </Link>
      )
    })
    return loading === true ? (
      <div>Loading...</div>
    ) : (
      <div className="container1">{albumsList}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading2: state.loading,
    albums: state.albums,
    error2: state.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    albumsList: () => dispatch(fetchAlbums()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums)
