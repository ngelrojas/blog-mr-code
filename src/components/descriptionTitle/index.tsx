interface DescriptionTitleProps {
    href: string,
    title: string,
    description: string
}

export default function DescriptionTitle(post: DescriptionTitleProps) {
    return (
        <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href={post.href}>
                    <span className="absolute inset-0"/>
                    {post.title}
                </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
        </div>
    )
}