import './Test.css';
import './PrimaryNav.css';

export function PrimaryNav() {
    return <>
        <Icon />
        <Link text="Tutorials" size="4rem" />
        <Link text="Exercises" />
        <Link text="Certificates" />
        <Link text="Services" />

        <input />
    </>;
}

export function Icon() {
    return <img />;
}

export function Link({ text, size = "2rem" }) {
    return <a className="link" style={{ "font-size": size }}>{text}</a>;
}