import axios, { AxiosResponse } from 'axios';

export interface IPost {
    body: string;
    id: number;
    title: string;
    userId: number;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export interface IAlbum {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export class API {
    static baseUrl = 'https://jsonplaceholder.typicode.com/';

    static getPost(post: number | string) {
        return axios.get<IPost>(API.baseUrl + 'posts/' + post).then((data) => data.data);
    }

    static getPosts() {
        return axios
            .get<Array<IPost>>(API.baseUrl + 'posts')
            .then((data: AxiosResponse<Array<IPost>>) => data.data);
    }

    static getUser(user: number | string) {
        return axios.get<IUser>(API.baseUrl + 'users/' + user).then((data) => data.data);
    }

    static getUsers() {
        return axios.get<Array<IUser>>(API.baseUrl + 'users').then((data) => data.data);
    }

    static getAlbumsById(id: string | number) {
        return axios.get<Array<IAlbum>>(API.baseUrl + `albums/${id}/photos`).then((data) => data.data);
    }
}
