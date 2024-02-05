import { useParams} from "react-router-dom";

export default function Category () {
    const { slug } = useParams();

    return(
        <div className="pt-28">
            <h1 className="text-black">Category {slug}</h1>
        </div>
    )
}