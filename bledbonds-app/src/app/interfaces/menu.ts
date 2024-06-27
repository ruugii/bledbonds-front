interface Menu {
    name: string,
    url: string,
    alternative?: string,
    dropdown?: Menu[],
    singout?: boolean
}

export default Menu;