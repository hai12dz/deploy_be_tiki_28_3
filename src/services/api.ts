import createInstanceAxios from 'services/axios.customize';

const axios = createInstanceAxios(import.meta.env.VITE_BACKEND_URL);

export const loginAPI = (username: string, password: string) => {
    const urlBackend = "/auth/login";
    return axios.post<IBackendRes<ILogin>>(urlBackend, { username, password }, {
        headers: {
            delay: 1000
        }
    })
}

export const registerAPI = (fullName: string, email: string, password: string, phone: string) => {
    const urlBackend = "/auth/register";
    return axios.post<IBackendRes<IRegister>>(urlBackend, { fullName, email, password, phone })
}

export const fetchAccountAPI = () => {
    const urlBackend = "/auth/account";
    return axios.get<IBackendRes<IFetchAccount>>(urlBackend, {
        headers: {
            delay: 100
        }
    })
}

export const logoutAPI = () => {
    const urlBackend = "/auth/logout";
    return axios.post<IBackendRes<IRegister>>(urlBackend)
}

export const getUsersAPI = (query: string) => {
    const urlBackend = `/api/v1/user?${query}`;
    return axios.get<IBackendRes<IModelPaginate<IUserTable>>>(urlBackend)
}

export const createUserAPI = (fullName: string, email: string,
    password: string, phone: string) => {
    const urlBackend = "/api/v1/user";
    return axios.post<IBackendRes<IRegister>>(urlBackend,
        { fullName, email, password, phone })
}






export const getBooksAPI = (query: string) => {
    const urlBackend = `/products/books?${query}`;
    return axios.get<IBackendRes<IModelPaginate<IBookTable>>>(urlBackend,
        {
            headers: {
                delay: 100
            }
        }
    )
}

export const getCategoryAPI = () => {
    const urlBackend = `/categories/name`;
    return axios.get<IBackendRes<string[]>>(urlBackend);
}

export const uploadFileAPI = (fileImg: any, folder: string) => {
    const bodyFormData = new FormData();
    bodyFormData.append('fileImg', fileImg);
    return axios<IBackendRes<{
        fileUploaded: string
    }>>({
        method: 'post',
        url: '/api/v1/file/upload',
        data: bodyFormData,
        headers: {
            "Content-Type": "multipart/form-data",
            "upload-type": folder
        },
    });
}



export const getBookByIdAPI = (id: string) => {
    const urlBackend = `/products/books/${id}`;
    return axios.get<IBackendRes<IBookTable>>(urlBackend,
        {
            headers: {
                delay: 100
            }
        }
    )
}


export const getHistoryAPI = () => {
    const urlBackend = `/api/v1/history`;
    return axios.get<IBackendRes<IHistory[]>>(urlBackend)
}

export const updateUserInfoAPI = (
    _id: string, avatar: string,
    fullName: string, phone: string) => {
    const urlBackend = "/users/update-user";
    return axios.put<IBackendRes<IRegister>>(urlBackend,
        { fullName, phone, avatar, _id })
}

export const updateUserPasswordAPI = (
    email: string, oldpass: string, newpass: string) => {
    const urlBackend = "/users/change-password";
    return axios.post<IBackendRes<IRegister>>(urlBackend,
        { email, oldpass, newpass })
}

export const getOrdersAPI = (query: string) => {
    const urlBackend = `/api/v1/order?${query}`;
    return axios.get<IBackendRes<IModelPaginate<IOrderTable>>>(urlBackend)
}

export const getDashboardAPI = () => {
    const urlBackend = `/api/v1/database/dashboard`;
    return axios.get<IBackendRes<{
        countOrder: number;
        countUser: number;
        countBook: number;
    }>>(urlBackend)
}



export const getNameCategoryAPI = (query: string) => {
    const urlBackend = `/categories/info?${query}`;
    return axios.get<IBackendRes<string[]>>(urlBackend)
}



export const getBrandsAPI = () => {
    const urlBackend = `/brand/name`;
    return axios.get<IBackendRes<IBrands[]>>(urlBackend)


}

export const getSuppliersAPI = () => {
    const urlBackend = `/suppliers/name-supplier`;
    return axios.get<IBackendRes<ISupplier[]>>(urlBackend)


}



export const filterBookAPI = (query: string) => {
    const urlBackend = `/suppliers/filterBook/${query}`;
    return axios.get<IBackendRes<IModelPaginate<IBookTable>>>(urlBackend)

}



export const getFullCategories = () => {
    const urlBackend = `/categories/full`
    return axios.get<IBackendRes<ICategory[]>>(urlBackend)


}




export const filterBookWithFullInfoAPI = (query: string) => {
    const urlBackend = `/products/books/filter?${query}`;
    return axios.get<IBackendRes<IModelPaginate<IBookTable>>>(urlBackend)

}


export const fetchViewedProductsAPI = (viewedProducts: any) => {
    const urlBackend = `/products/viewed`;
    return axios.post<IBackendRes<IBookTable[]>>(urlBackend,
        {
            productIds: viewedProducts,
        }

    )

}


