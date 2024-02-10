import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_STATUSES } from "../../extra/consts";
import { getArticles } from "../../store/articles/actions";
import { selectArticles, selectArticlesFailure, selectArticlesStatus } from "../../store/articles/selectors";

// const id = `chat-${Date.now()}`;
export const Articles = () => {
    const dispatch = useDispatch();
    const articles = useSelector(selectArticles);
    const error = useSelector(selectArticlesFailure);
    const status = useSelector(selectArticlesStatus);
    // const [articles, setArticles] = useState([]);
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);

    // const id = `msg-${Date.now()}`
    const sendRequest = async () => {
        dispatch(getArticles());
        // try {
        //     setLoading(true);
        //     const response = await fetch(apiUrl);
        //     if (!response.ok) {
        //         throw new Error(`Произоша ошибка в соединении ${response.status}`);
        //     }
        //     console.log('response', response);

        //     const result = await response.json();
        //     console.log('result', result);
        //     setArticles(result);
        // } catch (e) {
        //     console.log(e);
        //     setError(e.message);
        // } finally {
        //     setLoading(false);
        // }
    };

    useEffect(() => {
        sendRequest();
    }, []);

    return (
        <>
            <h3>Articles</h3>
            <button onClick={sendRequest}>Отправить</button>
            {status === FETCH_STATUSES.REQUEST && <CircularProgress />}
            {error && <h4>{error}</h4>}
            {/* <ul>
                {articles.map(article => (
                    <li key={article.id}>{article.name}</li>
                ))}
            </ul> */}
        </>
    );
};