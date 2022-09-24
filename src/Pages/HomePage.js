import { useEffect } from 'react';
import { useState } from 'react';
import { allDetailsDragon } from 'services/fetchAPI';
import { ItemCard } from 'components/ItemCard/ItemCard';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const [allDragons, setAllDragons] = useState('')

useEffect(()=>{
    allDetailsDragon().then(resp => setAllDragons(resp)).catch((error)=> console.log(error))
},[])

  return (
    <>
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
    </>
  );
};
