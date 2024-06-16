export function recoverItemType(items, type){
    return items.filter(item => item.type === type)
}