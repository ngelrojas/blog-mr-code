import { useParams} from "react-router-dom";

export default function Description() {
    const { slug, description } = useParams();

    return(
        <div>
            <h1>Description {description} - {slug} </h1>

        </div>
    )
}