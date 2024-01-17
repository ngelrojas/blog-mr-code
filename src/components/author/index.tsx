
interface AuthorProps {
    href: string,
    name: string,
    role: string
}
export default function Author(author: AuthorProps) {
    return (
        <>
            <p className="font-semibold text-gray-900">
                <a href={author.href}>
                    <span className="absolute inset-0"/>
                    {author.name}
                </a>
            </p>
            <p className="text-gray-600">{author.role}</p>
        </>
    )
}