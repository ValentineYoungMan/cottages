import services1 from './../assets/img/services1.png';
import services2 from './../assets/img/services2.png';
import services3 from './../assets/img/services3.png';
import services4 from './../assets/img/services4.png';

let initialState =  {
    services: [
        {id: 1, title:'Consulting', image: services1, text: 'Do your requirements truly match your needs and your budget? The pre-construction planning phase helps you figure this out and come up with adjustments if necessary, making your dreams and goals achievable.' },
        {id: 2, title:'Restoration', image: services2, text: 'Any home could suffer from things affecting its integrity or aesthetics. Our experts can help you deal with those things as well. Contact us for professional restoration services with the best design practices in mind.' },
        {id: 3, title:'New home construction', image: services3, text: 'Whether you need a home or a place to spend your vacations in, we can help you. We offer diverse and flexible solutions along with professional suggestions to meet and then exceed all your expectations.' },
        {id: 4, title:'Interior design', image: services4, text: 'A new home is always a new lifestyle. Our designers will offer you beautiful and ergonomic solutions to fill your new home with comfort and coziness. We will show you a design project and supervise all the works.' },
]}


const servicesReducer = (state = initialState) => {
    return state;
}



export default servicesReducer;