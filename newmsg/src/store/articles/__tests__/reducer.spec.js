import { FETCH_STATUSES } from "../../../extra/consts";
import { getArticlesRequest } from "../actions";
import { articlesReducer } from "../reducer";

describe('articles reducer', () => {
    it('sets error to null if called with requst action', () => {
        const result = articlesReducer(
            {
                data: [],
                status: FETCH_STATUSES.IDLE,
                error: 'some error',
            },
            getArticlesRequest()
        );

        expect(result.error).toBeNull();
    });
});