import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'ContactsLayout metadata'
}
type Props = { children: React.ReactNode }
const ContactsLayout = ({children}: Props) => {
    return (
        <div>
            Contacts Layout
            {children}
        </div>
    );
};

export default ContactsLayout;