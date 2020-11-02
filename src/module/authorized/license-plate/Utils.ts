export const generateId = (): string => {
    return `Added-${new Date().getTime()}`
}

export const isAddedPlate = (id: string): boolean => {
    return id.includes('Added-')
}