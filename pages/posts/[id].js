import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';

const Post = props => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
        {props.show.image ? <img src={props.show.image.medium} /> : null}

        <style jsx>{`
            img {
                margin-left: auto;
                margin-right: auto;
                border: 2px solid red;
                border-radius: 10px;
            }
        `}</style>
    </Layout>
);

Post.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`);

    return { show };
};

export default Post;
