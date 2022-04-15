import { CreateThunkActionType } from '..';
import { API, IAlbum, IPost, IUser } from '../../services/API';
import { PlaceholderActionsType, PlaceholderTypes } from './reducer';

type PlaceholderThunkActionType = CreateThunkActionType<PlaceholderActionsType>;

// async actions
export const getPostById = (id: string | number): PlaceholderThunkActionType => {
    return async (dispatch, getState) => {
        const posts = getState().placeholder.posts;
        let post;
        if (posts) post = posts.find((post) => post.id === id);
        if (!post) post = await API.getPost(id);
        if (!post) throw new Error(`not post by id ${id}`);
        dispatch(setPost(post));
    };
};

export const getAllPosts = (): PlaceholderThunkActionType => {
    return async (dispatch, getState) => {
        let posts = getState().placeholder.posts;
        if (!posts) posts = await API.getPosts();
        if (!posts) throw new Error(`server error load posts`);
        dispatch(setAllPosts(posts));
    };
};

export const getUserById = (id: string | number): PlaceholderThunkActionType => {
    return async (dispatch, getState) => {
        const users = getState().placeholder.users;
        let user;
        if (users) user = users.find((user) => user.id === id);
        if (!user) user = await API.getUser(id);
        if (!user) throw new Error(`not user by id ${id}`);
        dispatch(setUser(user));
    };
};

export const getAllUsers = (): PlaceholderThunkActionType => {
    return async (dispatch, getState) => {
        let users = getState().placeholder.users;
        if (!users) users = await API.getUsers();
        if (!users) throw new Error(`server error load users`);
        dispatch(setAllUsers(users));
    };
};

export const getAlbums = (id: string | number): PlaceholderThunkActionType => {
    return async (dispatch, getState) => {
        let albums = getState().placeholder.albums;
        if (!albums) albums = await API.getAlbumsById(id);
        if (!albums) throw new Error(`server error load users`);
        dispatch(setAlbums(albums));
    };
};

// mutation
export const setPost = (post: IPost) => ({ type: PlaceholderTypes.setPost, post });
export const setAllPosts = (posts: Array<IPost>) => ({ type: PlaceholderTypes.setAllPosts, posts });
export const setUser = (user: IUser) => ({ type: PlaceholderTypes.setUser, user });
export const setAllUsers = (users: Array<IUser>) => ({ type: PlaceholderTypes.setAllUsers, users });
export const setAlbums = (albums: Array<IAlbum>) => ({ type: PlaceholderTypes.setAlbums, albums });

export default {
    setPost,
    setAllPosts,
    setUser,
    setAllUsers,
    setAlbums,
};
