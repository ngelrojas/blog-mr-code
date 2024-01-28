import { useParams} from "react-router-dom";

export default function Description() {
    const { slug } = useParams();

    return(
        <div>
            <h1>Description {slug}</h1>

        </div>
    )
}