export const depositMoney = (amount) => {
    return (despatch) => {
        despatch({
            type:'deposit',
            payload:amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (despatch) => {
        despatch({
            type:'withdraw',
            payload:amount
        })
    }
}