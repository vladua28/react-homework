import {AppRoutes} from "../../routing/AppRoutes";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const buttons = [
        {
            label: "Main",
            route: AppRoutes.MAIN
        },
        {
            label: "Todos",
            route: AppRoutes.TODOS
        },
        {
            label: "Albums",
            route: AppRoutes.ALBUMS
        },
        {
            label: "Comments",
            route: AppRoutes.COMMENTS
        }
    ]

    return (
        <div style={{
            width: '100%',
            height: '50px',
            backgroundColor: '#741def',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
        }}>
            {buttons.map((btn, idx) =>
                <NavLink
                    to={btn.route}
                    style={({isActive, isPending}) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isActive ? "black" : "white",
                            textDecoration: "none",
                            fontSize: "20px"
                        };
                    }}
                >
                    {btn.label}
                </NavLink>
            )}
        </div>
    )

}

export {Navbar};