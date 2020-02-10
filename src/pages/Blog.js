import React, {useState, useEffect} from 'react'

export default function Blog() {
    const [hasError, setErrors] = useState(false);
    let [articles, setArticles] = useState([]);

    async function fetchData() {
        const result = await fetch("/v1/articles");
        
        result
        .json()
        .then(res => setArticles(res))
        .catch(err => setErrors({ hasError: true }))
    }

    useEffect(() => {
        fetchData();
    });
    
    if(hasError) {
        return (
            <main>
                <section>
                    <h2>Kunne ikke hente Blog indlæg</h2>
                </section>
            </main>
        )              
    }
    return (
        <main>
            <section>
                <h2>Blog indlæg</h2>
                {
                    articles.map(article => (
                    <article key={article.id}>{article.title} <small>{article.created_at}</small></article>
                    ))
                }
            </section>
        </main>
    )
}
