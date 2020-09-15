import React, { useEffect, useState, Fragment } from 'react';
import { getMovies, getMovieDetail } from '../../util/fetch';
import { getFavMovie, setFavMovie } from '../../util/storage';
import DataTable from '../../components/DataTable';
import { Button, TextField, Container, Grid, DialogContent, Typography, DialogActions, makeStyles, Tooltip } from '@material-ui/core';
import ModalDialog from '../../components/ModalDialog';
import Star from '../../components/icons/star-24px.svg';
import StarBorder from '../../components/icons/star_border-24px.svg';


const useStyles = makeStyles((theme) => ({
  postercontainer: {
    backgroundColor: '#fafafa',
    display: 'flex',
    'justifyContent': 'center',
    'marginBottom': theme.spacing(2)
  },
  posterTitle:{
    'marginBottom': theme.spacing(2)
  },
}));

const Home = () => {
  const classes = useStyles();
  const [movie, setMovie] = useState([]);
  const [detailMovie, setDetailMovie] = useState({});
  const [searchMovie, setSearchMovie] = useState('');
  const [openDetailMovie, setOpenDetailMovie] = useState(false);

  useEffect(() => {
    handleSearchMovie('start');
  }, []);



  const submitSearchMOvie = (e) => {
    e.preventDefault();
    handleSearchMovie(searchMovie);
  };

  const handleSearchMovie = (searchMovie) => {
    getMovies(searchMovie).then(res => {
      let movieLIst = res.Search;

      let newMovieList = movieLIst.map(data => {
        return {
          ...data,
          favorite: false
        };
      });


      let fav = JSON.parse(getFavMovie());
      if (fav) {
        newMovieList.forEach((data) => {
          fav.forEach((favMovie) => {
            if (data.imdbID === favMovie.imdbID) {
              data.favorite = true;
            }
          });
        });
        setMovie(newMovieList);
      }
      else {
        setMovie(newMovieList);
      }

    }).catch(err => {
      alert(err.message);
    });
  };

  const addFavorite = (movie) => {
    return (
      <Tooltip title={movie.favorite ? 'remove favorite': 'add favorite'}>
        <Button
          id={`konfirmasi-${movie.imdbID}`}
          onClick={() => handleAddFavorite(movie)}>
          {movie.favorite ?
            <img alt={Star} src={Star} />:
            <img alt={StarBorder} src={StarBorder} />}
        </Button>
      </Tooltip>
    );
  };


  const handleAddFavorite = (data) => {
    let newArr = [...movie];
    let index = newArr.findIndex(val => val.imdbID === data.imdbID);
    let getFav = JSON.parse(getFavMovie());

    newArr[index].favorite = !newArr[index].favorite;

    if (getFav) {
      let addFav = getFav;
      let favIndex = addFav.findIndex(val => val.imdbID === data.imdbID);

      if (favIndex < 0) {
        addFav.push(data);
        setFavMovie(JSON.stringify(addFav));
      }
      else {
        addFav.splice(favIndex, 1);
        setFavMovie(JSON.stringify(addFav));
      }

    }
    else {
      setFavMovie(JSON.stringify([data]));
    }

    setMovie(newArr);
  };

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
      <Container maxWidth="md">
        <form onSubmit={(e) => submitSearchMOvie(e)}>
          <Grid alignItems="center" container direction="row" spacing={2}>
            <Grid item xs={8}>
              <TextField fullWidth onChange={(e) => setSearchMovie(e.target.value)} placeholder="Search movie title" size="small" variant="outlined" />
            </Grid>
            <Grid item xs={2}>
              <Button color="primary" fullWidth onClick={(e) => submitSearchMOvie(e)} variant="outlined">Cari</Button>
            </Grid>
          </Grid>
        </form>
      </Container>
      {movie.length !== 0 ? <DataTable column={column} data={movie} /> : ''}
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

export default Home;
