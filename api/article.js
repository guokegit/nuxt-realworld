import { request } from '../plugins/request';

export const getArticleList = params => {
    return request({
        method: 'GET',
        url: '/api/articles',
        params
    })
}

export const getFeedArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles/feed',
        params
    })
}

export const getArticleDetail = slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}`,
    })
}

export const addArticle = data => {
    return request({
        method: 'POST',
        url: `/api/articles`,
        data,
    })
}

export const addFavourite = slug => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/favorite`,
    })
}

export const removeFavourite = slug => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}/favorite`,
    })
}

export const getArticleComments = slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}/comments`,
    })
}

export const addComments = (slug, data) => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/comments`,
        data,
    })
}

export const removeComments = (slug, commentId) => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}/comments/${commentId}`,
    })
}



