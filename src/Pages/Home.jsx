import { Link } from "react-router-dom"
import Slider from "../components/slider"

export default function Home() {
    return(
        <div>
            <Slider/>
            <h2>
                This is my Home page
            </h2>

            <Link to={'/about'}>
            Go to about page
            </Link>
        </div>
    )
}