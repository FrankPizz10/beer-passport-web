import aasa from '../assets/apple-app-site-association.json'

const Rewriter = () => {
    return (
        <pre>{JSON.stringify(aasa, null, 2)}</pre>
    )
}

export default Rewriter;