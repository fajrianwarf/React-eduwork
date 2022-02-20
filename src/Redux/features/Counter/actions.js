const increment = (value) => {
    return {
        type: 'increment',
        value
    }
}

const decrement = (value) => {
    return {
        type: 'decrement',
        value
    }
}

export { increment, decrement };