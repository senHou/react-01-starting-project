import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
function App() {

    function handleClick(clickedButton) {
        console.log('Hello ' + clickedButton)
    }

    return (
        <div>
            <Header></Header>
            <main>
                <section id = "core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]} />
                        <CoreConcept {...CORE_CONCEPTS[1]}/>
                        <CoreConcept {...CORE_CONCEPTS[2]}/>
                        <CoreConcept {...CORE_CONCEPTS[3]}/>
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onClick={() => handleClick('components')}>Components</TabButton>
                        <TabButton onClick={() => handleClick('JSX')}>JSX</TabButton>
                        <TabButton onClick={() => handleClick('Props')}>Props</TabButton>
                        <TabButton onClick={() => handleClick('State')}>State</TabButton>
                    </menu>

                </section>
            </main>
        </div>
    );
}

export default App;
