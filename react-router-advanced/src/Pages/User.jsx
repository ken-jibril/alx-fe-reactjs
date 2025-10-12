import { useParams } from 'react-router-dom';

export default function User() {
  const { id } = useParams();
  return <h2>👥 Viewing user with ID: {id}</h2>;
}
