
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import servicesReducer from './services-reducer';


let store = {
    _state: {
        services: [
            {id: 1, title:'Consulting', image: services1, text: 'Do your requirements truly match your needs and your budget? The pre-construction planning phase helps you figure this out and come up with adjustments if necessary, making your dreams and goals achievable.' },
            {id: 2, title:'Restoration', image: services2, text: 'Any home could suffer from things affecting its integrity or aesthetics. Our experts can help you deal with those things as well. Contact us for professional restoration services with the best design practices in mind.' },
            {id: 3, title:'New home construction', image: services3, text: 'Whether you need a home or a place to spend your vacations in, we can help you. We offer diverse and flexible solutions along with professional suggestions to meet and then exceed all your expectations.' },
            {id: 4, title:'Interior design', image: services4, text: 'A new home is always a new lifestyle. Our designers will offer you beautiful and ergonomic solutions to fill your new home with comfort and coziness. We will show you a design project and supervise all the works.' },
        ],
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It"s my first project', likesCount: 11},
                {id: 3, message: 'Lorem ipsum', likesCount: 11},
                {id: 4, message: 'sit amet', likesCount: 11},
            ],
            newPostText: 'Lorem ipsum',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimytch'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageBody: "",
        } 
    },
    _callSubscriber() {
        console.log('fwdv');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.services = servicesReducer(this._state.services, action);

        this._callSubscriber(this._state);

    },
}


export default store;