export default function searchData(list, target) {
    const result = list.filter((contact) => (
        contact.name.toLowerCase()
            .includes(target.toLowerCase())))
    return result
}
