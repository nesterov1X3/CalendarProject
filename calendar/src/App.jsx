import React from 'react';
// import Header from './Header.jsx';
import Navigation from './Navigation.jsx';
import Sidebar from './Sidebar.jsx';
import ModalForm from './ModalForm.jsx';

class App extends React.Component {
  
    render() {
        return (
            <>
                <main>
                    <section>
                        <Sidebar />
                    </section>
                    <article>
                        <Navigation />
                    </article>
                    
                </main>
                {/* <ModalForm/> */}
            </>
        );
    };
};

export default App;