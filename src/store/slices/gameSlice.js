import CallApiBody from 'common/apis/apiCallerBody';
import CallApiParams from 'common/apis/apiCallerParams';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchAsyncLogup = createAsyncThunk(
    "games/fetchAsyncLogup",
    async (term, { rejectWithValue }) => {
        try {
            const response = await CallApiBody("users/signup", "POST", term)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
);
export const fetchAsyncLogin = createAsyncThunk(
    "games/fetchAsynclogin",
    async (term, { rejectWithValue }) => {
        try {
            const response = await CallApiParams("users/signin", "POST", term)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
);
export const fetchAsyncInforGame = createAsyncThunk(
    "games/fetchAsyncInforGame",
    async () => {
        const response = await CallApiBody("games", "GET", null)
        return response.data
    }
);
export const fetchAsyncSelectGame = createAsyncThunk(
    "games/fetchAsyncSelectGame",
    async (term) => {
        const response = await CallApiBody(`games/${term} `, "GET", null)
        return response.data
    }
);
export const fetchAsyncInforGameCreation = createAsyncThunk(
    "games/fetchAsyncInforGameCreation",
    async (term) => {
        const response = await CallApiBody(`games/created/${term} `, "GET", null)
        return response.data
    }
);
export const fetchAsyncDeleteGameCreation = createAsyncThunk(
    "games/fetchAsyncDeleteGameCreation",
    async (arg) => {
        const response = await CallApiBody(`games/${arg.idUser}/${arg.idGame}`, "DELETE", null)
        return response.data
    }
);
export const fetchAsyncEditGameCreation = createAsyncThunk(
    "games/fetchAsyncEditGameCreation",
    async (arg) => {
        const response = await CallApiBody(`games/${arg.idUser}/${arg.idGame} `, "PATCH", arg.valueEdit)
        return response.data
    }
);
export const fetchAsyncCreateGame = createAsyncThunk(
    "games/fetchAsyncCreateGame",
    async (arg) => {
        const response = await CallApiBody(`games/${arg.userId}`, "POST", arg.createdGame)
        return response.data
    }
);
export const fetchAsyncEditInfor = createAsyncThunk(
    "games/fetchAsyncEditInfor",
    async (arg) => {
        const response = await CallApiBody(`users/${arg.userId}`, "PATCH", arg.inforChange)
        return response.data
    }
);
export const fetchAsyncDeleteUser = createAsyncThunk(
    "games/fetchAsyncDeleteUser",
    async (term) => {
        const response = await CallApiBody(`users/${term}`, "DELETE", null)
        return response.data
    }
);
export const fetchAsyncComment = createAsyncThunk(
    "games/fetchAsyncComment",
    async (term) => {
        const response = await CallApiBody(`evaluates/${term}`, "GET", null)
        return response.data
    }
);
export const fetchAsyncCreateComment = createAsyncThunk(
    "games/fetchAsyncCreateComment",
    async (arg) => {
        const response = await CallApiBody(`evaluates/${arg.idGame}/${arg.idUser}`, "POST", arg.createdComment)
        return response.data
    }
);
export const fetchAsyncDeleteComment = createAsyncThunk(
    "games/fetchAsyncDeleteComment",
    async (term) => {
        const response = await CallApiBody(`evaluates/${term}`, "DELETE", null)
        return response.data
    }
);
export const fetchAsyncEditComment = createAsyncThunk(
    "games/fetchAsyncEditComment",
    async (arg) => {
        const response = await CallApiBody(`evaluates/${arg.idEvaluate}`, "PATCH", arg.valueEditComment)
        return response.data
    }
);
const initialState = {
    games: [],
    selectGame: {},
    userLogin: {},
    cart: [],
    favoriteGame: [],
    ownGame: [],
    ownGameCreation: [],
    commentEachGame: [],
    commentCurrent: {},
    editCommemt: {}
}
const gameSlice = createSlice({
    name: "games",
    initialState,
    reducers: {
        Clear: (state, action) => {
           return {
            games: [],
            selectGame: {},
            userLogin: {},
            cart: [],
            favoriteGame: [],
            ownGame: [],
            ownGameCreation: [],
            commentEachGame: [],
            commentCurrent: {},
            editCommemt: {}
           }
        },
        addUser: (state, action) => {
            return { ...state, userLogin: action.payload }
        },
        addCart: (state, action) => {
            state.cart.push(action.payload)
        },
        addFavorite: (state, action) => {
            state.favoriteGame.push(action.payload)
        },
        BuyGame: (state, action) => {
            state.ownGame.push(action.payload)
        },
        RemoveGames: (state, action) => {
            const deletedGameIndex = action.payload
            const newCart = state.cart.filter((game, index) => index !== deletedGameIndex)
            return { ...state, cart: newCart }
        },
        RemoveGamesCreation: (state, action) => {
            const deletedGameIndex = action.payload
            const newCart = state.ownGameCreation.filter((game, index) => index !== deletedGameIndex)
            return { ...state, ownGameCreation: newCart }
        },
        RemoveInforUser: (state, action) => {
            state.userLogin = ""
        },
        DeleteSelectGame: (state, action) => {
            state.selectGame = ""
        },
        DeleteCommentEachGame: (state, action) => {
            state.commentEachGame = []
        },
        DeleteComment: (state, action) => {
            const deletedGameIndex = action.payload
            const newComment = state.commentEachGame.filter((game, index) => index !== deletedGameIndex)
            return { ...state, commentEachGame: newComment }
        },
    },
    extraReducers: {
        [fetchAsyncLogup.fulfilled]: (state, action) => {
            console.log("fulfilled")
        },
        [fetchAsyncLogin.fulfilled]: (state, action) => {
            return { ...state, userLogin: action.payload }
        },
        [fetchAsyncEditInfor.fulfilled]: (state, action) => {
            return { ...state, userLogin: action.payload }
        },
        [fetchAsyncDeleteUser.fulfilled]: (state, action) => {
            return { ...state, userLogin: {} }
        },
        [fetchAsyncInforGame.fulfilled]: (state, action) => {
            return { ...state, games: action.payload }
        },
        [fetchAsyncInforGameCreation.fulfilled]: (state, action) => {
            return { ...state, ownGameCreation: action.payload }
        },
        [fetchAsyncDeleteGameCreation.fulfilled]: (state, action) => {
            console.log("delete game create fulfilled")
        },
        [fetchAsyncEditGameCreation.fulfilled]: (state, action) => {
            console.log("edit game create fulfilled")
        },
       
        [fetchAsyncSelectGame.fulfilled]: (state, action) => {
            return { ...state, selectGame: action.payload }
        },
        [fetchAsyncCreateGame.fulfilled]: (state, action) => {
            console.log("fulfilled create game")
        },
        [fetchAsyncComment.fulfilled]: (state, action) => {
            return { ...state, commentEachGame: action.payload }
        },
        [fetchAsyncCreateComment.fulfilled]: (state, action) => {
            return { ...state, commentCurrent: action.payload }
        },
        [fetchAsyncEditComment.fulfilled]: (state, action) => {
            return { ...state, editComment: action.payload }
        },
    }
})
const { reducer: gameReducer, actions } = gameSlice
export const { addUser, addCart, BuyGame, RemoveGames,RemoveGamesCreation, RemoveInforUser, DeleteSelectGame, DeleteComment, DeleteCommentEachGame, addFavorite, Clear } = actions
export default gameReducer
