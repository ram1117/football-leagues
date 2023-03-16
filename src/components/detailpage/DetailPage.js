import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchDetail } from '../../redux/detailpage/detailSlice';

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetail({ id, season: 2022 }));
  }, [dispatch]);
  return <h4>{id}</h4>;
};

export default DetailPage;
