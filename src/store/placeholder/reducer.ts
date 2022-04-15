import { IAlbum, IPost, IUser } from '../../services/API';
import { GetActionsType } from '../index';
import actions from './actions';

export type PlaceholderActionsType = GetActionsType<typeof actions>;

const initState = {
    posts: null as Array<IPost> | null,
    currentPost: null as IPost | null,
    users: null as Array<IUser> | null,
    currentUser: null as IUser | null,
    albums: null as Array<IAlbum> | null,
};

export const PlaceholderTypes = {
    setAllPosts: 'SET_ALL_POSTS',
    setPost: 'SET_POST',
    setAllUsers: 'SET_ALL_USERS',
    setUser: 'SET_USER',
    setAlbums: 'SET_ALBUMS',
} as const;

export function placeholderReducer(state = initState, action: PlaceholderActionsType): typeof initState {
    switch (action.type) {
        case PlaceholderTypes.setAllPosts:
            return { ...state, posts: action.posts };

        case PlaceholderTypes.setPost:
            return { ...state, currentPost: action.post };

        case PlaceholderTypes.setAllUsers:
            return { ...state, users: action.users };

        case PlaceholderTypes.setUser:
            return { ...state, currentUser: action.user };

        case PlaceholderTypes.setAlbums:
            return { ...state, albums: action.albums };

        default:
            return state;
    }
}
