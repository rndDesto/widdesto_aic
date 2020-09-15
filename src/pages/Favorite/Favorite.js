import React, { useEffect, useState, Fragment } from 'react';
import { getFavMovie, setFavMovie } from '../../util/storage';
import DataTable from '../../components/DataTable';
import { Button, DialogContent, Grid, Typography, DialogActions, makeStyles, Tooltip, Container } from '@material-ui/core';
import ModalDialog from '../../components/ModalDialog';
import { getMovieDetail } from '../../util/fetch';
import Star from '../../components/icons/star-24px.svg';

const useStyles = makeStyles((theme) => ({
  postercontainer: {
    backgroundColor: '#fafafa',
    display: 'flex',
    'justifyContent': 'center',
    'marginBottom': theme.spacing(2)
  },
  posterTitle:{
    'marginBottom': theme.spacing(2)
  }
}));

const Favorite = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  const [detailMovie, setDetailMovie] = useState({});
  const [openDetailMovie, setOpenDetailMovie] = useState(false);

  useEffect(() => {
    let favMovie = getFavMovie();
    if(favMovie){
      setMovies(JSON.parse(favMovie));
    }
  }, []);

  const titleMovie = (movie) => {
    return <Typography onClick={()=>handleDetailMovie(movie.imdbID)}>{movie.Title}</Typography>;
  };

  const handleDetailMovie = (id) => {
    getMovieDetail(id).then(res => {
      setOpenDetailMovie(true);
      setDetailMovie(res);
    }).catch(err => {
      alert(err.message);
    });
  };


  const handleCloseModal = () => {
    setOpenDetailMovie(false);
  };

  const addFavorite = (movie) => {
    return (
      <Tooltip title="remove favorite">
        <Button
          id={`konfirmasi-${movie.imdbID}`}
          onClick={() => removeFavorite(movie)}>
          <img alt={Star} src={Star} />
        </Button>
      </Tooltip>
    );
  };

  const removeFavorite = (data) => {
    let getFav = JSON.parse(getFavMovie());

    let addFav = getFav;
    let favIndex = addFav.findIndex(val => val.imdbID === data.imdbID);

    addFav.splice(favIndex, 1);
    setFavMovie(JSON.stringify(addFav));
    setMovies(addFav);
  };

  const column = [
    { heading: 'Title', value: (movie) => titleMovie(movie) },
    { heading: 'Year', value: 'Year' },
    { heading: 'ID', value: 'imdbID' },
    { heading: '', value: (movie) => addFavorite(movie) },
  ];

  let HeadDetailMovie = ['Year','Released','Director','Actors','Plot','Awards'];
  let DetailMovie= [];

  if(Object.keys(detailMovie).length !== 0){
    HeadDetailMovie.forEach((data, index)=>{
      let mov = (
        <Fragment key={index}>
          <Grid item xs={2}>
            <Typography>{data}</Typography>
          </Grid>
          <Grid item xs={10}>{detailMovie[data]}</Grid>
        </Fragment>
      );
      DetailMovie.push(mov);
    });
  }


  return (
    <div>
      {movies.length !== 0 ?
        <DataTable column={column} data={movies} />:
        <Container><Typography>Anda tidak memiliki Favorite</Typography></Container>}
      <ModalDialog inputProps={{ open:openDetailMovie, onClose:handleCloseModal }}>
        <DialogContent>
          <Grid container>
            <Grid item xs={12}>
              <div className={classes.postercontainer}>
                <img alt={detailMovie.Title} src={detailMovie.Poster}/>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.posterTitle} variant="h5">{detailMovie.Title}</Typography>
              <Grid container spacing={2}>
                {DetailMovie}
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </DialogActions>
      </ModalDialog>
    </div>
  );
};

export default Favorite;
