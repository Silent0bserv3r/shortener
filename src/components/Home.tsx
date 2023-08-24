import NavBar from "./NavBar";

export default function Home(props: React.PropsWithChildren) {
    return (
        <>
            <NavBar />
            {props.children}
        </>
    );
}
