
import { useState, useEffect} from "react";

function Projects(props) {
    //create State to hold projects 
    const [projects, setProjects] = useState(null);

    //create a function to make api call
    const getProjectData = async () => {
        //make api call abd get response
        const response = await fetch(props.URL + "projects");
        //turn response into JavaScript object

        const data = await response.json();
        //set the projects state to the data
        setProjects(data);
    };

    //make an initial call for the data inside a useEffect for one component loading
    useEffect(()=> getProjectData(), []);

    //define a function that will return the jsx needed once we get the data
    const loaded = () => {
        return projects.map((projects) => (
            <div>
                <h1>{projects.name}</h1>
                <img src={projects.image} />
                <a href={projects.git}>
                    <button>Github</button>
                </a>
                <a href={projects.live}>
                    <button>Live site</button>
                </a>
            </div>

        ));
    };
    return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;