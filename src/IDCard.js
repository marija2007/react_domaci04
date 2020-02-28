import React , { useState , useEffect} from 'react';


function IDCard () {
  /*   const [name, setDatas] = useState('Marija');
    const [lastName, setDatas] = useState('Bujisic');
    const[age,setDatas] = useState(23); */

    const [ data, setDatas] = useState([]);

    useEffect(() => {
          setDatas([
            ...data,
                {
            name: 'Marija',
            lastName: 'Bujišić',
            age: 23
                }
            ]);
          }, []); 

    return(
      <div>
        {
          // console.log(data)
          data.map(item =>{
            return <div>
              <h1>{item.name} {item.lastName}</h1>
              <h5>{item.age}</h5>
              </div>
          })
        }
      </div>
    )

}

export default IDCard;