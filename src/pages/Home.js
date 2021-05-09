import {useState, useEffect } from "react"

function Home(props) {
    //create state to hold home data
    const [home, setHome] = useState(null);

    //create a function to make the api call
    const getHomeData = async () => {
        //make api call and get a response 
        const response = await fetch(props.URL + "home");

        //turn response into JavaScript object

        const data = await response.jason();

        //set the 'home' state to the data 
        setHome(data);
    };
    //make an initial call for the data inside a useEffect for loading just once 
    useEffect(() => getHomeData(), []);
    //define a function that will return the jsx needed once we get the data
    const loaded = () => {
        return home.map((home) => (
            <div>
                <h1>{home.heading}</h1>
                <img src={home.headshot}></img>
                <p>{home.para}</p>
                <p>{home.skillName}</p>
                <p>{home.skillDescription}</p>

            </div>
        ));
    };

    return home ? loaded() : <h1>Loading...</h1>;
}

export default Home;
