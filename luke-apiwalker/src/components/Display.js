import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import ApiForm from './ApiForm';

const Display = () => {
  const { type, id } = useParams();
  const [person, setPerson] = useState({});
  // const [planet, setPlanet] = useState({});
  // const [homeWorld, setHomeWorld] = useState(''); // Won't be ready if state
  const [displayHomeWorld, setDisplayHomeWorld] = useState({});
  // Displaying different categories information
  const [category, setCategory] = useState('');
  const [categoryKeys, setCategoryKeys] = useState([]);

  useEffect(() => {
    const discernType = async () => {
      try {
        const res = await axios.get(`https://swapi.dev/api/${type}/${id}`);
        console.log(res);
        if (type === 'people') {
          setPerson(res.data);
          const homeWorld = res.data.url;
          const res2 = await axios.get(homeWorld);
          console.log(res2);
          setDisplayHomeWorld({
            name: res2.data.name,
            url: res2.data.url.match(/\d+/g),
          });
          setCategory(null);
        } else {
          console.log(res);
          // setPlanet(res.data);
          setCategory(res.data);
          console.log(`Object Keys Res.Data ${Object.keys(res.data)}`);
          setCategoryKeys(Object.keys(res.data));
        }
      } catch (err) {
        console.log(err);
      }
    };

    discernType();
  }, [type, id]);

  // useEffect(() => {
  //   axios
  //     .get(`https://swapi.dev/api/${type}/${id}`)
  //     .then((res) => {
  //       if (type === 'people') {
  //         console.log(res);
  //         setPerson(res.data);
  //         setHomeWorld(res.data.homeworld);
  //         setCategory(null);
  //       } else {
  //         console.log(res);
  //         // setPlanet(res.data);
  //         setCategory(res.data);
  //         console.log(`Object Keys Res.Data ${Object.keys(res.data)}`);
  //         setCategoryKeys(Object.keys(res.data));
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [type, id]);

  // useEffect(() => {
  //   if (homeWorld) {
  //     axios
  //       .get(homeWorld) // Can use the variable because it is in itself a url
  //       .then((res) => {
  //         console.log(res);
  //         console.log(res.data);
  //         setDisplayHomeWorld({
  //           name: res.data.name,
  //           url: res.data.url.match(/\d+/g),
  //         });
  //       })
  //       .catch((err) => console.log(err));
  //   } else {
  //     console.log('For testing purposes, no Homeworld.');
  //   }
  // }, [homeWorld]);

  return (
    <div>
      <ApiForm />
      <hr />
      {type === 'people' ? (
        <div>
          <h1>Persons' Attributes</h1>
          <p>Name: {person.name}</p>
          <p>Height: {person.height}</p>
          <p>Eye Color: {person.eye_color}</p>
          <p>Gender: {person.gender}</p>
          <Link to={`/display/planets/${displayHomeWorld.url}`}>
            Home World: {displayHomeWorld.name}
          </Link>
        </div>
      ) : null}

      {category ? (
        <div>
          <h1>{type}</h1>
          <p>
            {categoryKeys[0]}: {category[categoryKeys[0]]}
          </p>
          <p>
            {categoryKeys[1]}: {category[categoryKeys[1]]}
          </p>
          <p>
            {categoryKeys[2]}: {category[categoryKeys[2]]}
          </p>
          <p>
            {categoryKeys[3]}: {category[categoryKeys[3]]}
          </p>
          <p>
            {categoryKeys[4]}: {category[categoryKeys[4]]}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Display;
