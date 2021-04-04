
interface Header <ITEM> {
    text: string;
    value?: keyof ITEM;
}

export default Header;