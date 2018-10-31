import CowList from "./CowList";
import React from "react";
import store from "./state/store";
import { Provider as StateProvider } from "react-redux";

class CowApplication extends React.Component {
    render() {
        return (
            <section>
                <CowList />
            </section>
        );
    }
}

const ApplicationContainer = () => (
    <StateProvider store={store}>
        <CowApplication />
    </StateProvider>
);

export default ApplicationContainer;
