import React, {useState, useRef, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const CatGrid = ({ fetchInitialData }) => {
  const [cats, setCats] = useState(null);

  const [loading, setLoading] = useState(!cats);
  // const fetchNewCats = useRef(!cats);

  const { tag } = useParams();

  useEffect(() => {
    // if (fetchNewCats.current === true) {
      setLoading(true);

      fetchInitialData(tag)
        .then((data) => {
          setTimeout(() => {
            setCats(data);
            setLoading(false);
          }, 1000)
        });
    // } else {
    //   fetchNewCats.current = true;
    // }
  }, [tag]);

  if (loading === true) {
    return <i className="loading">🐱</i>;
  }

  return (
    <div className="grid">
      {cats.map(({id}) => (
        <div className="gridItem" key={id}>
          <img src={`https://cataas.com/cat/${id}`} />
        </div>
      ))}
    </div>
  );
};

export default CatGrid;
