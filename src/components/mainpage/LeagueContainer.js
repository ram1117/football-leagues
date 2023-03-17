import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const LeagueContainer = () => {
  const list = useSelector((state) => state.home.leagues);
  const status = useSelector((state) => state.home.status);
  if (status === 'loading') {
    return <h5>Loading....</h5>;
  }
  return (
    <Box sx={{ width: '80%', margin: '5% auto' }}>
      <Grid container spacing={1}>
        {list.map((item) => (
          <Grid
            key={item.id}
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            style={{ gridRowColumns: '1fr' }}
          >
            <Link to={`${item.id}`} style={{ textDecoration: 'none' }}>
              <Card
                elevation={24}
                sx={{ margin: '1rem', background: '#fff', padding: '10% 0' }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="150"
                    image={item.logos.light}
                    alt="League logo"
                    sx={{ objectFit: 'contain' }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      color="primary.main"
                      sx={{ height: 50 }}
                    >
                      {item.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LeagueContainer;
