import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
	};

	// dispatch an action to our reducer
	const [state, dispatch] = useReducer(githubReducer, initialState);

	// ...state same as
	// 			users: state.users,
	// 			user: state.user,
	// 			repos: state.repos,
	// 			loading: state.loading
	// in value attr below
	return (
		<GithubContext.Provider
			value={{
				...state,
				dispatch,
			}}>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
