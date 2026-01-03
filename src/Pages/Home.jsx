import { Link } from "react-router-dom"

export default function Home() {
    return(
        <div>
            <h2>
                This is my Home page
            </h2>

            <Link to={'/about'}>
            Go to about page
            </Link>
        </div>
    )
}