import { useEffect } from 'react';
import { useState } from 'react';
import { allDetailsDragon } from 'services/fetchAPI';
import { ItemCard } from 'components/ItemCard/ItemCard';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDragons } from 'redux/sliceDragons';
import { useSelector } from 'react-redux';
import { dragonsSelector } from 'redux/dragonsSeletor';


export const HomePage = () => {
  const dispatch = useDispatch()
  const [allDragons, setAllDragons] = useState('')
  const {dragons} = useSelector(dragonsSelector.getDragons)

useEffect(()=>{
  !dragons ?
    allDetailsDragon().then(resp => {
      setAllDragons(resp)
      dispatch(setDragons(resp))
    })
    .catch((error)=> console.log(error)) : setAllDragons(dragons)
    
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

  return (
    <div className='wrapper'>
        <div className='content'>
        {allDragons &&
            allDragons.map(({flickr_images, name, first_flight, id}) => {
                return(
                <Link key={id} to={`info/${id}`}>
                    <ItemCard  
                    flickr_images={flickr_images} 
                    name={name} 
                    first_flight ={first_flight}/>
                    </Link>
                )
            })
        }
        </div>
    </div>
  );
};
