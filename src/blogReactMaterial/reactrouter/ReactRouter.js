import { Link, Routes, Route, useNavigate } from 'react-router-dom';

const ReactRouter = () => {
    const navigate = useNavigate();

    return (
        <>
            <button onClick={() => navigate(-1)}>Go back</button>
            <button onClick={() => navigate(1)}>Go forward</button>

            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
                {/* 👇️ Wrap your Route components in a Routes component */}
                <Routes>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>

        </>
    )
};

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

export default ReactRouter;
