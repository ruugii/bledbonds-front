interface Menu {
    name: string,
    url: string,
    alternative?: string,
    dropdown?: Menu[]
}

export default Menu;