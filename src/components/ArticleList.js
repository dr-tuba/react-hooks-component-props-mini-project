import Article from './Article'
import blogData from "../data/blog";
let posts = blogData.posts

function ArticleList() {
    let postElements = posts.map((post) => {
        return (
            <Article 
                key = {post.id}
                title = {post.title}
                date = {post.date}
                preview = {post.preview}
                minutes = {post.minutes}
            />
        );
    })
    
    return (
        <main>
            {postElements}
        </main>
    )
}

export default ArticleList;