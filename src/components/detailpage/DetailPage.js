import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  Box,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableBody,
  ButtonGroup,
  Button,
} from '@mui/material';
import { fetchDetail, resetState } from '../../redux/detailpage/detailSlice';

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const league = useSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchDetail({ id, season: 2022 }));
    return function cleanup() {
      dispatch(resetState());
    };
  }, [id, dispatch]);

  const handleClick = (event) => {
    dispatch(fetchDetail({ id, season: event.target.textContent }));
  };

  return (
    <>
      <Box
        bgcolor="primary.main"
        sx={{
          padding: '1% 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '5% 5% 1%',
          boxShadow: '10',
          color: '#fff',
        }}
      >
        <Typography variant="h5" component="div" sx={{ padding: '1% 3%' }}>
          {league.name}
        </Typography>
        <ButtonGroup
          variant="outlined"
          aria-label="outlined button group"
          color="secondary"
          sx={{
            margin: '0 5%',
          }}
        >
          <Button onClick={handleClick}>2022</Button>
          <Button onClick={handleClick}>2021</Button>
          <Button onClick={handleClick}>2020</Button>
        </ButtonGroup>
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          width: '90%',
          margin: '1% 5%',
          boxShadow: '10',
        }}
      >
        <Table size="small" aria-label="a dense table" color="primary.main">
          <TableHead>
            <TableRow>
              <TableCell> </TableCell>
              <TableCell>Team</TableCell>
              <TableCell align="center">Played</TableCell>
              <TableCell align="center">Wins</TableCell>
              <TableCell align="center">Draws</TableCell>
              <TableCell align="center">Losses</TableCell>
              <TableCell align="center">Points</TableCell>
              <TableCell align="center">Goals Fr.</TableCell>
              <TableCell align="center">Goals Ag.</TableCell>
              <TableCell align="center">Record</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {league.standings.map((team) => (
              <TableRow key={team.team.id}>
                <TableCell>
                  <img
                    src={team.team.logos[0].href}
                    alt="team logo"
                    style={{ height: '30px' }}
                  />
                </TableCell>
                <TableCell>{team.team.displayName}</TableCell>
                <TableCell align="center">{team.stats[0].value}</TableCell>
                <TableCell align="center">{team.stats[6].value}</TableCell>
                <TableCell align="center">{team.stats[5].value}</TableCell>
                <TableCell align="center">{team.stats[1].value}</TableCell>
                <TableCell align="center">{team.stats[2].value}</TableCell>
                <TableCell align="center">{team.stats[4].value}</TableCell>
                <TableCell align="center">{team.stats[3].value}</TableCell>
                <TableCell align="center">
                  {team.stats[12].displayValue}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DetailPage;
