export async function sleep(time: number) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(true)
        }, time * 1000)
    })
}