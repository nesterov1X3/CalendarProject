import React from 'react';
// import Header from './Header.jsx';
import Navigation from './Navigation.jsx';
import Sidebar from './Sidebar.jsx';
import ModalForm from './ModalForm.jsx';
import Week from './Week.jsx';
import Day from './Day.jsx'

const App = () => {
    return (
        <>
            
            <main>
                <section>
                    <Sidebar />
                </section>
                <article>
                    <Navigation />
                    <Day />
                    <Week />
                    {/* <Day/> */}
                </article>
            </main>
            <ModalForm />
        </>
    )
};

export default App;