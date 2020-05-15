import React, { Component, Fragment } from 'react'

import '../../assets/styles/AlbumPhotos.css'

import { SkipPrevious, SkipNext }  from '@material-ui/icons'
import { fetchAlbumPhotos } from '../../redux/async-api/albumPhotos.js'
import { connect } from 'react-redux'

class AlbumPhotos extends Component {

    state = {
        currPicture: '',
        currTitle: '',
        index: -1
    }

   componentDidMount() {
       
      const { albumId } = this.props.match.params
      const { albumPhotos } = this.props


     albumPhotos(albumId)

  }

  initialData = (photos, index) => {
    
    if((index === -1 ) && (photos.length > 0)) {
    this.setState(() => {
    return {
        currPicture: photos[0].url,
        currTitle: photos[0].title,
        index: 0
       }
      })
     }
    }

  prev = () => {

    const { photos } = this.props
    const { index } = this.state

    console.log(this.props)


    this.setState({
        currPicture: photos[index - 1].url,
        currTitle: photos[index - 1].title,
        index: index - 1
    })

}

next = () => {

    const { photos } = this.props
    const { index } = this.state

    this.setState({
        currPicture: photos[index + 1].url,
        currTitle: photos[index + 1].title,
        index: index + 1
    })
}

  render() {
    const { loading, photos, error } = this.props
    const { currPicture, currTitle, index } = this.state

    this.initialData(photos, index)

    return loading === true ? <div>Loading...</div> : ( error !== '' ? <div>{error.message}</div> : (
        <Fragment>
                <div>
                <button className="btn-prev" onClick={() => this.prev()} disabled={index === 0}><SkipPrevious /></button>
                <button className="btn-next" onClick={() => this.next()} disabled={index === photos.length-1}><SkipNext /></button>
            </div>
            <div className="card-container">
                <img className="img" src={currPicture} alt={currTitle}/><br></br>
        <span><b>{currTitle}</b></span>
            </div>
        </Fragment> 
      )
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.albumPhotosReducer.loading,
    photos: state.albumPhotosReducer.photos,
    error: state.albumPhotosReducer.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    albumPhotos: (albumId) => dispatch(fetchAlbumPhotos(albumId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPhotos)
