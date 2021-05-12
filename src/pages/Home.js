import {useState, useEffect } from "react"

function Home(props) {
    //create state to hold home data
    const [home, setHome] = useState(null);

    //create a function to make the api call
    const getHomeData = async () => {
        //make api call and get a response 
        const response = await fetch(props.URL);
        //  console.log(home);

        //turn response into JavaScript object

        const data = await response.json();
        console.log(data);

        //set the 'home' state to the data 
        setHome(data);
    };
    //make an initial call for the data inside a useEffect for loading just once 
    useEffect(() => getHomeData(), []);
    //define a function that will return the jsx needed once we get the data
    const loaded = () => (
        <div>
            <h1>{home[0].heading}</h1>
            <img src={home[0].headshot} />
        <h3>{home[1].skill}</h3>
        <p>{home[1].description}</p>
        <h3>{home[2].skill}</h3>
        <p>{home[2].description}</p>
        <h3>{home[3].skill}</h3>
        <p>{home[3].description}</p>

     </div>
    )
        // return home.map((home) => (
            // console.log(home)
          
        // ));
    // };

    return home ? loaded() : <h1>Loading...</h1>;
}

export default Home;
