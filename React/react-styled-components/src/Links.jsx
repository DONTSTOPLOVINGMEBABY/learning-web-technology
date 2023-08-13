import { Link, Outlet } from "react-router-dom";

function Links () {
    return (
        <>
            <Link to='home'>Home</Link>
            <br/>
            <Link to='styled-with-props'>Styled with Props</Link>
            <br/>
            <Link to='polymorphic-props'>Polymorphic Props</Link>
            <br/>
            <Link to='attrs'>Attrs</Link>
            <br/>
            <Link to='animations'>Animations</Link>
            <br/>
            <Link to='adv-selectors'>Advanced Selectors</Link>
            <br/>
            <Link to='whole-thang'>Whole thang</Link>
            <br/>
            <Outlet />
        </>
    )
}

export default Links