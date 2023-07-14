const Flight = ({flight}) => {
const {mission_name, launch_year, links:{mission_patch_small}} = flight;
    return (
        <div>
            <h2>Mission name: {mission_name}</h2>
            <p>Launch year: {launch_year}</p>
            <img src={mission_patch_small} alt={mission_name} />
        </div>
    );
};

export default Flight;