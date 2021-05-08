
import {useState, useEffect} from "react";

function About(props){
    //create state to hold about data
    const [about, setAbout] = useState(null);

    //create a function that will make the api call
    const getAboutData = async () => {
        //make api call and get response
        const response = await fetch(props.URL + "about");
        //turn response into JavaScript object
        const data = await response.json();
        //set the about state to the data
        setAbout(data);
    };
    //make an initial call for the data inside a useEffect, so it only happens once on componentload
    useEffect(() => getAboutData(), []);

    //define a function that will return the jsx needed once we get the data
    const loaded = () => (
        <div>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            {/* <img src={about.headshot} /> */}
            <p>{about.bio}</p>
        </div>
    );

    //if data arrives return the result of loaded, if no, an h1 that says loading

    return about ? loaded() : <h1>Loading...</h1>;
}

export default About;