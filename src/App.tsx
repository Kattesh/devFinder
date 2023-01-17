import {Container} from "./components/Container";
import {TheHeader} from "./components/TheHeader";
import {Search} from "./components/Search";
import {UserCard} from "./components/UserCard";
import {defaultUser} from "./mock";
import {useState} from "react";
import {LocalGitHubUser} from "./types/user";

function App() {
    const [user, setUser] = useState<LocalGitHubUser | null>(defaultUser)

    return (
        <Container>
            <TheHeader/>
            <Search hasError onSubmit={() => {
            }}/>
            <UserCard {...defaultUser}/>
        </Container>
    );
}

export default App;
