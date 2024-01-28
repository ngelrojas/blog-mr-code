import { useParams} from "react-router-dom";

export default function Category () {
    const { slug } = useParams();

    return(
        <div>
            <h1>Category {slug}</h1>
        </div>
    )
}